const StyleDictionary = require("style-dictionary");
const _ = require("lodash");

StyleDictionary.registerTransform({
  name: "size/percent",
  type: "value",
  matcher: (prop) => prop.unit === "percent" && !isNaN(prop.value),
  transformer: (prop) => prop.value + "%",
});

StyleDictionary.registerTransform({
  name: "lineHeight/percentToEm",
  type: "value",
  matcher: (prop) => prop.path.includes("letterSpacing"),
  transformer: (prop) =>
    (parseInt(prop.original.value) / 100).toString() + "em",
});

StyleDictionary.registerTransform({
  name: "size/px", // notice: the name is an override of an existing predefined method
  type: "value",
  matcher: function (prop) {
    /* supports both "pixel" and "pixels" */
    return (
      prop &&
      prop.original &&
      prop.original.unit &&
      prop.original.unit.startsWith("pixel")
    );
  },
  transformer: function (prop) {
    return `${prop.value}px`;
  },
});

const isTypographyToken = (prop) => {
  return (
    [
      "fontSize",
      "textDecoration",
      "fontFamily",
      "fontWeight",
      "fontStyle",
      "fontStretch",
      "fontStyleOld",
      "letterSpacing",
      "lineHeight",
      "paragraphIndent",
      "paragraphSpacing",
      "textCase",
    ].indexOf(prop.path[2]) !== -1
  );
};

StyleDictionary.registerTransform({
  name: "name/kebab", // notice: the name is an override of an existing predefined method
  type: "name",
  transformer: (prop, options) =>
    _.kebabCase([options.prefix].concat(prop.path).join(" ")),
});

/* Basic filter to separate typography tokens. It might need tweaking depending on the token data shape */
StyleDictionary.registerFilter({
  name: "isTypography",
  matcher: isTypographyToken,
});

/* Basic filter to separate spacing tokens. */
StyleDictionary.registerFilter({
  name: "isSpacing",
  matcher: function (prop) {
    return prop.path[0] === "spacing";
  },
});

// modified from https://github.com/amzn/style-dictionary/blob/a88e622bcc06a98972dddb2b11903828ba3dab2b/lib/common/formats.js#L73
// extended to conert all keys to kebab case, to prevent breaking in case of spaces
function processDictionary(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return obj;
  }

  var toRet = {};

  if (obj.hasOwnProperty("value")) {
    return obj.value;
  } else {
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        toRet[_.kebabCase(name)] = processDictionary(obj[name]);
      }
    }
  }
  return toRet;
}

StyleDictionary.registerFormat({
  name: "json/colors",
  formatter: function (dictionary) {
    return JSON.stringify(
      processDictionary(dictionary.properties.color),
      null,
      2
    );
  },
});

StyleDictionary.registerFormat({
  name: "json/typography",
  formatter: function (dictionary) {
    const textTokens = {
      fontSize: {},
      textDecoration: {},
      fontFamily: {},
      fontWeight: {},
      fontStyle: {},
      fontStretch: {},
      letterSpacing: {},
      lineHeight: {},
      paragraphIndent: {},
      paragraphSpacing: {},
      textCase: {},
    };
    // dictionary.properties.map((token) =>
    for (const propname in dictionary.properties.typography) {
      const nameWithoutPrefix = _.camelCase(
        propname.startsWith("text-") ? propname.substring(5) : propname
      );

      const propDict = dictionary.properties.typography[propname];
      for (const prop in propDict) {
        textTokens[prop][nameWithoutPrefix] = propDict[prop].value;
      }
    }
    return JSON.stringify(textTokens, null, 2);
  },
});

module.exports = {
  source: ["./src/tokens/design-tokens.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "./src/tokens/dist/",
      transforms: [
        "size/px",
        "size/percent",
        "name/cti/camel",
        "lineHeight/percentToEm",
      ], // HACK: for a reason, name/cti/camel transform doesn't affect the result, but prevents from token collision warning in console
      /* We split tokens into separate files - it will be easier to use them this way */
      files: [
        /* Filter and extract typography tokens */
        {
          destination: "typography.json",
          format: "json/typography",
          filter: "isTypography",
        },
        /* Filter and extract color tokens*/
        {
          destination: "colors.json",
          format: "json/colors",

          filter: {
            type: "color",
          },
        },
      ],
    },
  },
};

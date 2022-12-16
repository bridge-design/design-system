const path = require("path");
const pathToInlineSvg = path.resolve(__dirname, "../src/components/");
const webpack = require("webpack");

const tokensFileName = "design-tokens.json";
const tokensPath = "./src/tokens/";

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.js"],
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-addon-designs",
    "creevey",
  ],
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ];

    // SVGR
    const rules = config.module.rules;
    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = rules.find((rule) => {
      return rule && rule.test ? rule.test.test(".svg") : false;
    });

    fileLoaderRule.exclude = pathToInlineSvg;

    rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
        "file-loader",
      ],
    });

    // fonts
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf)$/,
      use: [
        {
          loader: "file-loader",
          query: {
            name: "[name].[ext]",
          },
        },
      ],
      include: path.resolve(__dirname, "public"),
    });

    /*
     * Add plugin which adds design-tokens source file to watch scope
     */
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.beforeCompile.tap("WatchTokensSource", (params) => {
          params.compilationDependencies.add(path.resolve(__dirname, tokensFileName));
        });
      },
    });

    /*
     * Add plugin which detects if design-token file was invalidated and rebuilds tokens
     */
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.invalid.tap("RebuildTokens", (fn) => {
          const StyleDictionary = require("style-dictionary").extend(`${tokensPath}/config.js`);

          if (/design-tokens.json$/.test(fn)) {
            // StyleDictionary.extend("./.tokens/config.js");
            StyleDictionary.buildPlatform("js");
          }
        });
      },
    });
    config.node = {
      fs: "empty",
    };
    return config;
  },
};

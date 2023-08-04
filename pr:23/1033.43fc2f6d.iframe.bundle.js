(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[1033],{"./src/components/Text/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js");var prop_types__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__),classnames__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__),_utils_getTheme__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/utils/getTheme.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","children","as","className","responsive"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Text=function Text(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"2XlMedium":_ref$variant,children=_ref.children,_ref$as=_ref.as,Component=void 0===_ref$as?"p":_ref$as,className=_ref.className,responsive=_ref.responsive,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),variants={"9xl":"text-9Xl font-9Xl tracking-9Xl leading-9Xl","8xl":"text-8Xl font-8Xl tracking-8Xl leading-8Xl","7xl":"text-7Xl font-7Xl tracking-7Xl leading-7Xl","6xl":"text-6Xl font-6Xl tracking-6Xl leading-6Xl","5xl":"text-5Xl font-5Xl tracking-5Xl leading-5Xl","4xl":"text-4Xl font-4Xl tracking-4Xl leading-4Xl","3xl":"text-3Xl font-3Xl tracking-3Xl leading-3Xl","3xlbold":"text-3XlBold font-3XlBold tracking-3XlBold leading-3XlBold","2xl":"text-2Xl font-2Xl tracking-2Xl leading-2Xl","2xlmedium":"text-2XlMedium font-2XlMedium tracking-2XlMedium leading-2XlMedium",xl:"text-xl font-xl tracking-xl leading-xl",xlmedium:"text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium",lg:"text-lg font-lg tracking-lg leading-lg",lgitalic:"text-lgItalic font-lgItalic tracking-lgItalic leading-lgItalic",lgmedium:"text-lgMedium font-lgMedium tracking-lgMedium leading-lgMedium",lgmediumitalic:"text-lgMediumItalic font-lgMediumItalic tracking-lgMediumItalic leading-lgMediumItalic ",md:"text-md font-md tracking-md leading-md",mdMedium:"text-mdMedium font-mdMedium tracking-mdMedium leading-mdMedium",base:"text-base font-base tracking-base leading-base",basemedium:"text-baseMedium font-baseMedium tracking-baseMedium leading-baseMedium",sm:"text-sm font-sm tracking-sm leading-sm",smmedium:"text-smMedium font-smMedium tracking-smMedium leading-smMedium",xs:"text-xs font-xs tracking-xs leading-xs",xsmedium:"text-xsMedium font-xsMedium tracking-xsMedium leading-xsMedium"},responsiveClasses=responsive?Object.entries(responsive).map((function(_ref2){var bp=_ref2[0],variant=_ref2[1];return variant&&variants[variant.toLowerCase()].split(" ").map((function(v){return bp+":"+v})).join(" ")})).join(" "):"";return variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(Component,_objectSpread(_objectSpread({className:classnames__WEBPACK_IMPORTED_MODULE_15___default()(variants[variant.toLowerCase()],responsiveClasses,className)},props),{},{children})):null};Text.displayName="Text";var breakpoints=(0,_utils_getTheme__WEBPACK_IMPORTED_MODULE_16__.le)(),responsivePropShape=Object.keys(breakpoints).reduce((function(obj,bp){var _objectSpread2;return _objectSpread(_objectSpread({},obj),{},((_objectSpread2={})[bp]=prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,_objectSpread2))}),{});Text.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_18___default().any,children:prop_types__WEBPACK_IMPORTED_MODULE_18___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string,responsive:prop_types__WEBPACK_IMPORTED_MODULE_18___default().shape(responsivePropShape),className:prop_types__WEBPACK_IMPORTED_MODULE_18___default().string},Text.defaultProps={as:"p"},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{variant:{defaultValue:{value:'"2XlMedium"',computed:!1},description:"",type:{name:"string"},required:!1},as:{defaultValue:{value:'"p"',computed:!1},description:"",type:{name:"any"},required:!1},children:{description:"",type:{name:"node"},required:!1},responsive:{description:"",type:{name:"shape",value:"Object.keys(breakpoints).reduce(\n  (obj, bp) => ({ ...obj, [bp]: PropTypes.string }),\n  {}\n)",computed:!0},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Text},"./src/utils/getTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>getTheme,le:()=>getBreakpoints,EC:()=>getColors});__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var resolveConfig=__webpack_require__("./node_modules/tailwindcss/resolveConfig.js"),resolveConfig_default=__webpack_require__.n(resolveConfig),main=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.from-entries.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/fast-cartesian/build/src/main.js"));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var tailwind_config_resolveConfig=__webpack_require__("./node_modules/tailwindcss/resolveConfig.js"),colors=__webpack_require__("./src/tokens/dist/colors.json"),typography=__webpack_require__("./src/tokens/dist/typography.json"),defaultTheme=__webpack_require__("./node_modules/tailwindcss/defaultTheme.js"),tailwind_config_plugin=__webpack_require__("./node_modules/tailwindcss/plugin.js"),typographyProps=["fontSize","textDecoration","fontFamily","fontWeight","fontStyle","letterSpacing","lineHeight","textCase"],generateTypography=function generateTypography(variant,theme){return typographyProps.reduce((function(acc,prop){var _objectSpread2;return _objectSpread(_objectSpread({},acc),{},((_objectSpread2={})[prop]=theme(prop+"."+variant),_objectSpread2))}),{})},generateSafelistEntries=function generateSafelistEntries(){for(var _len=arguments.length,arrays=new Array(_len),_key=0;_key<_len;_key++)arrays[_key]=arguments[_key];return(0,main.Z)(arrays).map((function(arr){return arr.join("")}))},conf={content:["./src/**/*.{js,jsx,md,mdx, txt}"],theme:{fontSize:_objectSpread({},typography.fontSize),fontWeight:_objectSpread({},typography.fontWeight),lineHeight:_objectSpread({},typography.lineHeight),letterSpacing:_objectSpread({},typography.letterSpacing),extend:{screens:{container:"896px"},transitionTimingFunction:{"out-back":"cubic-bezier(.2, .8, .2, 1.1)"},width:{150:"150%"},minWidth:{96:"24rem"},maxWidth:{112:"28rem"},colors:_objectSpread({},colors),backgroundImage:function backgroundImage(theme){return function generateHighlights(theme){return function generateColors(colors,prefix){return Object.keys(colors).reduce((function(acc,key){var _objectSpread3;if("string"==typeof colors[key])return _objectSpread(_objectSpread({},acc),{},((_objectSpread3={})[prefix+"-"+key]="linear-gradient(to top, "+colors[key]+" 0, "+colors[key]+" 11px, transparent 11px)",_objectSpread3));var innerColors=generateColors(colors[key],prefix+"-"+key);return _objectSpread(_objectSpread({},acc),innerColors)}),{})}(theme("colors"),"highlight")}(theme)},backgroundPosition:{"9Xl":"0 -24px","8Xl":"0 -16px","7Xl":"0 -12px","6Xl":"0 -8px","5Xl":"0 -6px","4Xl":"0 -4px","3Xl":"0 -2px","2Xl":"0 0",xl:"0 2px",xlBolder:"0 2px",lg:"0 4px",lgBolder:"0 4px",base:"0 4px",sm:"0 6px",smBolder:"0 6px",xs:"0 6px",xsBolder:"0 6px"},fontFamily:Object.fromEntries(Object.entries(typography.fontFamily).map((function(_ref){return[_ref[0],[_ref[1]].concat(defaultTheme.fontFamily.sans).join(",")]}))),scale:{mirror:"-1"},typography:function typography(theme){return{DEFAULT:{css:{color:theme("colors.light['on-background'].900"),maxWidth:theme("maxWidth.2xl"),p:_objectSpread(_objectSpread({},generateTypography("base",theme)),{},{paddingBottom:"1rem"}),strong:{color:"inherit",fontWeight:500},thead:{color:"inherit",fontWeight:500},h1:_objectSpread(_objectSpread({},generateTypography("6Xl",theme)),{},{color:theme("colors.light['on-background'].900")}),h2:_objectSpread(_objectSpread({},generateTypography("4Xl",theme)),{},{color:theme("colors.light['on-background'].900")}),h3:_objectSpread(_objectSpread({},generateTypography("2Xl",theme)),{},{color:theme("colors.light['on-background'].900")}),h4:_objectSpread(_objectSpread({},generateTypography("xlBolder",theme)),{},{color:theme("colors.light['on-background'].900")}),h5:_objectSpread(_objectSpread({},generateTypography("base",theme)),{},{color:theme("colors.light['on-background'].900")}),h6:_objectSpread(_objectSpread({},generateTypography("smBolder",theme)),{},{color:theme("colors.light['on-background'].900")}),pre:{backgroundColor:theme("colors.primary.100"),color:theme("colors.light['on-background'].900"),padding:"1rem"},code:{backgroundColor:theme("colors.primary.100")},"code:before, code:after":{content:""},blockquote:{backgroundColor:theme("colors.light['on-background'].100"),color:theme("colors.light['on-background'].900"),p:{paddingTop:"1rem",paddingRight:"0.5rem"}},"ul >li:before":{content:"-"},a:{color:theme("colors.light['on-background'].900"),cursor:"pointer"}}}}}},fontFace:{"Neue Montreal":[{filename:"NeueMontreal-Regular",style:"normal",weight:400,display:"swap"},{filename:"NeueMontreal-Italic",style:"italic",weight:400,display:"swap"},{filename:"NeueMontreal-Medium",style:"normal",weight:500,display:"swap"},{filename:"NeueMontreal-MediumItalic",style:"italic",weight:500,display:"swap"}]}},plugins:[__webpack_require__("./node_modules/@tailwindcss/typography/src/index.js"),__webpack_require__("./tailwindPlugins/font-face.js")(),tailwind_config_plugin((function(_ref2){(0,_ref2.addUtilities)({".clip-left":{"clip-path":"inset( -100vw -100vw -100vw 0 )"}},["responsive","hover"])}))]},fullTheme=tailwind_config_resolveConfig(conf).theme,variants=Object.keys(typography.fontSize),screens=Object.keys(fullTheme.screens);conf.content.content=["./src/**/*.{js,jsx,md,mdx,txt}"],conf.content.safelist=[].concat(__webpack_require__("./tailwind.safelist.js"),generateSafelistEntries(screens,[":"],["text","font","tracking","leading"],["-"],variants),generateSafelistEntries(["bg-highlight-"],["primary","yellow","red","green","pink"],["-"],["50","100","200"]),generateSafelistEntries(["bg-"],variants),generateSafelistEntries(screens,[":"],["bg-"],variants),generateSafelistEntries(screens,[":"],["bg-highlight-"],["primary","yellow","red","green","pink"],["-"],["50","100","200"]));const tailwind_config=conf;function getTheme_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function getTheme_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?getTheme_ownKeys(Object(source),!0).forEach((function(key){getTheme_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):getTheme_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function getTheme_defineProperty(obj,key,value){return(key=function getTheme_toPropertyKey(arg){var key=function getTheme_toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const getTheme=resolveConfig_default()(tailwind_config).theme;var getBreakpoints=function getBreakpoints(){var screens=resolveConfig_default()(tailwind_config).theme.screens,breakpoints={};for(var screen in screens)breakpoints[screen]=parseInt(screens[screen]);return breakpoints};function getColors(){return function generateColors(colors,prefix){return Object.keys(colors).reduce((function(acc,key){var _objectSpread2,newPrefix=(prefix.length>0?prefix+"-":"")+key;if("string"==typeof colors[key])return getTheme_objectSpread(getTheme_objectSpread({},acc),{},((_objectSpread2={})[newPrefix]=colors[key],_objectSpread2));var innerColors=generateColors(colors[key],newPrefix);return getTheme_objectSpread(getTheme_objectSpread({},acc),innerColors)}),{})}(resolveConfig_default()(tailwind_config).theme.colors,"")}},"./tailwind.safelist.js":module=>{module.exports=[]},"./tailwindPlugins/font-face.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),module.exports=function fontFacePluginFactory(){return function fontFacePlugin(_ref){var addBase=_ref.addBase,fonts=(0,_ref.theme)("fontFace",{});Object.entries(fonts).forEach((function(_ref2){var name=_ref2[0];_ref2[1].forEach((function(_ref3){var filename=_ref3.filename,_ref3$weight=_ref3.weight,weight=void 0===_ref3$weight?400:_ref3$weight,_ref3$style=_ref3.style,style=void 0===_ref3$style?"normal":_ref3$style,_ref3$display=_ref3.display;addBase({"@font-face":{fontFamily:name,fontWeight:weight,fontStyle:style,fontDisplay:void 0===_ref3$display?"auto":_ref3$display,src:['url("/fonts/'+filename+'.woff") format("woff")'].join(", ")}})}))}))}}}}]);
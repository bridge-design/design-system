(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[956],{"./src/utils/getTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>getTheme,le:()=>getBreakpoints,EC:()=>getColors});__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var resolveConfig=__webpack_require__("./node_modules/tailwindcss/resolveConfig.js"),resolveConfig_default=__webpack_require__.n(resolveConfig),main=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.from-entries.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/fast-cartesian/build/src/main.js"));function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var tailwind_config_resolveConfig=__webpack_require__("./node_modules/tailwindcss/resolveConfig.js"),colors=__webpack_require__("./src/tokens/dist/colors.json"),typography=__webpack_require__("./src/tokens/dist/typography.json"),defaultTheme=__webpack_require__("./node_modules/tailwindcss/defaultTheme.js"),tailwind_config_plugin=__webpack_require__("./node_modules/tailwindcss/plugin.js"),typographyProps=["fontSize","textDecoration","fontFamily","fontWeight","fontStyle","letterSpacing","lineHeight","textCase"],generateTypography=function generateTypography(variant,theme){return typographyProps.reduce((function(acc,prop){var _objectSpread2;return _objectSpread(_objectSpread({},acc),{},((_objectSpread2={})[prop]=theme(prop+"."+variant),_objectSpread2))}),{})},generateSafelistEntries=function generateSafelistEntries(){for(var _len=arguments.length,arrays=new Array(_len),_key=0;_key<_len;_key++)arrays[_key]=arguments[_key];return(0,main.Z)(arrays).map((function(arr){return arr.join("")}))},conf={content:["./src/**/*.{js,jsx,md,mdx, txt}"],theme:{fontSize:_objectSpread({},typography.fontSize),fontWeight:_objectSpread({},typography.fontWeight),lineHeight:_objectSpread({},typography.lineHeight),letterSpacing:_objectSpread({},typography.letterSpacing),extend:{screens:{container:"896px"},transitionTimingFunction:{"out-back":"cubic-bezier(.2, .8, .2, 1.1)"},width:{150:"150%"},minWidth:{96:"24rem"},maxWidth:{112:"28rem"},colors:_objectSpread({},colors),backgroundImage:function backgroundImage(theme){return function generateHighlights(theme){return function generateColors(colors,prefix){return Object.keys(colors).reduce((function(acc,key){var _objectSpread3;if("string"==typeof colors[key])return _objectSpread(_objectSpread({},acc),{},((_objectSpread3={})[prefix+"-"+key]="linear-gradient(to top, "+colors[key]+" 0, "+colors[key]+" 11px, transparent 11px)",_objectSpread3));var innerColors=generateColors(colors[key],prefix+"-"+key);return _objectSpread(_objectSpread({},acc),innerColors)}),{})}(theme("colors"),"highlight")}(theme)},backgroundPosition:{"9Xl":"0 -24px","8Xl":"0 -16px","7Xl":"0 -12px","6Xl":"0 -8px","5Xl":"0 -6px","4Xl":"0 -4px","3Xl":"0 -2px","2Xl":"0 0",xl:"0 2px",xlBolder:"0 2px",lg:"0 4px",lgBolder:"0 4px",base:"0 4px",sm:"0 6px",smBolder:"0 6px",xs:"0 6px",xsBolder:"0 6px"},fontFamily:Object.fromEntries(Object.entries(typography.fontFamily).map((function(_ref){return[_ref[0],[_ref[1]].concat(defaultTheme.fontFamily.sans).join(",")]}))),scale:{mirror:"-1"},typography:function typography(theme){return{DEFAULT:{css:{color:theme("colors.light['on-background'].900"),maxWidth:theme("maxWidth.2xl"),p:_objectSpread(_objectSpread({},generateTypography("base",theme)),{},{paddingBottom:"1rem"}),strong:{color:"inherit",fontWeight:500},thead:{color:"inherit",fontWeight:500},h1:_objectSpread(_objectSpread({},generateTypography("6Xl",theme)),{},{color:theme("colors.light['on-background'].900")}),h2:_objectSpread(_objectSpread({},generateTypography("4Xl",theme)),{},{color:theme("colors.light['on-background'].900")}),h3:_objectSpread(_objectSpread({},generateTypography("2Xl",theme)),{},{color:theme("colors.light['on-background'].900")}),h4:_objectSpread(_objectSpread({},generateTypography("xlBolder",theme)),{},{color:theme("colors.light['on-background'].900")}),h5:_objectSpread(_objectSpread({},generateTypography("base",theme)),{},{color:theme("colors.light['on-background'].900")}),h6:_objectSpread(_objectSpread({},generateTypography("smBolder",theme)),{},{color:theme("colors.light['on-background'].900")}),pre:{backgroundColor:theme("colors.primary.100"),color:theme("colors.light['on-background'].900"),padding:"1rem"},code:{backgroundColor:theme("colors.primary.100")},"code:before, code:after":{content:""},blockquote:{backgroundColor:theme("colors.light['on-background'].100"),color:theme("colors.light['on-background'].900"),p:{paddingTop:"1rem",paddingRight:"0.5rem"}},"ul >li:before":{content:"-"},a:{color:theme("colors.light['on-background'].900"),cursor:"pointer"}}}}}},fontFace:{"Neue Montreal":[{filename:"NeueMontreal-Regular",style:"normal",weight:400,display:"swap"},{filename:"NeueMontreal-Italic",style:"italic",weight:400,display:"swap"},{filename:"NeueMontreal-Medium",style:"normal",weight:500,display:"swap"},{filename:"NeueMontreal-MediumItalic",style:"italic",weight:500,display:"swap"}]}},plugins:[__webpack_require__("./node_modules/@tailwindcss/typography/src/index.js"),__webpack_require__("./tailwindPlugins/font-face.js")(),tailwind_config_plugin((function(_ref2){(0,_ref2.addUtilities)({".clip-left":{"clip-path":"inset( -100vw -100vw -100vw 0 )"}},["responsive","hover"])}))]},fullTheme=tailwind_config_resolveConfig(conf).theme,variants=Object.keys(typography.fontSize),screens=Object.keys(fullTheme.screens);conf.content.content=["./src/**/*.{js,jsx,md,mdx,txt}"],conf.content.safelist=[].concat(__webpack_require__("./tailwind.safelist.js"),generateSafelistEntries(screens,[":"],["text","font","tracking","leading"],["-"],variants),generateSafelistEntries(["bg-highlight-"],["primary","yellow","red","green","pink"],["-"],["50","100","200"]),generateSafelistEntries(["bg-"],variants),generateSafelistEntries(screens,[":"],["bg-"],variants),generateSafelistEntries(screens,[":"],["bg-highlight-"],["primary","yellow","red","green","pink"],["-"],["50","100","200"]));const tailwind_config=conf;function getTheme_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function getTheme_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?getTheme_ownKeys(Object(t),!0).forEach((function(r){getTheme_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):getTheme_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function getTheme_defineProperty(obj,key,value){return(key=function getTheme_toPropertyKey(arg){var key=function getTheme_toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const getTheme=resolveConfig_default()(tailwind_config).theme;var getBreakpoints=function getBreakpoints(){var screens=resolveConfig_default()(tailwind_config).theme.screens,breakpoints={};for(var screen in screens)breakpoints[screen]=parseInt(screens[screen]);return breakpoints};function getColors(){return function generateColors(colors,prefix){return Object.keys(colors).reduce((function(acc,key){var _objectSpread2,newPrefix=(prefix.length>0?prefix+"-":"")+key;if("string"==typeof colors[key])return getTheme_objectSpread(getTheme_objectSpread({},acc),{},((_objectSpread2={})[newPrefix]=colors[key],_objectSpread2));var innerColors=generateColors(colors[key],newPrefix);return getTheme_objectSpread(getTheme_objectSpread({},acc),innerColors)}),{})}(resolveConfig_default()(tailwind_config).theme.colors,"")}},"./tailwind.safelist.js":module=>{module.exports=["hover:color-light-on-background-800"]},"./tailwindPlugins/font-face.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),module.exports=function fontFacePluginFactory(){return function fontFacePlugin(_ref){var addBase=_ref.addBase,fonts=(0,_ref.theme)("fontFace",{});Object.entries(fonts).forEach((function(_ref2){var name=_ref2[0];_ref2[1].forEach((function(_ref3){var filename=_ref3.filename,_ref3$weight=_ref3.weight,weight=void 0===_ref3$weight?400:_ref3$weight,_ref3$style=_ref3.style,style=void 0===_ref3$style?"normal":_ref3$style,_ref3$display=_ref3.display;addBase({"@font-face":{fontFamily:name,fontWeight:weight,fontStyle:style,fontDisplay:void 0===_ref3$display?"auto":_ref3$display,src:['url("/fonts/'+filename+'.woff") format("woff")'].join(", ")}})}))}))}}},"./src/typography.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>typography_stories,defaultStyle:()=>defaultStyle,fontFamily:()=>fontFamily,fontSize:()=>fontSize,fontWeight:()=>fontWeight,letterSpacing:()=>letterSpacing});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),_excluded=["fontFamily","fontSize","fontWeight","sampleText","variants"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Label=function Label(props){return(0,jsx_runtime.jsx)("div",_objectSpread({className:"flex flex-col justify-center flex-grow-0 flex-shrink-0 w-1/6 mr-8 text-base text-grey500"},props))};Label.displayName="Label";var Sample=function Sample(props){return(0,jsx_runtime.jsx)("div",_objectSpread({className:"overflow-hidden whitespace-nowrap overflow-ellipsis"},props))};Sample.displayName="Sample";var TypeSpecimen=function TypeSpecimen(props){return(0,jsx_runtime.jsx)("div",_objectSpread({className:"flex mb-4 align-baseline justify-items-start"},props))};TypeSpecimen.displayName="TypeSpecimen";var Wrapper=function Wrapper(props){return(0,jsx_runtime.jsx)("div",_objectSpread({className:"px-5 py-8"},props))};Wrapper.displayName="Wrapper";var Typeset=function Typeset(_ref){var fontFamily=_ref.fontFamily,fontSize=_ref.fontSize,fontWeight=_ref.fontWeight,sampleText=_ref.sampleText,variants=_ref.variants,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);return(0,jsx_runtime.jsx)(Wrapper,_objectSpread(_objectSpread({},props),{},{className:"docblock-typeset",children:Object.entries(variants).map((function(_ref2){var propname=_ref2[0],options=_ref2[1];return Object.entries(options).map((function(_ref3,i){var _ref4,optname=_ref3[0],optvalue=_ref3[1];return(0,jsx_runtime.jsxs)(TypeSpecimen,{children:[(0,jsx_runtime.jsxs)(Label,{children:[(0,jsx_runtime.jsx)("div",{className:"mb-2",children:optname}),(0,jsx_runtime.jsx)("div",{className:"text-sm text-light-background-300",children:optvalue})]}),(0,jsx_runtime.jsx)(Sample,{style:(_ref4={fontFamily,fontSize,fontWeight,lineHeight:1.2},_ref4[propname]=optvalue,_ref4),children:sampleText||"Was he a beast if music could move him so?"})]},propname+i)}))}))}))};Typeset.displayName="Typeset",Typeset.__docgenInfo={description:"Convenient styleguide documentation showing examples of type\nwith different sizes and weights and configurable sample text.",methods:[],displayName:"Typeset"};const storybookComponents_Typeset=Typeset;var getTheme=__webpack_require__("./src/utils/getTheme.js");const fontSize=getTheme.ZP.fontSize,fontWeight=getTheme.ZP.fontWeight,fontFamily=getTheme.ZP.fontFamily,letterSpacing=getTheme.ZP.letterSpacing,defaultStyle={sampleText:"Design systems are awesome",fontFamily:fontFamily.base,fontSize:fontSize.xl};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Typography"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"typography",children:"Typography"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"All possible font properties, coming from design tokens."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"font-sizes",children:"Font Sizes"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:"<Typeset {...defaultStyle} variants={{ fontSize: fontSize }} />",children:(0,jsx_runtime.jsx)(storybookComponents_Typeset,{...defaultStyle,variants:{fontSize}})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"font-weights",children:"Font Weights"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:"<Typeset {...defaultStyle} variants={{ fontWeight: fontWeight }} />",children:(0,jsx_runtime.jsx)(storybookComponents_Typeset,{...defaultStyle,variants:{fontWeight}})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"letter-spacing",children:"Letter Spacing"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:"<Typeset {...defaultStyle} variants={{ letterSpacing: letterSpacing }} />",children:(0,jsx_runtime.jsx)(storybookComponents_Typeset,{...defaultStyle,variants:{letterSpacing}})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Typography",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const typography_stories=componentMeta}}]);
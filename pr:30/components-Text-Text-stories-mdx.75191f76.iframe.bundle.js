/*! For license information please see components-Text-Text-stories-mdx.75191f76.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[329],{"./src/components/Text/Text.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{colors:()=>colors,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,placeholder:()=>placeholder,responsive:()=>responsive,variants:()=>variants,withAsProp:()=>withAsProp});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_utils_getTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/getTheme.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Text/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const variants=Object.keys(_utils_getTheme__WEBPACK_IMPORTED_MODULE_1__.Ay.fontSize),colors=(0,_utils_getTheme__WEBPACK_IMPORTED_MODULE_1__.jM)(),placeholder="The quick brown fox jumped over the lazy dog.";function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{title:"Components/Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"text",children:"Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Any text on the page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{name:"Default",parameters:{design:{disable:!0}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"flex flex-col",children:variants.map((variant=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{variant,children:placeholder},variant)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{name:"With As Prop",args:{variant:"base",as:"i"},argTypes:{variant:{options:variants,control:{type:"select"}}},parameters:{design:{disable:!0}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{...args,children:placeholder})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{name:"Responsive",args:{variant:"6Xl"},argTypes:{variant:{options:variants,control:{type:"select"}},md:{options:variants,control:{type:"select"}},lg:{options:variants,control:{type:"select"}},xl:{options:variants,control:{type:"select"}}},parameters:{design:{disable:!0}},children:({md,lg,xl,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{variant:"3Xl",as:"span",responsive:{md,xl,lg},...args,children:"Figma and React"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.uY,{of:___WEBPACK_IMPORTED_MODULE_2__.A})]})}const defaultStory=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"flex flex-col",children:variants.map((variant=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{variant,children:placeholder},variant)))});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<div className="flex flex-col">{variants.map(variant => <Text key={variant} variant={variant}>\n          {placeholder}\n        </Text>)}</div>'},design:{disable:!0}};const withAsProp=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{...args,children:placeholder});withAsProp.storyName="With As Prop",withAsProp.argTypes={variant:{options:variants,control:{type:"select"}}},withAsProp.args={variant:"base",as:"i"},withAsProp.parameters={storySource:{source:"args => <Text {...args}>{placeholder}</Text>"},design:{disable:!0}};const responsive=({md,lg,xl,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{variant:"3Xl",as:"span",responsive:{md,xl,lg},...args,children:"Figma and React"});responsive.storyName="Responsive",responsive.argTypes={variant:{options:variants,control:{type:"select"}},md:{options:variants,control:{type:"select"}},lg:{options:variants,control:{type:"select"}},xl:{options:variants,control:{type:"select"}}},responsive.args={variant:"6Xl"},responsive.parameters={storySource:{source:'({\n  md,\n  lg,\n  xl,\n  ...args\n}) => <Text variant="3Xl" as="span" responsive={{\n  md: md,\n  xl: xl,\n  lg: lg\n}} {...args}>\n        {"Figma and React"}\n      </Text>'},design:{disable:!0}};const componentMeta={title:"Components/Text",tags:["stories-mdx"],includeStories:["defaultStory","withAsProp","responsive"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/fbjs/lib/emptyFunction.js":module=>{"use strict";function makeEmptyFunction(arg){return function(){return arg}}var emptyFunction=function emptyFunction(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(arg){return arg},module.exports=emptyFunction},"./node_modules/fbjs/lib/invariant.js":module=>{"use strict";module.exports=function invariant(condition,format,a,b,c,d,e,f){if(!condition){var error;if(void 0===format)error=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var args=[a,b,c,d,e,f],argIndex=0;(error=new Error(format.replace(/%s/g,(function(){return args[argIndex++]})))).name="Invariant Violation"}throw error.framesToPop=1,error}}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var emptyFunction=__webpack_require__("./node_modules/fbjs/lib/emptyFunction.js"),invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");module.exports=function(){function shim(){invariant(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim};return ReactPropTypes.checkPropTypes=emptyFunction,ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()}}]);
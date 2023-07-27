/*! For license information please see components-Text-Text-stories-mdx.15964cd8.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[882],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>dist.Xz,c6:()=>dist.c6,VZ:()=>dist.VZ,h_:()=>dist.h_,oG:()=>dist.oG});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");dist.bD,dist.Ct,dist.lO},"./src/components/Text/Text.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{colors:()=>colors,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,placeholder:()=>placeholder,responsive:()=>responsive,variants:()=>variants,withAsProp:()=>withAsProp});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_utils_getTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/getTheme.js"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const variants=Object.keys(_utils_getTheme__WEBPACK_IMPORTED_MODULE_2__.ZP.fontSize),colors=(0,_utils_getTheme__WEBPACK_IMPORTED_MODULE_2__.EC)(),placeholder="The quick brown fox jumped over the lazy dog.";function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"text",children:"Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Any text on the page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",parameters:{design:{disable:!0}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"flex flex-col",children:variants.map((variant=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{variant,children:placeholder},variant)))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"With As Prop",args:{variant:"base",as:"i"},argTypes:{variant:{options:variants,control:{type:"select"}}},parameters:{design:{disable:!0}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{...args,children:placeholder})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Responsive",args:{variant:"6Xl"},argTypes:{variant:{options:variants,control:{type:"select"}},md:{options:variants,control:{type:"select"}},lg:{options:variants,control:{type:"select"}},xl:{options:variants,control:{type:"select"}}},parameters:{design:{disable:!0}},children:({md,lg,xl,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{variant:"3Xl",as:"span",responsive:{md,xl,lg},...args,children:"Figma and React"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.$4,{of:___WEBPACK_IMPORTED_MODULE_3__.Z})]})}const defaultStory=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"flex flex-col",children:variants.map((variant=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{variant,children:placeholder},variant)))});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<div className="flex flex-col">{variants.map(variant => <Text key={variant} variant={variant}>\n          {placeholder}\n        </Text>)}</div>'},design:{disable:!0}};const withAsProp=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{...args,children:placeholder});withAsProp.storyName="With As Prop",withAsProp.argTypes={variant:{options:variants,control:{type:"select"}}},withAsProp.args={variant:"base",as:"i"},withAsProp.parameters={storySource:{source:"args => <Text {...args}>{placeholder}</Text>"},design:{disable:!0}};const responsive=({md,lg,xl,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.Z,{variant:"3Xl",as:"span",responsive:{md,xl,lg},...args,children:"Figma and React"});responsive.storyName="Responsive",responsive.argTypes={variant:{options:variants,control:{type:"select"}},md:{options:variants,control:{type:"select"}},lg:{options:variants,control:{type:"select"}},xl:{options:variants,control:{type:"select"}}},responsive.args={variant:"6Xl"},responsive.parameters={storySource:{source:'({\n  md,\n  lg,\n  xl,\n  ...args\n}) => <Text variant="3Xl" as="span" responsive={{\n  md: md,\n  xl: xl,\n  lg: lg\n}} {...args}>\n        {"Figma and React"}\n      </Text>'},design:{disable:!0}};const componentMeta={title:"Components/Text",tags:["stories-mdx"],includeStories:["defaultStory","withAsProp","responsive"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
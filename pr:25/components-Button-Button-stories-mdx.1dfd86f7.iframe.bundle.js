/*! For license information please see components-Button-Button-stories-mdx.1dfd86f7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[611],{"./node_modules/@carbon/icons-react/es/iconPropTypes-35f5ea64.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var _excluded=["width","height","viewBox"],_excluded2=["tabindex"],defaultAttributes={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function getAttributes(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=_ref.width,height=_ref.height,_ref$viewBox=_ref.viewBox,viewBox=void 0===_ref$viewBox?"0 0 ".concat(width," ").concat(height):_ref$viewBox,attributes=_objectWithoutProperties(_ref,_excluded),tabindex=attributes.tabindex,rest=_objectWithoutProperties(attributes,_excluded2),iconAttributes=_objectSpread2(_objectSpread2(_objectSpread2({},defaultAttributes),rest),{},{width,height,viewBox});return iconAttributes["aria-label"]||iconAttributes["aria-labelledby"]||iconAttributes.title?(iconAttributes.role="img",null!=tabindex&&(iconAttributes.focusable="true",iconAttributes.tabindex=tabindex)):iconAttributes["aria-hidden"]=!0,iconAttributes}var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js");const Icon=react.forwardRef((function Icon(_ref,ref){let{className,children,tabIndex,...rest}=_ref;const{tabindex,...props}=getAttributes({...rest,tabindex:tabIndex});return className&&(props.className=className),null!=tabindex&&(props.tabIndex=tabindex),ref&&(props.ref=ref),react.createElement("svg",props,children)}));Icon.displayName="Icon",Icon.propTypes={"aria-hidden":prop_types_default().string,"aria-label":prop_types_default().string,"aria-labelledby":prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,height:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),preserveAspectRatio:prop_types_default().string,tabIndex:prop_types_default().string,viewBox:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),xmlns:prop_types_default().string},Icon.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string])},"./src/components/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__),prop_types__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["href","label","children","size","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var sizes={small:"py-2 px-4 text-base text-baseBolder font-baseBolder tracking-baseBolder leading-baseBolder rounded-md",big:"py-4 px-6 text-2xl  text-xlBolder font-2xlBolder tracking-xlBolder leading-xlBolder rounded-xl"},Button=function Button(_ref){var href=_ref.href,label=_ref.label,children=_ref.children,size=_ref.size,className=_ref.className,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),Component=href?"a":"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Component,_objectSpread(_objectSpread({href,className:classnames__WEBPACK_IMPORTED_MODULE_12___default()(size?sizes[size]:sizes.big,"bg-primary-500 text-light-background-900 inline-flex items-center hover:bg-light-background-50 transition duration-300 ease-in focus:ring-yellow-100 focus:ring-4 focus:ring-offset-1 rounded-xl px-5 py-2 text-xl font-xlBolder",className)},props),{},{children:label||children}))};Button.displayName="Button",Button.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_14___default().node,href:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_14___default().string},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},href:{description:"",type:{name:"string"},required:!1},size:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Button},"./src/components/Button/Button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{asLink:()=>asLink,big:()=>big,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,small:()=>small,withIcon:()=>withIcon});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/index.js"),_carbon_icons_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-2.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Components/Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"buttons",children:"Buttons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Button component provides interfaces for all types of the buttons. Different types of the\nbuttons are coded as different components and imported here."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Default",args:{label:"Button",size:"small"},argTypes:{size:{options:["small","big"],control:{type:"select"}}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Small",args:{label:"Button"},parameters:{design:{disable:!0}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,size:"small"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Big",args:{label:"Button"},parameters:{design:{disable:!0}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,size:"big"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"With Icon",args:{size:"small"},argTypes:{size:{options:["small","big"],control:{type:"select"}}},parameters:{design:{disable:!0}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:["Send",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_5__._Q,{size:24,className:"ml-5"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"As Link",args:{label:"Button",href:"https://www.varya.me"},argTypes:{size:{options:["small","big"],control:{type:"select"}}},parameters:{design:{disable:!0}},children:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:["Send",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_5__._Q,{size:24,className:"ml-5"})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.$4,{of:___WEBPACK_IMPORTED_MODULE_1__.Z})]})}const defaultStory=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args});defaultStory.storyName="Default",defaultStory.argTypes={size:{options:["small","big"],control:{type:"select"}}},defaultStory.args={label:"Button",size:"small"},defaultStory.parameters={storySource:{source:"args => <Button {...args} />"}};const small=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,size:"small"});small.storyName="Small",small.args={label:"Button"},small.parameters={storySource:{source:'args => <Button {...args} size="small" />'},design:{disable:!0}};const big=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,size:"big"});big.storyName="Big",big.args={label:"Button"},big.parameters={storySource:{source:'args => <Button {...args} size="big" />'},design:{disable:!0}};const withIcon=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:["Send",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_5__._Q,{size:24,className:"ml-5"})]});withIcon.storyName="With Icon",withIcon.argTypes={size:{options:["small","big"],control:{type:"select"}}},withIcon.args={size:"small"},withIcon.parameters={storySource:{source:'args => <Button {...args}>\n        Send\n        <ChevronRight size={24} className="ml-5" />\n      </Button>'},design:{disable:!0}};const asLink=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,children:["Send",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_5__._Q,{size:24,className:"ml-5"})]});asLink.storyName="As Link",asLink.argTypes={size:{options:["small","big"],control:{type:"select"}}},asLink.args={label:"Button",href:"https://www.varya.me"},asLink.parameters={storySource:{source:'args => <Button {...args}>\n        Send\n        <ChevronRight size={24} className="ml-5" />\n      </Button>'},design:{disable:!0}};const componentMeta={title:"Components/Button",tags:["stories-mdx"],includeStories:["defaultStory","small","big","withIcon","asLink"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
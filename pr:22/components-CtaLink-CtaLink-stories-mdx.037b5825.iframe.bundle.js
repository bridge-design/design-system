/*! For license information please see components-CtaLink-CtaLink-stories-mdx.037b5825.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[463],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Xz:()=>dist.Xz,c6:()=>dist.c6,VZ:()=>dist.VZ,h_:()=>dist.h_,oG:()=>dist.oG});__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");dist.bD,dist.Ct,dist.lO},"./src/components/CtaLink/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var prop_types__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__),_Text__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Text/index.js")),classnames__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["to","as","ref","children","className","borderClassName","arrow","underline"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var CtaLink=function CtaLink(_ref){var to=_ref.to,as=_ref.as,ref=_ref.ref,children=_ref.children,className=_ref.className,borderClassName=_ref.borderClassName,_ref$arrow=_ref.arrow,arrow=void 0===_ref$arrow?"no":_ref$arrow,_ref$underline=_ref.underline,underline=void 0!==_ref$underline&&_ref$underline,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_13___default()("cursor-pointer text-primary-500 hover:text-primary-700 inline-flex items-center group bg-no-repeat text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_12__.Z,_objectSpread(_objectSpread({as,href:to,variant:"xlMedium",className:classes,ref},props),{},{children:["start"===arrow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span",{className:"no-underline transition duration-200 transform group-hover:-translate-x-1 motion-reduce:transform-none",children:["←"," "]},"start"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span",{className:underline?"border-b-2 pb-3 border-primary-500 hover:border-primary-700 "+borderClassName:"no",children},"body"),"end"===arrow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("span",{className:"no-underline transition duration-200 transform group-hover:translate-x-1 motion-reduce:transform-none",children:[" ","→"]},"end")]}))};CtaLink.displayName="CtaLink",CtaLink.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_15___default().any,children:prop_types__WEBPACK_IMPORTED_MODULE_15___default().node,ref:prop_types__WEBPACK_IMPORTED_MODULE_15___default().node,to:prop_types__WEBPACK_IMPORTED_MODULE_15___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_15___default().string,borderClassName:prop_types__WEBPACK_IMPORTED_MODULE_15___default().string,arrow:prop_types__WEBPACK_IMPORTED_MODULE_15___default().oneOf(["start","end","no"]),underline:prop_types__WEBPACK_IMPORTED_MODULE_15___default().bool},CtaLink.__docgenInfo={description:"",methods:[],displayName:"CtaLink",props:{arrow:{defaultValue:{value:'"no"',computed:!1},description:"",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"no"',computed:!1}]},required:!1},underline:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},as:{description:"",type:{name:"any"},required:!1},children:{description:"",type:{name:"node"},required:!1},ref:{description:"",type:{name:"node"},required:!1},to:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},borderClassName:{description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=CtaLink},"./src/components/CtaLink/CtaLink.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{arrowBack:()=>arrowBack,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,underline:()=>underline});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CtaLink/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/CtaLink"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"ctalink",children:"CtaLink"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Call-to-action link with decorative arrow afterwards"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{label:"Check tickets"},parameters:{design:{disable:!0}},children:({label})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{to:"https://bridge-the-gap.dev",children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Arrow back",args:{label:"Check tickets"},parameters:{design:{disable:!0}},children:({label})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{to:"https://bridge-the-gap.dev",arrow:"start",children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Underline",args:{label:"Check tickets",underline:!0},parameters:{design:{disable:!0}},children:({label,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{to:"https://bridge-the-gap.dev",...props,children:label})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.$4,{of:___WEBPACK_IMPORTED_MODULE_2__.Z})]})}const defaultStory=({label})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{to:"https://bridge-the-gap.dev",children:label});defaultStory.storyName="Default",defaultStory.args={label:"Check tickets"},defaultStory.parameters={storySource:{source:'({\n  label\n}) => <CtaLink to="https://bridge-the-gap.dev">{label}</CtaLink>'},design:{disable:!0}};const arrowBack=({label})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{to:"https://bridge-the-gap.dev",arrow:"start",children:label});arrowBack.storyName="Arrow back",arrowBack.args={label:"Check tickets"},arrowBack.parameters={storySource:{source:'({\n  label\n}) => <CtaLink to="https://bridge-the-gap.dev" arrow="start">\n        {label}\n      </CtaLink>'},design:{disable:!0}};const underline=({label,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.Z,{to:"https://bridge-the-gap.dev",...props,children:label});underline.storyName="Underline",underline.args={label:"Check tickets",underline:!0},underline.parameters={storySource:{source:'({\n  label,\n  ...props\n}) => <CtaLink to="https://bridge-the-gap.dev" {...props}>\n        {label}\n      </CtaLink>'},design:{disable:!0}};const componentMeta={title:"Components/CtaLink",tags:["stories-mdx"],includeStories:["defaultStory","arrowBack","underline"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
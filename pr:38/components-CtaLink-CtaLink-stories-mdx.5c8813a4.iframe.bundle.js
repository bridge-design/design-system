/*! For license information please see components-CtaLink-CtaLink-stories-mdx.5c8813a4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[73],{"./src/components/CtaLink/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var prop_types__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__),_Text__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Text/index.js")),classnames__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["to","as","ref","children","className","borderClassName","arrow","underline"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var CtaLink=function CtaLink(_ref){var to=_ref.to,as=_ref.as,ref=_ref.ref,children=_ref.children,className=_ref.className,borderClassName=_ref.borderClassName,_ref$arrow=_ref.arrow,arrow=void 0===_ref$arrow?"no":_ref$arrow,_ref$underline=_ref.underline,underline=void 0!==_ref$underline&&_ref$underline,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(_ref,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_16___default()("cursor-pointer text-primary-500 hover:text-primary-700 inline-flex items-center group bg-no-repeat text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_15__.A,_objectSpread(_objectSpread({as,href:to,variant:"xlMedium",className:classes,ref},props),{},{children:["start"===arrow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span",{className:"no-underline transition duration-200 transform group-hover:-translate-x-1 motion-reduce:transform-none",children:["←"," "]},"start"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span",{className:underline?"border-b-2 pb-3 border-primary-500 hover:border-primary-700 "+borderClassName:"no",children},"body"),"end"===arrow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span",{className:"no-underline transition duration-200 transform group-hover:translate-x-1 motion-reduce:transform-none",children:[" ","→"]},"end")]}))};CtaLink.displayName="CtaLink",CtaLink.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_13___default().any,children:prop_types__WEBPACK_IMPORTED_MODULE_13___default().node,ref:prop_types__WEBPACK_IMPORTED_MODULE_13___default().node,to:prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,borderClassName:prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,arrow:prop_types__WEBPACK_IMPORTED_MODULE_13___default().oneOf(["start","end","no"]),underline:prop_types__WEBPACK_IMPORTED_MODULE_13___default().bool},CtaLink.__docgenInfo={description:"",methods:[],displayName:"CtaLink",props:{arrow:{defaultValue:{value:'"no"',computed:!1},description:"",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"no"',computed:!1}]},required:!1},underline:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},as:{description:"",type:{name:"any"},required:!1},children:{description:"",type:{name:"node"},required:!1},ref:{description:"",type:{name:"node"},required:!1},to:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},borderClassName:{description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=CtaLink},"./src/components/CtaLink/CtaLink.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{arrowBack:()=>arrowBack,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,underline:()=>underline});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/CtaLink/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"Components/CtaLink"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"ctalink",children:"CtaLink"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Call-to-action link with decorative arrow afterwards"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{name:"Default",args:{label:"Check tickets"},parameters:{design:{disable:!0}},children:({label})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{to:"https://bridge-the-gap.dev",children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{name:"Arrow back",args:{label:"Check tickets"},parameters:{design:{disable:!0}},children:({label})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{to:"https://bridge-the-gap.dev",arrow:"start",children:label})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{name:"Underline",args:{label:"Check tickets",underline:!0},parameters:{design:{disable:!0}},children:({label,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{to:"https://bridge-the-gap.dev",...props,children:label})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.uY,{of:___WEBPACK_IMPORTED_MODULE_1__.A})]})}const defaultStory=({label})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{to:"https://bridge-the-gap.dev",children:label});defaultStory.storyName="Default",defaultStory.args={label:"Check tickets"},defaultStory.parameters={storySource:{source:'({\n  label\n}) => <CtaLink to="https://bridge-the-gap.dev">{label}</CtaLink>'},design:{disable:!0}};const arrowBack=({label})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{to:"https://bridge-the-gap.dev",arrow:"start",children:label});arrowBack.storyName="Arrow back",arrowBack.args={label:"Check tickets"},arrowBack.parameters={storySource:{source:'({\n  label\n}) => <CtaLink to="https://bridge-the-gap.dev" arrow="start">\n        {label}\n      </CtaLink>'},design:{disable:!0}};const underline=({label,...props})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{to:"https://bridge-the-gap.dev",...props,children:label});underline.storyName="Underline",underline.args={label:"Check tickets",underline:!0},underline.parameters={storySource:{source:'({\n  label,\n  ...props\n}) => <CtaLink to="https://bridge-the-gap.dev" {...props}>\n        {label}\n      </CtaLink>'},design:{disable:!0}};const componentMeta={title:"Components/CtaLink",tags:["stories-mdx"],includeStories:["defaultStory","arrowBack","underline"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/core-js/internals/correct-is-regexp-logic.js":(module,__unused_webpack_exports,__webpack_require__)=>{var MATCH=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("match");module.exports=function(METHOD_NAME){var regexp=/./;try{"/./"[METHOD_NAME](regexp)}catch(error1){try{return regexp[MATCH]=!1,"/./"[METHOD_NAME](regexp)}catch(error2){}}return!1}},"./node_modules/core-js/internals/is-regexp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),classof=__webpack_require__("./node_modules/core-js/internals/classof-raw.js"),MATCH=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js")("match");module.exports=function(it){var isRegExp;return isObject(it)&&(void 0!==(isRegExp=it[MATCH])?!!isRegExp:"RegExp"==classof(it))}},"./node_modules/core-js/internals/not-a-regexp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isRegExp=__webpack_require__("./node_modules/core-js/internals/is-regexp.js"),$TypeError=TypeError;module.exports=function(it){if(isRegExp(it))throw $TypeError("The method doesn't accept regular expressions");return it}},"./node_modules/core-js/modules/es.array.includes.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$includes=__webpack_require__("./node_modules/core-js/internals/array-includes.js").includes,fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),addToUnscopables=__webpack_require__("./node_modules/core-js/internals/add-to-unscopables.js");$({target:"Array",proto:!0,forced:fails((function(){return!Array(1).includes()}))},{includes:function includes(el){return $includes(this,el,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables("includes")},"./node_modules/core-js/modules/es.string.includes.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),notARegExp=__webpack_require__("./node_modules/core-js/internals/not-a-regexp.js"),requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),correctIsRegExpLogic=__webpack_require__("./node_modules/core-js/internals/correct-is-regexp-logic.js"),stringIndexOf=uncurryThis("".indexOf);$({target:"String",proto:!0,forced:!correctIsRegExpLogic("includes")},{includes:function includes(searchString){return!!~stringIndexOf(toString(requireObjectCoercible(this)),toString(notARegExp(searchString)),arguments.length>1?arguments[1]:void 0)}})},"./node_modules/fbjs/lib/emptyFunction.js":module=>{"use strict";function makeEmptyFunction(arg){return function(){return arg}}var emptyFunction=function emptyFunction(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(arg){return arg},module.exports=emptyFunction},"./node_modules/fbjs/lib/invariant.js":module=>{"use strict";module.exports=function invariant(condition,format,a,b,c,d,e,f){if(!condition){var error;if(void 0===format)error=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var args=[a,b,c,d,e,f],argIndex=0;(error=new Error(format.replace(/%s/g,(function(){return args[argIndex++]})))).name="Invariant Violation"}throw error.framesToPop=1,error}}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var emptyFunction=__webpack_require__("./node_modules/fbjs/lib/emptyFunction.js"),invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");module.exports=function(){function shim(){invariant(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim};return ReactPropTypes.checkPropTypes=emptyFunction,ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()}}]);
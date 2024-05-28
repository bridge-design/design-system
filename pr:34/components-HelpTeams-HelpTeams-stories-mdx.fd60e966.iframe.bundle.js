/*! For license information please see components-HelpTeams-HelpTeams-stories-mdx.fd60e966.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[321],{"./node_modules/@carbon/icons-react/es/iconPropTypes-35f5ea64.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var _excluded=["width","height","viewBox"],_excluded2=["tabindex"],defaultAttributes={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function getAttributes(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=_ref.width,height=_ref.height,_ref$viewBox=_ref.viewBox,viewBox=void 0===_ref$viewBox?"0 0 ".concat(width," ").concat(height):_ref$viewBox,attributes=_objectWithoutProperties(_ref,_excluded),tabindex=attributes.tabindex,rest=_objectWithoutProperties(attributes,_excluded2),iconAttributes=_objectSpread2(_objectSpread2(_objectSpread2({},defaultAttributes),rest),{},{width,height,viewBox});return iconAttributes["aria-label"]||iconAttributes["aria-labelledby"]||iconAttributes.title?(iconAttributes.role="img",null!=tabindex&&(iconAttributes.focusable="true",iconAttributes.tabindex=tabindex)):iconAttributes["aria-hidden"]=!0,iconAttributes}var prop_types=__webpack_require__("./node_modules/@carbon/icons-react/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js");const Icon=react.forwardRef((function Icon(_ref,ref){let{className,children,tabIndex,...rest}=_ref;const{tabindex,...props}=getAttributes({...rest,tabindex:tabIndex});return className&&(props.className=className),null!=tabindex&&(props.tabIndex=tabindex),ref&&(props.ref=ref),react.createElement("svg",props,children)}));Icon.displayName="Icon",Icon.propTypes={"aria-hidden":prop_types_default().string,"aria-label":prop_types_default().string,"aria-labelledby":prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,height:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),preserveAspectRatio:prop_types_default().string,tabIndex:prop_types_default().string,viewBox:prop_types_default().string,width:prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string]),xmlns:prop_types_default().string},Icon.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};prop_types_default().oneOfType([prop_types_default().number,prop_types_default().string])},"./node_modules/@carbon/icons-react/node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/@carbon/icons-react/node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/@carbon/icons-react/node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/@carbon/icons-react/node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/@carbon/icons-react/node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./src/components/CtaLink/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var prop_types__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__),_Text__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Text/index.js")),classnames__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["to","as","ref","children","className","borderClassName","arrow","underline"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var CtaLink=function CtaLink(_ref){var to=_ref.to,as=_ref.as,ref=_ref.ref,children=_ref.children,className=_ref.className,borderClassName=_ref.borderClassName,_ref$arrow=_ref.arrow,arrow=void 0===_ref$arrow?"no":_ref$arrow,_ref$underline=_ref.underline,underline=void 0!==_ref$underline&&_ref$underline,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(_ref,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_14___default()("cursor-pointer text-primary-500 hover:text-primary-700 inline-flex items-center group bg-no-repeat text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_Text__WEBPACK_IMPORTED_MODULE_13__.A,_objectSpread(_objectSpread({as,href:to,variant:"xlMedium",className:classes,ref},props),{},{children:["start"===arrow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span",{className:"no-underline transition duration-200 transform group-hover:-translate-x-1 motion-reduce:transform-none",children:["←"," "]},"start"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span",{className:underline?"border-b-2 pb-3 border-primary-500 hover:border-primary-700 "+borderClassName:"no",children},"body"),"end"===arrow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span",{className:"no-underline transition duration-200 transform group-hover:translate-x-1 motion-reduce:transform-none",children:[" ","→"]},"end")]}))};CtaLink.displayName="CtaLink",CtaLink.propTypes={as:prop_types__WEBPACK_IMPORTED_MODULE_11___default().any,children:prop_types__WEBPACK_IMPORTED_MODULE_11___default().node,ref:prop_types__WEBPACK_IMPORTED_MODULE_11___default().node,to:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,borderClassName:prop_types__WEBPACK_IMPORTED_MODULE_11___default().string,arrow:prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(["start","end","no"]),underline:prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool},CtaLink.__docgenInfo={description:"",methods:[],displayName:"CtaLink",props:{arrow:{defaultValue:{value:'"no"',computed:!1},description:"",type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"no"',computed:!1}]},required:!1},underline:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},as:{description:"",type:{name:"any"},required:!1},children:{description:"",type:{name:"node"},required:!1},ref:{description:"",type:{name:"node"},required:!1},to:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},borderClassName:{description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=CtaLink},"./src/components/HelpTeams/HelpTeams.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>HelpTeams_stories,defaultStory:()=>defaultStory});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Text=__webpack_require__("./src/components/Text/index.js"),CtaLink=__webpack_require__("./src/components/CtaLink/index.js"),bucket_2=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-2.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),HelpTeams=function HelpTeams(_ref){var className=_ref.className,photoUrl=_ref.photoUrl;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("flex flex-col-reverse md:flex-row justify-between items-start gap-14",className),children:[(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[(0,jsx_runtime.jsx)(Text.A,{variant:"4xl",className:"mb-8",children:"Help for busy teams"}),(0,jsx_runtime.jsx)("img",{src:photoUrl,alt:"team work",className:"w-full mx-auto mb-6 h-auto max-w-[678px] object-contain md:hidden block"}),(0,jsx_runtime.jsx)(Text.A,{variant:"lg",className:"",children:"Hiring an agency brings additional expertise and knowledge to your business. To complete the tasks outside of your in-house skillset, it may require team training or additional recruitment. Both of which can be time-consuming and can be costly in the long term."}),(0,jsx_runtime.jsxs)("div",{className:"pt-10 my-10 border-t border-px border-light-on-background-300",children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-1 mb-6",children:[(0,jsx_runtime.jsx)(bucket_2._j,{}),(0,jsx_runtime.jsx)(Text.A,{variant:"lg",children:"Added skillset"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-1 mb-6",children:[(0,jsx_runtime.jsx)(bucket_2._j,{}),(0,jsx_runtime.jsx)(Text.A,{variant:"lg",children:"Additional expertise"})]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-1",children:[(0,jsx_runtime.jsx)(bucket_2._j,{}),(0,jsx_runtime.jsx)(Text.A,{variant:"lg",children:"Continous integration and deveployment"})]})]}),(0,jsx_runtime.jsx)(CtaLink.A,{href:"/contact",underline:!0,className:"text-xl animate-fadeindelay justify-self-end",children:"Start a conversation"})]}),(0,jsx_runtime.jsx)("img",{src:photoUrl,alt:"team work",className:"w-[45%] h-auto max-w-[678px] object-contain hidden md:block"})]})};HelpTeams.displayName="HelpTeams",HelpTeams.propTypes={className:prop_types_default().string,photoUrl:prop_types_default().string},HelpTeams.__docgenInfo={description:"",methods:[],displayName:"HelpTeams",props:{className:{description:"",type:{name:"string"},required:!1},photoUrl:{description:"",type:{name:"string"},required:!1}}};const components_HelpTeams=HelpTeams;function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/HelpTeams"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"helpteams",children:"HelpTeams"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The component of description of the benefits of working with an additional team."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",children:(0,jsx_runtime.jsx)(components_HelpTeams,{className:"mt-2",photoUrl:"rectangle_14.png"})})}),"\n",(0,jsx_runtime.jsx)(dist.uY,{of:components_HelpTeams})]})}const defaultStory=()=>(0,jsx_runtime.jsx)(components_HelpTeams,{className:"mt-2",photoUrl:"rectangle_14.png"});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'<HelpTeams className="mt-2" photoUrl="rectangle_14.png" />'}};const componentMeta={title:"Components/HelpTeams",tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HelpTeams_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/fbjs/lib/emptyFunction.js":module=>{"use strict";function makeEmptyFunction(arg){return function(){return arg}}var emptyFunction=function emptyFunction(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(arg){return arg},module.exports=emptyFunction},"./node_modules/fbjs/lib/invariant.js":module=>{"use strict";module.exports=function invariant(condition,format,a,b,c,d,e,f){if(!condition){var error;if(void 0===format)error=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var args=[a,b,c,d,e,f],argIndex=0;(error=new Error(format.replace(/%s/g,(function(){return args[argIndex++]})))).name="Invariant Violation"}throw error.framesToPop=1,error}}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var emptyFunction=__webpack_require__("./node_modules/fbjs/lib/emptyFunction.js"),invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");module.exports=function(){function shim(){invariant(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim};return ReactPropTypes.checkPropTypes=emptyFunction,ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()}}]);
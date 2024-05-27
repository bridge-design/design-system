/*! For license information please see components-Badge-Badge-stories-mdx.b3e56be6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[765],{"./src/components/Badge/Badge.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Badge_stories,designer:()=>designer,developer:()=>developer});var _g,_defs,react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgFigmaCursor=function SvgFigmaCursor(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:22,height:24,fill:"none"},props),_g||(_g=react.createElement("g",{filter:"url(#figmaCursor_svg__a)"},react.createElement("path",{fill:"currentColor",d:"M14.5 17 17 4 6 10.5l5.5 1.5z"}),react.createElement("path",{stroke:"#fff",strokeLinecap:"square",d:"m15 17.1-.26 1.28-.67-1.12-2.9-4.83-5.3-1.45-1.14-.3 1.02-.61 11-6.5.95-.56-.2 1.08-2.5 13z"}))),_defs||(_defs=react.createElement("defs",null,react.createElement("filter",{id:"figmaCursor_svg__a",width:20.938,height:23.722,x:.453,y:.022,colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse"},react.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),react.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),react.createElement("feOffset",{dy:1}),react.createElement("feGaussianBlur",{stdDeviation:1.5}),react.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"}),react.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),react.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))))};__webpack_require__.p;var Text=__webpack_require__("./src/components/Text/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Badge=function Badge(_ref){var role=_ref.role,isHidden=_ref.isHidden,badgeClass="developer"===role?"mr-4":"mb-4",iconClass="developer"===role?"ml-6 mt-4":"ml-3 transform scale-x-mirror scale-x-2";return(0,jsx_runtime.jsx)("div",{className:classnames_default()(badgeClass,"flex flex-col items-start w-16"),children:!isHidden&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SvgFigmaCursor,{className:iconClass}),(0,jsx_runtime.jsx)(Text.A,{as:"span",variant:"xs",className:"p-1 capitalize text-light-on-background-900",children:role})]})})};Badge.displayName="Badge",Badge.propTypes={isHidden:prop_types_default().bool,role:prop_types_default().string},Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{isHidden:{description:"",type:{name:"bool"},required:!1},role:{description:"",type:{name:"string"},required:!1}}};const components_Badge=Badge;function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/Badge"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"badge",children:"Badge"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A label describing the role of workshop participants (usually designer/developer)"}),"\n",(0,jsx_runtime.jsxs)(dist.Hl,{children:[(0,jsx_runtime.jsx)(dist.gG,{name:"Designer",children:(0,jsx_runtime.jsx)(components_Badge,{role:"designer"})}),(0,jsx_runtime.jsx)(dist.gG,{name:"Developer",children:(0,jsx_runtime.jsx)(components_Badge,{role:"developer"})})]}),"\n",(0,jsx_runtime.jsx)(dist.uY,{of:components_Badge})]})}const designer=()=>(0,jsx_runtime.jsx)(components_Badge,{role:"designer"});designer.storyName="Designer",designer.parameters={storySource:{source:'<Badge role="designer" />'}};const developer=()=>(0,jsx_runtime.jsx)(components_Badge,{role:"developer"});developer.storyName="Developer",developer.parameters={storySource:{source:'<Badge role="developer" />'}};const componentMeta={title:"Components/Badge",tags:["stories-mdx"],includeStories:["designer","developer"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Badge_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/fbjs/lib/emptyFunction.js":module=>{"use strict";function makeEmptyFunction(arg){return function(){return arg}}var emptyFunction=function emptyFunction(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(arg){return arg},module.exports=emptyFunction},"./node_modules/fbjs/lib/invariant.js":module=>{"use strict";module.exports=function invariant(condition,format,a,b,c,d,e,f){if(!condition){var error;if(void 0===format)error=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var args=[a,b,c,d,e,f],argIndex=0;(error=new Error(format.replace(/%s/g,(function(){return args[argIndex++]})))).name="Invariant Violation"}throw error.framesToPop=1,error}}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var emptyFunction=__webpack_require__("./node_modules/fbjs/lib/emptyFunction.js"),invariant=__webpack_require__("./node_modules/fbjs/lib/invariant.js");module.exports=function(){function shim(){invariant(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim};return ReactPropTypes.checkPropTypes=emptyFunction,ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()}}]);
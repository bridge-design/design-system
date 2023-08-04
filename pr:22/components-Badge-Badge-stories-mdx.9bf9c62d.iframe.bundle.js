/*! For license information please see components-Badge-Badge-stories-mdx.9bf9c62d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[7697],{"./src/components/Badge/Badge.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Badge_stories,designer:()=>designer,developer:()=>developer});var _g,_defs,react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgFigmaCursor=function SvgFigmaCursor(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:22,height:24,fill:"none"},props),_g||(_g=react.createElement("g",{filter:"url(#figmaCursor_svg__a)"},react.createElement("path",{fill:"currentColor",d:"M14.5 17 17 4 6 10.5l5.5 1.5 3 5z"}),react.createElement("path",{stroke:"#fff",strokeLinecap:"square",d:"m15 17.1-.26 1.28-.67-1.12-2.9-4.83-5.3-1.45-1.14-.3 1.02-.61 11-6.5.95-.56-.2 1.08-2.5 13v.01z"}))),_defs||(_defs=react.createElement("defs",null,react.createElement("filter",{id:"figmaCursor_svg__a",width:20.938,height:23.722,x:.453,y:.022,colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse"},react.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),react.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),react.createElement("feOffset",{dy:1}),react.createElement("feGaussianBlur",{stdDeviation:1.5}),react.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"}),react.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),react.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))))};__webpack_require__.p;var Text=__webpack_require__("./src/components/Text/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Badge=function Badge(_ref){var role=_ref.role,isHidden=_ref.isHidden,badgeClass="developer"===role?"mr-4":"mb-4",iconClass="developer"===role?"ml-6 mt-4":"ml-3 transform scale-x-mirror scale-x-2";return(0,jsx_runtime.jsx)("div",{className:classnames_default()(badgeClass,"flex flex-col items-start w-16"),children:!isHidden&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SvgFigmaCursor,{className:iconClass}),(0,jsx_runtime.jsx)(Text.Z,{as:"span",variant:"xs",className:"p-1 capitalize text-light-on-background-900",children:role})]})})};Badge.displayName="Badge",Badge.propTypes={isHidden:prop_types_default().bool,role:prop_types_default().string},Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{isHidden:{description:"",type:{name:"bool"},required:!1},role:{description:"",type:{name:"string"},required:!1}}};const components_Badge=Badge;function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Badge"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"badge",children:"Badge"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A label describing the role of workshop participants (usually designer/developer)"}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"Designer",children:(0,jsx_runtime.jsx)(components_Badge,{role:"designer"})}),(0,jsx_runtime.jsx)(dist.oG,{name:"Developer",children:(0,jsx_runtime.jsx)(components_Badge,{role:"developer"})})]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:components_Badge})]})}const designer=()=>(0,jsx_runtime.jsx)(components_Badge,{role:"designer"});designer.storyName="Designer",designer.parameters={storySource:{source:'<Badge role="designer" />'}};const developer=()=>(0,jsx_runtime.jsx)(components_Badge,{role:"developer"});developer.storyName="Developer",developer.parameters={storySource:{source:'<Badge role="developer" />'}};const componentMeta={title:"Components/Badge",tags:["stories-mdx"],includeStories:["designer","developer"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Badge_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
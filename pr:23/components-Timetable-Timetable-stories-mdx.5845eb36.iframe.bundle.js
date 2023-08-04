/*! For license information please see components-Timetable-Timetable-stories-mdx.5845eb36.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[2180],{"./src/components/Timetable/Timetable.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{data:()=>data,default:()=>Timetable_stories,defaultStory:()=>defaultStory});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),Text=__webpack_require__("./src/components/Text/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Timetable=function Timetable(_ref){var data=_ref.data,header=_ref.header,className=_ref.className;return data&&(0,jsx_runtime.jsxs)(Text.Z,{as:"table",variant:"xlMedium",className:classnames_default()("text-light-on-background-900 table-auto",className),children:[header&&(0,jsx_runtime.jsx)(Text.Z,{as:"caption",variant:"2Xl",responsive:{sm:"smMedium"},className:"mb-2 text-left md:mb-5",children:header}),(0,jsx_runtime.jsx)("tbody",{children:data.map((function(row,i){return(0,jsx_runtime.jsxs)("tr",{className:"flex py-3 border-b md:py-6 border-light-on-background-900",children:[(0,jsx_runtime.jsx)("td",{className:"pr-2 text-left sm:pr-4 w-30 sm:w-64 ",children:(0,jsx_runtime.jsx)(Text.Z,{as:"span",variant:"xsMedium",responsive:{sm:"smMedium"},className:row.color+" text-light-on-background-50 p-1 sm:whitespace-nowrap",children:row.time})}),(0,jsx_runtime.jsx)("td",{className:"w-1/2 px-2 overflow-hidden text-left sm:px-4 overflow-ellipsis",children:(0,jsx_runtime.jsx)(Text.Z,{as:"span",responsive:{sm:"smMedium"},variant:"baseMedium",children:row.name})}),(0,jsx_runtime.jsx)("td",{className:"w-1/2 pl-2 overflow-hidden text-left sm:pl-4 overflow-ellipsis",children:(0,jsx_runtime.jsx)(Text.Z,{as:"span",responsive:{sm:"smMedium"},variant:"baseMedium",children:row.description})})]},row.name+i)}))})]})};Timetable.propTypes={data:prop_types_default().arrayOf(prop_types_default().shape({time:prop_types_default().string,name:prop_types_default().string,description:prop_types_default().string,color:prop_types_default().string})),header:prop_types_default().string,className:prop_types_default().string},Timetable.__docgenInfo={description:"",methods:[],displayName:"Timetable",props:{data:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{time:{name:"string",required:!1},name:{name:"string",required:!1},description:{name:"string",required:!1},color:{name:"string",required:!1}}}},required:!1},header:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const components_Timetable=Timetable,data=[{time:"9.00 am – 9:30",name:"Introduction",description:"What are design systems",color:"text-primary-500"},{time:"9.00 am – 9:30",name:"Introduction",description:"Design & code automatic sync",color:"text-primary-500"},{time:"9.00 am – 9:30",name:"Design and process",description:"UI inventory and scoping",color:"text-primary-500"},{time:"9.00 am – 9:30",name:"Design and process",description:"Structure of Figma library",color:"text-primary-500"},{time:"9.00 am – 9:30",name:"Design and process",description:"Structure of Figma library",color:"text-primary-500"},{time:"9.00 am – 9:30",name:"Design and process",description:"Structure of Figma library",color:"text-primary-500"},{time:"9.00 am – 9:30",name:"Design and process",description:"Structure of Figma library",color:"text-primary-500"},{time:"9.00 am – 9:30",name:"Design and process",description:"Structure of Figma library",color:"text-primary-500"}];function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Timetable"}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"timetable",children:"Timetable"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A table to display workshop programm in structured way"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:{header:"Day 1"},parameters:{design:{disable:!0}},children:args=>(0,jsx_runtime.jsx)(components_Timetable,{data,className:"w-full",...args})})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:components_Timetable})]})}const defaultStory=args=>(0,jsx_runtime.jsx)(components_Timetable,{data,className:"w-full",...args});defaultStory.storyName="Default",defaultStory.args={header:"Day 1"},defaultStory.parameters={storySource:{source:'args => <Timetable data={data} className="w-full" {...args} />'},design:{disable:!0}};const componentMeta={title:"Components/Timetable",tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Timetable_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/core-js/modules/es.function.name.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),FUNCTION_NAME_EXISTS=__webpack_require__("./node_modules/core-js/internals/function-name.js").EXISTS,uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltInAccessor=__webpack_require__("./node_modules/core-js/internals/define-built-in-accessor.js"),FunctionPrototype=Function.prototype,functionToString=uncurryThis(FunctionPrototype.toString),nameRE=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,regExpExec=uncurryThis(nameRE.exec);DESCRIPTORS&&!FUNCTION_NAME_EXISTS&&defineBuiltInAccessor(FunctionPrototype,"name",{configurable:!0,get:function(){try{return regExpExec(nameRE,functionToString(this))[1]}catch(error){return""}}})}}]);
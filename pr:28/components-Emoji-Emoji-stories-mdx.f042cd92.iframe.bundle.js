(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[781,433],{"./src/components/Emoji/Emoji.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,commonEmojis:()=>commonEmojis,commonlyUsed:()=>commonlyUsed,default:()=>Emoji_stories,defaultStory:()=>defaultStory});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","symbol"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Emoji=function Emoji(_ref){var label=_ref.label,symbol=_ref.symbol,rest=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(_ref,_excluded);return(0,jsx_runtime.jsx)("span",_objectSpread(_objectSpread({},rest),{},{role:"img","aria-label":label||"",children:symbol}))};Emoji.displayName="Emoji",Emoji.propTypes={label:prop_types_default().string,symbol:prop_types_default().string};const components_Emoji=react.memo(Emoji);Emoji.__docgenInfo={description:"Emoji\n\nwrapper for native emoji",methods:[],displayName:"Emoji",props:{label:{description:"",type:{name:"string"},required:!1},symbol:{description:"",type:{name:"string"},required:!1}}};const commonEmojis={hello:"👋 ","look down":"👇","great job":"👍 "};function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/Emoji"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"emoji",children:"Emoji"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Accessible wrapper for native emoji with label text"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Default",args:{label:"well done",symbol:"👍 "},parameters:{design:{disable:!0}},children:args=>(0,jsx_runtime.jsx)(components_Emoji,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{name:"Commonly used",parameters:{design:{disable:!0}},children:Object.entries(commonEmojis).map((([label,symbol])=>(0,jsx_runtime.jsx)(components_Emoji,{label,symbol,className:"mx-3"},symbol)))})}),"\n",(0,jsx_runtime.jsx)(dist.uY,{of:components_Emoji})]})}const defaultStory=args=>(0,jsx_runtime.jsx)(components_Emoji,{...args});defaultStory.storyName="Default",defaultStory.args={label:"well done",symbol:"👍 "},defaultStory.parameters={storySource:{source:"args => <Emoji {...args} />"},design:{disable:!0}};const commonlyUsed=()=>Object.entries(commonEmojis).map((([label,symbol])=>(0,jsx_runtime.jsx)(components_Emoji,{label,symbol,className:"mx-3"},symbol)));commonlyUsed.storyName="Commonly used",commonlyUsed.parameters={storySource:{source:'Object.entries(commonEmojis).map(([label, symbol]) => <Emoji key={symbol} label={label} symbol={symbol} className="mx-3" />)'},design:{disable:!0}};const componentMeta={title:"Components/Emoji",tags:["stories-mdx"],includeStories:["defaultStory","commonlyUsed"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Emoji_stories=componentMeta,__namedExportsOrder=["commonEmojis","defaultStory","commonlyUsed"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
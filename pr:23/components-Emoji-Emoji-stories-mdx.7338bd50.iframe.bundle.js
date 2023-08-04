"use strict";(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[786],{"./src/components/Emoji/Emoji.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{commonEmojis:()=>commonEmojis,commonlyUsed:()=>commonlyUsed,default:()=>Emoji_stories,defaultStory:()=>defaultStory});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","symbol"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Emoji=function Emoji(_ref){var label=_ref.label,symbol=_ref.symbol,rest=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);return(0,jsx_runtime.jsx)("span",_objectSpread(_objectSpread({},rest),{},{role:"img","aria-label":label||"",children:symbol}))};Emoji.displayName="Emoji",Emoji.propTypes={label:prop_types_default().string,symbol:prop_types_default().string},Emoji.__docgenInfo={description:"Emoji\n\nwrapper for native emoji",methods:[],displayName:"Emoji",props:{label:{description:"",type:{name:"string"},required:!1},symbol:{description:"",type:{name:"string"},required:!1}}};const components_Emoji=react.memo(Emoji),commonEmojis={hello:"👋 ","look down":"👇","great job":"👍 "};function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Emoji"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"emoji",children:"Emoji"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Accessible wrapper for native emoji with label text"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:{label:"well done",symbol:"👍 "},parameters:{design:{disable:!0}},children:args=>(0,jsx_runtime.jsx)(components_Emoji,{...args})})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Commonly used",parameters:{design:{disable:!0}},children:Object.entries(commonEmojis).map((([label,symbol])=>(0,jsx_runtime.jsx)(components_Emoji,{label,symbol,className:"mx-3"},symbol)))})}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:components_Emoji})]})}const defaultStory=args=>(0,jsx_runtime.jsx)(components_Emoji,{...args});defaultStory.storyName="Default",defaultStory.args={label:"well done",symbol:"👍 "},defaultStory.parameters={storySource:{source:"args => <Emoji {...args} />"},design:{disable:!0}};const commonlyUsed=()=>Object.entries(commonEmojis).map((([label,symbol])=>(0,jsx_runtime.jsx)(components_Emoji,{label,symbol,className:"mx-3"},symbol)));commonlyUsed.storyName="Commonly used",commonlyUsed.parameters={storySource:{source:'Object.entries(commonEmojis).map(([label, symbol]) => <Emoji key={symbol} label={label} symbol={symbol} className="mx-3" />)'},design:{disable:!0}};const componentMeta={title:"Components/Emoji",tags:["stories-mdx"],includeStories:["defaultStory","commonlyUsed"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Emoji_stories=componentMeta}}]);
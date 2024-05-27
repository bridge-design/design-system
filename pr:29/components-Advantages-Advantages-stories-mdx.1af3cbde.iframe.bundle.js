"use strict";(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[443],{"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_carbon_icons_react__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@carbon/icons-react/es/index.js")),classnames__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Icon=function Icon(_ref){var name=_ref.name,className=_ref.className,_ref$size=_ref.size,size=void 0===_ref$size?16:_ref$size,conditional=className||"bg-primary-50 text-primary-500",Icon=_carbon_icons_react__WEBPACK_IMPORTED_MODULE_5__[name];return Icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_3___default()("inline-flex p-4 rounded-[4px] max-w-min",conditional),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Icon,{className,size})}):null};Icon.displayName="Icon",Icon.propTypes={name:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{defaultValue:{value:"16",computed:!1},description:"",type:{name:"number"},required:!1},name:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Icon},"./src/components/ProfileCard/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Text/index.js"),_carbon_icons_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-9.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProfileCard=function ProfileCard(_ref){var photoUrl=_ref.photoUrl,name=_ref.name,role=_ref.role,description=_ref.description,twitter=_ref.twitter,linkedin=_ref.linkedin,github=_ref.github,reverse=_ref.reverse,isDescription=void 0!==description;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"flex items-start flex-col rounded-[4px] bg-light-on-background-200 lg:max-h-[342px] min-w-min lg:max-w-full overflow-hidden justify-between "+(reverse?"sm:flex-row-reverse":"sm:flex-row"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img",{src:photoUrl,alt:name,className:"rounded-l-[4px] max-w-[306px] object-contain"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"lg:min-h-[342px] flex flex-col justify-between w-full px-4 py-4 lg:px-10 lg:py-14",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"2XlMedium",className:"mb-2 text-2XlMedium font-2XlMedium tracking-2XlMedium leading-2XlMedium",children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"base",className:"mb-6",children:role}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"flex flex-col justify-between flex-1",children:[isDescription&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__.A,{variant:"base",className:"flex-1 mb-2",children:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"flex "+(isDescription?"justify-center":"justify-start lg:gap-[5%] ")+" gap-[10%] justify-self-end lg:justify-start",children:[twitter&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a",{href:twitter,className:"hover:color-light-on-background-800",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_7__.N4,{size:32})}),linkedin&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a",{href:linkedin,className:"hover:color-light-on-background-800",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_7__.C2,{size:32})}),github&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a",{href:github,className:"hover:color-light-on-background-800",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_7__.Px,{size:32})})]})]})]})]})};ProfileCard.displayName="ProfileCard",ProfileCard.propTypes={photoUrl:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,role:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,description:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,twitter:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,linkedin:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,github:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,reverse:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool},ProfileCard.__docgenInfo={description:"",methods:[],displayName:"ProfileCard",props:{photoUrl:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},role:{description:"",type:{name:"string"},required:!1},description:{description:"",type:{name:"string"},required:!1},twitter:{description:"",type:{name:"string"},required:!1},linkedin:{description:"",type:{name:"string"},required:!1},github:{description:"",type:{name:"string"},required:!1},reverse:{description:"",type:{name:"bool"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=ProfileCard},"./src/components/Advantages/Advantages.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CONTENT:()=>CONTENT,dark:()=>dark,default:()=>Advantages_stories,light:()=>light});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),ProfileCard=__webpack_require__("./src/components/ProfileCard/index.js"),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),Text=__webpack_require__("./src/components/Text/index.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Advantages=function Advantages(_ref){var colorSchema=_ref.colorSchema,content=_ref.content,colorTextClass="dark"===colorSchema?"py-11 px-10 gap-20 bg-light-on-background-900 text-light-on-background-50":"text-gray-900 gap-10",colorIconsClass="dark"===colorSchema?"bg-light-on-background-800":"bg-light-on-background-900";return(0,jsx_runtime.jsx)("div",{className:classnames_default()("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ",colorTextClass),children:content.map((function(it){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[(0,jsx_runtime.jsx)(Icon.A,{name:it.icon,className:classnames_default()(" text-light-on-background-50",colorIconsClass),size:32}),(0,jsx_runtime.jsx)(Text.A,{as:"span",variant:"2xl",className:"p-1 mt-6 mb-4 ",children:it.title}),(0,jsx_runtime.jsx)(Text.A,{as:"span",variant:"lg",className:"p-1 ",children:it.description})]},it.title)}))})};Advantages.displayName="Advantages",Advantages.propTypes={colorSchema:prop_types_default().string.isRequired,content:prop_types_default().array.isRequired},Advantages.__docgenInfo={description:"",methods:[],displayName:"Advantages",props:{colorSchema:{description:"",type:{name:"string"},required:!0},content:{description:"",type:{name:"array"},required:!0}}};const components_Advantages=Advantages,CONTENT=[{icon:"UserIdentification",title:"5× Faster",description:"Reusing the same design and development components and patterns from a design system library. allows all organizational teams to create, test, and launch products more quickly."},{icon:"Rocket",title:"Coherent",description:"Ensuring that your company's identity and the experience it provides for customers is consistent across the board for all of your digital products."},{icon:"UserIdentification",title:"7× Faster",description:"Reusing the same design and development components and patterns from a design system library. allows all organizational teams to create, test, and launch products more quickly."},{icon:"Rocket",title:"Consistent",description:"Ensuring that your company's identity and the experience it provides for customers is consistent across the board for all of your digital products."},{icon:"TreeView",title:"Scalability",description:"Maintain and scale your products more easily. The entire product line will be aligned, so each new release will work seamlessly with all previous versions and updates (and vice versa)"}];function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/Advantages"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"advantages",children:"Advantages"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Three columns with best advantages of design-system for teams and enterprises"}),"\n",(0,jsx_runtime.jsxs)(dist.Hl,{children:[(0,jsx_runtime.jsx)(dist.gG,{name:"Dark",children:(0,jsx_runtime.jsx)(components_Advantages,{colorSchema:"dark",content:CONTENT.slice(2)})}),(0,jsx_runtime.jsx)(dist.gG,{name:"Light",children:(0,jsx_runtime.jsx)(components_Advantages,{colorSchema:"light",content:CONTENT})})]}),"\n",(0,jsx_runtime.jsx)(dist.uY,{of:ProfileCard.A})]})}const dark=()=>(0,jsx_runtime.jsx)(components_Advantages,{colorSchema:"dark",content:CONTENT.slice(2)});dark.storyName="Dark",dark.parameters={storySource:{source:'<Advantages colorSchema="dark" content={CONTENT.slice(2)} />'}};const light=()=>(0,jsx_runtime.jsx)(components_Advantages,{colorSchema:"light",content:CONTENT});light.storyName="Light",light.parameters={storySource:{source:'<Advantages colorSchema="light" content={CONTENT} />'}};const componentMeta={title:"Components/Advantages",tags:["stories-mdx"],includeStories:["dark","light"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Advantages_stories=componentMeta}}]);
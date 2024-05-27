"use strict";(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[553],{"./src/components/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__),prop_types__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["href","label","children","size","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var sizes={small:"py-2 px-4 text-base text-baseBolder font-baseBolder tracking-baseBolder leading-baseBolder rounded-md",big:"py-4 px-6 text-2xl  text-xlBolder font-2xlBolder tracking-xlBolder leading-xlBolder rounded-xl"},Button=function Button(_ref){var href=_ref.href,label=_ref.label,children=_ref.children,size=_ref.size,className=_ref.className,props=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(_ref,_excluded),Component=href?"a":"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Component,_objectSpread(_objectSpread({href,className:classnames__WEBPACK_IMPORTED_MODULE_12___default()(size?sizes[size]:sizes.big,"bg-primary-200 text-light-background-900 inline-flex items-center hover:bg-light-background-50 transition duration-300 ease-in focus:ring-yellow-100 focus:ring-4 focus:ring-offset-1 rounded-xl px-5 py-2 text-xl font-xlBolder",className)},props),{},{children:label||children}))};Button.displayName="Button",Button.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_13___default().node,href:prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_13___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_13___default().string},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},href:{description:"",type:{name:"string"},required:!1},size:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Button},"./src/intro.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__,packageInfo:()=>packageInfo});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_components_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/index.js"),_components_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/index.js"),_carbon_icons_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-9.js"),_carbon_icons_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-1.js"),_carbon_icons_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@carbon/icons-react/es/generated/bucket-0.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const packageInfo=__webpack_require__("./package.json");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{title:"Intro"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"text-light-on-background-900 text-center mt-8 sb-unstyled",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.A,{variant:"7Xl",className:"my-8",children:"Bridge-the-Gap Design System"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.A,{variant:"3Xl",className:"text-gray-600 mb-4",children:"Design foundations and components library"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.A,{variant:"xl",className:"my-8",children:["Current library version: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__.A,{as:"span",variant:"xlMedium",children:packageInfo.version})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"flex flex-wrap flex-col md:flex-row justify-around items-center mt-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"big",as:"a",className:"m-2 text-left",href:"https://github.com/bridge-design/design-system",target:"_blank",rel:"noopener",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_6__.Px,{size:"32",className:"mr-4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Our Github"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"big",as:"a",className:"m-2 text-left",href:"https://www.npmjs.com/package/@bridge-the-gap/design-system",target:"_blank",rel:"noopener",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_7__.az,{size:"32",className:"mr-4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Library at NPM"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.A,{size:"big",as:"a",className:"m-2 text-left",href:"https:/bridge-the-gap.dev",target:"_blank",rel:"noopener",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_carbon_icons_react__WEBPACK_IMPORTED_MODULE_8__.Qp,{size:"32",className:"mr-4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Our Workshop"})]})]})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Intro",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./package.json":module=>{module.exports=JSON.parse('{"name":"@bridge-the-gap/design-system","version":"2.1.14","main":"dist/design-system.js","files":["dist/**"],"license":"MIT","scripts":{"start":"yarn tokens && storybook dev -p .storybook/public -p 6006","build":"webpack --mode=production","storybook:build":"yarn tokens && storybook build -o dist/storybook --loglevel verbose  --webpack-stats-json","storybook:deploy":"gh-pages -d storybook-static","add-component":"node .add-component/index.js","tokens":"style-dictionary build --config ./src/tokens/config.js","semantic-release":"semantic-release","chromatic":"npx chromatic --project-token=chpt_23472a6a790b122 --build-script-name=storybook:build"},"devDependencies":{"@babel/core":"7.22.8","@babel/preset-env":"7.22.7","@babel/preset-react":"7.22.5","@carbon/icons-react":"11.22.1","@semantic-release/changelog":"6.0.3","@semantic-release/git":"10.0.1","@storybook/addon-essentials":"7.0.26","@storybook/addon-postcss":"2.0.0","@storybook/blocks":"7.1.0","@storybook/react-webpack5":"7.1.0","@storybook/testing-library":"0.2.0","@storybook/theming":"7.0.26","@svgr/webpack":"8.0.1","autoprefixer":"10.4.14","babel-eslint":"10.1.0","babel-loader":"8.1.0","babel-plugin-module-resolver":"5.0.0","chromatic":"7.4.0","conventional-changelog-conventionalcommits":"7.0.2","copy-webpack-plugin":"11.0.0","css-loader":"6.8.1","eslint":"8.44.0","eslint-loader":"4.0.2","eslint-plugin-mdx":"2.1.0","eslint-plugin-react":"7.32.2","eslint-plugin-storybook":"0.6.12","file-loader":"6.2.0","gh-pages":"5.0.0","lodash":"4.17.21","mini-css-extract-plugin":"2.7.6","prettier":"3.0.0","react":"17","react-dom":"17","semantic-release":"22.0.12","storybook":"7.1.0","style-dictionary":"3.8.0","tailwindcss":"3.3.3","url-loader":"4.1.1","webpack":"5.88.1","webpack-cli":"5.1.4"},"dependencies":{"@babel/plugin-proposal-object-rest-spread":"7.20.7","@tailwindcss/typography":"0.5.9","chokidar":"3.5.3","classnames":"2.3.2","core-js":"3.31.1","fast-cartesian":"8.0.0","postcss":"8.4.27","prop-types":"15.5.7","swiper":"10.0.4","use-debounce":"9.0.4"},"peerDependencies":{"@tailwindcss/typography":"0.4.1","swiper":"6.7.5"},"repository":{"type":"git","url":"git+https://github.com/bridge-design/design-system.git"},"eslintConfig":{"extends":["plugin:storybook/recommended"]},"bugs":{"url":"https://github.com/bridge-design/design-system/issues"},"readme":"ERROR: No README data found!","homepage":"https://github.com/bridge-design/design-system#readme"}')}}]);
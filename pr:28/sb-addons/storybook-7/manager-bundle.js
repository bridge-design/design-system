try{
(()=>{var tt=__STORYBOOK_API__,{ActiveTabs:rt,Consumer:at,ManagerContext:nt,Provider:ot,addons:L,combineParameters:it,controlOrMetaKey:lt,controlOrMetaSymbol:st,eventMatchesShortcut:ft,eventToShortcut:pt,isMacLike:dt,isShortcutTaken:ut,keyToSymbol:mt,merge:ct,mockChannel:gt,optionOrAltSymbol:bt,shortcutMatchesShortcut:ht,shortcutToHumanString:xt,types:yt,useAddonState:vt,useArgTypes:wt,useArgs:Xt,useChannel:Ft,useGlobalTypes:Mt,useGlobals:St,useParameter:Ct,useSharedState:kt,useStoryPrepared:It,useStorybookApi:Pt,useStorybookState:Tt}=__STORYBOOK_API__;var $=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof window<"u"?e=window:typeof self<"u"?e=self:e={},e})();var Rt=__STORYBOOK_CLIENT_LOGGER__,{deprecate:zt,logger:Y,once:At,pretty:qt}=__STORYBOOK_CLIENT_LOGGER__;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(this,arguments)}function oe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},w(e,t)}function ie(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,w(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(e)}function le(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function se(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(e,t,r){return se()?S=Reflect.construct.bind():S=function(a,n,o){var i=[null];i.push.apply(i,n);var s=Function.bind.apply(a,i),f=new s;return o&&w(f,o.prototype),f},S.apply(null,arguments)}function R(e){var t=typeof Map=="function"?new Map:void 0;return R=function(r){if(r===null||!le(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return S(r,arguments,E(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),w(a,r)},R(e)}var fe={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function pe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],n=[],o;for(o=1;o<t.length;o+=1)n.push(t[o]);return n.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}var u=function(e){ie(t,e);function t(r){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a=e.call(this,pe.apply(void 0,[fe[r]].concat(o)))||this,oe(a)}return t}(R(Error));function O(e){return Math.round(e*255)}function de(e,t,r){return O(e)+","+O(t)+","+O(r)}function X(e,t,r,a){if(a===void 0&&(a=de),t===0)return a(r,r,r);var n=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(n%2-1)),s=0,f=0,d=0;n>=0&&n<1?(s=o,f=i):n>=1&&n<2?(s=i,f=o):n>=2&&n<3?(f=o,d=i):n>=3&&n<4?(f=i,d=o):n>=4&&n<5?(s=i,d=o):n>=5&&n<6&&(s=o,d=i);var x=r-o/2,y=s+x,m=f+x,_=d+x;return a(y,m,_)}var K={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ue(e){if(typeof e!="string")return e;var t=e.toLowerCase();return K[t]?"#"+K[t]:e}var me=/^#[a-fA-F0-9]{6}$/,ce=/^#[a-fA-F0-9]{8}$/,ge=/^#[a-fA-F0-9]{3}$/,be=/^#[a-fA-F0-9]{4}$/,j=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,he=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,xe=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,ye=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function P(e){if(typeof e!="string")throw new u(3);var t=ue(e);if(t.match(me))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(ce)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(ge))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(be)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var n=j.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=he.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=xe.exec(t);if(i){var s=parseInt(""+i[1],10),f=parseInt(""+i[2],10)/100,d=parseInt(""+i[3],10)/100,x="rgb("+X(s,f,d)+")",y=j.exec(x);if(!y)throw new u(4,t,x);return{red:parseInt(""+y[1],10),green:parseInt(""+y[2],10),blue:parseInt(""+y[3],10)}}var m=ye.exec(t.substring(0,50));if(m){var _=parseInt(""+m[1],10),ae=parseInt(""+m[2],10)/100,ne=parseInt(""+m[3],10)/100,G="rgb("+X(_,ae,ne)+")",M=j.exec(G);if(!M)throw new u(4,t,G);return{red:parseInt(""+M[1],10),green:parseInt(""+M[2],10),blue:parseInt(""+M[3],10),alpha:parseFloat(""+m[4])>1?parseFloat(""+m[4])/100:parseFloat(""+m[4])}}throw new u(5)}function ve(e){var t=e.red/255,r=e.green/255,a=e.blue/255,n=Math.max(t,r,a),o=Math.min(t,r,a),i=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var s,f=n-o,d=i>.5?f/(2-n-o):f/(n+o);switch(n){case t:s=(r-a)/f+(r<a?6:0);break;case r:s=(a-t)/f+2;break;default:s=(t-r)/f+4;break}return s*=60,e.alpha!==void 0?{hue:s,saturation:d,lightness:i,alpha:e.alpha}:{hue:s,saturation:d,lightness:i}}function Q(e){return ve(P(e))}var we=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},z=we;function h(e){var t=e.toString(16);return t.length===1?"0"+t:t}function H(e){return h(Math.round(e*255))}function Xe(e,t,r){return z("#"+H(e)+H(t)+H(r))}function k(e,t,r){return X(e,t,r,Xe)}function Fe(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return k(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return k(e.hue,e.saturation,e.lightness);throw new u(1)}function Me(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?k(e,t,r):"rgba("+X(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?k(e.hue,e.saturation,e.lightness):"rgba("+X(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new u(2)}function A(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return z("#"+h(e)+h(t)+h(r));if(typeof e=="object"&&t===void 0&&r===void 0)return z("#"+h(e.red)+h(e.green)+h(e.blue));throw new u(6)}function F(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var n=P(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?A(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?A(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new u(7)}var Se=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Ce=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},ke=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Ie=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function W(e){if(typeof e!="object")throw new u(8);if(Ce(e))return F(e);if(Se(e))return A(e);if(Ie(e))return Me(e);if(ke(e))return Fe(e);throw new u(8)}function J(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):J(e,t,a)}}function T(e){return J(e,e.length,[])}function B(e,t,r){return Math.max(e,Math.min(t,r))}function Pe(e,t){if(t==="transparent")return t;var r=Q(t);return W(v({},r,{lightness:B(0,1,r.lightness-parseFloat(e))}))}var Te=T(Pe),Be=Te;function _e(e,t){if(t==="transparent")return t;var r=Q(t);return W(v({},r,{lightness:B(0,1,r.lightness+parseFloat(e))}))}var Oe=T(_e),je=Oe;function He(e,t){if(t==="transparent")return t;var r=P(t),a=typeof r.alpha=="number"?r.alpha:1,n=v({},r,{alpha:B(0,1,(a*100+parseFloat(e)*100)/100)});return F(n)}var Zt=T(He);function Ne(e,t){if(t==="transparent")return t;var r=P(t),a=typeof r.alpha=="number"?r.alpha:1,n=v({},r,{alpha:B(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return F(n)}var De=T(Ne),Ee=De,l={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},U={app:"#F6F9FC",bar:l.lightest,content:l.lightest,preview:l.lightest,gridCellSize:10,hoverable:Ee(.9,l.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},I={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Re={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:U.app,appContentBg:l.lightest,appPreviewBg:l.lightest,appBorderColor:l.border,appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:l.darkest,textInverseColor:l.lightest,textMutedColor:l.dark,barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:l.lightest,buttonBg:U.app,buttonBorder:l.medium,booleanBg:l.mediumlight,booleanSelectedBg:l.lightest,inputBg:l.lightest,inputBorder:l.border,inputTextColor:l.darkest,inputBorderRadius:4},Z=Re,ze={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:l.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:l.lightest,inputBorderRadius:4},Ae=ze,{window:N}=$;var qe=e=>typeof e!="string"?(Y.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,Ge=e=>!/(gradient|var|calc)/.test(e),Le=(e,t)=>e==="darken"?F(`${Be(1,t)}`,.95):e==="lighten"?F(`${je(1,t)}`,.95):t,V=e=>t=>{if(!qe(t)||!Ge(t))return t;try{return Le(e,t)}catch{return t}},Qt=V("lighten"),Wt=V("darken"),$e=()=>!N||!N.matchMedia?"light":N.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",C={light:Z,dark:Ae,normal:Z},D=$e(),q=(e={base:D},t)=>{let r={...C[D],...C[e.base]||{},...e,base:C[e.base]?e.base:D};return{...t,...r,barSelectedColor:e.barSelectedColor||r.colorSecondary}};var ee="data:image/png;base64,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";var te={fontSize:{"9Xl":"128px","8Xl":"96px","7Xl":"72px","6Xl":"60px","5Xl":"48px","4Xl":"36px","3Xl":"30px","3XlBold":"30px","2Xl":"24px","2XlMedium":"24px",xl:"20px",xlMedium:"20px",lg:"18px",lgItalic:"18px",lgMedium:"18px",lgMediumItalic:"18px",base:"16px",baseMedium:"16px",sm:"14px",smMedium:"14px",xs:"12px",xsMedium:"12px"},textDecoration:{"9Xl":"none","8Xl":"none","7Xl":"none","6Xl":"none","5Xl":"none","4Xl":"none","3Xl":"none","3XlBold":"none","2Xl":"none","2XlMedium":"none",xl:"none",xlMedium:"none",lg:"none",lgItalic:"none",lgMedium:"none",lgMediumItalic:"none",base:"none",baseMedium:"none",sm:"none",smMedium:"none",xs:"none",xsMedium:"none"},fontFamily:{"9Xl":"Helvetica Now Display","8Xl":"Helvetica Now Display","7Xl":"Helvetica Now Display","6Xl":"Helvetica Now Display","5Xl":"Helvetica Now Display","4Xl":"Helvetica Now Display","3Xl":"Helvetica Now Display","3XlBold":"Helvetica Now Display","2Xl":"Helvetica Now Display","2XlMedium":"Helvetica Now Display",xl:"Helvetica Now Text",xlMedium:"Helvetica Now Text",lg:"Helvetica Now Text",lgItalic:"Helvetica Now Text",lgMedium:"Helvetica Now Text",lgMediumItalic:"Helvetica Now Text",base:"Helvetica Now Text",baseMedium:"Helvetica Now Text",sm:"Helvetica Now Text",smMedium:"Helvetica Now Text",xs:"Helvetica Now Text",xsMedium:"Helvetica Now Text"},fontWeight:{"9Xl":500,"8Xl":500,"7Xl":500,"6Xl":500,"5Xl":500,"4Xl":500,"3Xl":500,"3XlBold":700,"2Xl":400,"2XlMedium":500,xl:400,xlMedium:500,lg:400,lgItalic:400,lgMedium:500,lgMediumItalic:500,base:400,baseMedium:500,sm:400,smMedium:500,xs:400,xsMedium:500},fontStyle:{"9Xl":"normal","8Xl":"normal","7Xl":"normal","6Xl":"normal","5Xl":"normal","4Xl":"normal","3Xl":"normal","3XlBold":"normal","2Xl":"normal","2XlMedium":"normal",xl:"normal",xlMedium:"normal",lg:"normal",lgItalic:"italic",lgMedium:"normal",lgMediumItalic:"italic",base:"normal",baseMedium:"normal",sm:"normal",smMedium:"normal",xs:"normal",xsMedium:"normal"},fontStretch:{"9Xl":"normal","8Xl":"normal","7Xl":"normal","6Xl":"normal","5Xl":"normal","4Xl":"normal","3Xl":"normal","3XlBold":"normal","2Xl":"normal","2XlMedium":"normal",xl:"normal",xlMedium:"normal",lg:"normal",lgItalic:"normal",lgMedium:"normal",lgMediumItalic:"normal",base:"normal",baseMedium:"normal",sm:"normal",smMedium:"normal",xs:"normal",xsMedium:"normal"},letterSpacing:{"9Xl":"-0.04em","8Xl":"-0.02em","7Xl":"-0.01em","6Xl":"0em","5Xl":"0em","4Xl":"0em","3Xl":"0em","3XlBold":"0em","2Xl":"0em","2XlMedium":"0em",xl:"0em",xlMedium:"0em",lg:"0em",lgItalic:"0em",lgMedium:"0em",lgMediumItalic:"0em",base:"0em",baseMedium:"0em",sm:"0em",smMedium:"0em",xs:"0em",xsMedium:"0em"},lineHeight:{"9Xl":"128px","8Xl":"96px","7Xl":"72px","6Xl":"60px","5Xl":"48px","4Xl":"45px","3Xl":"37.5px","3XlBold":"37.5px","2Xl":"34.8px","2XlMedium":"34.8px",xl:"32px",xlMedium:"32px",lg:"32px",lgItalic:"32px",lgMedium:"32px",lgMediumItalic:"32px",base:"24px",baseMedium:"24px",sm:"18px",smMedium:"18px",xs:"16px",xsMedium:"16px"},paragraphIndent:{"9Xl":"0px","8Xl":"0px","7Xl":"0px","6Xl":"0px","5Xl":"0px","4Xl":"0px","3Xl":"0px","3XlBold":"0px","2Xl":"0px","2XlMedium":"0px",xl:"0px",xlMedium:"0px",lg:"0px",lgItalic:"0px",lgMedium:"0px",lgMediumItalic:"0px",base:"0px",baseMedium:"0px",sm:"0px",smMedium:"0px",xs:"0px",xsMedium:"0px"},paragraphSpacing:{"9Xl":"0px","8Xl":"0px","7Xl":"0px","6Xl":"0px","5Xl":"0px","4Xl":"0px","3Xl":"0px","3XlBold":"0px","2Xl":"0px","2XlMedium":"0px",xl:"0px",xlMedium:"0px",lg:"0px",lgItalic:"0px",lgMedium:"0px",lgMediumItalic:"0px",base:"0px",baseMedium:"0px",sm:"0px",smMedium:"0px",xs:"0px",xsMedium:"0px"},textCase:{"9Xl":"none","8Xl":"none","7Xl":"none","6Xl":"none","5Xl":"none","4Xl":"none","3Xl":"none","3XlBold":"none","2Xl":"none","2XlMedium":"none",xl:"none",xlMedium:"none",lg:"none",lgItalic:"none",lgMedium:"none",lgMediumItalic:"none",base:"none",baseMedium:"none",sm:"none",smMedium:"none",xs:"none",xsMedium:"none"}};var p={primary:{"50":"#f7f8ffff","100":"#d1d3ffff","200":"#abadffff","300":"#8485ffff","400":"#5f5effff","500":"#3c37ffff","600":"#322ddfff","700":"#2824bfff","800":"#1f1c9fff","900":"#171580ff"},light:{"on-background":{"50":"#ffffffff","100":"#fafafaff","200":"#f2f2f2ff","300":"#e6e6e6ff","400":"#d9d9d9ff","500":"#7c7c7cff","600":"#626262ff","700":"#474747ff","800":"#2d2d2dff","900":"#131313ff"},background:{"50":"#131313ff","100":"#2d2d2dff","200":"#474747ff","300":"#626262ff","400":"#7c7c7cff","500":"#d9d9d9ff","600":"#e6e6e6ff","700":"#f2f2f2ff","800":"#fafafaff","900":"#ffffffff"}},gray:{"50":"#f9fafbff","100":"#f3f4f6ff","200":"#e5e7ebff","300":"#d1d5dbff","400":"#9ca3afff","500":"#6b7280ff","600":"#4b5563ff","700":"#374151ff","800":"#1f2937ff","900":"#111827ff"},dark:{background:{"50":"#ffffffff","100":"#e6e7e6ff","200":"#ccceceff","300":"#b3b6b5ff","400":"#9a9d9cff","500":"#676c6bff","600":"#4e5352ff","700":"#343b3aff","800":"#343b3aff","900":"#1b2221ff"},"on-background":{"50":"#1a1f21ff","100":"#343b3aff","200":"#343b3aff","300":"#4e5352ff","400":"#676c6bff","500":"#9a9d9cff","600":"#b3b6b5ff","700":"#ccceceff","800":"#e6e7e6ff","900":"#ffffffff"}}};var re=q({base:"light",colorPrimary:p.primary[700],colorSecondary:p.primary[400],appBg:p.light.background[900],appContentBg:p.light.background[900],appBorderColor:p.light.background[700],fontBase:te.fontFamily.base,textColor:p.light["on-background"][900],textInverseColor:p.light.background[900],barTextColor:p.light["on-background"][900],barSelectedColor:p.primary[500],barBg:p.light.background[900],inputBg:p.light.background[900],inputBorder:p.gray[200],inputTextColor:p.light["on-background"][900],brandTitle:"Bridge-the-Gap Design System",brandUrl:"https://bridge-the-gap.dev",brandImage:ee});L.setConfig({theme:re});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }

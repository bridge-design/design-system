"use strict";(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[45],{"./node_modules/core-js/internals/a-callable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),tryToString=__webpack_require__("./node_modules/core-js/internals/try-to-string.js"),$TypeError=TypeError;module.exports=function(argument){if(isCallable(argument))return argument;throw $TypeError(tryToString(argument)+" is not a function")}},"./node_modules/core-js/internals/an-object.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),$String=String,$TypeError=TypeError;module.exports=function(argument){if(isObject(argument))return argument;throw $TypeError($String(argument)+" is not an object")}},"./node_modules/core-js/internals/create-non-enumerable-property.js":(module,__unused_webpack_exports,__webpack_require__)=>{var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),definePropertyModule=__webpack_require__("./node_modules/core-js/internals/object-define-property.js"),createPropertyDescriptor=__webpack_require__("./node_modules/core-js/internals/create-property-descriptor.js");module.exports=DESCRIPTORS?function(object,key,value){return definePropertyModule.f(object,key,createPropertyDescriptor(1,value))}:function(object,key,value){return object[key]=value,object}},"./node_modules/core-js/internals/create-property-descriptor.js":module=>{module.exports=function(bitmap,value){return{enumerable:!(1&bitmap),configurable:!(2&bitmap),writable:!(4&bitmap),value}}},"./node_modules/core-js/internals/define-built-in-accessor.js":(module,__unused_webpack_exports,__webpack_require__)=>{var makeBuiltIn=__webpack_require__("./node_modules/core-js/internals/make-built-in.js"),defineProperty=__webpack_require__("./node_modules/core-js/internals/object-define-property.js");module.exports=function(target,name,descriptor){return descriptor.get&&makeBuiltIn(descriptor.get,name,{getter:!0}),descriptor.set&&makeBuiltIn(descriptor.set,name,{setter:!0}),defineProperty.f(target,name,descriptor)}},"./node_modules/core-js/internals/define-global-property.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("./node_modules/core-js/internals/global.js"),defineProperty=Object.defineProperty;module.exports=function(key,value){try{defineProperty(global,key,{value,configurable:!0,writable:!0})}catch(error){global[key]=value}return value}},"./node_modules/core-js/internals/descriptors.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=!fails((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"./node_modules/core-js/internals/document-all.js":module=>{var documentAll="object"==typeof document&&document.all,IS_HTMLDDA=void 0===documentAll&&void 0!==documentAll;module.exports={all:documentAll,IS_HTMLDDA}},"./node_modules/core-js/internals/document-create-element.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("./node_modules/core-js/internals/global.js"),isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),document=global.document,EXISTS=isObject(document)&&isObject(document.createElement);module.exports=function(it){return EXISTS?document.createElement(it):{}}},"./node_modules/core-js/internals/engine-user-agent.js":module=>{module.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},"./node_modules/core-js/internals/engine-v8-version.js":(module,__unused_webpack_exports,__webpack_require__)=>{var match,version,global=__webpack_require__("./node_modules/core-js/internals/global.js"),userAgent=__webpack_require__("./node_modules/core-js/internals/engine-user-agent.js"),process=global.process,Deno=global.Deno,versions=process&&process.versions||Deno&&Deno.version,v8=versions&&versions.v8;v8&&(version=(match=v8.split("."))[0]>0&&match[0]<4?1:+(match[0]+match[1])),!version&&userAgent&&(!(match=userAgent.match(/Edge\/(\d+)/))||match[1]>=74)&&(match=userAgent.match(/Chrome\/(\d+)/))&&(version=+match[1]),module.exports=version},"./node_modules/core-js/internals/fails.js":module=>{module.exports=function(exec){try{return!!exec()}catch(error){return!0}}},"./node_modules/core-js/internals/function-bind-native.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=!fails((function(){var test=function(){}.bind();return"function"!=typeof test||test.hasOwnProperty("prototype")}))},"./node_modules/core-js/internals/function-call.js":(module,__unused_webpack_exports,__webpack_require__)=>{var NATIVE_BIND=__webpack_require__("./node_modules/core-js/internals/function-bind-native.js"),call=Function.prototype.call;module.exports=NATIVE_BIND?call.bind(call):function(){return call.apply(call,arguments)}},"./node_modules/core-js/internals/function-name.js":(module,__unused_webpack_exports,__webpack_require__)=>{var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),FunctionPrototype=Function.prototype,getDescriptor=DESCRIPTORS&&Object.getOwnPropertyDescriptor,EXISTS=hasOwn(FunctionPrototype,"name"),PROPER=EXISTS&&"something"===function something(){}.name,CONFIGURABLE=EXISTS&&(!DESCRIPTORS||DESCRIPTORS&&getDescriptor(FunctionPrototype,"name").configurable);module.exports={EXISTS,PROPER,CONFIGURABLE}},"./node_modules/core-js/internals/function-uncurry-this.js":(module,__unused_webpack_exports,__webpack_require__)=>{var NATIVE_BIND=__webpack_require__("./node_modules/core-js/internals/function-bind-native.js"),FunctionPrototype=Function.prototype,call=FunctionPrototype.call,uncurryThisWithBind=NATIVE_BIND&&FunctionPrototype.bind.bind(call,call);module.exports=NATIVE_BIND?uncurryThisWithBind:function(fn){return function(){return call.apply(fn,arguments)}}},"./node_modules/core-js/internals/get-built-in.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("./node_modules/core-js/internals/global.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js");module.exports=function(namespace,method){return arguments.length<2?(argument=global[namespace],isCallable(argument)?argument:void 0):global[namespace]&&global[namespace][method];var argument}},"./node_modules/core-js/internals/get-method.js":(module,__unused_webpack_exports,__webpack_require__)=>{var aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),isNullOrUndefined=__webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js");module.exports=function(V,P){var func=V[P];return isNullOrUndefined(func)?void 0:aCallable(func)}},"./node_modules/core-js/internals/global.js":function(module,__unused_webpack_exports,__webpack_require__){var check=function(it){return it&&it.Math==Math&&it};module.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof __webpack_require__.g&&__webpack_require__.g)||function(){return this}()||this||Function("return this")()},"./node_modules/core-js/internals/has-own-property.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),hasOwnProperty=uncurryThis({}.hasOwnProperty);module.exports=Object.hasOwn||function hasOwn(it,key){return hasOwnProperty(toObject(it),key)}},"./node_modules/core-js/internals/hidden-keys.js":module=>{module.exports={}},"./node_modules/core-js/internals/ie8-dom-define.js":(module,__unused_webpack_exports,__webpack_require__)=>{var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),createElement=__webpack_require__("./node_modules/core-js/internals/document-create-element.js");module.exports=!DESCRIPTORS&&!fails((function(){return 7!=Object.defineProperty(createElement("div"),"a",{get:function(){return 7}}).a}))},"./node_modules/core-js/internals/inspect-source.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),store=__webpack_require__("./node_modules/core-js/internals/shared-store.js"),functionToString=uncurryThis(Function.toString);isCallable(store.inspectSource)||(store.inspectSource=function(it){return functionToString(it)}),module.exports=store.inspectSource},"./node_modules/core-js/internals/internal-state.js":(module,__unused_webpack_exports,__webpack_require__)=>{var set,get,has,NATIVE_WEAK_MAP=__webpack_require__("./node_modules/core-js/internals/weak-map-basic-detection.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),createNonEnumerableProperty=__webpack_require__("./node_modules/core-js/internals/create-non-enumerable-property.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),shared=__webpack_require__("./node_modules/core-js/internals/shared-store.js"),sharedKey=__webpack_require__("./node_modules/core-js/internals/shared-key.js"),hiddenKeys=__webpack_require__("./node_modules/core-js/internals/hidden-keys.js"),TypeError=global.TypeError,WeakMap=global.WeakMap;if(NATIVE_WEAK_MAP||shared.state){var store=shared.state||(shared.state=new WeakMap);store.get=store.get,store.has=store.has,store.set=store.set,set=function(it,metadata){if(store.has(it))throw TypeError("Object already initialized");return metadata.facade=it,store.set(it,metadata),metadata},get=function(it){return store.get(it)||{}},has=function(it){return store.has(it)}}else{var STATE=sharedKey("state");hiddenKeys[STATE]=!0,set=function(it,metadata){if(hasOwn(it,STATE))throw TypeError("Object already initialized");return metadata.facade=it,createNonEnumerableProperty(it,STATE,metadata),metadata},get=function(it){return hasOwn(it,STATE)?it[STATE]:{}},has=function(it){return hasOwn(it,STATE)}}module.exports={set,get,has,enforce:function(it){return has(it)?get(it):set(it,{})},getterFor:function(TYPE){return function(it){var state;if(!isObject(it)||(state=get(it)).type!==TYPE)throw TypeError("Incompatible receiver, "+TYPE+" required");return state}}}},"./node_modules/core-js/internals/is-callable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var $documentAll=__webpack_require__("./node_modules/core-js/internals/document-all.js"),documentAll=$documentAll.all;module.exports=$documentAll.IS_HTMLDDA?function(argument){return"function"==typeof argument||argument===documentAll}:function(argument){return"function"==typeof argument}},"./node_modules/core-js/internals/is-null-or-undefined.js":module=>{module.exports=function(it){return null==it}},"./node_modules/core-js/internals/is-object.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),$documentAll=__webpack_require__("./node_modules/core-js/internals/document-all.js"),documentAll=$documentAll.all;module.exports=$documentAll.IS_HTMLDDA?function(it){return"object"==typeof it?null!==it:isCallable(it)||it===documentAll}:function(it){return"object"==typeof it?null!==it:isCallable(it)}},"./node_modules/core-js/internals/is-pure.js":module=>{module.exports=!1},"./node_modules/core-js/internals/is-symbol.js":(module,__unused_webpack_exports,__webpack_require__)=>{var getBuiltIn=__webpack_require__("./node_modules/core-js/internals/get-built-in.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),isPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-is-prototype-of.js"),USE_SYMBOL_AS_UID=__webpack_require__("./node_modules/core-js/internals/use-symbol-as-uid.js"),$Object=Object;module.exports=USE_SYMBOL_AS_UID?function(it){return"symbol"==typeof it}:function(it){var $Symbol=getBuiltIn("Symbol");return isCallable($Symbol)&&isPrototypeOf($Symbol.prototype,$Object(it))}},"./node_modules/core-js/internals/make-built-in.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),CONFIGURABLE_FUNCTION_NAME=__webpack_require__("./node_modules/core-js/internals/function-name.js").CONFIGURABLE,inspectSource=__webpack_require__("./node_modules/core-js/internals/inspect-source.js"),InternalStateModule=__webpack_require__("./node_modules/core-js/internals/internal-state.js"),enforceInternalState=InternalStateModule.enforce,getInternalState=InternalStateModule.get,$String=String,defineProperty=Object.defineProperty,stringSlice=uncurryThis("".slice),replace=uncurryThis("".replace),join=uncurryThis([].join),CONFIGURABLE_LENGTH=DESCRIPTORS&&!fails((function(){return 8!==defineProperty((function(){}),"length",{value:8}).length})),TEMPLATE=String(String).split("String"),makeBuiltIn=module.exports=function(value,name,options){"Symbol("===stringSlice($String(name),0,7)&&(name="["+replace($String(name),/^Symbol\(([^)]*)\)/,"$1")+"]"),options&&options.getter&&(name="get "+name),options&&options.setter&&(name="set "+name),(!hasOwn(value,"name")||CONFIGURABLE_FUNCTION_NAME&&value.name!==name)&&(DESCRIPTORS?defineProperty(value,"name",{value:name,configurable:!0}):value.name=name),CONFIGURABLE_LENGTH&&options&&hasOwn(options,"arity")&&value.length!==options.arity&&defineProperty(value,"length",{value:options.arity});try{options&&hasOwn(options,"constructor")&&options.constructor?DESCRIPTORS&&defineProperty(value,"prototype",{writable:!1}):value.prototype&&(value.prototype=void 0)}catch(error){}var state=enforceInternalState(value);return hasOwn(state,"source")||(state.source=join(TEMPLATE,"string"==typeof name?name:"")),value};Function.prototype.toString=makeBuiltIn((function toString(){return isCallable(this)&&getInternalState(this).source||inspectSource(this)}),"toString")},"./node_modules/core-js/internals/object-define-property.js":(__unused_webpack_module,exports,__webpack_require__)=>{var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),IE8_DOM_DEFINE=__webpack_require__("./node_modules/core-js/internals/ie8-dom-define.js"),V8_PROTOTYPE_DEFINE_BUG=__webpack_require__("./node_modules/core-js/internals/v8-prototype-define-bug.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),toPropertyKey=__webpack_require__("./node_modules/core-js/internals/to-property-key.js"),$TypeError=TypeError,$defineProperty=Object.defineProperty,$getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;exports.f=DESCRIPTORS?V8_PROTOTYPE_DEFINE_BUG?function defineProperty(O,P,Attributes){if(anObject(O),P=toPropertyKey(P),anObject(Attributes),"function"==typeof O&&"prototype"===P&&"value"in Attributes&&"writable"in Attributes&&!Attributes.writable){var current=$getOwnPropertyDescriptor(O,P);current&&current.writable&&(O[P]=Attributes.value,Attributes={configurable:"configurable"in Attributes?Attributes.configurable:current.configurable,enumerable:"enumerable"in Attributes?Attributes.enumerable:current.enumerable,writable:!1})}return $defineProperty(O,P,Attributes)}:$defineProperty:function defineProperty(O,P,Attributes){if(anObject(O),P=toPropertyKey(P),anObject(Attributes),IE8_DOM_DEFINE)try{return $defineProperty(O,P,Attributes)}catch(error){}if("get"in Attributes||"set"in Attributes)throw $TypeError("Accessors not supported");return"value"in Attributes&&(O[P]=Attributes.value),O}},"./node_modules/core-js/internals/object-is-prototype-of.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js");module.exports=uncurryThis({}.isPrototypeOf)},"./node_modules/core-js/internals/ordinary-to-primitive.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),$TypeError=TypeError;module.exports=function(input,pref){var fn,val;if("string"===pref&&isCallable(fn=input.toString)&&!isObject(val=call(fn,input)))return val;if(isCallable(fn=input.valueOf)&&!isObject(val=call(fn,input)))return val;if("string"!==pref&&isCallable(fn=input.toString)&&!isObject(val=call(fn,input)))return val;throw $TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/require-object-coercible.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isNullOrUndefined=__webpack_require__("./node_modules/core-js/internals/is-null-or-undefined.js"),$TypeError=TypeError;module.exports=function(it){if(isNullOrUndefined(it))throw $TypeError("Can't call method on "+it);return it}},"./node_modules/core-js/internals/shared-key.js":(module,__unused_webpack_exports,__webpack_require__)=>{var shared=__webpack_require__("./node_modules/core-js/internals/shared.js"),uid=__webpack_require__("./node_modules/core-js/internals/uid.js"),keys=shared("keys");module.exports=function(key){return keys[key]||(keys[key]=uid(key))}},"./node_modules/core-js/internals/shared-store.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("./node_modules/core-js/internals/global.js"),defineGlobalProperty=__webpack_require__("./node_modules/core-js/internals/define-global-property.js"),store=global["__core-js_shared__"]||defineGlobalProperty("__core-js_shared__",{});module.exports=store},"./node_modules/core-js/internals/shared.js":(module,__unused_webpack_exports,__webpack_require__)=>{var IS_PURE=__webpack_require__("./node_modules/core-js/internals/is-pure.js"),store=__webpack_require__("./node_modules/core-js/internals/shared-store.js");(module.exports=function(key,value){return store[key]||(store[key]=void 0!==value?value:{})})("versions",[]).push({version:"3.32.0",mode:IS_PURE?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"})},"./node_modules/core-js/internals/symbol-constructor-detection.js":(module,__unused_webpack_exports,__webpack_require__)=>{var V8_VERSION=__webpack_require__("./node_modules/core-js/internals/engine-v8-version.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),$String=__webpack_require__("./node_modules/core-js/internals/global.js").String;module.exports=!!Object.getOwnPropertySymbols&&!fails((function(){var symbol=Symbol();return!$String(symbol)||!(Object(symbol)instanceof Symbol)||!Symbol.sham&&V8_VERSION&&V8_VERSION<41}))},"./node_modules/core-js/internals/to-object.js":(module,__unused_webpack_exports,__webpack_require__)=>{var requireObjectCoercible=__webpack_require__("./node_modules/core-js/internals/require-object-coercible.js"),$Object=Object;module.exports=function(argument){return $Object(requireObjectCoercible(argument))}},"./node_modules/core-js/internals/to-primitive.js":(module,__unused_webpack_exports,__webpack_require__)=>{var call=__webpack_require__("./node_modules/core-js/internals/function-call.js"),isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),isSymbol=__webpack_require__("./node_modules/core-js/internals/is-symbol.js"),getMethod=__webpack_require__("./node_modules/core-js/internals/get-method.js"),ordinaryToPrimitive=__webpack_require__("./node_modules/core-js/internals/ordinary-to-primitive.js"),wellKnownSymbol=__webpack_require__("./node_modules/core-js/internals/well-known-symbol.js"),$TypeError=TypeError,TO_PRIMITIVE=wellKnownSymbol("toPrimitive");module.exports=function(input,pref){if(!isObject(input)||isSymbol(input))return input;var result,exoticToPrim=getMethod(input,TO_PRIMITIVE);if(exoticToPrim){if(void 0===pref&&(pref="default"),result=call(exoticToPrim,input,pref),!isObject(result)||isSymbol(result))return result;throw $TypeError("Can't convert object to primitive value")}return void 0===pref&&(pref="number"),ordinaryToPrimitive(input,pref)}},"./node_modules/core-js/internals/to-property-key.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toPrimitive=__webpack_require__("./node_modules/core-js/internals/to-primitive.js"),isSymbol=__webpack_require__("./node_modules/core-js/internals/is-symbol.js");module.exports=function(argument){var key=toPrimitive(argument,"string");return isSymbol(key)?key:key+""}},"./node_modules/core-js/internals/try-to-string.js":module=>{var $String=String;module.exports=function(argument){try{return $String(argument)}catch(error){return"Object"}}},"./node_modules/core-js/internals/uid.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),id=0,postfix=Math.random(),toString=uncurryThis(1..toString);module.exports=function(key){return"Symbol("+(void 0===key?"":key)+")_"+toString(++id+postfix,36)}},"./node_modules/core-js/internals/use-symbol-as-uid.js":(module,__unused_webpack_exports,__webpack_require__)=>{var NATIVE_SYMBOL=__webpack_require__("./node_modules/core-js/internals/symbol-constructor-detection.js");module.exports=NATIVE_SYMBOL&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"./node_modules/core-js/internals/v8-prototype-define-bug.js":(module,__unused_webpack_exports,__webpack_require__)=>{var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js");module.exports=DESCRIPTORS&&fails((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},"./node_modules/core-js/internals/weak-map-basic-detection.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("./node_modules/core-js/internals/global.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),WeakMap=global.WeakMap;module.exports=isCallable(WeakMap)&&/native code/.test(String(WeakMap))},"./node_modules/core-js/internals/well-known-symbol.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("./node_modules/core-js/internals/global.js"),shared=__webpack_require__("./node_modules/core-js/internals/shared.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),uid=__webpack_require__("./node_modules/core-js/internals/uid.js"),NATIVE_SYMBOL=__webpack_require__("./node_modules/core-js/internals/symbol-constructor-detection.js"),USE_SYMBOL_AS_UID=__webpack_require__("./node_modules/core-js/internals/use-symbol-as-uid.js"),Symbol=global.Symbol,WellKnownSymbolsStore=shared("wks"),createWellKnownSymbol=USE_SYMBOL_AS_UID?Symbol.for||Symbol:Symbol&&Symbol.withoutSetter||uid;module.exports=function(name){return hasOwn(WellKnownSymbolsStore,name)||(WellKnownSymbolsStore[name]=NATIVE_SYMBOL&&hasOwn(Symbol,name)?Symbol[name]:createWellKnownSymbol("Symbol."+name)),WellKnownSymbolsStore[name]}}}]);
var zn={VERSION:"0.0.1",DEBUG:!1,GLOBAL:function(){return this}.call(null)};"undefined"!=typeof module&&module.exports&&(module.exports=zn),zn.GLOBAL.zn=zn,function(a){var b=Object.prototype.toString,c={idle:function(){},idleArray:function(){return[]},idleObject:function(){return{}},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)}).toUpperCase()},fix:function(a){for(var b=a||{},c=1,d=arguments.length;d>c;c++){var e=arguments[c];for(var f in e)e.hasOwnProperty(f)&&"function"!=typeof b[f]&&(b[f]=e[f])}return b},extend:function(a){for(var b=a||{},c=1,d=arguments.length;d>c;c++){var e=arguments[c];for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b},overwrite:function(a){for(var b=a||{},c=1,d=arguments.length;d>c;c++){var e=arguments[c];for(var f in e)e.hasOwnProperty(f)&&void 0===b[f]&&(b[f]=e[f])}return b},path:function(a,b,c){var d=a||{};if(b){var e,f=b.split("."),g=f.length,h=0;if(arguments.length<3)for(;d&&g>h;h++)e=f[h],d=d.__get__?d.__get__(e):d[e];else{for(g-=1;d&&g>h;h++)e=f[h],d=d.__get__?d.__get__(e):d[e]=d[e]||{};e=f[h],d&&(d.__set__?d.__set__(e,c):d[e]=c,d=c)}}return d},invoke:function(b,c,d){if(b&&c){var e,f,g=c.lastIndexOf(".");g>0?(e=a.path(b,c.substring(0,g)),e&&(f=e[c.substring(g+1)])):(e=b,f=b[c]),f&&f.apply(e,d)}}},d={toString:function(a){return a&&a.toString?a.toString():b.call(a)},each:function(a,c,d){if(a&&c)if(a.__each__)a.__each__(c,d);else{var e=a.length,f=null;if(e>0&&"[object Array]"===b.call(a)){for(var g=0;e>g;g++)if(f=c.call(d,a[g],g),f===!1)return!1}else for(var h in a)if(a.hasOwnProperty(h)){if(f=c.call(d,a[h],h),f===!1)return!1;if(-1===f)continue}}},clone:function(b){if(b){if(b.__clone__)return b.__clone__();if(a.is(b,"array"))return b.slice(0);var c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c}return b},type:function(a){return a&&a.__type__?a.__type__:b.call(a).slice(8,-1).toLowerCase()},is:function(a,b){if(a&&a.__is__)return a.__is__(b);if("string"==typeof b)switch(b.toLowerCase()){case"plain":return a&&a.constructor===Object;default:return this.type(a)===b}else if("function"==typeof b)return a instanceof b},may:function(a,b){return a?a.__may__?a.__may__(b):a.hasOwnProperty("on"+b):!1},can:function(a,b){return a?a.__can__?a.__can__(b):"function"==typeof a[b]:!1},has:function(a,b){return a?a.__has__?a.__has__(b):a.hasOwnProperty(b):!1},get:function(a,b){return a?a.__get__?a.__get__(b):a[b]:void 0},set:function(a,b,c){a&&(a.__set__?a.__set__(b,c):a[b]=c)},gets:function(a){if(a){if(a.__gets__)return a.__gets__();var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}},sets:function(a,b){if(a&&b)if(a.__sets__)a.__sets__(b);else for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}};c.extend(a,c),c.extend(a,d)}(zn),function(a){var b=Array.prototype.slice,c=Object.prototype.hasOwnProperty,d=Object.prototype.toString,e={isArray:function(b){return b&&"[object Array]"===a.toString(b)&&b.constructor===Array}},f={forEach:function(a,b){if(!a)return!1;for(var c=0,d=this.length;d>c;c++)a.call(b,this[c],c);return this},toJSON:function(){for(var a={},b=0,c=this.length;c>b;b++)a[b]=this[b];return a},indexOf:function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},lastIndexOf:function(a){for(var b=this.length-1;b>=0;b--)if(this[b]===a)return b;return-1}},g={bind:function(a){var c=this;return function(){return c.apply(a,b.call(arguments,1))}}},h={toArray:function(a){return b.call(a)},keys:function(a){if(a!==Object(a))throw new TypeError("Object.keys called on a non-object");var b,d=[];for(b in a)c.call(a,b)&&d.push(b);return d},values:function(a){if(a!==Object(a))throw new TypeError("Object.keys called on a non-object");var b,d=[];for(b in a)c.call(a,b)&&d.push(a[b]);return d},create:function(){var b=function(){};return function(c,d){if(null===c)throw new Error("Cannot set a null [[Prototype]]");if("object"!=typeof c)throw new TypeError("Argument must be an object");return a.each(d,function(a,b){h.defineProperty(c,a,b)}),b.prototype=c,new b}}(),defineProperty:function(a,b,c){return a&&b&&c&&c.hasOwnProperty("value")&&(a[b]=c.value),a}},i={parse:function(){return""},stringify:function(){var a=d,b=Array.isArray,c={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},e=function(a){return c[a]||"\\u"+(a.charCodeAt(0)+65536).toString(16).substr(1)},f=/[\\"\u0000-\u001F\u2028\u2029]/g;return function g(c){if(null==c)return"null";if("number"==typeof c)return isFinite(c)?c.toString():"null";if("boolean"==typeof c)return c.toString();if("object"==typeof c){var d;if("function"==typeof c.toJSON)return g(c.toJSON());if(b(c)){d="[";for(var h=0;h<c.length;h++)d+=(h?", ":"")+g(c[h]);return d+"]"}if("[object Object]"===a.call(c)){d=[];for(var i in c)c.hasOwnProperty(i)&&d.push(g(i)+": "+g(c[i]));return"{"+d.join(", ")+"}"}}return'"'+c.toString().replace(f,e)+'"'}}()};a.fix(Array,e),a.fix(Array.prototype,f),a.fix(Function.prototype,g),a.fix(a.GLOBAL.JSON,i);try{Object.defineProperty({},"zn",{})}catch(j){Object.defineProperty=function(a,b,c){return h.defineProperty(a,b,c)}}}(zn),function(a){function b(){}function c(){var c,e,f,h=l._arguments.apply(this,arguments),i=h.name,j=h.super,k=h.meta;if(j._static_)throw new Error("Static class cannot be inherited.");if(j._final_)throw new Error("Final class cannot be inherited.");if(i&&k.partial&&(c=a.path(d,i)),k.static){if(c){if(!c._static_)throw new Error('Partial class "'+i+'" must be static.')}else c=function(){throw new Error("Cannot instantiate static class.")};f=c.prototype}else{if(c){if(c._static_)throw new Error('Partial class "'+i+'" must not be static.');if(c._super_!==j&&c._super_!==b)throw new Error('Partial class "'+i+'" must have consistent super class.')}else c=k.abstract?function(){throw new Error("Cannot instantiate abstract class.")}:function(){var a=c._mixins_||[];this.__id__=g++,this.__handlers__={},this.__initializing__=!0;for(var d=0,e=a.length;e>d;d++){var f=a[d].prototype.__ctor__;f&&f.call(this)}this.__ctor__&&this.__ctor__.apply(this,arguments),function(a,c){if(a&&a!==b){var d=a.member("init");d&&d.meta.auto&&d.meta.value.apply(c,arguments),arguments.callee(a._super,c)}}(this.__super__,this),this.__initializing__=!1};c._super_!==j?(e=function(){},e.prototype=j.prototype,f=new e,f.constructor=c,f.__type__=i||"Anonymous",f.__super__=j,c.prototype=f):f=c.prototype,k.methods.init&&(f.__ctor__=k.methods.init)}return l._meta(c,h),f.__define__&&f.__define__.call(c),i&&a.path(d,i,c),c}var d=a.GLOBAL,e="@",f=1,g=1,h={fixTargetCtor:function(a){return a instanceof b?a.constructor:a},fixTargetKey:function(a){return e+a},defineEvent:function(a,b,c){var d=h.fixTargetCtor(a),e=h.fixTargetKey(b),f=e in d,g={};return f||(g=Object.defineProperty(a,"on"+b.toLowerCase(),{get:function(){var a=this.__handlers__[b];return a?a[0].handler:null},set:function(a){var c=this.__handlers__,d=c[b]=c[b]||[];d[0]={owner:this,handler:a,context:null}}})),d[e]={name:b,type:"event",meta:c,descriptor:g},f},defineProperty:function(b,c,d){var e,f,g=h.fixTargetCtor(b),i=h.fixTargetKey(c),j=i in g,k={};if("value"in d){var l=d.value,m="_"+c,n=d.get,o=d.set;e=n||function(){return m in this?this[m]:a.is(l,"function")?l.call(this):l},f=d.readonly?function(a,b){return b&&b.force?void(this[m]=a):!1}:o||function(a){this[m]=a}}else e=d.get||function(){return void 0},f=d.set||function(){return!1};return j&&(e.__super__=g[i].getter,f.__super__=g[i].setter),k=Object.defineProperty(b,c,{get:e,set:f,configurable:!0}),g[i]={name:c,type:"property",meta:d,getter:e,setter:f,descriptor:k},j},defineMethod:function(a,b,c){var d=h.fixTargetCtor(a),e=h.fixTargetKey(b),f=e in d;return d[e]={name:b,type:"method",meta:c},b in a&&(c.value.__super__=a[b]),a[b]=c.value,f}},i={__handlers__:{},member:function(a,c){var d=h.fixTargetCtor(c||this),e=d[h.fixTargetKey(a)];return e||d===b?e:this.member(a,d._super_)},may:function(a){var b=this.member(a);return b&&"event"==b.type},has:function(a){var b=this.member(a);return b&&"property"==b.type},can:function(a){var b=this.member(a);return b&&"method"==b.type},get:function(a,b){var c=this.member(a);return c&&c.getter?c.getter.call(this,b):void 0},set:function(a,b,c){var d=this.member(a);return d&&d.setter&&d.setter.call(this,b,c),this},gets:function(b){var c={},d=h.fixTargetCtor(this)._properties_;return a.each(d,function(a){c[a]=this.get(a,b)},this),c},sets:function(a,b){if(a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c],b);return this},each:function(a,b){for(var c=h.fixTargetCtor(this)._properties_,d=0,e=c.length;e>d;d++){var f=c[d],g=a.call(b,f,d,this.member(f),this.get(f));if(g===!1)return!1}return this},__may__:function(a){return this.may(a)},__has__:function(a){return this.has(a)},__can__:function(a){return this.can(a)},__get__:function(a){return this.get(a)},__gets__:function(){return this.gets()},__set__:function(a,b){this.set(a,b)},__sets__:function(a){this.sets(a)},__each__:function(a,b){return this.each(a,b)}},j={toString:function(){return"{ ClassName: "+(this._name_||"Anonymous")+", ClassID: "+this._id_+" }"},getMeta:function(a){return a?this._meta_[a]:this._meta_},setMeta:function(a,b){return this._meta_[a]=b,this},defineEvent:function(a,b,c){return h.defineEvent(c||this.prototype,a,b)||this._events_.push(a),this},defineProperty:function(a,b,c){return h.defineProperty(c||this.prototype,a,b)||this._properties_.push(a),this},defineMethod:function(a,b,c){return h.defineMethod(c||this.prototype,a,b)||this._methods_.push(a),this}},k={toString:function(){return"{ ClassName: "+(this.__name__||"Anonymous")+", InstanceID: "+this.__id__+" }"},upon:function(b,c,d){if(c){var e=this.__handlers__,f=e[b]=e[b]||[];f[0]=a.extend({owner:this,handler:c},d)}return this},on:function(b,c,d){if(c){var e=this.__handlers__,f=e[b]=e[b]||[{owner:null,handler:null,context:null}];f.push(a.extend({owner:this,handler:c},d))}return this},off:function(a,b,c){var d,e=this.__handlers__[a]||[],f=c&&c.context;if(b)for(var g=e.length-1;g>=0;g--)d=e[g],d.handler!==b||f&&d.context!==f||this.__handlers__[a].splice(g,1);else this.__handlers__[a]=[{owner:null,handler:null,context:null}];return this},fire:function(a,b,c){var d,e=this.__handlers__[a];if(e)for(var f=0,g=e.length;g>f;f++)if(d=e[f],d&&d.handler&&!1===d.handler.call(d.context||d.owner,d.owner,b,c))return!1;return this},dispose:function(){return this.__handlers__={},this},destroy:function(){return this.dispose()},"super":function(){var a=this.super.caller.__super__;return a?a.apply(this,arguments):void 0},is:function(b){if("string"==typeof b&&(b=a.path(d,b)),b){if(this instanceof b)return!0;for(var c=this.constructor._mixins_,e=0,f=c.length;f>e;e++){var g=c[e];if(b===g)return!0}}return!1},__is__:function(a){return this.is(a)},__clone__:function(){}};a.extend(b,i,j,{_id_:0,_name_:"ZNObject",_statics_:{},_events_:[],_properties_:[],_methods_:[],_mixins_:[],_meta_:{}}),a.extend(b.prototype,i,k);var l={_arguments:function(){var c,d,e,f=arguments,g=f.length,h=f[0],i={"static":!1,statics:[],partial:!1,"abstract":!1,"final":!1,mixins:[],events:[],properties:[],methods:[]};if(3===g){if(c=h,d=f[1],e=f[2],!a.is(d,"function"))throw new Error("Invalid _super class.")}else if(2===g){if(a.is(h,"string"))c=h,d=null;else{if(!a.is(arg0,"function"))throw new Error("Invalid _super class.");c=null,d=h}e=f[1]}else{if(1!==g)throw new Error("Invalid arguments.");if(c=null,d=null,e=h,!a.is(e,"object"))throw new Error("The meta argument must be an object.")}return c=c||"",e=a.overwrite(e||{},i),d=d||b,{name:c,"super":d,meta:e}},_meta:function(b,c){var d=c.name,e=c.super,g=c.meta;return a.extend(b,i,j,{_id_:f++,_name_:d,_super_:e,_partial_:g.partial,_abstract_:g.abstract,_static_:g.static,_final_:g.final,_statics_:a.extend({},e._statics_,g.statics),_events_:e._events_.slice(0),_properties_:e._properties_.slice(0),_methods_:e._methods_.slice(0),_mixins_:e._mixins_.concat(g.mixins),_meta_:g}),a.extend(b,b._statics_),g.static?(a.each(g.events,function(a){b.defineEvent(a,{},b)}),a.each(g.properties,function(c,d){b.defineProperty(d,a.is(c,"object")?c:{value:c},b)}),a.each(g.methods,function(c,d){b.defineMethod(d,a.is(c,"function")?{value:c}:c,b)}),g.methods.init&&g.methods.init.call(b,b)):(a.each(g.mixins,function(c){var d=c.prototype;a.each(c._events_,function(a){b.defineEvent(a,d.member(a).meta)}),a.each(c._properties_,function(a){b.defineProperty(a,d.member(a).meta)}),a.each(c._methods_,function(a){i[a]||k[a]||b.defineMethod(a,d.member(a).meta)})}),a.each(g.events,function(a){b.defineEvent(a,{})}),a.each(g.properties,function(c,d){b.defineProperty(d,a.is(c,"object")?c:{value:c})}),a.each(g.methods,function(c,d){b.defineMethod(d,a.is(c,"function")?{value:c}:c)})),b}};a.class=c}(zn),function(a){var b=".",c="..",d="/",e={PENDING:0,LOADING:1,WAITING:2,LOADED:3},f=a.GLOBAL.document,g={normalizePath:function(a){for(var e,f=a.split(d),g=[f[0]],h=1,i=f.length;i>h;h++)switch(e=f[h]){case b:break;case c:var j=g[g.length-1];j===b||j===c?g.push(c):g.pop();break;default:g.push(e)}return g.join(d)},formatCurrentPath:function(b,c){var e=b,g=c?c.get("path")||"":a.PATH,h=e.indexOf(d);if(h>0)e=g?g.substring(0,g.lastIndexOf(d)+1)+e:e,e=this.normalizePath(e);else if(0===h)e=this.normalizePath(a.PATH?a.PATH.substring(0,a.PATH.lastIndexOf(d))+e:e);else if(f){var i=a.ZN_JS_PATH;if(!i){var j="";if(f.getElementById("zn-js")||a.each(f.getElementsByTagName("script"),function(a){return a.getAttribute&&(j=a.getAttribute("src")||"","zn.js"===j.slice(-5))?!1:void 0}),!j)throw new Error("zn.js has not been included, please do it first.");i=a.ZN_JS_PATH=j}h=i.lastIndexOf(d),e=i.slice(0,h>=0?h+1:0)+e}else e="./"+e+"/";return e}},h=a.class("zn.Module",{events:["pending","loading","waiting","loaded"],statics:{all:{},current:null,counter:0,preLoadedPackage:{},loadModule:function(b,c,d){if(a.is(b,h))return b.load(c);if("node:"===b.substring(0,5))return c(require(b.substring(5)));var i=g.formatCurrentPath(b,d);"/"===i.slice(-1)&&(i+="index.js");var j=h.all[i];j?j.load(c):(j=h.all[i]=new h(i),h.counter++,f?this.__webModule(i,function(a){if(h.counter--,a)throw new Error("Failed to load module:"+b);j.sets({parent:d,path:i,dependencies:h.current.get("dependencies"),factory:h.current.get("factory"),status:e.LOADING}),j.load(c)}):this.__nodeModule(i,function(){h.counter--,j.sets({parent:d,path:i,dependencies:h.current.get("dependencies"),factory:h.current.get("factory"),status:e.LOADING}),j.load(c)}))},__nodeModule:function(b,c){var d=b,e=c||a.idle;e(require(d))},__webModule:function(b,c){var d=f.head||f.getElementsByTagName("head")[0],e=f.createElement("script"),g=b,h=c||a.idle,i=function(a){e.onload=null,e.onerror=null,h(a)};g="/"===g.slice(-1)?g+"index.js":g,g=".js"===g.slice(-3).toLowerCase()?g:g+".js",e.src=g,"onload"in e?e.onload=function(){i(null)}:e.onreadystatechange=function(a){var b=e.readyState;i("loaded"===b||"complete"===b?null:a)},e.onerror=function(a){i(a)},d.appendChild(e)}},properties:{parent:null,status:e.PENDING,path:"",dependencies:null,factory:null,value:null},methods:{init:function(a,b,c){this.sets({path:a,dependencies:b||[],factory:c,value:{}}),this._callbacks=[]},exec:function(a){var b=process.argv,c=b[1];return this.sets({path:c,status:e.LOADING}),this.load(a),this},__pending:function(a){this._callbacks.push(a)},__loading:function(b){var c=(this.get("path"),this.get("dependencies")),d=this.get("factory"),f=this.get("value");this.set("status",e.WAITING),this._callbacks.push(b);var g=c.length;if(0===g)f=d.call(f)||f,this.set("value",f),this.set("status",e.LOADED),a.each(this._callbacks,function(a){a(f)});else{var i=[],j=this;a.each(c,function(b,c){h.loadModule(b,function(b){i[c]=b,g--,0===g&&(f=d.apply(f,i)||f,j.set("value",f),j.set("status",e.LOADED),a.each(j._callbacks,function(a){a(f)}))},j)})}},__waiting:function(a){var b=this;setTimeout(function(){0===h.counter&&b.set("status",e.LOADING),b.load(a)})},__loaded:function(a){a(this.get("value"))},load:function(b){var c=this.get("status"),d=b||a.idle;switch(c){case e.PENDING:this.__pending(d);break;case e.LOADING:this.__loading(d);break;case e.WAITING:this.__waiting(d);break;case e.LOADED:this.__loaded(d)}return this}}});a.define=function(){var b=arguments,c=b.length,d=b[0],e=[],f=null;if(2===c)e=d,f=b[1];else{if(1!==c)throw new Error("Invalid arguments.");a.is(d,"function")?f=d:a.is(d,"array")?(e=d,f=function(){var b={};return a.each(arguments,function(c){c._name_?b[c._name_]=c:a.extend(b,c)}),b}):f=function(){return d}}return e&&a.is(e,"string")&&(e=[e]),h.current=new h("",e,f),h.current};var i=a.class("zn.Loader",{"static":!0,properties:{preLoadPackages:[]},methods:{init:function(){for(var a=this.preLoadPackages,b=0,c=a.length;c>b;b++)this.loadPackage(a[b])},loadPackage:function(b){this.load(b+"index.js",function(b){a.extend(h.preLoadedPackage,b)})},load:function(a,b,c){return h.loadModule(a,b,c),this}}});a.load=i.load}(zn),function(a){{var b=Array.prototype.slice;a.class("zn.format.String",{"static":!0,properties:{},methods:{init:function(){},formatString:function(){var c=b.call(arguments);switch(c.length){case 1:return c[0];case 2:var d={};switch(a.type(c[1])){case"string":d[0]=c[1];break;case"array":d=c[1].toJSON();break;case"object":d=c[1]}return this.__formatSql(c[0],d);default:var e=c.shift();return this.__formatSql(e,c.toJSON())}},__formatSql:function(b,c){var d=null;return a.each(c,function(a,c){d=new RegExp("\\{"+c+"\\}","gi"),b=b.replace(d,a)}),d=null,b}}})}}(zn),function(a){var b={PENDING:0,FULFILLED:1,REJECTED:2},c=a.class("zn.util.Async",{"static":!0,methods:{init:function(){this._exceptions=[],this._finallys=[],this._count=0,this._currIndex=0,this._dataArray=[]},exception:function(a){return this._exceptions.push(a),this},"catch":function(b,c){return a.each(this._exceptions,function(a){a.call(c,b)}),this},"finally":function(a){return this._finallys.push(a),this},defer:function(b,c){var e=this,f=new d(b,c);return f.on("complete",function(b,c){e._currIndex++,e._dataArray.push(c),e._currIndex==e._count&&(a.each(e._finallys,function(a){try{a(e._dataArray)}catch(b){console.log(b.message)}}),e._finallys=[])}),e._count++,f},all:function(b){var d=c.defer(),e=0,f=[];return a.each(b,function(a){a.then(function(a){f.push(a),e++,e>=b.length&&d.resolve(f)})}),d.promise},any:function(b){var d=c.defer();return a.each(b,function(a){a.then(function(a){d.resolve(a)})}),d.promise}}}),d=a.class("Defer",{events:["complete"],properties:{promise:null},methods:{init:function(a,b){this._promise=new e,a&&this.resolve(a),b&&this.reject(b)},resolve:function(d){try{var e=this.get("promise");if(e.get("readyState")!=b.PENDING)return;e.set("readyState",b.FULFILLED),e.set("data",d),a.each(e.get("resolves"),function(a){a(d)})}catch(f){c.catch(f,this)}this.fire("complete",d)},reject:function(a){try{var d=this.get("promise");if(d.get("readyState")!=b.PENDING)return;d.set("readyState",b.REJECTED),d.set("reason",a);var e=d.get("rejects")[0];e&&e(a)}catch(f){c.catch(f,this)}this.fire("complete",a)}}}),e=a.class("Promise",{statics:{isPromise:function(a){return null!==a&&void 0!==a&&"function"==typeof a.then},defer:null},properties:{resolves:null,rejects:null,data:null,reason:null,readyState:null},methods:{init:function(){this.set("resolves",[]),this.set("rejects",[]),this.set("exceptions",[]),this.set("readyState",b.PENDING)},then:function(a,c){function f(b){var c=a?a(b):b;return e.isPromise(c)?c.then(function(a){g.resolve(a)}):g.resolve(c),c}var g=new d;if(this.get("readyState")===b.PENDING)this.get("resolves").push(f),this.get("rejects").push(c?c:function(a){g.reject(a)});else if(this.get("readyState")===b.FULFILLED){var h=this;setTimeout(function(){f(h.get("data"))})}return g.promise},"catch":function(a){return c.exception(a)},"finally":function(a){return c.finally(a)},otherwise:function(a){return this.then(void 0,a)}}});a.async=c}(zn),function(a){var b={ISO8601:"yyyy-MM-dd hh:mm:ss.SSS",ISO8601_WITH_TZ_OFFSET:"yyyy-MM-ddThh:mm:ssO",DATETIME:"dd MM yyyy hh:mm:ss.SSS",ABSOLUTETIME:"hh:mm:ss.SSS"},c=a.class("zn.util.DateUtil",{"static":!0,properties:{},methods:{init:function(){},asString:function(a){var c=b.ISO8601;"string"==typeof a&&(c=arguments[0],a=arguments[1]);var d=this.__addZero(a.getDate()),e=this.__addZero(a.getMonth()+1),f=this.__addZero(a.getFullYear()),g=this.__addZero(a.getFullYear().toString().substring(2,4)),h=c.indexOf("yyyy")>-1?f:g,i=this.__addZero(a.getHours()),j=this.__addZero(a.getMinutes()),k=this.__addZero(a.getSeconds()),l=this.__padWithZeros(a.getMilliseconds(),3),m=this.__offset(a),n=c.replace(/dd/g,d).replace(/MM/g,e).replace(/y{1,4}/g,h).replace(/hh/g,i).replace(/mm/g,j).replace(/ss/g,k).replace(/SSS/g,l).replace(/O/g,m);return n},__padWithZeros:function(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c},__addZero:function(a){return this.__padWithZeros(a,2)},__offset:function(a){var b=Math.abs(a.getTimezoneOffset()),c=String(Math.floor(b/60)),d=String(b%60);return 1==c.length&&(c="0"+c),1==d.length&&(d="0"+d),a.getTimezoneOffset()<0?"+"+c+d:"-"+c+d}}}),d=["INFO","DEBUG","WARNING","ERROR","TRACE","","INIT"],e=["#100000","#2125a0","#a82c2c","#c045b7","1cb131","","#100000"],f=[38,34,35,31,32,36,33],g={INFO:0,DEBUG:1,WARNING:2,ERROR:3,TRACE:4,INIT:6},h=a.class("Logger",{"static":!0,properties:{},methods:{init:function(){},info:function(a){this.__log(g.INFO,a)},debug:function(a){this.__log(g.DEBUG,a)},warn:function(a){this.__log(g.WARNING,a)},trace:function(a){this.__log(g.TRACE,a)},error:function(a){this.__log(g.ERROR,a)},__getDateString:function(a){return c.asString(a||new Date)},__getPosition:function(){try{throw new Error}catch(a){var b=a.stack.split("\n")[4].replace(/\(/g,"").replace(/\)/g,"").split("/").pop();return b}},__formatLog4Server:function(a,b){var c="",e="",g="";return b&&(e="[",g="[0m",c=f[5]+"m",b=f[a.type]+"m"),[a.time," [",e,b,d[a.type],g,"] [",e,c,a.pos,g,"] ",a.message].join("")},__formatLog4Client:function(a){return["%c"+a.time," [",d[a.type],"] [",a.pos,"] ",a.message].join("")},__log:function(b,c){var d={type:b,message:"object"==typeof c?JSON.stringify(c):c,time:this.__getDateString(),pos:this.__getPosition()};a.GLOBAL.document?console.log(this.__formatLog4Client(d,!0),"color:"+e[b]):console.log(this.__formatLog4Server(d,!0))}}}),i={info:function(){h.info.apply(h,arguments)},debug:function(){h.debug.apply(h,arguments)},warn:function(){h.warn.apply(h,arguments)},trace:function(){h.trace.apply(h,arguments)},error:function(){h.error.apply(h,arguments)}};a.extend(a,i)}(zn),function(a){a.class("zn.unit.TestCase",{properties:{},methods:{init:function(){}}})}(zn),function(a){a.class("zn.unit.TestLoader",{"static":!0,properties:{basePath:""},methods:{init:function(){this._casePaths=[],this._caseMethods=[]},load:function(a){return Array.isArray(a)?this._casePaths.concat(a):this._casePaths.push(a),this},run:function(){this.__testingCase()},__testingCase:function(){var b=this._casePaths.shift(),c=this.basePath,d=c+b;_self=this,b&&a.load(d,function(c){var d=c.getMeta("methods")||[];a.info("Testing Case: "+b),_self.__testingCaseMethods(d)})},__testingCaseMethods:function(a){this._caseMethods=[];for(var b in a){var c=a[b];c.key=b,this._caseMethods.push(c)}this.__testingCaseMethod()},__testingCaseMethod:function(){var a=this._caseMethods.shift(),b=this;if(a){var c=(new Date).getTime(),d=a.key,e=a.call(null);e&&e.then?e.then(function(){b.__getDiffSecond(c,d),b.__testingCaseMethod()}):(b.__getDiffSecond(c,d),b.__testingCaseMethod())}else b.__testingCase()},__getDiffSecond:function(b,c){var d=(new Date).getTime(),e=d-b,f=(Math.floor(e/864e5),e%864e5),g=(Math.floor(f/36e5),f%36e5),h=(Math.floor(g/6e4),g%6e4),i=Math.round(h/1e3);a.info("Test method "+c+" :{ second: "+i+"s, diff: "+e+" }")}}})}(zn),function(a){a.class("zn.data.List",{statics:{getInstance:function(a){return new this(a)}},properties:{min:0,max:100,T:null,TArgs:{}},methods:{init:function(a){this.sets(a),this.reset()},reset:function(){this._data=[];for(var a=0;a<(this.min||0);a++)this.push(this.TArgs)},push:function(a){if(this.T){var b=new this.T(a||this.TArgs);return this._data.push(b),b}},findOneT:function(b){var c=null,d=b||a.idle;return a.each(this._data,function(a,b){return d(a,b)?(c=a,-1):void 0}),c},findAllT:function(b){var c=[],d=b||a.idle;return a.each(this._data,function(a,b){d(a,b)&&c.push(a)}),c}}})}(zn),function(a){a.class("zn.data.Task",{statics:{getInstance:function(a){return new this(a)},PANDING:0,WAITING:1,DOING:2,DONE:3},properties:{statue:0},methods:{init:function(a){this.sets(a)}}})}(zn),function(a){var b=a.class("zn.data.Observable",{properties:{},methods:{init:{auto:!0,value:function(){this.__watchers__={}}},watch:function(b,c,d){var e="*"===b?this.constructor.__properties__:a.is(b,"array")?b:[b];return e.forEach(function(a){this.__watch(a,c,d)},this),this},unwatch:function(b,c,d){var e="*"===b?this.constructor.__properties__:a.is(b,"array")?b:[b];return e.forEach(function(a){this.__unwatch(a,c,d)},this),this},notify:function(b){var c="*"===b?Object.keys(this.__watchers__):a.is(b,"array")?b:[b];return a.each(c,function(a){this.__notify(a)},this),this},__watch:function(a,c,d){var e=a.indexOf("."),f=a,g="",h=this.__watchers__;if(e>=0){f=a.slice(0,e),g=a.slice(e+1);var i=this.get(f);i&&i.watch&&i.watch(g,c,d)}var j=h[f]=h[f]||[];j.push({handler:c,context:d,fullPath:a,subPath:g});var k=this.member(f);if(k&&"property"===k.type){var l=k.meta;if(!l.watched){var m=k.getter,n=k.setter;b.defineProperty(f,{get:function(a){return m.call(this,a)},set:function(a,b){var c=m.call(this);(c!==a||b&&b.force)&&(this.__unbind(f,c),n.call(this,a,b)!==!1&&(this.__bind(f,a),this.notify(f)))},watched:!0},this)}}},__unwatch:function(a,b,c){var d=a.indexOf("."),e=a,f="",g=this.__watchers__;if(d>=0){e=a.slice(0,d),f=a.slice(d+1);var h=this.get(e);h&&h.unwatch&&h.unwatch(f,b,c)}var i,j=g[e];if(!j)return!1;if(b){for(var k=0,l=j.length;l>k;k++)if(i=j[k],i.handler===b&&i.context===c){j.splice(k,1);break}}else j.length=0},__bind:function(b,c){c&&c.watch&&a.each(this.__watchers__[b],function(a){a.subPath&&c.watch(a.subPath,a.handler,a.context)})},__unbind:function(b,c){c&&c.unwatch&&a.each(this.__watchers__[b],function(a){a.subPath&&c.unwatch(a.subPath,a.handler,a.context)})},__notify:function(b){var c=this.get(b);a.each(this.__watchers__[b],function(b){b&&b.handler&&b.handler.call(b.context,a.path(c,b.subPath),b.fullPath,this)},this)}}})}(zn);
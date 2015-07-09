var zn={VERSION:"0.0.1",DEBUG:!1,GLOBAL:function(){return this}.call(null)};"undefined"!=typeof module&&module.exports&&(module.exports=zn),function(a){var b=Object.prototype.toString,c={idle:function(){},fix:function(a){for(var b=a||{},c=1,d=arguments.length;d>c;c++){var e=arguments[c];for(var f in e)e.hasOwnProperty(f)&&"function"!=typeof b[f]&&(b[f]=e[f])}return b},extend:function(a){for(var b=a||{},c=1,d=arguments.length;d>c;c++){var e=arguments[c];for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b},overwrite:function(a){for(var b=a||{},c=1,d=arguments.length;d>c;c++){var e=arguments[c];for(var f in e)e.hasOwnProperty(f)&&void 0===b[f]&&(b[f]=e[f])}return b},path:function(a,b,c){var d=a||{};if(b){var e,f=b.split("."),g=f.length,h=0;if(arguments.length<3)for(;d&&g>h;h++)e=f[h],d=d.__get__?d.__get__(e):d[e];else{for(g-=1;d&&g>h;h++)e=f[h],d=d.__get__?d.__get__(e):d[e]=d[e]||{};e=f[h],d&&(d.__set__?d.__set__(e,c):d[e]=c,d=c)}}return d},invoke:function(b,c,d){if(b&&c){var e,f,g=c.lastIndexOf(".");g>0?(e=a.path(b,c.substring(0,g)),e&&(f=e[c.substring(g+1)])):(e=b,f=b[c]),f&&f.apply(e,d)}}},d={toString:function(a){return a&&a.toString?a.toString():b.call(a)},each:function(a,c,d){if(a&&c)if(a.__each__)a.__each__(c,d);else{var e=a.length,f=null;if(e>0&&"[object Array]"===b.call(a)){for(var g=0;e>g;g++)if(f=c.call(d,a[g],g),f===!1)return!1}else for(var h in a)if(a.hasOwnProperty(h)){if(f=c.call(d,a[h],h),f===!1)return!1;if(-1===f)continue}}},clone:function(b){if(b){if(b.__clone__)return b.__clone__();if(a.is(b,"array"))return b.slice(0);var c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c}return b},type:function(a){return a&&a.__type__?a.__type__:b.call(a).slice(8,-1).toLowerCase()},is:function(a,b){if(a&&a.__is__)return a.__is__(b);if("string"==typeof b)switch(b.toLowerCase()){case"plain":return a&&a.constructor===Object;default:return this.type(a)===b}else if("function"==typeof b)return a instanceof b},may:function(a,b){return a?a.__may__?a.__may__(b):a.hasOwnProperty("on"+b):!1},can:function(a,b){return a?a.__can__?a.__can__(b):"function"==typeof a[b]:!1},has:function(a,b){return a?a.__has__?a.__has__(b):a.hasOwnProperty(b):!1},get:function(a,b){return a?a.__get__?a.__get__(b):a[b]:void 0},set:function(a,b,c){a&&(a.__set__?a.__set__(b,c):a[b]=c)},gets:function(a){if(a){if(a.__gets__)return a.__gets__();var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}},sets:function(a,b){if(a&&b)if(a.__sets__)a.__sets__(b);else for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}};c.extend(a,c),c.extend(a,d)}(zn),function(a){var b=Array.prototype.slice,c=Object.prototype.hasOwnProperty,d=Object.prototype.toString,e={isArray:function(b){return b&&"[object Array]"===a.toString(b)&&b.constructor===Array}},f={forEach:function(a,b){if(!a)return!1;for(var c=0,d=this.length;d>c;c++)a.call(b,this[c],c);return this},indexOf:function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},lastIndexOf:function(a){for(var b=this.length-1;b>=0;b--)if(this[b]===a)return b;return-1}},g={bind:function(a){var c=this;return function(){return c.apply(a,b.call(arguments,1))}}},h={keys:function(a){if(a!==Object(a))throw new TypeError("Object.keys called on a non-object");var b,d=[];for(b in a)c.call(a,b)&&d.push(b);return d},values:function(a){if(a!==Object(a))throw new TypeError("Object.keys called on a non-object");var b,d=[];for(b in a)c.call(a,b)&&d.push(a[b]);return d},create:function(){var b=function(){};return function(c,d){if(null===c)throw new Error("Cannot set a null [[Prototype]]");if("object"!=typeof c)throw new TypeError("Argument must be an object");return a.each(d,function(a,b){h.defineProperty(c,a,b)}),b.prototype=c,new b}}(),defineProperty:function(a,b,c){return a&&b&&c&&c.hasOwnProperty("value")&&(a[b]=c.value),a}},i={parse:function(){return""},stringify:function(){var a=d,b=Array.isArray,c={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},e=function(a){return c[a]||"\\u"+(a.charCodeAt(0)+65536).toString(16).substr(1)},f=/[\\"\u0000-\u001F\u2028\u2029]/g;return function g(c){if(null==c)return"null";if("number"==typeof c)return isFinite(c)?c.toString():"null";if("boolean"==typeof c)return c.toString();if("object"==typeof c){var d;if("function"==typeof c.toJSON)return g(c.toJSON());if(b(c)){d="[";for(var h=0;h<c.length;h++)d+=(h?", ":"")+g(c[h]);return d+"]"}if("[object Object]"===a.call(c)){d=[];for(var i in c)c.hasOwnProperty(i)&&d.push(g(i)+": "+g(c[i]));return"{"+d.join(", ")+"}"}}return'"'+c.toString().replace(f,e)+'"'}}()};a.fix(Array,e),a.fix(Array.prototype,f),a.fix(Function.prototype,g),a.fix(a.GLOBAL.JSON,i);try{Object.defineProperty({},"zn",{})}catch(j){Object.defineProperty=function(a,b,c){return h.defineProperty(a,b,c)}}}(zn),function(a){function b(){}function c(){var c,e,f,h=l._arguments.apply(this,arguments),i=h.name,j=h.super,k=h.meta;if(j._static_)throw new Error("Static class cannot be inherited.");if(j._final_)throw new Error("Final class cannot be inherited.");if(i&&k.partial&&(c=a.path(d,i)),k.static){if(c){if(!c._static_)throw new Error('Partial class "'+i+'" must be static.')}else c=function(){throw new Error("Cannot instantiate static class.")};f=c.prototype}else{if(c){if(c._static_)throw new Error('Partial class "'+i+'" must not be static.');if(c._super_!==j&&Class._super_!==b)throw new Error('Partial class "'+i+'" must have consistent super class.')}else c=k.abstract?function(){throw new Error("Cannot instantiate abstract class.")}:function(){var a=c._mixins_||[];this.__id__=g++,this.__handlers__={},this.__initializing__=!0;for(var b=0,d=a.length;d>b;b++){var e=a[b].prototype.__ctor__;e&&e.call(this)}this.__ctor__&&this.__ctor__.apply(this,arguments),this.__initializing__=!1};c._super_!==j?(e=function(){},e.prototype=j.prototype,f=new e,f.constructor=c,f.__type__=i||"Anonymous",c.prototype=f):f=c.prototype,k.methods.init&&(f.__ctor__=k.methods.init)}return l._meta(c,h),f.__define__&&f.__define__.call(c),i&&a.path(d,i,c),c}var d=a.GLOBAL,e="@",f=1,g=1,h={fixTargetCtor:function(a){return a instanceof b?a.constructor:a},fixTargetKey:function(a){return e+a},defineEvent:function(a,b,c){var d=h.fixTargetCtor(a),e=h.fixTargetKey(b),f=e in d,g={};return f||(g=Object.defineProperty(a,"on"+b.toLowerCase(),{get:function(){var a=this.__handlers__[b];return a?a[0].handler:null},set:function(a){var c=this.__handlers__,d=c[b]=c[b]||[];d[0]={owner:this,handler:a,context:null}}})),d[e]={name:b,type:"event",meta:c,descriptor:g},f},defineProperty:function(b,c,d){var e,f,g=h.fixTargetCtor(b),i=h.fixTargetKey(c),j=i in g,k={};if("value"in d){var l=d.value,m="_"+c;e=function(){return m in this?this[m]:a.is(l,"function")?l.call(this):l},f=d.readonly?function(a,b){return b&&b.force?void(this[m]=a):!1}:function(a){this[m]=a}}else e=d.get||function(){return void 0},f=d.set||function(){return!1};return j&&(e.__super__=b[i].getter,f.__super__=b[i].setter),j||(k=Object.defineProperty(b,c,{get:e,set:f,configurable:!0})),g[i]={name:c,type:"property",meta:d,getter:e,setter:f,descriptor:k},j},defineMethod:function(a,b,c){var d=h.fixTargetCtor(a),e=h.fixTargetKey(b),f=e in d;return d[e]={name:b,type:"method",meta:c},b in a&&(c.value.__super__=a[b]),a[b]=c.value,f}},i={member:function(a,c){var d=h.fixTargetCtor(c||this),e=d[h.fixTargetKey(a)];return e||d===b?e:this.member(a,d._super_)},may:function(a){var b=this.member(a);return b&&"event"==b.type},has:function(a){var b=this.member(a);return b&&"property"==b.type},can:function(a){var b=this.member(a);return b&&"method"==b.type},get:function(a,b){var c=this.member(a);return c&&c.getter?c.getter.call(this,b):void 0},set:function(a,b,c){var d=this.member(a);return d&&d.setter&&d.setter.call(this,b,c),this},gets:function(b){var c={},d=h.fixTargetCtor(this)._properties_;return a.each(d,function(a){c[a]=this.get(a,b)},this),c},sets:function(a,b){if(a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c],b);return this},each:function(a,b){for(var c=h.fixTargetCtor(this)._properties_,d=0,e=c.length;e>d;d++){var f=c[d],g=a.call(b,f,d,this.member(f),this.get(f));if(g===!1)return!1}return this},__may__:function(a){return this.may(a)},__has__:function(a){return this.has(a)},__can__:function(a){return this.can(a)},__get__:function(a){return this.get(a)},__gets__:function(){return this.gets()},__set__:function(a,b){this.set(a,b)},__sets__:function(a){this.sets(a)},__each__:function(a,b){return this.each(a,b)}},j={toString:function(){return"{ ClassName: "+(this._name_||"Anonymous")+", ClassID: "+this._id_+" }"},getMeta:function(a){return a?this._meta_[a]:this._meta_},setMeta:function(a,b){return this._meta_[a]=b,this},defineEvent:function(a,b,c){return h.defineEvent(c||this.prototype,a,b)||this._events_.push(a),this},defineProperty:function(a,b,c){return h.defineProperty(c||this.prototype,a,b)||this._properties_.push(a),this},defineMethod:function(a,b,c){return h.defineMethod(c||this.prototype,a,b)||this._methods_.push(a),this}},k={toString:function(){return"{ ClassName: "+(this.__name__||"Anonymous")+", InstanceID: "+this.__id__+" }"},upon:function(b,c,d){if(c){var e=this.__handlers__,f=e[b]=e[b]||[];f[0]=a.extend({owner:this,handler:c},d)}return this},on:function(b,c,d){if(c){var e=this.__handlers__,f=e[b]=e[b]||[{owner:null,handler:null,context:null}];f.push(a.extend({owner:this,handler:c},d))}return this},off:function(a,b,c){var d,e=this.__handlers__[a]||[],f=c&&c.context;if(b)for(var g=e.length-1;g>=0;g--)d=e[g],d.handler!==b||f&&d.context!==f||this.__handlers__[a].splice(g,1);else this.__handlers__[a]=[{owner:null,handler:null,context:null}];return this},fire:function(a,b,c){var d,e=this.__handlers__[a];if(e)for(var f=0,g=e.length;g>f;f++)if(d=e[f],d&&d.handler&&!1===d.handler.call(d.context||d.owner,d.owner,b,c))return!1;return this},dispose:function(){return this.__handlers__={},this},destroy:function(){return this.dispose()},"super":function(){var a=this.super.caller.__super__;return a?a.apply(this,arguments):void 0},is:function(b){if("string"==typeof b&&(b=a.path(d,b)),b){if(this instanceof b)return!0;for(var c=this.constructor._mixins_,e=0,f=c.length;f>e;e++){var g=c[e];if(b===g)return!0}}return!1},__is__:function(a){return this.is(a)},__clone__:function(){}};a.extend(b,i,j,{_id_:0,_name_:"ZNObject",_statics_:{},_events_:[],_properties_:[],_methods_:[],_mixins_:[],_meta_:{}}),a.extend(b.prototype,i,k);var l={_arguments:function(){var c,d,e,f=arguments,g=f.length,h=f[0],i={"static":!1,statics:[],partial:!1,"abstract":!1,"final":!1,mixins:[],events:[],properties:[],methods:[]};if(3===g){if(c=h,d=f[1],e=f[2],!a.is(d,"function"))throw new Error("Invalid _super class.")}else if(2===g){if(a.is(h,"string"))c=h,d=null;else{if(!a.is(arg0,"function"))throw new Error("Invalid _super class.");c=null,d=h}e=f[1]}else{if(1!==g)throw new Error("Invalid arguments.");if(c=null,d=null,e=h,!a.is(e,"object"))throw new Error("The meta argument must be an object.")}return c=c||"",e=a.overwrite(e||{},i),d=d||b,{name:c,"super":d,meta:e}},_meta:function(b,c){var d=c.name,e=c.super,g=c.meta;return a.extend(b,i,j,{_id_:f++,_name_:d,_super_:e,_partial_:g.partial,_abstract_:g.abstract,_static_:g.static,_final_:g.final,_statics_:a.extend({},e._statics_,g.statics),_events_:e._events_.slice(0),_properties_:e._properties_.slice(0),_methods_:e._methods_.slice(0),_mixins_:e._mixins_.concat(g.mixins),_meta_:g}),a.extend(b,b._statics_),g.static?(a.each(g.events,function(a){b.defineEvent(a,{},b)}),a.each(g.properties,function(c,d){b.defineProperty(d,a.is(c,"object")?c:{value:c},b)}),a.each(g.methods,function(c,d){b.defineMethod(d,a.is(c,"function")?{value:c}:c,b)}),g.methods.init&&g.methods.init.call(b,b)):(a.each(g.mixins,function(c){var d=c.prototype;a.each(c._events_,function(a){b.defineEvent(a,d.member(a).meta)}),a.each(c._properties_,function(a){b.defineProperty(a,d.member(a).meta)}),a.each(c._methods_,function(a){i[a]||k[a]||b.defineMethod(a,d.member(a).meta)})}),a.each(g.events,function(a){b.defineEvent(a,{})}),a.each(g.properties,function(c,d){b.defineProperty(d,a.is(c,"object")?c:{value:c})}),a.each(g.methods,function(c,d){b.defineMethod(d,a.is(c,"function")?{value:c}:c)})),b}};a.class=c}(zn),function(a){function b(a){for(var b,f=a.split(e),g=[f[0]],h=1,i=f.length;i>h;h++)switch(b=f[h]){case c:break;case d:var j=g[g.length-1];j===c||j===d?g.push(d):g.pop();break;default:g.push(b)}return g.join(e)}var c=".",d="..",e="/",f={PENDING:0,LOADING:1,WAITING:2,LOADED:3},g=a.GLOBAL.document,h=a.class("zn.Module",{statics:{all:{},current:null,counter:0},properties:{status:f.PENDING,path:"",dependencies:null,factory:null,value:null},methods:{init:function(a,b,c){this.sets({path:a,dependencies:b||[],factory:c,value:{}}),this._callbacks=[]},exec:function(a){var b=process.argv,c=b[1],d=h.all[c]=h.current;return d.sets({path:c,status:f.LOADING}),d.load(a),this},load:function(b){var c=this.get("status"),d=b||a.idle,e=this;switch(c){case f.PENDING:this._callbacks.push(d);break;case f.LOADING:var g=(this.get("path"),this.get("dependencies")),i=this.get("factory"),j=this.get("value"),k=g.length,l=[];this.set("status",f.WAITING),this._callbacks.push(d),0===k?(j=i.call(j)||j,this.set("value",j),this.set("status",f.LOADING),a.each(this._callbacks,function(a){a(j)})):a.each(g,function(b,c){a.load(b,function(b){l[c]=b,k--,0===k&&(j=i.apply(j,l)||j,e.set("value",j),e.set("status",f.LOADED),a.each(e._callbacks,function(a){a(j)}))},e)});break;case f.WAITING:setTimeout(function(){0===h.counter&&e.set("status",f.LOADING),e.load(d)});break;case f.LOADED:d(this.get("value"))}}}});a.module=function(){var b=arguments,c=b.length,d=b[0],e=[],f=null;if(2===c)e=d,f=b[1];else{if(1!==c)throw new Error("Invalid arguments.");a.is(d,"function")?f=d:a.is(d,"array")?(e=d,f=function(){var b={};return a.each(arguments,function(c){c._name_?b[c._name_]=c:a.extend(b,c)}),b}):f=function(){return d}}return a.is(e,"string")&&(e=[e]),h.current=new h("",e,f),h.current},a.load=function(c,d,i){if(a.is(c,h))c.load(d);else if(a.is(c,"string")){var j,k,l,m=c,n="";if(a.PATH||(l=c.lastIndexOf(e)),k=i?i.get("path"):a.PATH,"node:"===m.substring(0,5))return d&&d(require(m.substring(5))),!0;if(l=m.indexOf(e),l>0)m=b(k?k.substring(0,k.lastIndexOf(e)+1)+m:m);else if(0===l)m=b(a.PATH?a.PATH.substring(0,a.PATH.lastIndexOf(e))+m:m);else if(g){var o=g.getElementById("zn-js");o||a.each(g.getElementsByTagName("script"),function(a){a.getAttribute&&(n=a.getAttribute("src")||"","zn.js"===n.slice(-5)&&(o=a))}),o&&(n=o.getAttribute("src"),l=n.lastIndexOf(e),m=n.slice(0,l>=0?l+1:0)+m)}else m="./"+m+"/";if(j=h.all[m])j.load(d);else if(j=h.all[m]=new h(m),g){var p=g.head||g.getElementsByTagName("head")[0],q=g.createElement("script"),r=function(a){if(q.onload=null,q.onerror=null,h.counter--,a)throw new Error("Failed to load module:"+m);j.sets({path:m,dependencies:h.current.get("dependencies"),factory:h.current.get("factory"),status:f.LOADING}),j.load(d)};n="/"===m.slice(-1)?m+"index.js":m,n=".js"===n.slice(-3).toLowerCase()?n:n+".js",q.src=n,h.counter++,p.appendChild(q),"onload"in q?q.onload=function(){r(null)}:q.onreadystatechange=function(a){var b=q.readyState;r("loaded"===b||"complete"===b?null:a)},q.onerror=function(a){r(a)}}else require(m),j.sets({path:m,dependencies:h.current.get("dependencies"),factory:h.current.get("factory"),status:f.LOADING}),j.load(d)}}}(zn);
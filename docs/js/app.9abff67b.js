(function(t){function e(e){for(var r,c,i=e[0],a=e[1],d=e[2],s=0,p=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);f&&f(e);while(p.length)p.shift()();return u.push.apply(u,d||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var f=a;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"726d":function(t,e,n){"use strict";n("789b")},"789b":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("cf05"),u=n.n(o),c=Object(r["f"])("img",{alt:"Vue logo",src:u.a},null,-1);function i(t,e,n,o,u,i){var a=Object(r["t"])("Example");return Object(r["p"])(),Object(r["e"])(r["a"],null,[c,Object(r["g"])(a)],64)}function a(t,e,n,o,u,c){var i=Object(r["t"])("editor-content");return Object(r["p"])(),Object(r["d"])(i,{editor:t.editor},null,8,["editor"])}var d=n("c1e2"),f=n("672a"),s=n("9980"),p=s["c"].create({name:"rt",parseHTML:function(){return[{tag:"rt"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["rt",Object(s["l"])(this.options.HTMLAttributes,e),0]}}),l=s["c"].create({name:"ruby",defaultOptions:{HTMLAttributes:{}},content:"text*",parseHTML:function(){return[{tag:"ruby"}]},renderHTML:function(t){var e=t.HTMLAttributes;return["ruby",e,0]},addKeyboardShortcuts:function(){var t=this;return{"Mod-u":function(){return t.editor.commands.addRuby()}}},addCommands:function(){return{addRuby:function(){return function(t){var e=t.commands,n=t.editor,r=n.state.selection,o=r.from,u=r.to,c=n.state.doc.textBetween(o,u," ");return e.insertContent("<ruby>".concat(c,"<rt>???</rt></ruby>"))}}}}}),b=Object(r["i"])({components:{EditorContent:d["b"]},data:function(){return{editor:void 0}},mounted:function(){this.editor=new d["a"]({content:"<p>これは振り仮名の例です</p>",extensions:[f["a"],l,p]})},beforeUnmount:function(){this.editor&&this.editor.destroy()}}),v=n("6b0d"),y=n.n(v);const m=y()(b,[["render",a]]);var O=m,h=Object(r["i"])({name:"App",components:{Example:O}});n("726d");const j=y()(h,[["render",i]]);var g=j;Object(r["c"])(g).mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.9abff67b.js.map
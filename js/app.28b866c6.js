(function(e){function t(t){for(var o,u,c=t[0],l=t[1],a=t[2],f=0,p=[];f<c.length;f++)u=c[f],r[u]&&p.push(r[u][0]),r[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},i=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vuex-linkadd/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"31f2":function(e,t,n){"use strict";var o=n("ec41"),r=n.n(o);r.a},"41e6":function(e,t,n){"use strict";var o=n("ab38"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"left"},[n("h1",[e._v(e._s(e.title))]),n("form",{on:{submit:function(t){return t.preventDefault(),e.addLink(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newLink,expression:"newLink"}],staticClass:"link-input",attrs:{type:"text",placeholder:"Add a link"},domProps:{value:e.newLink},on:{input:function(t){t.target.composing||(e.newLink=t.target.value)}}})]),n("ul",e._l(e.links,function(t,o){return n("li",{key:o},[e._v("\n        "+e._s(t)+"\n        "),n("button",{staticClass:"rm",on:{click:function(t){return e.removeLinks(o)}}},[e._v("Remove")])])}),0)]),n("div",{staticClass:"right"},[n("stats")],1)])},c=[],l=n("cebc"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("Differen component")]),n("p",[e._v("There are currently "+e._s(e.countLinks)+" links")]),n("button",{on:{click:e.removeAllLinks}},[e._v("Remove All Links")]),n("p",[e._v(e._s(e.msg))])])},s=[],f=n("2f62"),p={name:"Stats",data:function(){return{msg:""}},computed:Object(l["a"])({},Object(f["c"])(["countLinks"])),methods:Object(l["a"])({},Object(f["d"])(["REMOVE_ALL"]),Object(f["b"])(["removeAll"]),{removeAllLinks:function(){var e=this;this.removeAll().then(function(){e.msg="They have been removed"})}})},v=p,d=(n("41e6"),n("2877")),m=Object(d["a"])(v,a,s,!1,null,"2a0e654a",null),b=m.exports,h={name:"HelloWorld",data:function(){return{newLink:""}},components:{Stats:b},computed:Object(l["a"])({},Object(f["e"])(["title","links"])),methods:Object(l["a"])({},Object(f["d"])(["ADD_LINK"]),Object(f["b"])(["removeLink"]),{addLink:function(){this.ADD_LINK(this.newLink),this.newLink=""},removeLinks:function(e){this.removeLink(e)}})},k=h,_=(n("31f2"),Object(d["a"])(k,u,c,!1,null,null,null)),L=_.exports,O={name:"app",components:{HelloWorld:L}},g=O,j=(n("034f"),Object(d["a"])(g,r,i,!1,null,null,null)),y=j.exports,w=n("795b"),A=n.n(w);n("df7c");o["a"].use(f["a"]);var E=new f["a"].Store({state:{title:"My Custom Title",links:["http://google.com","http://coursetro.com","http://youtube.com"]},mutations:{ADD_LINK:function(e,t){e.links.push(t)},REMOVE_LINK:function(e,t){e.links.splice(t,1)},REMOVE_ALL:function(e){e.links=[]}},actions:{removeLink:function(e,t){var n=e.commit;n("REMOVE_LINK",t)},removeAll:function(e){var t=e.commit;return new A.a(function(e,n){setTimeout(function(){t("REMOVE_ALL"),e()},1e3)})}},getters:{countLinks:function(e){return e.links.length}}});o["a"].config.productionTip=!1,new o["a"]({store:E,render:function(e){return e(y)}}).$mount("#app")},"64a9":function(e,t,n){},ab38:function(e,t,n){},ec41:function(e,t,n){}});
//# sourceMappingURL=app.28b866c6.js.map
"use strict";(self.webpackChunkwebpackcustomconfigs=self.webpackChunkwebpackcustomconfigs||[]).push([[826],{28:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(537),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([e.id,"* {\n    margin: 0;\n    border: 1px solid red;\n}\n\n#content {\n    background: yellow;\n \n}\n\n.information {\n    background: red;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,eAAe;AACnB",sourcesContent:["* {\n    margin: 0;\n    border: 1px solid red;\n}\n\n#content {\n    background: yellow;\n \n}\n\n.information {\n    background: red;\n}"],sourceRoot:""}]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);a&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),r="/*# ".concat(o," */");return[n].concat([r]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],u=a.base?s[0]+a.base:s[0],d=r[u]||0,l="".concat(u," ").concat(d);r[u]=d+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,a);a.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=a(e,o),u=0;u<r.length;u++){var d=t(r[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},130:(e,n,t)=>{var a=t(379),o=t.n(a),r=t(795),i=t.n(r),c=t(569),s=t.n(c),u=t(565),d=t.n(u),l=t(216),p=t.n(l),m=t(589),f=t.n(m),v=t(28),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const C=t.p+"fea54eed4d10d604f97e.png",g=document.querySelector("#content");function b(e){e.innerHTML="";const n=new Image;n.src=C;const t=document.createElement("p");t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum, ex vitae auctor convallis, lorem tortor maximus massa, eu egestas nisl tellus non lorem. Etiam mollis, nulla sit amet condimentum volutpat, sapien risus aliquet enim, at pretium ex mi vel urna. Vivamus pretium interdum enim, et elementum lacus. Ut semper mi vel commodo mattis. Vestibulum vel purus vehicula, posuere dolor nec, luctus tortor. Donec a iaculis neque. Nunc egestas efficitur nibh, et tincidunt felis. Praesent nulla justo, bibendum non quam vel, malesuada varius est.",e.appendChild(n),e.appendChild(t)}!function(){const e=document.createElement("div");e.textContent="Sakura",e.classList.add("banner"),g.appendChild(e);const n=document.createElement("nav"),t=document.createElement("div"),a=document.createElement("div");a.textContent="Home",a.classList.add("navItem"),a.addEventListener("click",(function(){b(t)}));const o=document.createElement("div");o.textContent="Menu",o.classList.add("navItem"),o.addEventListener("click",(function(){!function(e){e.innerHTML="";const n=(n,t,a)=>{const o=document.createElement("div"),r=document.createElement("div");r.textContent=n;const i=document.createElement("div");i.textContent=t;const c=document.createElement("div");return c.textContent=a,o.appendChild(r),o.appendChild(i),o.appendChild(c),e.appendChild(o),{food:n,description:t,price:a}};n("onigiri","A simple riceball, served with a dipping sauce","$2.00"),n("takoyaki","A Japanese pancake with octopus filling","$3.00"),n("sushi","Sushi made with fresh salmon","$4.00"),n("sashimi","Sashimi made with fresh tuna","$5.00"),n("tempura","Tempura made with fresh prawns","$6.00"),n("oyakodon","Oyakodon made with chicken","$7.00"),n("tamagoyaki","Tamagoyaki made with egg","$8.00")}(t)}));const r=document.createElement("div");r.textContent="Contact",r.classList.add("navItem"),r.addEventListener("click",(function(){!function(e){e.innerHTML="";const n=document.createElement("h1");n.textContent="Contact us!",e.appendChild(n)}(t)})),n.appendChild(a),n.appendChild(o),n.appendChild(r),g.appendChild(n),g.appendChild(t),b(t)}()}},e=>{e(e.s=130)}]);
//# sourceMappingURL=index.5d981e1b2d9543503181.js.map
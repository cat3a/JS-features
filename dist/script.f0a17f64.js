parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pt4L":[function(require,module,exports) {
var t=document.getElementById("start"),e=document.querySelectorAll(".screen"),n=document.getElementById("time-list"),c=document.getElementById("time"),a=document.getElementById("board"),i=["#ffffff","#ffff00","#ff4500","#800000","#7cfc00","#00ffff","#00008b","#ff1493","#8b008b","#006400","#7fffd4","#000000","#db7093","#5f9ea0","#8B4513"],o=0,r=0;function d(){setInterval(f,1e3),u(),l(o)}function f(){var t=--o;0===t&&s(),t<10&&(t="0".concat(t)),l(t)}function l(t){c.innerHTML="00:".concat(t)}function s(){c.parentNode.classList.add("hide"),a.innerHTML='<h1>Ваш счет: <span class="primary">'.concat(r,"</span></h1>")}function u(){var t=document.createElement("div"),e=m(20,80),n=g(),c=a.getBoundingClientRect(),i=c.width,o=c.height,r=m(0,i-e),d=m(0,o-e);t.classList.add("circle"),t.style.width="".concat(e,"px"),t.style.height="".concat(e,"px"),t.style.backgroundColor="".concat(n),t.style.top="".concat(d,"px"),t.style.left="".concat(r,"px"),a.appendChild(t)}function m(t,e){return Math.round(Math.random()*(t-e)+e)}function g(){return i[Math.floor(Math.random()*i.length)]}function h(){setInterval(function(){var t=document.querySelector(".circle");t&&t.click()},70)}t.addEventListener("click",function(t){t.preventDefault(),e[0].classList.add("up")}),n.addEventListener("click",function(t){t.target.classList.contains("time-btn")&&(o=Number(t.target.getAttribute("data-time")),e[1].classList.add("up"),d())}),a.addEventListener("click",function(t){t.target.classList.contains("circle")&&(r++,t.target.remove(),u())});
},{}]},{},["pt4L"], null)
//# sourceMappingURL=/script.f0a17f64.js.map
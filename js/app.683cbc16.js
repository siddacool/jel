(function(e){function t(t){for(var n,i,c=t[0],a=t[1],l=t[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);h&&h(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},i={app:0},r={app:0},s=[];function c(e){return a.p+"js/"+({about:"about","mobile-menu":"mobile-menu","context-menu":"context-menu"}[e]||e)+"."+{about:"91f20e59","chunk-0752f4da":"0eaaf4a4","chunk-7bd89ebb":"4c951969","mobile-menu":"448dfd12","context-menu":"e3c80bb9"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],o={about:1,"chunk-0752f4da":1,"chunk-7bd89ebb":1,"mobile-menu":1,"context-menu":1};i[e]?t.push(i[e]):0!==i[e]&&o[e]&&t.push(i[e]=new Promise((function(t,o){for(var n="css/"+({about:"about","mobile-menu":"mobile-menu","context-menu":"context-menu"}[e]||e)+"."+{about:"9bf7649e","chunk-0752f4da":"929f4ee4","chunk-7bd89ebb":"83cf0baf","mobile-menu":"be685d42","context-menu":"939bed07"}[e]+".css",r=a.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[e],h.parentNode.removeChild(h),o(s)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(h);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,o[1](d)}r[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/jel/",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=u;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"025e":function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return i}));var n=function(e){return{x:e.clientX,y:e.clientY}},i=function(){return{x:window.innerWidth,y:window.innerHeight}}},"034f":function(e,t,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"06c9":function(e,t,o){"use strict";var n=o("2864"),i=o.n(n);i.a},2864:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Home")],1)},r=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home-landing"},[o("Surface",{attrs:{darkTheme:e.isDarkThemeActive}}),o("Launcher",{attrs:{darkTheme:e.isDarkThemeActive,resetMousePosition:e.resetMousePositionDetect}}),e.isMobile?o("div",[o("MobileMenu",{attrs:{darkTheme:e.isDarkThemeActive,isColorPickerVisible:e.isColorPickerVisible,isMobileMenuVisible:e.isMobileMenuVisible}})],1):e._e(),o("color-picker",{attrs:{backdrop:e.backdrop,backdropFresh:e.backdrop,show:e.isColorPickerVisible,updateValue:e.updateValue,hideColorPicker:e.hideColorPicker,darkTheme:e.isDarkThemeActive,mousePos:e.mousePos}}),e.isAboutVisible?o("div",[o("About",{attrs:{show:e.isAboutVisible,darkTheme:e.isDarkThemeActive}})],1):e._e()],1)},c=[],a=(o("c975"),o("d3b7"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"color-picker",class:e.darkTheme?"dark":null,style:e.position?"top:"+e.position.y+"px; left:"+e.position.x+"px":null},[o("icon-btn",{staticClass:"color-picker_close",attrs:{action:e.hideColorPicker,darkTheme:e.darkTheme,color:"danger",svgSize:"xsmall",size:"xsmall",noGlass:""}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"}})])]),o("span",{staticClass:"color-picker_hex-val"},[e._v(e._s(e.backdropFresh))]),o("div",{staticClass:"color-picker_ui-enclosure"},[o("chrome-picker",{staticClass:"color-picker_ui",attrs:{value:e.backdrop},on:{input:e.updateValue}})],1),o("ul",{staticClass:"color-picker_swatches"},e._l(e.swatches,(function(t,n){return o("li",{key:n,class:t.selected?"selected":null,on:{click:function(t){return e.activeSwatch(n)}}},[o("backdrop",{attrs:{color:t.color}})],1)})),0)],1)}),l=[],u=o("c345"),d=o("025e"),h={name:"color-picker",props:{backdrop:String,show:Boolean,backdropFresh:String,updateValue:Function,hideColorPicker:Function,darkTheme:Boolean,mousePos:Object},components:{"chrome-picker":u["Chrome"]},computed:{position:function(){var e=Object(d["b"])(),t=e.x,o=e.y;if(t<1025)return null;var n=this.mousePos,i=n.x,r=n.y,s=256,c=265,a={left:32,top:32,right:t-32-s,bottom:o-32-c};return i<a.left&&(i=a.left),i>a.right&&(i=a.right),r<a.top&&(r=a.top),r>a.bottom&&(r=a.bottom),{x:i,y:r}},swatches:function(){return this.$store.state.swatches}},methods:{activeSwatch:function(e){this.$store.dispatch("activateSwatch",e)}}},f=h,m=(o("e4c2"),o("2877")),b=Object(m["a"])(f,a,l,!1,null,null,null),p=b.exports,k=function(e,t){var o;return function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];o&&clearTimeout(o),o=setTimeout((function(){t.apply(void 0,i),o=null}),e)}},v={name:"Home",components:{Surface:function(){return o.e("chunk-7bd89ebb").then(o.bind(null,"e752"))},Launcher:function(){return o.e("chunk-0752f4da").then(o.bind(null,"c091"))},MobileMenu:function(){return o.e("mobile-menu").then(o.bind(null,"0864"))},About:function(){return o.e("about").then(o.bind(null,"84ba"))},"color-picker":p},data:function(){return{mousePos:{},isMobile:Object(d["b"])().x<1025}},computed:{isColorPickerVisible:function(){return this.$store.state.isColorPickerVisible},isMobileMenuVisible:function(){return this.$store.state.isMobileMenuVisible},backdrop:function(){return this.$store.getters.backdrop},isDarkThemeActive:function(){return this.$store.state.darkTheme},isAboutVisible:function(){return this.$store.state.isAboutVisible},isKeyboardLocked:function(){return this.$store.state.isKeyboardLocked},swatchesLength:function(){return this.$store.getters.swatches.length}},methods:{updateValue:function(e){this.$store.dispatch("changeActiveSwatchColor",e)},hideColorPicker:function(){this.$store.dispatch("hideColorPicker")},keyDetect:function(e){if(!this.isKeyboardLocked&&(e.altKey&&"p"===e.key&&this.$store.dispatch("toggleColorPicker"),"ArrowRight"===e.key&&this.$store.dispatch("activateNextSwatch"),"ArrowLeft"===e.key&&this.$store.dispatch("activatePrevSwatch"),["1","2","3","4","5","6"].indexOf(e.key)>-1)){var t=parseInt(e.key,10)-1;this.$store.dispatch("activateSwatch",t)}},mousePositionDetect:function(e){this.isColorPickerVisible||Object(d["b"])().x<1025||(this.mousePos=Object(d["a"])(e))},resetMousePositionDetect:function(){this.isColorPickerVisible||Object(d["b"])().x<1025||(this.mousePos={x:32,y:32})}},created:function(){var e=k(50,this.mousePositionDetect);window.addEventListener("keydown",this.keyDetect),window.addEventListener("mousemove",e)},destroyed:function(){window.removeEventListener("keydown"),window.removeEventListener("mousemove")}},g=v,w=Object(m["a"])(g,s,c,!1,null,"05232e27",null),y=w.exports,C={name:"App",components:{Home:y}},x=C,P=(o("034f"),Object(m["a"])(x,i,r,!1,null,null,null)),S=P.exports,T=o("9483");Object(T["a"])("".concat("/jel/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("879b"),o("b611"),o("7db0"),o("c740"),o("d81d");var A=o("5530"),V=o("2f62"),O=o("bfa9"),j=[{color:"#f5207a",selected:!0},{color:"#16E7BE"},{color:"#F32109"},{color:"#009AFF"},{color:"#B600FF"},{color:"#FFC312"}];n["a"].use(V["a"]);var _=new O["a"]({key:"jel-20200305-vue-storage",storage:localStorage,reducer:function(e){return{isColorPickerVisible:e.isColorPickerVisible,swatches:e.swatches,darkTheme:e.darkTheme,isKeyboardLocked:e.isKeyboardLocked,isFirstStart:e.isFirstStart}}}),M=new V["a"].Store({state:{isColorPickerVisible:!0,swatches:j,darkTheme:!1,isKeyboardLocked:!1,isMobileMenuVisible:!1,isAboutVisible:!1,isFirstStart:!0},getters:{backdrop:function(e){return e.swatches.find((function(e){return e.selected})).color},swatches:function(e){return e.swatches.map((function(e){return e.color}))}},mutations:{toggleColorPickerVisibility:function(e){e.isColorPickerVisible=!e.isColorPickerVisible},setColorPickerVisibility:function(e,t){e.isColorPickerVisible=t},setActiveSwatchColor:function(e,t){var o=e.swatches.findIndex((function(e){return e.selected}));e.swatches[o].color=t},setActiveSwatch:function(e,t){var o=e.swatches.map((function(e,o){return o===t?Object(A["a"])({},e,{selected:!0}):Object(A["a"])({},e,{selected:!1})}));e.swatches=o},setNextSwatch:function(e){var t=e.swatches.findIndex((function(e){return e.selected})),o=t+1;if(e.swatches[o]){var n=e.swatches.map((function(e,t){return t===o?Object(A["a"])({},e,{selected:!0}):Object(A["a"])({},e,{selected:!1})}));e.swatches=n}},setPrevSwatch:function(e){var t=e.swatches.findIndex((function(e){return e.selected})),o=t-1;if(e.swatches[o]){var n=e.swatches.map((function(e,t){return t===o?Object(A["a"])({},e,{selected:!0}):Object(A["a"])({},e,{selected:!1})}));e.swatches=n}},toggleDarkTheme:function(e){e.darkTheme=!e.darkTheme},seteDarkTheme:function(e,t){e.darkTheme=t},toggleKeyboardLock:function(e){e.isKeyboardLocked=!e.isKeyboardLocked},toggleAboutVisibility:function(e){e.isAboutVisible=!e.isAboutVisible},setAboutVisibility:function(e,t){e.isAboutVisible=t},setFirstStartEnd:function(e){e.isFirstStart=!1}},actions:{showColorPicker:function(e){e.commit("setColorPickerVisibility",!0)},hideColorPicker:function(e){e.commit("setColorPickerVisibility",!1)},toggleColorPicker:function(e){e.commit("toggleColorPickerVisibility")},changeActiveSwatchColor:function(e,t){var o=t.hex?t.hex:t;e.commit("setActiveSwatchColor",o)},activateSwatch:function(e,t){e.commit("setActiveSwatch",t)},activateNextSwatch:function(e){e.commit("setNextSwatch")},activatePrevSwatch:function(e){e.commit("setPrevSwatch")},activeDarkTheme:function(e){e.commit("seteDarkTheme",!0)},removeDarkTheme:function(e){e.commit("seteDarkTheme",!1)},toggleDarkTheme:function(e){e.commit("toggleDarkTheme")},toggleKeyboardLock:function(e){e.commit("toggleKeyboardLock")},toggleAbout:function(e){e.commit("toggleAboutVisibility")},showAbout:function(e){e.commit("setAboutVisibility",!0)},hideAbout:function(e){e.commit("setAboutVisibility",!1)},endFirstStart:function(e){e.commit("setFirstStartEnd")}},plugins:[_.plugin]}),E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"backdrop",style:{background:e.color}})},F=[],L={name:"backdrop",props:{color:String}},D=L,$=(o("7210"),Object(m["a"])(D,E,F,!1,null,"773ce860",null)),B=$.exports,z={install:function(e){e.component("backdrop",B)}},N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{staticClass:"btn",class:[e.colorClass,e.sizeClass,e.svgSizeClass,e.noGlassClass,e.darkThemeClass],on:{click:e.action}},[e._t("default")],2)},K=[],G={name:"IconButton",props:{color:{validator:function(e){return-1!==["default","danger"].indexOf(e)},default:"default"},size:{validator:function(e){return-1!==["xsmall","small","medium","big","large","xlarge"].indexOf(e)},default:"medium"},svgSize:{validator:function(e){return-1!==["xxsmall","xsmall","small","medium","big","large","xlarge","xxlarge"].indexOf(e)},default:"medium"},action:{type:Function,default:function(e){return e.preventDefault()}},noGlass:{type:Boolean,default:!1},darkTheme:Boolean},computed:{colorClass:function(){return this.color},sizeClass:function(){return this.size},svgSizeClass:function(){return"svg-".concat(this.svgSize)},noGlassClass:function(){return this.noGlass?"no-glass":""},darkThemeClass:function(){return this.darkTheme?"dark":""}}},I=G,H=(o("06c9"),Object(m["a"])(I,N,K,!1,null,"face4510",null)),q=H.exports,J={install:function(e){e.component("icon-btn",q)}},R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal-holder",style:{background:e.color},on:{click:function(t){return t.target!==t.currentTarget?null:e.onClose(t)}}},[o("div",{staticClass:"modal",class:e.darkTheme?"dark":null},[o("header",[e._t("header")],2),o("main",[e._t("default")],2),o("icon-btn-component",{staticClass:"close",attrs:{darkTheme:e.darkTheme,action:e.onClose,color:"danger",svgSize:"xsmall",size:"xsmall",noGlass:""}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"}})])])],1)])},U=[],W={name:"modal",props:{darkTheme:Boolean,show:Boolean,onClose:Function,color:{type:String,default:"transparent"}},components:{"icon-btn-component":q}},X=W,Y=(o("b348"),Object(m["a"])(X,R,U,!1,null,"0e0cbacd",null)),Q=Y.exports,Z={install:function(e){e.component("modal",Q)}};n["a"].config.productionTip=!1,n["a"].use(z),n["a"].use(J),n["a"].use(Z),new n["a"]({store:M,render:function(e){return e(S)}}).$mount("#app")},7210:function(e,t,o){"use strict";var n=o("7692"),i=o.n(n);i.a},7692:function(e,t,o){},"85ec":function(e,t,o){},"879b":function(e,t,o){},b348:function(e,t,o){"use strict";var n=o("b724"),i=o.n(n);i.a},b611:function(e,t,o){},b724:function(e,t,o){},e4c2:function(e,t,o){"use strict";var n=o("fcea"),i=o.n(n);i.a},fcea:function(e,t,o){}});
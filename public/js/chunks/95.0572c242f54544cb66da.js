(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1027:function(t,n){t.exports="/images/_/_/_/_/donjuan/resources/js/src/assets/images/pages/not-authorized.svg"},1028:function(t,n){t.exports="/images/_/_/_/_/donjuan/resources/js/src/assets/images/pages/not-authorized-dark.svg"},1029:function(t,n,e){"use strict";e(752)},1030:function(t,n,e){(n=e(38)(!1)).push([t.i,".misc-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper .misc-inner {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n}\n[dir] .misc-wrapper .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .misc-wrapper .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .misc-wrapper .brand-logo {\n  right: 2rem;\n}\n.misc-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n[dir] .misc-wrapper .misc-inner {\n    margin-top: 4rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}",""]),t.exports=n},1130:function(t,n,e){"use strict";e.r(n);var r=e(60),a=e(237),i=e(131),s=e(119),c=e(27),o=e(84),l={components:{BLink:r.a,BImg:a.a,BButton:i.a,VuexyLogo:s.a},data:function(){return{downImg:e(1027)}},computed:{imgUrl:function(){return"dark"===c.a.state.appConfig.layout.skin?(this.downImg=e(1028),this.downImg):this.downImg}},methods:{loginRoute:function(){var t=JSON.parse(localStorage.getItem("userData"));return Object(o.a)(t?t.role:null)}}},u=(e(1029),e(1)),d=Object(u.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"misc-wrapper"},[e("b-link",{staticClass:"brand-logo"},[e("vuexy-logo"),t._v(" "),e("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("\n      Vuexy\n    ")])],1),t._v(" "),e("div",{staticClass:"misc-inner p-2 p-sm-3"},[e("div",{staticClass:"w-100 text-center"},[e("h2",{staticClass:"mb-1"},[t._v("\n        You are not authorized! 🔐\n      ")]),t._v(" "),e("p",{staticClass:"mb-2"},[t._v("\n        You don’t have permission to access this page. Go Home!!\n      ")]),t._v(" "),e("b-button",{staticClass:"mb-1 btn-sm-block",attrs:{variant:"primary",to:t.loginRoute()}},[t._v("Back to Home")]),t._v(" "),e("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Not authorized page"}})],1)])],1)}),[],!1,null,null,null);n.default=d.exports},237:function(t,n,e){"use strict";e.d(n,"b",(function(){return h})),e.d(n,"a",(function(){return f}));var r=e(17),a=e.n(r),i=e(58),s=e(5),c=e(2),o=e(21),l=e(36),u=e(7),d=e(20),g=e(0),p=e(24);function b(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var m='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=Object(g.d)({alt:Object(g.c)(c.u),blank:Object(g.c)(c.g,!1),blankColor:Object(g.c)(c.u,"transparent"),block:Object(g.c)(c.g,!1),center:Object(g.c)(c.g,!1),fluid:Object(g.c)(c.g,!1),fluidGrow:Object(g.c)(c.g,!1),height:Object(g.c)(c.p),left:Object(g.c)(c.g,!1),right:Object(g.c)(c.g,!1),rounded:Object(g.c)(c.j,!1),sizes:Object(g.c)(c.f),src:Object(g.c)(c.u),srcset:Object(g.c)(c.f),thumbnail:Object(g.c)(c.g,!1),width:Object(g.c)(c.p)},s.db),f=a.a.extend({name:s.db,functional:!0,props:h,render:function(t,n){var e,r=n.props,a=n.data,s=r.alt,c=r.src,g=r.block,h=r.fluidGrow,f=r.rounded,w=Object(d.c)(r.width)||null,j=Object(d.c)(r.height)||null,v=null,O=Object(o.b)(r.srcset).filter(l.a).join(","),x=Object(o.b)(r.sizes).filter(l.a).join(",");return r.blank&&(!j&&w?j=w:!w&&j&&(w=j),w||j||(w=1,j=1),c=function(t,n,e){var r=encodeURIComponent(m.replace("%{w}",Object(p.g)(t)).replace("%{h}",Object(p.g)(n)).replace("%{f}",e));return"data:image/svg+xml;charset=UTF-8,".concat(r)}(w,j,r.blankColor||"transparent"),O=null,x=null),r.left?v="float-left":r.right?v="float-right":r.center&&(v="mx-auto",g=!0),t("img",Object(i.a)(a,{attrs:{src:c,alt:s,width:w?Object(p.g)(w):null,height:j?Object(p.g)(j):null,srcset:O||null,sizes:x||null},class:(e={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||h,"w-100":h,rounded:""===f||!0===f},b(e,"rounded-".concat(f),Object(u.n)(f)&&""!==f),b(e,v,v),b(e,"d-block",g),e)}))}})},752:function(t,n,e){var r=e(1030);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(40)(r,a);r.locals&&(t.exports=r.locals)}}]);
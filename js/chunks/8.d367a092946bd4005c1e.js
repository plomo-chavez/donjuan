(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{23:function(t,a,n){"use strict";n(110);var e=n(1354),o=n(351),s=n(353),r=n(352),i=n(1362),l=(n(195),n(233),n(123)),c=n.n(l),d={components:{BCard:e.a,BCardTitle:o.a,BCardSubTitle:s.a,BCardBody:r.a,BCollapse:i.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(n(896),n(1)),p=Object(u.a)(d,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?n("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(a){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(a){t.code_visible=a},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:n("b-card-body",[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(a){t.code_visible=a},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),t._v(" "),n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);a.a=p.exports},267:function(t,a,n){"use strict";var e=n(38),o=n(168),s=n(169),r=n(40),i=(n(125),{pruebasEndPoint:"/api/auth/pruebas",pruebas2EndPoint:"/api/auth/pruebas2",getUsuarios:"/api/get/usuarios"}),l=function(){function t(a,n){Object(o.a)(this,t),Object(r.a)(this,"axiosIns",null),Object(r.a)(this,"apisConfig",Object(e.a)({},i)),this.axiosIns=a,this.apisConfig=Object(e.a)(Object(e.a)({},this.apisConfig),n)}return Object(s.a)(t,[{key:"pruebas",value:function(){for(var t,a=arguments.length,n=new Array(a),e=0;e<a;e++)n[e]=arguments[e];return(t=this.axiosIns).post.apply(t,[this.apisConfig.pruebasEndPoint].concat(n))}},{key:"pruebas2",value:function(){for(var t,a=arguments.length,n=new Array(a),e=0;e<a;e++)n[e]=arguments[e];return(t=this.axiosIns).post.apply(t,[this.apisConfig.pruebas2EndPoint].concat(n))}},{key:"login",value:function(){for(var t,a=arguments.length,n=new Array(a),e=0;e<a;e++)n[e]=arguments[e];return(t=this.axiosIns).post.apply(t,[this.apisConfig.loginEndpoint].concat(n))}},{key:"getUsuarios",value:function(){for(var t,a=arguments.length,n=new Array(a),e=0;e<a;e++)n[e]=arguments[e];return(t=this.axiosIns).post.apply(t,[this.apisConfig.getUsuarios].concat(n))}}]),t}();var c,d=n(170),u=(c=d.a,{apis:new l(c,{})}).apis;a.a=u},3:function(t,a,n){"use strict";var e=n(23);a.a=e.a},41:function(t,a,n){"use strict";var e={components:{BAvatar:n(530).a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=(n(898),n(1)),s=Object(o.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(a){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);a.a=s.exports},433:function(t,a,n){"use strict";n.r(a);var e=n(126),o={name:"HelloWorld",components:{StreamBarcodeReader:n(783).a},data:function(){return{text:"",id:null}},props:{msg:String},methods:{onDecode:function(t,a,n){var e=this;console.log(t,a,n),this.text=t,this.id&&clearTimeout(this.id),this.id=setTimeout((function(){e.text===t&&(e.text="")}),5e3)},onLoaded:function(){console.log("load")}}},s=n(1),r=Object(s.a)(o,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"hello"},[n("StreamBarcodeReader",{on:{decode:function(a,n,e){return t.onDecode(a,n,e)},loaded:function(){return t.onLoaded()}}}),t._v("\n  Input Value: "+t._s(t.text||"Nothing")+"\n")],1)}),[],!1,null,"5115e0e6",null).exports,i=n(154),l=n(204),c=(n(167),n(110),n(1353)),d=n(1352),u=n(350),p=n(1444),b=n(309),f=n(1351),m=n(3),w=n(12),g=n(27),v=n(83),h=n(56),y=n(267),x=n(116),k={components:{BFormInput:c.a,BRow:d.a,BCol:u.a,BFormGroup:p.a,BCardCode:m.a,BButton:e.a,BModal:b.a,BCardText:f.a},directives:{Ripple:w.a},data:function(){return{user:null,password:"demo123"}},mixins:[h.a],props:{openModal:{type:Boolean,default:!1}},watch:{openModal:function(t){t&&this.showModal()}},beforeMount:function(){this.user=g.a.state.app.userData.name},methods:{goToLogout:function(){Object(v.c)()},goToRefreshSession:function(){var t=this;return Object(l.a)(Object(i.a)().mark((function a(){return Object(i.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:null==t.password?t.messageToast({message:"Introduce la contraseña para continuar.",color:"danger"}):x.a.login({email:g.a.state.app.userData.email,password:t.password}).then((function(a){console.log("response",a);var n=a.data;if(console.log("data",n),n.result){var e=n.data.user;console.log("userData",e),localStorage.setItem("userData",JSON.stringify(e)),g.a.commit("app/UPDATE_USERDATA",e),localStorage.setItem("tk",n.data.user.token),t.$ability.update(e.ability),t.messageToast({message:"Sesión refrescada con exito."}),setTimeout((function(){window.location.reload()}))}else t.$toast({component:ToastificationContent,position:"top-right",props:{title:n.message,icon:"CoffeeIcon",variant:"danger",text:n.data}})})).catch((function(a){console.log(a),t.$refs.loginForm.setErrors(a.response.data.error)}));case 1:case"end":return a.stop()}}),a)})))()},login:function(){Object(v.c)()},showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},toggleModal:function(){this.$refs["my-modal"].toggle("#toggle-btn")}}},_=Object(s.a)(k,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("b-modal",{ref:"my-modal",attrs:{"hide-footer":"","ok-only":"","no-close-on-backdrop":"",title:"Using Component Methods"}},[n("div",{staticClass:"col-12 col-md-10 mx-auto"},[n("b-row",[n("b-col",{staticClass:" col-12 mb-1"},[n("b-form-group",{attrs:{label:"Usuario"}},[n("b-form-input",{attrs:{readonly:""},model:{value:t.user,callback:function(a){t.user=a},expression:"user"}})],1)],1),t._v(" "),n("b-col",{staticClass:" col-12 mb-1"},[n("b-form-group",{attrs:{label:"Contraseña"}},[n("b-form-input",{attrs:{autocomplete:!1,type:"password",placeholder:"Introduce contraseña"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1)],1)],1),t._v(" "),n("b-row",{attrs:{"align-h":"between"}},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:t.goToLogout}},[t._v(" Cerrar sesión")]),t._v(" "),n("b-button",{attrs:{variant:"relief-primary"},on:{click:t.goToRefreshSession}},[t._v(" Refrescar sesión")])],1)],1)}),[],!1,null,null,null).exports,C={components:{BButton:e.a,ModalValidSession:_,Scann:r},data:function(){return{data:{},openModal:!1}},mixins:[h.a],created:function(){var t=this;setTimeout((function(){t.openModal=!0}),1e3)},methods:{callApiWithHeaders:function(){var t=this;setTimeout((function(){t.loading(),setTimeout((function(){t.loading(!1)}),1e3)}),100)},callApi:function(){y.a.pruebas({}).then((function(t){})).catch((function(t){console.log(t)}))}}},S=Object(s.a)(C,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"hidden"},[n("b-button",{staticClass:"btn-tour-finish",attrs:{size:"sm",variant:"primary"},on:{click:function(a){return t.callApiWithHeaders()}}},[t._v("Con headers")]),t._v(" "),n("b-button",{staticClass:"btn-tour-finish",attrs:{size:"sm",variant:"primary"},on:{click:function(a){return t.callApi()}}},[t._v("Sin headers")])],1),t._v(" "),n("Scann")],1)}),[],!1,null,null,null);a.default=S.exports},526:function(t,a,n){var e=n(897);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(39)(e,o);e.locals&&(t.exports=e.locals)},527:function(t,a,n){var e=n(899);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(39)(e,o);e.locals&&(t.exports=e.locals)},56:function(t,a,n){"use strict";n(197),n(110),n(184),n(456);var e=n(41);n(901);a.a={methods:{loading:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];document.getElementById("loading-bg").style.display=t?"block":"none"},messageToast:function(t){var a=t.message,n=void 0===a?"":a,o=t.color,s=void 0===o?"success":o,r=t.title,i=void 0===r?"Notificación de sistema":r,l=t.icon,c=void 0===l?"MessageCircleIcon":l;t.time;this.$toast({component:e.a,position:"top-right",props:{title:i,icon:c,variant:s,text:n}})},capitalize:function(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""},messageSweet:function(t){var a=t.message,n=void 0===a?"":a,e=(t.color,t.title),o=void 0===e?"Notificación de sistema":e,s=t.icon,r=void 0===s?"success":s,i=t.time,l=void 0===i?3e3:i;this.$swal({title:o,text:n,icon:r,timer:l,customClass:{confirmButton:"btn btn-primary"},buttonsStyling:!1})},copyObject:function(t){return JSON.parse(JSON.stringify(t))},messageConfirm:function(t){var a=this,n=t.message,e=void 0===n?"Esta acción ya no se va a poder deshacer":n,o=t.title,s=void 0===o?"¿Desea eliminar este registro?":o,r=t.icon,i=void 0===r?"warning":r,l=t.showCancelButton,c=void 0===l||l,d=t.confirmButtonText,u=void 0===d?"Si, eliminar":d,p=t.cancelButtonText,b=void 0===p?"No, cancelar":p,f=t.cancelFunction,m=void 0===f?null:f,w=t.confirmFunction,g=void 0===w?null:w,v=t.messageCancel,h=void 0===v||v;console.log(e),this.$swal({title:s,text:e,icon:i,showCancelButton:c,confirmButtonText:u,cancelButtonText:b,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(t){t.value?"function"==typeof g?g():console.log("Falta funcion de confirmación"):"cancel"===t.dismiss&&("function"==typeof m?m():h&&a.$swal({title:"Proceso cancelado",text:"Cancelo correctamente el proceso",icon:"error",timer:3e3,customClass:{confirmButton:"btn btn-success"}}))}))},formatoFechaYMD:function(t){return new Date(t).toISOString().slice(0,10).replace(/-/g,"/")},formatoFechaBD:function(t){return new Date(t).toLocaleString("es-ES",{timeZone:"UTC",hour12:!0})},formatoMoney:function(t){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=parseInt(t).toLocaleString("es-ES",{style:"currency",currency:"MXN"});return(a?"$ ":"")+n}}}},896:function(t,a,n){"use strict";n(526)},897:function(t,a,n){(a=n(37)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #0ab5e9;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=a},898:function(t,a,n){"use strict";n(527)},899:function(t,a,n){(a=n(37)(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=a},901:function(t,a,n){var e=n(902);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(39)(e,o);e.locals&&(t.exports=e.locals)},902:function(t,a,n){var e=n(37),o=n(536);(a=e(!1)).i(o),a.push([t.i,"[dir] .swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n}\n\n[dir] .swal2-container .swal2-popup .swal2-close:focus {\n  box-shadow: none;\n}\n\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.5rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n\n[dir] .swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 1rem;\n  color: #6e6b7b;\n  line-height: 1.45;\n}\n\n[dir] .swal2-container .swal2-popup input.swal2-input {\n  padding: 0.438rem 1rem;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n}\n\n[dir] .swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #0ab5e9 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #0ab5e9;\n}\n\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, [dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #48cef7;\n}\n\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #0ab5e9;\n}\n\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n}\n\n[dir] .swal2-container .swal2-popup pre {\n  margin-top: 0.5rem;\n}\n\n.swal2-container .swal2-popup .swal2-footer {\n  color: #6e6b7b;\n}\n\n[dir] .swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n}\n\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n\n[dir] .dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  color: #b4b7bd;\n}\n\n[dir] .dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n}\n\n.dark-layout .swal2-container .swal2-modal .swal2-content, .dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n\n.dark-layout .swal2-container .swal2-modal pre, .dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  color: #b4b7bd;\n}\n\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n}\n\n.dark-layout .swal2-container .swal2-validation-message {\n  color: #b4b7bd;\n}\n\n[dir] .dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n}\n\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}",""]),t.exports=a}}]);
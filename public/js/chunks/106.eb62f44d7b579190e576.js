(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1370:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(17),o=n.n(i),r=n(58),s=n(5),a=n(2),c=n(0),l=Object(c.d)({textTag:Object(c.c)(a.u,"p")},s.u),u=o.a.extend({name:s.u,functional:!0,props:l,render:function(t,e){var n=e.props,i=e.data,o=e.children;return t(n.textTag,Object(r.a)(i,{staticClass:"card-text"}),o)}})},448:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var i=n(17),o=n.n(i);/^2\./.test(o.a.version)||o.a.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+o.a.version);var r="_vue_clickaway_handler";function s(t,e,n){a(t);var i=n.context,o=e.value;if("function"==typeof o){var s=!1;setTimeout((function(){s=!0}),0),t[r]=function(e){var n=e.path||(e.composedPath?e.composedPath():void 0);if(s&&(n?n.indexOf(t)<0:!t.contains(e.target)))return o.call(i,e)},document.documentElement.addEventListener("click",t[r],!1)}}function a(t){document.documentElement.removeEventListener("click",t[r],!1),delete t[r]}var c={bind:s,update:function(t,e){e.value!==e.oldValue&&s(t,e)},unbind:a};Array.from||(Array.from=t=>[].slice.call(t)),Array.isArray||(Array.isArray=t=>"[object Array]"===Object.prototype.toString.call(t));const l=Array.from,u=Array.isArray,h=27,d=37,b=38,p=39,f=40,v=(t,e,n)=>{t&&t.addEventListener&&t.addEventListener(e,n)},m=(t,e,n)=>{t&&t.removeEventListener&&t.removeEventListener(e,n)},y=t=>O(t)?t.getBoundingClientRect():null,O=t=>Boolean(t&&t.nodeType===Node.ELEMENT_NODE),S=t=>{if(!O(t)||(e=document.body,n=t,!e||"function"!=typeof e.contains||!e.contains(n)))return!1;var e,n;if("none"===t.style.display)return!1;const i=y(t);return Boolean(i&&i.height>0&&i.width>0)},g=(t,e)=>l((O(e)?e:document).querySelectorAll(t)),j=(t,e,n)=>{e&&O(t)&&t.setAttribute(e,n)},w=(t,e)=>{let n=t.parentElement;for(;null!==n&&!n.classList.contains(e);)n=n.parentElement;return n},E=(t,e={},n={},i={})=>{const o=n[t]||i[t];return"function"==typeof o?o(e):o};var x={directives:{onClickaway:c},props:{closeOnClick:{type:Boolean,default:!0},closeOnScroll:{type:Boolean,default:!0},lazy:{type:Boolean,default:!1},itemSelector:{type:[String,Array],default:()=>[".v-context-item",".v-context > li > a"]},role:{type:String,default:"menu"},subMenuOffset:{type:Number,default:10},useScrollHeight:{type:Boolean,default:!1},useScrollWidth:{type:Boolean,default:!1},heightOffset:{type:Number,default:25},widthOffset:{type:Number,default:25},tag:{type:String,default:"ul"}},computed:{style(){return this.show?{top:this.top+"px",left:this.left+"px"}:null}},data:()=>({top:null,left:null,show:!1,data:null,localItemSelector:"",activeSubMenu:null}),created(){this.localItemSelector=this.mapItemSelector(this.itemSelector)},beforeDestroy(){this.closeOnScroll&&this.removeScrollEventListener()},methods:{addScrollEventListener(){v(window,"scroll",this.close)},addHoverEventListener(t){t.querySelectorAll(".v-context__sub").forEach(t=>{v(t,"mouseenter",this.openSubMenu),v(t,"mouseleave",this.closeSubMenu)})},close(){if(this.show){for(;null!==this.activeSubMenu;)w(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));this.resetData(),this.removeHoverEventListener(this.$el),this.closeOnScroll&&this.removeScrollEventListener(),this.$emit("close")}},focusItem(t,e){const n=e.find((e,n)=>n===t);n&&n.focus()},focusNext(t,e){this.show&&(t.preventDefault(),t.stopPropagation(),this.$nextTick(()=>{const n=this.getItems();if(n.length<1)return;let i=n.indexOf(t.target);e&&i>0?i--:!e&&i<n.length-1&&i++,i<0&&(i=0),this.focusItem(i,n)}))},getItems(){return(g(this.localItemSelector,this.activeSubMenu||this.$el)||[]).filter(S)},mapItemSelector:t=>(u(t)&&(t=t.map(t=>t+":not(.disabled):not([disabled])").join(", ")),t),onClick(){this.close()},onKeydown(t){const e=t.keyCode;if(e===h)this.close();else if(e===f)this.focusNext(t,!1);else if(e===b)this.focusNext(t,!0);else if(e===p){const e=w(t.target,"v-context__sub");e&&e.getElementsByClassName("v-context")[0]!==this.activeSubMenu&&(e.dispatchEvent(new Event("mouseenter")),this.focusNext(t,!1))}else if(e===d){if(!this.activeSubMenu)return;const t=w(this.activeSubMenu,"v-context__sub");t.dispatchEvent(new Event("mouseleave"));const e=this.getItems(),n=e.indexOf(t.getElementsByTagName("a")[0]);this.focusItem(n,e)}},open(t,e){this.data=e,this.show=!0,this.$nextTick(()=>{[this.top,this.left]=this.positionMenu(t.clientY,t.clientX,this.$el),this.$el.focus(),this.setItemRoles(),this.addHoverEventListener(this.$el),this.closeOnScroll&&this.addScrollEventListener(),this.$emit("open",t,this.data,this.top,this.left)})},openSubMenu(t){const e=this.getSubMenuElementByEvent(t),n=w(e.parentElement,"v-context"),i=y(t.target);if(this.activeSubMenu!==n)for(;null!==this.activeSubMenu&&this.activeSubMenu!==n&&this.activeSubMenu!==e;)w(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));e.style.display="block";let[o,r]=this.positionMenu(i.top,i.right-this.subMenuOffset,e);e.style.left=r+"px",e.style.top=o+"px",this.activeSubMenu=e},closeSubMenu(t){const e=this.getSubMenuElementByEvent(t),n=w(e,"v-context");if(this.activeSubMenu!==e)for(;null!==this.activeSubMenu&&this.activeSubMenu!==e;)w(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));e.style.display="none",this.activeSubMenu=n&&w(n,"v-context__sub")?n:null},getSubMenuElementByEvent:t=>t.target.getElementsByTagName("ul")[0],positionMenu(t,e,n){const i=this.useScrollHeight?n.scrollHeight:n.offsetHeight,o=window.innerHeight-i-this.heightOffset,r=this.useScrollWidth?n.scrollWidth:n.offsetWidth,s=window.innerWidth-r-this.widthOffset;return t>o&&(t=o),e>s&&(e=s),[t,e]},removeScrollEventListener(){m(window,"scroll",this.close)},removeHoverEventListener(t){t.querySelectorAll(".v-context__sub").forEach(t=>{m(t,"mouseenter",this.openSubMenu),m(t,"mouseleave",this.closeSubMenu)})},resetData(){this.top=null,this.left=null,this.data=null,this.show=!1},setItemRoles(){g(this.localItemSelector,this.$el).forEach(t=>{j(t,"role","menuitem"),j(t,"tabindex","-1")})}},watch:{closeOnScroll(t,e){t!==e&&(t&&this.show?this.addScrollEventListener():this.removeScrollEventListener())},itemSelector(t,e){t!==e&&(this.localItemSelector=this.mapItemSelector(t))}},render(t){if(this.lazy&&!this.show)return t(!1);const e={"!contextmenu":t=>{t.preventDefault()},keydown:this.onKeydown};this.closeOnClick&&(e.click=this.onClick);const n=[{name:"on-clickaway",value:this.close,rawName:"v-on-clickaway"}];return this.lazy||n.push({name:"show",value:this.show,rawName:"v-show",expression:"show"}),t(this.tag,{staticClass:"v-context",style:this.style,attrs:{tabindex:"-1",role:this.role,"aria-hidden":this.lazy?null:String(!this.show)},on:e,directives:n},[E("default",{data:this.data},this.$scopedSlots,this.$slots)])}}},540:function(t,e,n){"use strict";n.d(e,"b",(function(){return I})),n.d(e,"a",(function(){return N}));var i=n(17),o=n.n(i),r=n(5),s=n(9),a=n(2),c=n(18),l=n(7),u=n(20),h=n(11),d=n(0),b=n(103),p=n(31),f=n(58),v=n(43),m=n(24),y=n(72),O=n(317);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=Object(h.j)(O.b,["content"]),E=Object(d.d)(Object(h.m)(g(g({},w),{},{icon:Object(d.c)(a.u)})),r.bb),x=o.a.extend({name:r.bb,functional:!0,props:E,render:function(t,e){var n=e.data,i=e.props,r=e.parent,s=Object(m.e)(Object(m.h)(i.icon||"")).replace(v.p,"");return t(s&&function t(e,n){if(!e)return o.a.component(n);var i=(e.$options||{}).components;return i&&i[n]||t(e.$parent,n)}(r,"BIcon".concat(s))||y.a,Object(f.a)(n,{props:Object(d.e)(w,i)}))}}),M=n(131),k=n(60);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=["sm",null,"lg"],I=function(t){return t=Object(l.n)(t)&&Object(l.i)(t)?Object(u.b)(t,0):t,Object(l.h)(t)?"".concat(t,"px"):t||null},z=Object(h.j)(k.b,["active","event","routerTag"]),C=Object(d.d)(Object(h.m)(P(P({},z),{},{alt:Object(d.c)(a.u,"avatar"),ariaLabel:Object(d.c)(a.u),badge:Object(d.c)(a.j,!1),badgeLeft:Object(d.c)(a.g,!1),badgeOffset:Object(d.c)(a.u),badgeTop:Object(d.c)(a.g,!1),badgeVariant:Object(d.c)(a.u,"primary"),button:Object(d.c)(a.g,!1),buttonType:Object(d.c)(a.u,"button"),icon:Object(d.c)(a.u),rounded:Object(d.c)(a.j,!1),size:Object(d.c)(a.p),square:Object(d.c)(a.g,!1),src:Object(d.c)(a.u),text:Object(d.c)(a.u),variant:Object(d.c)(a.u,"secondary")})),r.c),N=o.a.extend({name:r.c,mixins:[p.a],inject:{bvAvatarGroup:{default:null}},props:C,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return I(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===_.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,i=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return i?{marginLeft:i,marginRight:i}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,i=this.badgeOffset||"0px";return{fontSize:-1===_.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?i:null,bottom:e?null:i,left:n?i:null,right:n?null:i}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(s.x,t)},onClick:function(t){this.$emit(s.f,t)}},render:function(t){var e,n=this.computedVariant,i=this.disabled,o=this.computedRounded,r=this.icon,s=this.localSrc,a=this.text,l=this.fontStyle,u=this.marginStyle,h=this.computedSize,p=this.button,f=this.buttonType,v=this.badge,m=this.badgeVariant,O=this.badgeStyle,S=!p&&Object(b.d)(this),g=p?M.a:S?k.a:"span",j=this.alt,w=this.ariaLabel||null,E=null;this.hasNormalizedSlot()?E=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):s?(E=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:s,alt:j},on:{error:this.onImgError}}),E=t("span",{staticClass:"b-avatar-img"},[E])):E=r?t(x,{props:{icon:r},attrs:{"aria-hidden":"true",alt:j}}):a?t("span",{staticClass:"b-avatar-text",style:l},[t("span",a)]):t(y.k,{attrs:{"aria-hidden":"true",alt:j}});var L=t(),I=this.hasNormalizedSlot(c.c);if(v||""===v||I){var C=!0===v?"":v;L=t("span",{staticClass:"b-avatar-badge",class:A({},"badge-".concat(m),m),style:O},[I?this.normalizeSlot(c.c):C])}return t(g,{staticClass:"b-avatar",class:(e={},A(e,"".concat("b-avatar","-").concat(h),h&&-1!==_.indexOf(h)),A(e,"badge-".concat(n),!p&&n),A(e,"rounded",!0===o),A(e,"rounded-".concat(o),o&&!0!==o),A(e,"disabled",i),e),style:P(P({},u),{},{width:h,height:h}),attrs:{"aria-label":w||null},props:p?{variant:n,disabled:i,type:f}:S?Object(d.e)(z,this):{},on:p||S?{click:this.onClick}:{}},[E,L])}})}}]);
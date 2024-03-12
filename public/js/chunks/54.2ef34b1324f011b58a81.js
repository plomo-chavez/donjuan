(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1370:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var o=e(17),r=e.n(o),a=e(58),i=e(5),c=e(2),s=e(0),l=Object(s.d)({textTag:Object(s.c)(c.u,"p")},i.u),u=r.a.extend({name:i.u,functional:!0,props:l,render:function(t,n){var e=n.props,o=n.data,r=n.children;return t(e.textTag,Object(a.a)(o,{staticClass:"card-text"}),r)}})},1371:function(t,n,e){"use strict";e.d(n,"a",(function(){return y}));var o=e(58),r=e(5),a=e(2),i=e(21),c=e(70),s=e(36),l=e(196),u=e(11),p=e(0),b=e(24);function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var m=["start","end","center"],g=Object(l.a)((function(t,n){return(n=Object(b.h)(Object(b.g)(n)))?Object(b.c)(["row-cols",t,n].filter(s.a).join("-")):null})),h=Object(l.a)((function(t){return Object(b.c)(t.replace("cols",""))})),O=[],y={name:r.Jb,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(c.b)().reduce((function(t,n){return t[Object(p.g)(n,"cols")]=Object(p.c)(a.p),t}),Object(u.c)(null)),O=Object(u.h)(t),Object(p.d)(Object(u.m)(v(v({},t),{},{alignContent:Object(p.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(m,"between","around","stretch"),t)})),alignH:Object(p.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(m,"between","around"),t)})),alignV:Object(p.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(m,"baseline","stretch"),t)})),noGutters:Object(p.c)(a.g,!1),tag:Object(p.c)(a.u,"div")})),r.Jb)),this.props},render:function(t,n){var e,r=n.props,a=n.data,i=n.children,c=r.alignV,s=r.alignH,l=r.alignContent,u=[];return O.forEach((function(t){var n=g(h(t),r[t]);n&&u.push(n)})),u.push((f(e={"no-gutters":r.noGutters},"align-items-".concat(c),c),f(e,"justify-content-".concat(s),s),f(e,"align-content-".concat(l),l),e)),t(r.tag,Object(o.a)(a,{staticClass:"row",class:u}),i)}}},1451:function(t,n,e){"use strict";e.r(n);var o=e(1371),r=e(360),a=e(131),i=e(1370),c=e(23),s=e(12),l=e(41),u={components:{BButton:a.a,BCardCode:c.a,BCardText:i.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codeVariant:'\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- primary trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="showToast(\'primary\')"\n    >\n      Primary\n    </b-button>\n\n    \x3c!-- secondary trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(186, 191, 199, 0.15)\'"\n      variant="outline-secondary"\n      @click="showToast(\'secondary\')"\n    >\n      Secondary\n    </b-button>\n\n    \x3c!-- success trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n      variant="outline-success"\n      @click="showToast(\'success\')"\n    >\n      Success\n    </b-button>\n\n    \x3c!-- danger trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n      variant="outline-danger"\n      @click="showToast(\'danger\')"\n    >\n      Danger\n    </b-button>\n\n    \x3c!-- warning trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-warning"\n      @click="showToast(\'warning\')"\n    >\n      Warning\n    </b-button>\n\n    \x3c!-- info trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n      variant="outline-info"\n      @click="showToast(\'info\')"\n    >\n      Info\n    </b-button>\n\n    \x3c!-- dark trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(30, 30, 30, 0.15)\'"\n      variant="outline-dark"\n      @click="showToast(\'dark\')"\n    >\n      Dark\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\nimport ToastificationContent from \'@core/components/toastification/ToastificationContent.vue\'\n\nexport default {\n  components: {\n    BButton,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Notification\',\n          icon: \'BellIcon\',\n          text: \'👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.\',\n          variant,\n        },\n      })\n    },\n  },\n}\n<\/script>\n'}},methods:{showToast:function(t){this.$toast({component:l.a,props:{title:"Notification",icon:"BellIcon",text:"👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.",variant:t}})}}},p=e(1),b=Object(p.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Variant"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeVariant)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("You can use ")]),t._v(" "),e("code",[t._v("variant")]),t._v(" "),e("span",[t._v(" prop for color variant.")])]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary")}}},[t._v("\n      Primary\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:function(n){return t.showToast("secondary")}}},[t._v("\n      Secondary\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-success"},on:{click:function(n){return t.showToast("success")}}},[t._v("\n      Success\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-danger"},on:{click:function(n){return t.showToast("danger")}}},[t._v("\n      Danger\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-warning"},on:{click:function(n){return t.showToast("warning")}}},[t._v("\n      Warning\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-info"},on:{click:function(n){return t.showToast("info")}}},[t._v("\n      Info\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(30, 30, 30, 0.15)",expression:"'rgba(30, 30, 30, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-dark"},on:{click:function(n){return t.showToast("dark")}}},[t._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,d={components:{BButton:a.a,BCardCode:c.a,BCardText:i.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codePosition:"\n<template>\n  <div>\n    <h5 class=\"mb-0\">Top Positions</h5>\n    <div class=\"demo-inline-spacing\">\n\n      \x3c!-- Top right --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('primary','top-right')\"\n      >\n        Top Right\n      </b-button>\n\n      \x3c!-- Top left --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('secondary','top-left')\"\n      >\n        Top Left\n      </b-button>\n\n      \x3c!-- top center --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('success','top-center')\"\n      >\n        Top Center\n      </b-button>\n    </div>\n\n    <h5 class=\"mt-2 mb-0\">\n      Bottom Positions\n    </h5>\n    <div class=\"demo-inline-spacing\">\n      \x3c!-- bottom right --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('danger','bottom-right')\"\n      >\n        Bottom Right\n      </b-button>\n\n      \x3c!-- bottom left --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('warning','bottom-left')\"\n      >\n        Bottom Left\n      </b-button>\n\n      \x3c!-- bottom center --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('info','bottom-center')\"\n      >\n        Bottom Center\n      </b-button>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButton, BCardText } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, position) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon: 'InfoIcon',\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      },\n      {\n        position,\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{showToast:function(t,n){this.$toast({component:l.a,props:{title:"Notification",icon:"InfoIcon",text:"I do not think that word means what you think it means.",variant:t}},{position:n})}}},v=Object(p.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Position"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codePosition)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("Position of the toast on the screen. Can be any of ")]),t._v(" "),e("code",[t._v("top-right")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("top-center")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("top-left")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("bottom-right")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("bottom-center")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("bottom-left")]),t._v(".\n  ")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("\n    Top Positions\n  ")]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary","top-right")}}},[t._v("\n      Top Right\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("secondary","top-left")}}},[t._v("\n      Top Left\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("success","top-center")}}},[t._v("\n      Top Center\n    ")])],1),t._v(" "),e("h5",{staticClass:"mt-2 mb-0"},[t._v("\n    Bottom Positions\n  ")]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("danger","bottom-right")}}},[t._v("\n      Bottom Right\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("warning","bottom-left")}}},[t._v("\n      Bottom Left\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("info","bottom-center")}}},[t._v("\n      Bottom Center\n    ")])],1)],1)}),[],!1,null,null,null).exports,f={components:{BButton:a.a,BCardCode:c.a,BCardText:i.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codeIcon:"\n<template>\n  <div class=\"demo-inline-spacing\">\n    \x3c!-- mail icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary','MailIcon')\"\n    >\n      Icon Mail\n    </b-button>\n\n    \x3c!-- Inbox icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('secondary','InboxIcon')\"\n    >\n      Icon Inbox\n    </b-button>\n\n    \x3c!-- Check icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('success','CheckIcon')\"\n    >\n      Icon Check\n    </b-button>\n\n    \x3c!-- heart icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('danger','HeartIcon')\"\n    >\n      Icon Heart\n    </b-button>\n\n    \x3c!-- favorite icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('warning','StarIcon')\"\n    >\n      Icon Favorite\n    </b-button>\n\n    \x3c!-- slack icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('info','SlackIcon')\"\n    >\n      Icon Slack\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardCode,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, icon) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon,\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{showToast:function(t,n){this.$toast({component:l.a,props:{title:"Notification",icon:n,text:"I do not think that word means what you think it means.",variant:t}})}}},m=Object(p.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Icon"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeIcon)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("Custom icon class to be used. Use ")]),t._v(" "),e("code",[t._v("icon")]),t._v(" "),e("span",[t._v(" prop to set icon.")])]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary","MailIcon")}}},[t._v("\n      Icon Mail\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("secondary","InboxIcon")}}},[t._v("\n      Icon Inbox\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("success","CheckIcon")}}},[t._v("\n      Icon Check\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("danger","HeartIcon")}}},[t._v("\n      Icon Heart\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("warning","StarIcon")}}},[t._v("\n      Icon Favorite\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("info","SlackIcon")}}},[t._v("\n      Icon Slack\n    ")])],1)],1)}),[],!1,null,null,null).exports,g={components:{BButton:a.a,BCardCode:c.a,BCardText:i.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codeTime:"\n<template>\n  <div class=\"demo-inline-spacing\">\n\n    \x3c!-- default time trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary')\"\n    >\n      Time Default\n    </b-button>\n\n    \x3c!-- 4s delay trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary',4000)\"\n    >\n      Time 4s(4000)\n    </b-button>\n\n    \x3c!-- 8s delay trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary',8000)\"\n    >\n      Time 8s(8000)\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton} from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, timeout) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon: 'BellIcon',\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      },\n      {\n        timeout,\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{showToast:function(t,n){this.$toast({component:l.a,props:{title:"Notification",icon:"BellIcon",text:"I do not think that word means what you think it means.",variant:t}},{timeout:n})}}},h=Object(p.a)(g,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Timeout"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeTime)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[t._v("\n    How many milliseconds for the toast to be auto dismissed, or false to disable.\n  ")]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary")}}},[t._v("\n      Time Default\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary",4e3)}}},[t._v("\n      Time 4s(4000)\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary",8e3)}}},[t._v("\n      Time 8s(8000)\n    ")])],1)],1)}),[],!1,null,null,null).exports,O={components:{BRow:o.a,BCol:r.a,ToastificationVariant:b,ToastificationPosition:v,ToastificationIcon:m,ToastificationTimeout:h}},y=Object(p.a)(O,(function(){var t=this.$createElement,n=this._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("toastification-variant"),this._v(" "),n("toastification-position"),this._v(" "),n("toastification-icon"),this._v(" "),n("toastification-timeout")],1)],1)}),[],!1,null,null,null);n.default=y.exports},23:function(t,n,e){"use strict";e(120);var o=e(1373),r=e(361),a=e(363),i=e(362),c=e(1382),s=(e(198),e(234),e(128)),l=e.n(s),u={components:{BCard:o.a,BCardTitle:r.a,BCardSubTitle:a.a,BCardBody:i.a,BCollapse:c.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(e(910),e(1)),b=Object(p.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?e("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(n){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:e("b-card-body",[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),t._v(" "),e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=b.exports},360:function(t,n,e){"use strict";e.d(n,"a",(function(){return j}));var o=e(58),r=e(5),a=e(2),i=e(43),c=e(21),s=e(70),l=e(36),u=e(7),p=e(196),b=e(11),d=e(0),v=e(24);function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){g(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var h=["auto","start","end","center","baseline","stretch"],O=Object(p.a)((function(t,n,e){var o=t;if(!Object(u.p)(e)&&!1!==e)return n&&(o+="-".concat(n)),"col"!==t||""!==e&&!0!==e?(o+="-".concat(e),Object(v.c)(o)):Object(v.c)(o)})),y=Object(b.c)(null),j={name:r.y,functional:!0,get props(){return delete this.props,this.props=(t=Object(s.b)().filter(l.a),n=t.reduce((function(t,n){return t[n]=Object(d.c)(a.i),t}),Object(b.c)(null)),e=t.reduce((function(t,n){return t[Object(d.g)(n,"offset")]=Object(d.c)(a.p),t}),Object(b.c)(null)),o=t.reduce((function(t,n){return t[Object(d.g)(n,"order")]=Object(d.c)(a.p),t}),Object(b.c)(null)),y=Object(b.a)(Object(b.c)(null),{col:Object(b.h)(n),offset:Object(b.h)(e),order:Object(b.h)(o)}),Object(d.d)(Object(b.m)(m(m(m(m({},n),e),o),{},{alignSelf:Object(d.c)(a.u,null,(function(t){return Object(c.a)(h,t)})),col:Object(d.c)(a.g,!1),cols:Object(d.c)(a.p),offset:Object(d.c)(a.p),order:Object(d.c)(a.p),tag:Object(d.c)(a.u,"div")})),r.y));var t,n,e,o},render:function(t,n){var e,r=n.props,a=n.data,c=n.children,s=r.cols,l=r.offset,u=r.order,p=r.alignSelf,b=[];for(var d in y)for(var v=y[d],f=0;f<v.length;f++){var m=O(d,v[f].replace(d,""),r[v[f]]);m&&b.push(m)}var h=b.some((function(t){return i.e.test(t)}));return b.push((g(e={col:r.col||!h&&!s},"col-".concat(s),s),g(e,"offset-".concat(l),l),g(e,"order-".concat(u),u),g(e,"align-self-".concat(p),p),e)),t(r.tag,Object(o.a)(a,{class:b}),c)}}},41:function(t,n,e){"use strict";var o={components:{BAvatar:e(540).a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},r=(e(912),e(1)),a=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(n){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);n.a=a.exports},531:function(t,n,e){var o=e(911);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(40)(o,r);o.locals&&(t.exports=o.locals)},532:function(t,n,e){var o=e(913);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(40)(o,r);o.locals&&(t.exports=o.locals)},540:function(t,n,e){"use strict";e.d(n,"b",(function(){return N})),e.d(n,"a",(function(){return R}));var o=e(17),r=e.n(o),a=e(5),i=e(9),c=e(2),s=e(18),l=e(7),u=e(20),p=e(11),b=e(0),d=e(103),v=e(31),f=e(58),m=e(43),g=e(24),h=e(72),O=e(317);function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function j(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?y(Object(e),!0).forEach((function(n){x(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function x(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var _=Object(p.j)(O.b,["content"]),w=Object(b.d)(Object(p.m)(j(j({},_),{},{icon:Object(b.c)(c.u)})),a.bb),T=r.a.extend({name:a.bb,functional:!0,props:w,render:function(t,n){var e=n.data,o=n.props,a=n.parent,i=Object(g.e)(Object(g.h)(o.icon||"")).replace(m.p,"");return t(i&&function t(n,e){if(!n)return r.a.component(e);var o=(n.$options||{}).components;return o&&o[e]||t(n.$parent,e)}(a,"BIcon".concat(i))||h.a,Object(f.a)(e,{props:Object(b.e)(_,o)}))}}),k=e(131),C=e(60);function I(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function B(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?I(Object(e),!0).forEach((function(n){S(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):I(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function S(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var P=["sm",null,"lg"],N=function(t){return t=Object(l.n)(t)&&Object(l.i)(t)?Object(u.b)(t,0):t,Object(l.h)(t)?"".concat(t,"px"):t||null},D=Object(p.j)(C.b,["active","event","routerTag"]),$=Object(b.d)(Object(p.m)(B(B({},D),{},{alt:Object(b.c)(c.u,"avatar"),ariaLabel:Object(b.c)(c.u),badge:Object(b.c)(c.j,!1),badgeLeft:Object(b.c)(c.g,!1),badgeOffset:Object(b.c)(c.u),badgeTop:Object(b.c)(c.g,!1),badgeVariant:Object(b.c)(c.u,"primary"),button:Object(b.c)(c.g,!1),buttonType:Object(b.c)(c.u,"button"),icon:Object(b.c)(c.u),rounded:Object(b.c)(c.j,!1),size:Object(b.c)(c.p),square:Object(b.c)(c.g,!1),src:Object(b.c)(c.u),text:Object(b.c)(c.u),variant:Object(b.c)(c.u,"secondary")})),a.c),R=r.a.extend({name:a.c,mixins:[v.a],inject:{bvAvatarGroup:{default:null}},props:$,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return N(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,n=!(!t||!t.square)||this.square,e=t&&t.rounded?t.rounded:this.rounded;return n?"0":""===e||(e||"circle")},fontStyle:function(){var t=this.computedSize,n=-1===P.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return n?{fontSize:n}:{}},marginStyle:function(){var t=this.computedSize,n=this.bvAvatarGroup,e=n?n.overlapScale:0,o=t&&e?"calc(".concat(t," * -").concat(e,")"):null;return o?{marginLeft:o,marginRight:o}:{}},badgeStyle:function(){var t=this.computedSize,n=this.badgeTop,e=this.badgeLeft,o=this.badgeOffset||"0px";return{fontSize:-1===P.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:n?o:null,bottom:n?null:o,left:e?o:null,right:e?null:o}}},watch:{src:function(t,n){t!==n&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(i.x,t)},onClick:function(t){this.$emit(i.f,t)}},render:function(t){var n,e=this.computedVariant,o=this.disabled,r=this.computedRounded,a=this.icon,i=this.localSrc,c=this.text,l=this.fontStyle,u=this.marginStyle,p=this.computedSize,v=this.button,f=this.buttonType,m=this.badge,g=this.badgeVariant,O=this.badgeStyle,y=!v&&Object(d.d)(this),j=v?k.a:y?C.a:"span",x=this.alt,_=this.ariaLabel||null,w=null;this.hasNormalizedSlot()?w=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):i?(w=t("img",{style:e?{}:{width:"100%",height:"100%"},attrs:{src:i,alt:x},on:{error:this.onImgError}}),w=t("span",{staticClass:"b-avatar-img"},[w])):w=a?t(T,{props:{icon:a},attrs:{"aria-hidden":"true",alt:x}}):c?t("span",{staticClass:"b-avatar-text",style:l},[t("span",c)]):t(h.k,{attrs:{"aria-hidden":"true",alt:x}});var I=t(),N=this.hasNormalizedSlot(s.c);if(m||""===m||N){var $=!0===m?"":m;I=t("span",{staticClass:"b-avatar-badge",class:S({},"badge-".concat(g),g),style:O},[N?this.normalizeSlot(s.c):$])}return t(j,{staticClass:"b-avatar",class:(n={},S(n,"".concat("b-avatar","-").concat(p),p&&-1!==P.indexOf(p)),S(n,"badge-".concat(e),!v&&e),S(n,"rounded",!0===r),S(n,"rounded-".concat(r),r&&!0!==r),S(n,"disabled",o),n),style:B(B({},u),{},{width:p,height:p}),attrs:{"aria-label":_||null},props:v?{variant:e,disabled:o,type:f}:y?Object(b.e)(D,this):{},on:v||y?{click:this.onClick}:{}},[w,I])}})},910:function(t,n,e){"use strict";e(531)},911:function(t,n,e){(n=e(38)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #0ab5e9;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=n},912:function(t,n,e){"use strict";e(532)},913:function(t,n,e){(n=e(38)(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=n}}]);
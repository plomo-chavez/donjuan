(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1351:function(a,t,n){"use strict";n.d(t,"a",(function(){return v}));var e=n(17),r=n.n(e),s=n(58),o=n(5),i=n(2),c=n(0),l=Object(c.d)({textTag:Object(c.c)(i.u,"p")},o.u),v=r.a.extend({name:o.u,functional:!0,props:l,render:function(a,t){var n=t.props,e=t.data,r=t.children;return a(n.textTag,Object(s.a)(e,{staticClass:"card-text"}),r)}})},1352:function(a,t,n){"use strict";n.d(t,"a",(function(){return x}));var e=n(58),r=n(5),s=n(2),o=n(21),i=n(70),c=n(35),l=n(193),v=n(11),d=n(0),p=n(24);function u(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.push.apply(n,e)}return n}function b(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){g(a,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))}))}return a}function g(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}var m=["start","end","center"],f=Object(l.a)((function(a,t){return(t=Object(p.h)(Object(p.g)(t)))?Object(p.c)(["row-cols",a,t].filter(c.a).join("-")):null})),_=Object(l.a)((function(a){return Object(p.c)(a.replace("cols",""))})),h=[],x={name:r.Jb,functional:!0,get props(){var a;return delete this.props,this.props=(a=Object(i.b)().reduce((function(a,t){return a[Object(d.g)(t,"cols")]=Object(d.c)(s.p),a}),Object(v.c)(null)),h=Object(v.h)(a),Object(d.d)(Object(v.m)(b(b({},a),{},{alignContent:Object(d.c)(s.u,null,(function(a){return Object(o.a)(Object(o.b)(m,"between","around","stretch"),a)})),alignH:Object(d.c)(s.u,null,(function(a){return Object(o.a)(Object(o.b)(m,"between","around"),a)})),alignV:Object(d.c)(s.u,null,(function(a){return Object(o.a)(Object(o.b)(m,"baseline","stretch"),a)})),noGutters:Object(d.c)(s.g,!1),tag:Object(d.c)(s.u,"div")})),r.Jb)),this.props},render:function(a,t){var n,r=t.props,s=t.data,o=t.children,i=r.alignV,c=r.alignH,l=r.alignContent,v=[];return h.forEach((function(a){var t=f(_(a),r[a]);t&&v.push(t)})),v.push((g(n={"no-gutters":r.noGutters},"align-items-".concat(i),i),g(n,"justify-content-".concat(c),c),g(n,"align-content-".concat(l),l),n)),a(r.tag,Object(e.a)(s,{staticClass:"row",class:v}),o)}}},1371:function(a,t,n){"use strict";n.d(t,"a",(function(){return u}));var e=n(17),r=n.n(e),s=n(5),o=n(2),i=n(36),c=n(20),l=n(0),v=n(31),d=n(530),p=Object(l.d)({overlap:Object(l.c)(o.p,.3),rounded:Object(l.c)(o.j,!1),size:Object(l.c)(o.u),square:Object(l.c)(o.g,!1),tag:Object(l.c)(o.u,"div"),variant:Object(l.c)(o.u)},s.d),u=r.a.extend({name:s.d,mixins:[v.a],provide:function(){return{bvAvatarGroup:this}},props:p,computed:{computedSize:function(){return Object(d.b)(this.size)},overlapScale:function(){return Object(i.e)(Object(i.d)(Object(c.b)(this.overlap,0),0),1)/2},paddingStyle:function(){var a=this.computedSize;return(a=a?"calc(".concat(a," * ").concat(this.overlapScale,")"):null)?{paddingLeft:a,paddingRight:a}:{}}},render:function(a){var t=a("div",{staticClass:"b-avatar-group-inner",style:this.paddingStyle},this.normalizeSlot());return a(this.tag,{staticClass:"b-avatar-group",attrs:{role:"group"}},[t])}})},1395:function(a,t,n){"use strict";n.r(t);var e=n(1352),r=n(350),s=n(3),o=n(530),i=n(1351),c={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeSizes:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      size="sm"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n    <b-avatar\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n    <b-avatar\n      size="lg"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n    <b-avatar\n      size="70px"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n'}}},l=n(1),v=Object(l.a)(c,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Sizes"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeSizes)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[a._v("Use the prop")]),a._v(" "),e("code",[a._v("size")]),a._v(" "),e("span",[a._v(" to specify sizes ")]),a._v(" "),e("code",[a._v("sm, md")]),a._v(" "),e("span",[a._v("and ")]),a._v(" "),e("code",[a._v("lg")]),a._v(" "),e("span",[a._v(" default to ")]),a._v(" "),e("code",[a._v("1.5em, 2.5em")]),a._v(" "),e("span",[a._v(" and ")]),a._v(" "),e("code",[a._v("3.5em")])]),a._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-avatar",{attrs:{size:"sm",src:n(112)}}),a._v(" "),e("b-avatar",{attrs:{src:n(112)}}),a._v(" "),e("b-avatar",{attrs:{size:"lg",src:n(112)}}),a._v(" "),e("b-avatar",{attrs:{size:"70px",src:n(112)}})],1)],1)}),[],!1,null,null,null).exports,d={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeInitials:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      size="sm"\n      variant="light-primary"\n      text="PI"\n    />\n    <b-avatar\n      variant="light-secondary"\n      text="PI"\n    />\n    <b-avatar\n      size="lg"\n      variant="light-success"\n      text="PI"\n    />\n    <b-avatar\n      size="70px"\n      variant="light-danger"\n      text="PI"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n'}}},p=Object(l.a)(d,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Initials"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeInitials)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("You can specify a short string as the content of an avatar via the ")]),a._v(" "),n("code",[a._v("text")]),a._v(" "),n("span",[a._v(" prop.")])]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{size:"sm",variant:"light-primary",text:"PI"}}),a._v(" "),n("b-avatar",{attrs:{variant:"light-secondary",text:"PI"}}),a._v(" "),n("b-avatar",{attrs:{size:"lg",variant:"light-success",text:"PI"}}),a._v(" "),n("b-avatar",{attrs:{size:"70px",variant:"light-danger",text:"PI"}})],1)],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeColor:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      variant="primary"\n      text="PI"\n    />\n    <b-avatar\n      variant="secondary"\n      text="PI"\n    />\n    <b-avatar\n      variant="success"\n      text="PI"\n    />\n    <b-avatar\n      variant="danger"\n      text="PI"\n    />\n    <b-avatar\n      variant="warning"\n      text="PI"\n    />\n    <b-avatar\n      variant="info"\n      text="PI"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n'}}},b=Object(l.a)(u,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Colors"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeColor)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Use the ")]),a._v(" "),n("code",[a._v("variant")]),a._v(" "),n("span",[a._v(" prop to specify one of Bootstrap theme variant colors.")])]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"primary",text:"PI"}}),a._v(" "),n("b-avatar",{attrs:{variant:"secondary",text:"PI"}}),a._v(" "),n("b-avatar",{attrs:{variant:"success",text:"PI"}}),a._v(" "),n("b-avatar",{attrs:{variant:"danger",text:"PI"}}),a._v(" "),n("b-avatar",{attrs:{variant:"warning",text:"PI"}}),a._v(" "),n("b-avatar",{attrs:{variant:"info",text:"PI"}})],1)],1)}),[],!1,null,null,null).exports,g=n(23),m={components:{BAvatar:o.a,BCardCode:g.a,BCardText:i.a},data:function(){return{codeColorLight:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      text="PI"\n      variant="light-primary"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-secondary"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-success"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-danger"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-warning"\n    />\n    <b-avatar\n      text="PI"\n      variant="light-info"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n'}}},f=Object(l.a)(m,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Light Colors"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeColorLight)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("use class ")]),a._v(" "),n("code",[a._v('variant="light-{color-name}"')]),a._v(" "),n("span",[a._v(" to change background color of your avatar.")])]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{text:"PI",variant:"light-primary"}}),a._v(" "),n("b-avatar",{attrs:{text:"PI",variant:"light-secondary"}}),a._v(" "),n("b-avatar",{attrs:{text:"PI",variant:"light-success"}}),a._v(" "),n("b-avatar",{attrs:{text:"PI",variant:"light-danger"}}),a._v(" "),n("b-avatar",{attrs:{text:"PI",variant:"light-warning"}}),a._v(" "),n("b-avatar",{attrs:{text:"PI",variant:"light-info"}})],1)],1)}),[],!1,null,null,null).exports,_=n(41),h={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a,ToastificationContent:_.a},data:function(){return{codeAction:'\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- button avatar --\x3e\n    <b-avatar\n      button\n      variant="primary"\n      text="BA"\n      class="align-baseline"\n      @click="showToast"\n    />\n    <span> Button Avatar</span>\n\n    \x3c!-- link avatar --\x3e\n    <b-avatar\n      href="#foobar"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-8.jpg\')"\n    />\n    <span>Link Avatar</span>\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\nimport ToastificationContent from \'@core/components/toastification/ToastificationContent.vue\'\n\nexport default {\n  components: {\n    BAvatar,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  methods: {\n    showToast() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Notification\',\n          icon: \'BellIcon\',\n        },\n      })\n    },\n  },\n}\n<\/script>\n'}},methods:{showToast:function(){this.$toast({component:_.a,props:{title:"Notification",icon:"BellIcon"}})}}},x=Object(l.a)(h,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Actionable avatars"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeAction)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[a._v("Want to trigger the opening of a modal or trigger an action? Set the button prop to instruct")]),a._v(" "),e("code",[a._v("<b-avatar>")]),a._v(" "),e("span",[a._v(" to render as a ")]),a._v(" "),e("code",[a._v("<button>")]),a._v(" "),e("span",[a._v(" element.")])]),a._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-avatar",{staticClass:"align-baseline",attrs:{button:"",variant:"primary",text:"BA"},on:{click:a.showToast}}),a._v(" "),e("span",[a._v(" Button Avatar")]),a._v(" "),e("b-avatar",{attrs:{href:"#foobar",src:n(161)}}),a._v(" "),e("span",[a._v("Link Avatar")])],1)],1)}),[],!1,null,null,null).exports,C={components:{BCardCode:s.a,BCardText:i.a,BAvatar:o.a},data:function(){return{codeBadge:'\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- using default slot  --\x3e\n    <b-avatar\n      badge="5"\n      badge-variant="primary"\n    >\n      <span class="d-flex align-items-center">\n        <feather-icon\n          icon="DownloadIcon"\n          size="16"\n        />\n      </span>\n    </b-avatar>\n\n    \x3c!-- with badge prop --\x3e\n    <b-avatar\n      badge="3"\n      badge-variant="primary"\n    />\n\n    <b-avatar\n      badge="2"\n      badge-variant="primary"\n    />\n\n    <b-avatar\n      badge="1"\n      badge-variant="primary"\n    />\n\n    <b-avatar\n      badge="10"\n      badge-variant="primary"\n      text="BV"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar,\n  },\n}\n<\/script>\n'}}},y=Object(l.a)(C,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Badge avatars"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeBadge)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Easily add a badge to your avatar via the ")]),a._v(" "),n("code",[a._v("badge")]),a._v(" "),n("span",[a._v(" prop or ")]),a._v(" "),n("code",[a._v("'badge'")]),a._v(" "),n("span",[a._v(" slot, and the badge variant can be set via the ")]),a._v(" "),n("code",[a._v("badge-variant")]),a._v(" "),n("span",[a._v(" prop. The badge will scale with the size of the avatar.")])]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{badge:"5","badge-variant":"primary"}},[n("span",{staticClass:"d-flex align-items-center"},[n("feather-icon",{attrs:{icon:"DownloadIcon",size:"16"}})],1)]),a._v(" "),n("b-avatar",{attrs:{badge:"3","badge-variant":"primary"}}),a._v(" "),n("b-avatar",{attrs:{badge:"2","badge-variant":"primary"}}),a._v(" "),n("b-avatar",{attrs:{badge:"1","badge-variant":"primary"}}),a._v(" "),n("b-avatar",{attrs:{badge:"10","badge-variant":"primary",text:"BV"}})],1)],1)}),[],!1,null,null,null).exports,j={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeBadgePosition:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      class="mr-1"\n      badge\n      badge-variant="success"\n    />\n    <b-avatar\n      class="mr-1"\n      badge-variant="success"\n      badge\n      badge-left\n    />\n    <b-avatar\n      badge\n      class="mr-1"\n      badge-variant="success"\n      badge-top\n    />\n    <b-avatar\n      badge\n      class="mr-1"\n      badge-variant="success"\n      badge-left\n      badge-top\n    />\n</div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n'}}},O=Object(l.a)(j,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Badge positioning"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeBadgePosition)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("By default the badge appears on the bottom right of the avatar. ")]),a._v(" "),n("span",[a._v("You can use the ")]),a._v(" "),n("code",[a._v("badge-top")]),a._v(" "),n("span",[a._v(" and ")]),a._v(" "),n("code",[a._v("badge-right")]),a._v(" "),n("span",[a._v(" boolean props to switch the sides.")])]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success"}}),a._v(" "),n("b-avatar",{staticClass:"mr-1",attrs:{"badge-variant":"success",badge:"","badge-left":""}}),a._v(" "),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-top":""}}),a._v(" "),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-left":"","badge-top":""}})],1)],1)}),[],!1,null,null,null).exports,B={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeBadgeOffset:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      badge\n      badge-variant="success"\n      badge-offset="-0.5em"\n      class="mr-1"\n    />\n    <b-avatar\n      badge\n      badge-variant="success"\n      badge-offset="-2px"\n      class="mr-1"\n    />\n    <b-avatar\n      badge\n      badge-variant="success"\n      badge-offset="2px"\n      class="mr-1"\n    />\n    <b-avatar\n      badge\n      badge-top\n      badge-variant="success"\n      badge-offset="-0.5em"\n      class="mr-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n'}}},A=Object(l.a)(B,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Badge Offset"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeBadgeOffset)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Use the ")]),a._v(" "),n("code",[a._v("badge-offset")]),a._v(" "),n("span",[a._v(" prop to control the offset of the badge. ")]),a._v(" "),n("span",[a._v("Positive values will move the badge inward, while negative values will move the badge outward.")])]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-offset":"-0.5em"}}),a._v(" "),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-offset":"-2px"}}),a._v(" "),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-variant":"success","badge-offset":"2px"}}),a._v(" "),n("b-avatar",{staticClass:"mr-1",attrs:{badge:"","badge-top":"","badge-variant":"success","badge-offset":"-0.5em"}})],1)],1)}),[],!1,null,null,null).exports,w={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeIcon:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar variant="primary">\n      <feather-icon icon="HomeIcon" />\n    </b-avatar>\n    <b-avatar variant="success">\n      <feather-icon icon="BellIcon" />\n    </b-avatar>\n    <b-avatar variant="info">\n      <feather-icon icon="UserIcon" />\n    </b-avatar>\n    <b-avatar variant="danger">\n      <feather-icon icon="MessageSquareIcon" />\n    </b-avatar>\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n'}}},I=Object(l.a)(w,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Icons"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeIcon)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Easily use one of ")]),a._v(" "),n("code",[a._v("BootstrapVue's")]),a._v(" "),n("span",[a._v(" icons as the avatar content via the ")]),a._v(" "),n("code",[a._v("icon")]),a._v(" "),n("span",[a._v(" prop. The prop should be set to a valid icon name.")])]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"primary"}},[n("feather-icon",{attrs:{icon:"HomeIcon"}})],1),a._v(" "),n("b-avatar",{attrs:{variant:"success"}},[n("feather-icon",{attrs:{icon:"BellIcon"}})],1),a._v(" "),n("b-avatar",{attrs:{variant:"info"}},[n("feather-icon",{attrs:{icon:"UserIcon"}})],1),a._v(" "),n("b-avatar",{attrs:{variant:"danger"}},[n("feather-icon",{attrs:{icon:"MessageSquareIcon"}})],1)],1)],1)}),[],!1,null,null,null).exports,P={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeCustomContent:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar variant="primary">\n      <span>Hi</span>\n    </b-avatar>\n\n    <b-avatar variant="secondary">\n      <span>New</span>\n    </b-avatar>\n\n    <b-avatar variant="success">\n      <span>Hey</span>\n    </b-avatar>\n\n    <b-avatar variant="light-danger">\n      <span>Hi</span>\n    </b-avatar>\n\n    <b-avatar variant="light-warning">\n      <span>New</span>\n    </b-avatar>\n\n    <b-avatar variant="light-info">\n      <span>Hey</span>\n    </b-avatar>\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n'}}},k=Object(l.a)(P,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Custom content"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeCustomContent)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v("Use the ")]),a._v(" "),n("code",[a._v("default")]),a._v(" "),n("span",[a._v("slot to render custom content in the avatar, for finer grained control of its appearance.")])]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"primary"}},[n("span",[a._v("Hi")])]),a._v(" "),n("b-avatar",{attrs:{variant:"secondary"}},[n("span",[a._v("New")])]),a._v(" "),n("b-avatar",{attrs:{variant:"success"}},[n("span",[a._v("Hey")])]),a._v(" "),n("b-avatar",{attrs:{variant:"light-danger"}},[n("span",[a._v("Hi")])]),a._v(" "),n("b-avatar",{attrs:{variant:"light-warning"}},[n("span",[a._v("New")])]),a._v(" "),n("b-avatar",{attrs:{variant:"light-info"}},[n("span",[a._v("Hey")])])],1)],1)}),[],!1,null,null,null).exports,S={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeBadgeContent:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      class="mr-1"\n      badge="B"\n    />\n    <b-avatar\n      badge="7"\n      class="mr-1"\n      variant="primary"\n      badge-variant="danger"\n    />\n    <b-avatar\n      badge-variant="success"\n      badge="1"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-16.jpg\')"\n    />\n</div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n'}}},T=Object(l.a)(S,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Badge content"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeBadgeContent)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[a._v("Add textual content to the badge by supplying a string to the ")]),a._v(" "),e("code",[a._v("badge")]),a._v(" "),e("span",[a._v(" prop, or use the named slot ")]),e("code",[a._v("'badge'")]),a._v(".\n  ")]),a._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-avatar",{staticClass:"mr-1",attrs:{badge:"B"}}),a._v(" "),e("b-avatar",{staticClass:"mr-1",attrs:{badge:"7",variant:"primary","badge-variant":"danger"}}),a._v(" "),e("b-avatar",{attrs:{"badge-variant":"success",badge:"1",src:n(374)}})],1)],1)}),[],!1,null,null,null).exports,z={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeSquare:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      variant="light-primary"\n      square\n    />\n    <b-avatar\n      square\n      variant="light-success"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n'}}},q=Object(l.a)(z,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Square"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeSquare)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v(" Prefer a square avatar? simply set the ")]),a._v(" "),n("code",[a._v("square")]),a._v(" "),n("span",[a._v(" prop to ")]),a._v(" "),n("code",[a._v("true")]),a._v(".\n  ")]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{variant:"light-primary",square:""}}),a._v(" "),n("b-avatar",{attrs:{square:"",variant:"light-success"}})],1)],1)}),[],!1,null,null,null).exports,E={components:{BCardCode:s.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeRounded:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-avatar\n      rounded="sm"\n      variant="light-primary"\n    />\n    <b-avatar\n      rounded\n      variant="light-success"\n    />\n    <b-avatar\n      rounded="top"\n      variant="light-danger"\n    />\n    <b-avatar\n      rounded="lg"\n      variant="light-warning"\n    />\n    <b-avatar\n      rounded="left"\n      variant="light-info"\n    />\n    <b-avatar\n      rounded="right"\n      variant="light-primary"\n    />\n    <b-avatar\n      rounded="bottom"\n      variant="light-dark"\n    />\n  </div>\n</template>\n\n<script>\nimport { BAvatar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatar\n  },\n}\n<\/script>\n'}}},$=Object(l.a)(E,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card-code",{attrs:{title:"Rounded"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeRounded)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[a._v(" You can change the rounding by setting the prop")]),a._v(" "),n("code",[a._v("rounded")]),a._v(" "),n("span",[a._v(".")])]),a._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-avatar",{attrs:{rounded:"sm",variant:"light-primary"}}),a._v(" "),n("b-avatar",{attrs:{rounded:"",variant:"light-success"}}),a._v(" "),n("b-avatar",{attrs:{rounded:"top",variant:"light-danger"}}),a._v(" "),n("b-avatar",{attrs:{rounded:"lg",variant:"light-warning"}}),a._v(" "),n("b-avatar",{attrs:{rounded:"left",variant:"light-info"}}),a._v(" "),n("b-avatar",{attrs:{rounded:"right",variant:"light-primary"}}),a._v(" "),n("b-avatar",{attrs:{rounded:"bottom",variant:"light-dark"}})],1)],1)}),[],!1,null,null,null).exports,G=n(1371),D={components:{BCardCode:g.a,BAvatarGroup:G.a,BAvatar:o.a,BCardText:i.a},data:function(){return{codeGroup:'\n<template>\n  <b-avatar-group size="32px">\n    <b-avatar\n      class="pull-up"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-5.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      variant="primary"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-7.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-10.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      variant="danger"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-8.jpg\')"\n    />\n    <b-avatar\n      class="pull-up"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n  </b-avatar-group>\n</template>\n\n<script>\nimport { BAvatarGroup, BAvatar, } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatarGroup,\n    BAvatar,\n  },\n}\n<\/script>\n'}}},N=Object(l.a)(D,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Avatar Group"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeGroup)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[a._v("Group multiple avatars together by wrapping them in a ")]),a._v(" "),e("code",[a._v("<b-avatar-group>")]),a._v(" "),e("span",[a._v(" component. Add class ")]),a._v(" "),e("code",[a._v("pull-up")]),a._v(" "),e("span",[a._v(" for pull up the avatar on hover.")])]),a._v(" "),e("b-avatar-group",{attrs:{size:"32px"}},[e("b-avatar",{staticClass:"pull-up",attrs:{src:n(160)}}),a._v(" "),e("b-avatar",{staticClass:"pull-up",attrs:{variant:"primary",src:n(117)}}),a._v(" "),e("b-avatar",{staticClass:"pull-up",attrs:{src:n(202)}}),a._v(" "),e("b-avatar",{staticClass:"pull-up",attrs:{variant:"danger",src:n(161)}}),a._v(" "),e("b-avatar",{staticClass:"pull-up",attrs:{src:n(112)}})],1)],1)}),[],!1,null,null,null).exports,H=n(1383),L={components:{BCardCode:g.a,BAvatarGroup:G.a,BAvatar:o.a,BCardText:i.a},directives:{"b-tooltip":H.a},data:function(){return{codeGroupTooltip:'\n<template>\n  <b-avatar-group size="32px">\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Jenny Looper"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-5.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Darcey Nooner"\n      variant="primary"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-7.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Julee Rossignol"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-10.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Elicia Rieske"\n      variant="danger"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-8.jpg\')"\n    />\n    <b-avatar\n      v-b-tooltip.hover\n      class="pull-up"\n      title="Vinnie Mostowy"\n      :src="require(\'@/assets/images/portrait/small/avatar-s-20.jpg\')"\n    />\n  </b-avatar-group>\n</template>\n\n<script>\nimport {  BAvatarGroup, BAvatar, VBTooltip} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BAvatarGroup,\n    BAvatar\n  },\n  directives: {\n    \'b-tooltip\': VBTooltip,\n  },\n}\n<\/script>\n'}}},V=Object(l.a)(L,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-card-code",{attrs:{title:"Avatar Group with Tooltip"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeGroupTooltip)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[a._v("Use bootstrapVue's ")]),a._v(" "),e("code",[a._v("VBTooltip")]),a._v(" "),e("span",[a._v(" directive with avatar to use tooltip. ")]),a._v(" "),e("span",[a._v("Add class ")]),a._v(" "),e("code",[a._v("pull-up")]),a._v(" "),e("span",[a._v(" for pull up the avatar on hover.")])]),a._v(" "),e("b-avatar-group",{attrs:{size:"32px"}},[e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Jenny Looper",src:n(160)}}),a._v(" "),e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Darcey Nooner",variant:"primary",src:n(117)}}),a._v(" "),e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Julee Rossignol",src:n(202)}}),a._v(" "),e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Elicia Rieske",variant:"danger",src:n(161)}}),a._v(" "),e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pull-up",attrs:{title:"Vinnie Mostowy",src:n(112)}})],1)],1)}),[],!1,null,null,null).exports,J={components:{BRow:e.a,BCol:r.a,AvatarInitials:p,AvatarColor:b,AvatarLightColor:f,AvatarSize:v,AvatarAction:x,AvatarBadge:y,AvatarBadgePosition:O,AvatarOffset:A,AvatarIcon:I,AvatarCustomContent:k,AvatarBadgeContent:T,AvatarSquare:q,AvatarRounded:$,AvatarGroup:N,AvatarGroupTooltip:V}},R=Object(l.a)(J,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-row",{staticClass:"match-height"},[n("b-col",{attrs:{lg:"6"}},[n("avatar-size")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-initials")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-color")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-light-color")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-icon")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-custom-content")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-badge")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-badge-content")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-badge-position")],1),a._v(" "),n("b-col",{attrs:{ld:"6"}},[n("avatar-offset")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-square")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-rounded")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-group")],1),a._v(" "),n("b-col",{attrs:{lg:"6"}},[n("avatar-group-tooltip")],1),a._v(" "),n("b-col",{attrs:{cols:"12"}},[n("avatar-action")],1)],1)}),[],!1,null,null,null);t.default=R.exports},23:function(a,t,n){"use strict";n(110);var e=n(1354),r=n(351),s=n(353),o=n(352),i=n(1362),c=(n(195),n(233),n(123)),l=n.n(c),v={components:{BCard:e.a,BCardTitle:r.a,BCardSubTitle:s.a,BCardBody:o.a,BCollapse:i.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var a=JSON.parse(JSON.stringify(this.$attrs));return delete a.title,delete a["sub-title"],a}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},d=(n(896),n(1)),p=Object(d.a)(v,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("b-card",a._g(a._b({attrs:{"no-body":""}},"b-card",a.cardAttrs,!1),a.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[a._v(a._s(a.$attrs.title))]),a._v(" "),a.$attrs["sub-title"]?n("b-card-sub-title",[a._v("\n        "+a._s(a.$attrs["sub-title"])+"\n      ")]):a._e()],1),a._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":a.code_visible?"false":"true","aria-controls":a.parentID},on:{click:function(t){a.code_visible=!a.code_visible}}})]),a._v(" "),void 0!==a.$attrs["no-body"]?[a._t("default"),a._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:a.parentID,visible:a.code_visible},model:{value:a.code_visible,callback:function(t){a.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:a.codeLanguage}},[a._t("code")],2)],1)],1)]:n("b-card-body",[a._t("default"),a._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:a.parentID,visible:a.code_visible},model:{value:a.code_visible,callback:function(t){a.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),a._v(" "),n("prism",{attrs:{language:a.codeLanguage}},[a._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=p.exports},3:function(a,t,n){"use strict";var e=n(23);t.a=e.a},350:function(a,t,n){"use strict";n.d(t,"a",(function(){return C}));var e=n(58),r=n(5),s=n(2),o=n(43),i=n(21),c=n(70),l=n(35),v=n(7),d=n(193),p=n(11),u=n(0),b=n(24);function g(a,t){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.push.apply(n,e)}return n}function m(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){f(a,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))}))}return a}function f(a,t,n){return t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a}var _=["auto","start","end","center","baseline","stretch"],h=Object(d.a)((function(a,t,n){var e=a;if(!Object(v.p)(n)&&!1!==n)return t&&(e+="-".concat(t)),"col"!==a||""!==n&&!0!==n?(e+="-".concat(n),Object(b.c)(e)):Object(b.c)(e)})),x=Object(p.c)(null),C={name:r.y,functional:!0,get props(){return delete this.props,this.props=(a=Object(c.b)().filter(l.a),t=a.reduce((function(a,t){return a[t]=Object(u.c)(s.i),a}),Object(p.c)(null)),n=a.reduce((function(a,t){return a[Object(u.g)(t,"offset")]=Object(u.c)(s.p),a}),Object(p.c)(null)),e=a.reduce((function(a,t){return a[Object(u.g)(t,"order")]=Object(u.c)(s.p),a}),Object(p.c)(null)),x=Object(p.a)(Object(p.c)(null),{col:Object(p.h)(t),offset:Object(p.h)(n),order:Object(p.h)(e)}),Object(u.d)(Object(p.m)(m(m(m(m({},t),n),e),{},{alignSelf:Object(u.c)(s.u,null,(function(a){return Object(i.a)(_,a)})),col:Object(u.c)(s.g,!1),cols:Object(u.c)(s.p),offset:Object(u.c)(s.p),order:Object(u.c)(s.p),tag:Object(u.c)(s.u,"div")})),r.y));var a,t,n,e},render:function(a,t){var n,r=t.props,s=t.data,i=t.children,c=r.cols,l=r.offset,v=r.order,d=r.alignSelf,p=[];for(var u in x)for(var b=x[u],g=0;g<b.length;g++){var m=h(u,b[g].replace(u,""),r[b[g]]);m&&p.push(m)}var _=p.some((function(a){return o.e.test(a)}));return p.push((f(n={col:r.col||!_&&!c},"col-".concat(c),c),f(n,"offset-".concat(l),l),f(n,"order-".concat(v),v),f(n,"align-self-".concat(d),d),n)),a(r.tag,Object(e.a)(s,{class:p}),i)}}},374:function(a,t){a.exports="/images/_/_/_/_/donjuan/resources/js/src/assets/images/portrait/small/avatar-s-16.jpg"},41:function(a,t,n){"use strict";var e={components:{BAvatar:n(530).a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},r=(n(898),n(1)),s=Object(r.a)(e,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:a.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:a.icon,size:"15"}})],1),a._v(" "),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[a.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+a.variant,domProps:{textContent:a._s(a.title)}}):a._e(),a._v(" "),a.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:a._s(a.text)}}):a._e()]),a._v(" "),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(t){return a.$emit("close-toast")}}},[a.hideClose?a._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);t.a=s.exports},526:function(a,t,n){var e=n(897);"string"==typeof e&&(e=[[a.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(39)(e,r);e.locals&&(a.exports=e.locals)},527:function(a,t,n){var e=n(899);"string"==typeof e&&(e=[[a.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(39)(e,r);e.locals&&(a.exports=e.locals)},896:function(a,t,n){"use strict";n(526)},897:function(a,t,n){(t=n(37)(!1)).push([a.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #0ab5e9;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),a.exports=t},898:function(a,t,n){"use strict";n(527)},899:function(a,t,n){(t=n(37)(!1)).push([a.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),a.exports=t}}]);
webpackJsonp([7,22],{5:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".mint-toast{position:fixed;max-width:80%;border-radius:5px;background:rgba(0,0,0,.7);color:#fff;box-sizing:border-box;text-align:center;z-index:1000;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.mint-toast.is-placebottom{bottom:50px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.mint-toast.is-placemiddle{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.mint-toast.is-placetop{top:50px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.mint-toast-icon{display:block;text-align:center;font-size:56px}.mint-toast-text{font-size:14px;display:block;text-align:center}.mint-toast-pop-enter,.mint-toast-pop-leave-active{opacity:0}","",{version:3,sources:["/./node_modules/mint-ui/lib/toast/style.css"],names:[],mappings:"AACA,YACI,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,0BAA+B,AAC/B,WAAY,AACZ,sBAAuB,AACvB,kBAAmB,AACnB,aAAc,AACd,sCAAuC,AACvC,6BAA8B,CACjC,AACD,2BACI,YAAa,AACb,SAAU,AACV,kCAAsC,AAC9B,yBAA6B,CACxC,AACD,2BACI,SAAU,AACV,QAAS,AACT,uCAAyC,AACjC,8BAAgC,CAC3C,AACD,wBACI,SAAU,AACV,SAAU,AACV,kCAAsC,AAC9B,yBAA6B,CACxC,AACD,iBACI,cAAe,AACf,kBAAmB,AACnB,cAAe,CAClB,AACD,iBACI,eAAgB,AAChB,cAAe,AACf,iBAAkB,CACrB,AACD,mDACI,SAAU,CACb",file:"style.css",sourcesContent:["\n.mint-toast {\n    position: fixed;\n    max-width: 80%;\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0.7);\n    color: #fff;\n    box-sizing: border-box;\n    text-align: center;\n    z-index: 1000;\n    -webkit-transition: opacity .3s linear;\n    transition: opacity .3s linear\n}\n.mint-toast.is-placebottom {\n    bottom: 50px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0)\n}\n.mint-toast.is-placemiddle {\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%)\n}\n.mint-toast.is-placetop {\n    top: 50px;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0)\n}\n.mint-toast-icon {\n    display: block;\n    text-align: center;\n    font-size: 56px\n}\n.mint-toast-text {\n    font-size: 14px;\n    display: block;\n    text-align: center\n}\n.mint-toast-pop-enter, .mint-toast-pop-leave-active {\n    opacity: 0\n}\n"],sourceRoot:"webpack://"}])},6:function(t,e,n){var o=n(5);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},7:function(module,exports,__webpack_require__){module.exports=function(t){function e(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=240)}({162:function(t,e,n){var o,s;n(94),o=n(84);var i=n(164);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},164:function(module,exports){module.exports={render:function(){with(this)return _h("transition",{attrs:{name:"mint-toast-pop"}},[_h("div",{directives:[{name:"show",rawName:"v-show",value:visible,expression:"visible"}],staticClass:"mint-toast",class:customClass,style:{padding:""===iconClass?"10px":"20px"}},[""!==iconClass?_h("i",{staticClass:"mint-toast-icon",class:iconClass}):_e()," ",_h("span",{staticClass:"mint-toast-text",style:{"padding-top":""===iconClass?"0":"10px"}},[_s(message)])])])},staticRenderFns:[]}},240:function(t,e,n){t.exports=n(48)},48:function(t,e,n){"use strict";var o=n(92);t.exports=o.a},6:function(t,e){t.exports=__webpack_require__(10)},84:function(t,e,n){"use strict";e.default={props:{message:String,className:{type:String,default:""},position:{type:String,default:"middle"},iconClass:{type:String,default:""}},data:function(){return{visible:!1}},computed:{customClass:function(){var t=[];switch(this.position){case"top":t.push("is-placetop");break;case"bottom":t.push("is-placebottom");break;default:t.push("is-placemiddle")}return t.push(this.className),t.join(" ")}}}},92:function(t,e,n){"use strict";var o=n(6),s=n.n(o),i=s.a.extend(n(162)),a=[],r=function(){if(a.length>0){var t=a[0];return a.splice(0,1),t}return new i({el:document.createElement("div")})},A=function(t){t&&a.push(t)},c=function(t){t.target.parentNode&&t.target.parentNode.removeChild(t.target)};i.prototype.close=function(){this.visible=!1,this.$el.addEventListener("transitionend",c),this.closed=!0,A(this)};var l=function(t){void 0===t&&(t={});var e=t.duration||3e3,n=r();return n.closed=!1,clearTimeout(n.timer),n.message="string"==typeof t?t:t.message,n.position=t.position||"middle",n.className=t.className||"",n.iconClass=t.iconClass||"",document.body.appendChild(n.$el),s.a.nextTick(function(){n.visible=!0,n.$el.removeEventListener("transitionend",c),n.timer=setTimeout(function(){n.closed||n.close()},e)}),n};e.a=l},94:function(t,e){}})},68:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),i=(o(s),n(7)),a=o(i),r=n(4),A=o(r),c=n(3),l=n(11);e.default={name:"forgetPasswd",data:function(){return{username:"",authCode:"",password:"",agree:[],phoneborderBottom:"",authborderBottom:"",passwdSrc:"/static/passwd.png",passwdEyeSrc:"/static/passwdHide.png",show:!1,passwdBottom:""}},methods:(0,A.default)({},(0,c.mapActions)({getAuthCodeFn:"getAuthCode",validateAuthCode:"validateAuthCode",register:"register",changeToken:"changeToken",changeAvatar:"changeAvatar",changePhone:"changePhone"}),{focusInput:function(t){console.log(t),this[t]="2px solid #d06091"},blurInput:function(t){this[t]="1px solid #e3dee1"},passwdFocus:function(){this.passwdSrc="/static/passwdNow.png",this.passwdBottom="2px solid #d06091"},passwdBlur:function(){this.passwdSrc="/static/passwd.png",this.passwdBottom="1px solid #e3dee1"},showPasswd:function(){this.passwdSrc="/static/passwdNow.png","/static/passwdHide.png"==this.passwdEyeSrc?(this.passwdEyeSrc="/static/passwdShow.png",this.show=!0):(this.passwdEyeSrc="/static/passwdHide.png",this.show=!1)},getAuthCode:function(){var t={};t.action="signUp",t.mobile=this.username,this.getAuthCodeFn(t).then(function(t){},function(t){var e=(0,l.checkError)(t);e&&(0,a.default)({message:e,position:"bottom",duration:2e3})})},finish:function(){var t=this;if(console.log(this.agree[0]),this.agree[0]){var e={};e.action="signUp",e.mobile=this.username,e.authCode=this.authCode,this.validateAuthCode(e).then(function(e){console.log(e.data,2112);var n={};n.username=t.username,n.password=t.password,n.roleId=6,t.register(n).then(function(e){sessionStorage.setItem("token",e.data.token),sessionStorage.setItem("avatar",e.data.avatar),sessionStorage.setItem("phone",e.data.phone),t.changePhone(e.data.phone),t.$router.push({path:"/index"})},function(t){var e=(0,l.checkError)(t);e&&(0,a.default)({message:e,position:"bottom",duration:2e3})})},function(t){var e=(0,l.checkError)(t);e&&(0,a.default)({message:e,position:"bottom",duration:2e3})})}else(0,a.default)({message:"请阅读并同意用户协议",position:"bottom",duration:2e3})},protocol:function(){this.$router.push("/protocol")}}),created:function(){this.agreeOption=["已同意"]}}},155:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,'.register .mint-cell-text{font-size:.5rem}.authCode{-ms-flex-pack:justify;justify-content:space-between}.authCode,.protocol{display:-ms-flexbox;display:flex}.register .mint-header{background-color:#fff;color:#000}.register .mint-header label{margin-left:2%}.register .registerBody{padding:2%}.register .mint-button.btn{margin-top:20%;background-color:#fff;border-radius:8px;border:1px solid #dad2da;color:#d06091}.register .mint-button:after{background-color:#f1cfde}.register .authBtn{box-shadow:none;background-color:#fff;border:1px solid #d06091;color:#d06091}.c_cell{position:relative;background-color:#fff;box-sizing:border-box;color:inherit;min-height:48px;display:block;overflow:hidden}.checklist{margin-top:2%}.c_wraper{-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;font-size:.4rem;line-height:1;min-height:inherit;overflow:hidden;padding:0 10px;position:relative;width:100%}.c_title{-ms-flex:1;flex:1}.c_label{display:block;padding:0 10px}.c_input{display:none}.c_core{display:inline-block;background-color:#fff;border-radius:100%;border:1px solid #ccc;position:relative;width:20px;height:20px;vertical-align:middle}.c_core:after{border:2px solid transparent;border-left:0;border-top:0;content:" ";top:3px;left:6px;position:absolute;width:4px;height:8px;transform:rotate(45deg) scale(0);transition:transform .2s}.c_c_label{vertical-align:middle;margin-left:6px;color:#dad2da}.c_input:checked+.c_core{background-color:#d06091;border-color:#efeeef}.c_input:checked+.c_c_label{color:#d06091}.register .mint-header{font-size:.4rem;height:1rem;line-height:1rem}.mintui,.register .mint-button-text,.register .mint-cell-text{font-size:.4rem}',"",{version:3,sources:["/./src/views/Register.vue"],names:[],mappings:"AACA,0BACE,eAAkB,CACnB,AACD,UAGE,sBAAuB,AACnB,6BAA+B,CACpC,AACD,oBALE,oBAAqB,AACrB,YAAc,CAOf,AACD,uBACE,sBAAuB,AACvB,UAAe,CAChB,AACD,6BACE,cAAgB,CACjB,AACD,wBACE,UAAY,CACb,AACD,2BACE,eAAgB,AAChB,sBAAuB,AACvB,kBAAmB,AACnB,yBAA0B,AAC1B,aAAe,CAChB,AACD,6BACE,wBAA0B,CAC3B,AACD,mBACE,gBAAiB,AACjB,sBAAuB,AACvB,yBAA0B,AAC1B,aAAe,CAChB,AACD,QACE,kBAAmB,AACnB,sBAAuB,AACvB,sBAAuB,AACvB,cAAe,AACf,gBAAiB,AACjB,cAAe,AACf,eAAiB,CAClB,AACD,WACE,aAAe,CAChB,AACD,UACE,sBAAuB,AACvB,mBAAoB,AACpB,sBAAuB,AACvB,oBAAqB,AACrB,aAAc,AACd,gBAAkB,AAClB,cAAe,AACf,mBAAoB,AACpB,gBAAiB,AACjB,eAAgB,AAChB,kBAAmB,AACnB,UAAY,CACb,AACD,SACE,WAAY,AACZ,MAAQ,CACT,AACD,SACE,cAAe,AACf,cAAgB,CACjB,AACD,SACE,YAAc,CACf,AACD,QACE,qBAAsB,AACtB,sBAAuB,AACvB,mBAAoB,AACpB,sBAAuB,AACvB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,qBAAuB,CACxB,AACD,cACE,6BAA8B,AAC9B,cAAe,AACf,aAAc,AACd,YAAa,AACb,QAAS,AACT,SAAU,AACV,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,iCAAkC,AAClC,wBAA0B,CAC3B,AACD,WACE,sBAAuB,AACvB,gBAAiB,AACjB,aAAe,CAChB,AACD,yBACE,yBAA0B,AAC1B,oBAAsB,CACvB,AACD,4BACE,aAAe,CAChB,AACD,uBACE,gBAAkB,AAClB,YAAa,AACb,gBAAkB,CACnB,AAOD,8DACE,eAAkB,CACnB",file:"Register.vue",sourcesContent:['\n.register .mint-cell-text {\n  font-size: 0.5rem;\n}\n.authCode {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n.protocol {\n  display: -ms-flexbox;\n  display: flex;\n}\n.register .mint-header {\n  background-color: #fff;\n  color: #000000;\n}\n.register .mint-header label {\n  margin-left: 2%;\n}\n.register .registerBody {\n  padding: 2%;\n}\n.register .mint-button.btn{\n  margin-top: 20%;\n  background-color: #fff; \n  border-radius: 8px;\n  border: 1px solid #dad2da;\n  color: #d06091;\n}\n.register .mint-button::after {\n  background-color: #f1cfde;\n}\n.register .authBtn {\n  box-shadow: none;\n  background-color: #fff;\n  border: 1px solid #d06091;\n  color: #d06091;\n}\n.c_cell {\n  position: relative;\n  background-color: #fff;\n  box-sizing: border-box;\n  color: inherit;\n  min-height: 48px;\n  display: block;\n  overflow: hidden;\n}\n.checklist {\n  margin-top: 2%;\n}\n.c_wraper {\n  -ms-flex-align: center;\n  align-items: center;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.4rem;\n  line-height: 1;\n  min-height: inherit;\n  overflow: hidden;\n  padding: 0 10px;\n  position: relative;\n  width: 100%;\n}\n.c_title {\n  -ms-flex: 1;\n  flex: 1;\n}\n.c_label {\n  display: block;\n  padding: 0 10px;\n}\n.c_input {\n  display: none;\n}\n.c_core {\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 100%;\n  border: 1px solid #ccc;\n  position: relative;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n}\n.c_core::after {\n  border: 2px solid transparent;\n  border-left: 0;\n  border-top: 0;\n  content: " ";\n  top: 3px;\n  left: 6px;\n  position: absolute;\n  width: 4px;\n  height: 8px;\n  transform: rotate(45deg) scale(0);\n  transition: transform .2s;\n}\n.c_c_label {\n  vertical-align: middle;\n  margin-left: 6px;\n  color: #dad2da;\n}\n.c_input:checked + .c_core {\n  background-color: #d06091;\n  border-color: #efeeef;\n}\n.c_input:checked + .c_c_label {\n  color: #d06091;\n}\n.register .mint-header{\n  font-size: 0.4rem;\n  height: 1rem;\n  line-height: 1rem;\n}\n.mintui {\n  font-size: 0.4rem;\n}\n.register .mint-cell-text {\n  font-size: 0.4rem;\n}\n.register .mint-button-text {\n  font-size: 0.4rem;\n}\n'],sourceRoot:"webpack://"}])},191:function(t,e,n){var o=n(155);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},248:function(t,e,n){var o,s;n(191),o=n(68);var i=n(284);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},284:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"register"},[e("mt-header",[e("router-link",{attrs:{to:{path:"/"}},slot:"left"},[e("mt-button",{attrs:{icon:"back"}},["注册"])])])," ",e("div",{staticClass:"registerBody"},[e("a",{staticClass:"field",staticStyle:{"margin-top":"10%"},style:{borderBottom:t.phoneborderBottom}},[e("div",{staticClass:"wraper"},[e("div",{staticClass:"value"},[e("span",["+86"])," ",e("span",{staticStyle:{"margin-right":"10px","margin-left":"2px"}},[" | "])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"core",attrs:{placeholder:"输入手机号",type:"text"},domProps:{value:t._s(t.username)},on:{focus:function(e){t.focusInput("phoneborderBottom")},blur:function(e){t.blurInput("phoneborderBottom")},input:function(e){e.target.composing||(t.username=e.target.value)}}})])])])," ",e("a",{staticClass:"field diff",staticStyle:{"margin-top":"10%"},style:{borderBottom:t.authborderBottom}},[e("div",{staticClass:"wraper"},[e("div",{staticClass:"value"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.authCode,expression:"authCode"}],staticClass:"core",attrs:{placeholder:"输入验证码",type:"text"},domProps:{value:t._s(t.authCode)},on:{focus:function(e){t.focusInput("authborderBottom")},blur:function(e){t.blurInput("authborderBottom")},input:function(e){e.target.composing||(t.authCode=e.target.value)}}})])," ",e("mt-button",{staticClass:"authBtn",attrs:{type:"primary"},nativeOn:{click:function(e){t.getAuthCode(e)}}},["获取验证码"])])])," ",e("a",{staticClass:"field",style:{borderBottom:t.passwdBottom}},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.passwdSrc,alt:""}})])," ",e("div",{staticClass:"wraper"},[e("div",{staticClass:"value"},[t.show?e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"core",attrs:{placeholder:"设置6-18位的登录密码",type:"text"},domProps:{value:t._s(t.password)},on:{focus:t.passwdFocus,blur:t.passwdBlur,input:function(e){e.target.composing||(t.password=e.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"core",attrs:{placeholder:"请输入6-18位的重置密码",type:"password"},domProps:{value:t._s(t.password)},on:{focus:t.passwdFocus,blur:t.passwdBlur,input:function(e){e.target.composing||(t.password=e.target.value)}}})," "])])," ",e("div",{staticClass:"img",staticStyle:{"margin-right":"5%"},on:{click:t.showPasswd}},[e("img",{attrs:{src:t.passwdEyeSrc,alt:""}})])])," ",e("div",{staticClass:"checklist"},[e("a",{staticClass:"c_cell"},[e("div",{staticClass:"c_wraper"},[e("div",{staticClass:"c_title"},[e("label",{staticClass:"c_label"},[e("span",{staticClass:"c_checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.agree,expression:"agree"}],staticClass:"c_input",attrs:{type:"checkbox",value:"已同意"},domProps:{checked:Array.isArray(t.agree)?t._i(t.agree,"已同意")>-1:t._q(t.agree,!0)},on:{change:function(e){var n=t.agree,o=e.target,s=!!o.checked;if(Array.isArray(n)){var i="已同意",a=t._i(n,i);s?a<0&&(t.agree=n.concat(i)):a>-1&&(t.agree=n.slice(0,a).concat(n.slice(a+1)))}else t.agree=s}}})," ",e("span",{staticClass:"c_core"})])," ",e("span",{staticClass:"c_c_label"},["\n                已同意\n                ",e("span",{on:{click:t.protocol}},["《***用户协议》"])])])])])])])," ",e("mt-button",{staticClass:"btn",attrs:{type:"primary",size:"large"},nativeOn:{click:function(e){t.finish(e)}}},["完成"])])])},staticRenderFns:[]}}});
//# sourceMappingURL=7.33129db18f10c3054b08.js.map
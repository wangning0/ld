webpackJsonp([21,22],{62:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var i=t(4),r=o(i),A=t(3);n.default={name:"more",data:function(){return{}},methods:(0,r.default)({},(0,A.mapActions)({changeToken:"changeToken",changeAvatar:"changeAvatar",changePhone:"changePhone",changeTabSelected:"changeTabSelected"}),{back:function(){this.$router.push("/index/mymenu")},feedback:function(){this.$router.push("/feedback")},goChangePasswd:function(){this.$router.push("/changePasswd")},loggout:function(){sessionStorage.setItem("token",null),this.changeToken(""),this.changeAvatar(""),this.changePhone(""),this.$router.push("/")}})}},143:function(e,n,t){n=e.exports=t(1)(),n.push([e.id,".more .mint-header{background-color:#fff;color:#000;padding-top:11px}.more .mint-header label{margin-left:2%}.forgetPasswd .mint-button:after{background-color:#f1cfde}.more .mint-cell-text{font-size:.4rem}.more .mint-button-text{font-size:.4rem;display:inline-block;padding-top:10px}.more .mint-header,.more .mintui{font-size:.4rem}.more .mint-cell{min-height:1.5rem}.more .moreBody{margin-top:5%}.more .mint-header{height:1rem;line-height:1rem;background:#fff;color:#000}.more .mint-button{height:1rem}.more .mintui{font-size:.5rem}.more .mint-button-icon{vertical-align:middle}.more .mint-button-text{font-size:.5rem;vertical-align:middle}.more .mint-header-button.is-right{color:#d06091}.footer{right:0;bottom:0;left:0;position:fixed;z-index:1}.footer .mint-button .mint-button-text{height:1rem;font-size:.5rem;padding-top:20px}","",{version:3,sources:["/./src/views/More.vue"],names:[],mappings:"AACA,mBACE,sBAAuB,AACvB,WAAe,AACf,gBAAkB,CACnB,AACD,yBACE,cAAgB,CACjB,AACD,iCACE,wBAA0B,CAC3B,AACD,sBACE,eAAkB,CACnB,AACD,wBACE,gBAAkB,AAClB,qBAAsB,AACtB,gBAAkB,CACnB,AAOD,iCACE,eAAkB,CACnB,AACD,iBACE,iBAAmB,CACpB,AACD,gBACE,aAAe,CAChB,AACD,mBACE,YAAa,AACb,iBAAkB,AAClB,gBAAiB,AACjB,UAAc,CACf,AACD,mBACE,WAAa,CACd,AACD,cACE,eAAkB,CACnB,AACD,wBACE,qBAAuB,CACxB,AACD,wBACE,gBAAkB,AAClB,qBAAuB,CACxB,AACD,mCACE,aAAe,CAChB,AACD,QACI,QAAS,AACT,SAAU,AACV,OAAQ,AACR,eAAgB,AAChB,SAAW,CACd,AACD,uCACE,YAAa,AACb,gBAAkB,AAClB,gBAAkB,CACnB",file:"More.vue",sourcesContent:["\n.more .mint-header {\n  background-color: #fff;\n  color: #000000;\n  padding-top: 11px;\n}\n.more .mint-header label {\n  margin-left: 2%;\n}\n.forgetPasswd .mint-button::after {\n  background-color: #f1cfde;\n}\n.more .mint-cell-text {\n  font-size: 0.4rem;\n}\n.more .mint-button-text {\n  font-size: 0.4rem;\n  display: inline-block;\n  padding-top: 10px;\n}\n.more .mint-button {\n  height: 1rem;\n}\n.more .mintui {\n  font-size: 0.4rem;\n}\n.more .mint-header {\n  font-size: 0.4rem;\n}\n.more .mint-cell {\n  min-height: 1.5rem;\n}\n.more .moreBody {\n  margin-top: 5%;\n}\n.more .mint-header {\n  height: 1rem;\n  line-height: 1rem;\n  background: #fff;\n  color:#000000;\n}\n.more .mint-button {\n  height: 1rem;\n}\n.more  .mintui {\n  font-size: 0.5rem;\n}\n.more .mint-button-icon {\n  vertical-align: middle;\n}\n.more .mint-button-text {\n  font-size: 0.5rem;\n  vertical-align: middle;\n}\n.more .mint-header-button.is-right{\n  color: #d06091;\n}\n.footer {\n    right: 0;\n    bottom: 0;\n    left: 0;\n    position: fixed;\n    z-index: 1;\n}\n.footer .mint-button .mint-button-text {\n  height: 1rem;\n  font-size: 0.5rem;\n  padding-top: 20px;\n}\n"],sourceRoot:"webpack://"}])},175:function(e,n,t){var o=t(143);"string"==typeof o&&(o=[[e.id,o,""]]);t(2)(o,{});o.locals&&(e.exports=o.locals)},242:function(e,n,t){var o,i;t(175),o=t(62);var r=t(268);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,e.exports=o},268:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return n("div",{staticClass:"more"},[n("div",{staticClass:"page-header-main"},[n("mt-header",[n("a",{on:{click:e.back},slot:"left"},[n("mt-button",{attrs:{icon:"back"}},["设置"])])])])," ",n("div",{staticClass:"moreBody"},[n("mt-cell",{attrs:{title:"修改密码"},nativeOn:{click:function(n){e.goChangePasswd(n)}}})," ",n("mt-cell",{attrs:{title:"关于我们"}})," ",n("mt-cell",{attrs:{title:"反馈建议"},nativeOn:{click:function(n){e.feedback(n)}}})])," ",n("div",{staticClass:"footer"},[n("mt-button",{attrs:{size:"large"},nativeOn:{click:function(n){e.loggout(n)}}},["退出登录"])])])},staticRenderFns:[]}}});
//# sourceMappingURL=21.bbf72e712d7553066dae.js.map
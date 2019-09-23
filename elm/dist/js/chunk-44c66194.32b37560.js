(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c66194"],{d9ae:function(t,e,s){"use strict";var a=s("e93c"),o=s.n(a);o.a},e93c:function(t,e,s){},eb25:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"loginContainer"},[s("header",{attrs:{id:"head_top"}},[s("section",{staticClass:"head_goback",on:{click:function(e){return e.preventDefault(),t.goBack(e)}}},[s("svg",{attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[s("polyline",{staticStyle:{fill:"none",stroke:"rgb(255, 255, 255)","stroke-width":"2"},attrs:{points:"12,18 4,9 12,0"}})])]),t._m(0)]),s("form",{staticClass:"loginForm"},[s("section",{staticClass:"input_container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",placeholder:"账号"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),s("section",{staticClass:"input_container"},["checkbox"===t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],attrs:{placeholder:"密码",type:"checkbox"},domProps:{checked:Array.isArray(t.passWord)?t._i(t.passWord,null)>-1:t.passWord},on:{change:function(e){var s=t.passWord,a=e.target,o=!!a.checked;if(Array.isArray(s)){var r=null,i=t._i(s,r);a.checked?i<0&&(t.passWord=s.concat([r])):i>-1&&(t.passWord=s.slice(0,i).concat(s.slice(i+1)))}else t.passWord=o}}}):"radio"===t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],attrs:{placeholder:"密码",type:"radio"},domProps:{checked:t._q(t.passWord,null)},on:{change:function(e){t.passWord=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.passWord,expression:"passWord"}],attrs:{placeholder:"密码",type:t.type},domProps:{value:t.passWord},on:{input:function(e){e.target.composing||(t.passWord=e.target.value)}}}),s("div",{staticClass:"button_switch"},[s("div",{staticClass:"circle_button",on:{click:function(e){return e.preventDefault(),t.moveButton(e)}}}),s("span",[t._v("abc")]),s("span",[t._v("...")])])]),s("section",{staticClass:"input_container captcha_code_container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.codeNumber,expression:"codeNumber"}],attrs:{type:"text",placeholder:"验证码",maxlength:"4"},domProps:{value:t.codeNumber},on:{input:function(e){e.target.composing||(t.codeNumber=e.target.value)}}}),s("div",{staticClass:"img_change_img"},[s("img",{attrs:{src:t.captchas}}),s("div",{staticClass:"change_img",on:{click:function(e){return e.preventDefault(),t.changeImg(e)}}},[s("p",[t._v("看不清")]),s("p",[t._v("换一张")])])])])]),s("p",{staticClass:"login_tips"},[t._v("温馨提示：未注册过的账号，登录时将自动注册")]),s("p",{staticClass:"login_tips"},[t._v("注册过的用户可凭账号密码登录")]),s("div",{staticClass:"login_container",on:{click:function(e){return e.preventDefault(),t.handleUser(e)}}},[t._v("登录")]),s("router-link",{staticClass:"to_forget",attrs:{to:"/forget"}},[t._v("重置密码?")]),t.showAlert?s("div",{staticClass:"alet_container"},[s("section",{staticClass:"tip_text_container"},[t._m(1),s("p",{staticClass:"tip_text"},[t._v(t._s(t.showWarn))]),s("div",{staticClass:"confrim",on:{click:function(e){return e.preventDefault(),t.confrim(e)}}},[t._v("确认")])])]):t._e()],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"title_head ellipsis"},[s("span",{staticClass:"title_text"},[t._v("密码登录")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip_icon"},[s("span"),s("span")])}],r={created:function(){this.getCaptchas()},data:function(){return{captchas:"",userName:"",passWord:"",codeNumber:"",type:"password",showAlert:!1,showWarn:""}},methods:{getCaptchas:function(){var t=this;this.$axios.post("/v1/captchas").then(function(e){t.captchas=e.data.code})},handleUser:function(){var t=this;""==this.userName&&""==this.passWord&&""==this.codeNumber?(this.showWarn="请输入账号/密码/验证码",this.showAlert=!0):""==this.userName?(this.showWarn="请输入账号",this.showAlert=!0):""!=this.userName&&""==this.passWord?(this.showWarn="请输入密码",this.showAlert=!0):""!=this.userName&&""!=this.passWord&&""==this.codeNumber?(this.showWarn="请输入验证码",this.showAlert=!0):""!=this.userName&&""!=this.passWord&&""!=this.codeNumber&&this.$axios.post("/v2/login",{username:this.userName,password:this.passWord,captcha_code:this.codeNumber}).then(function(e){"密码错误"==e.data.message?(t.showWarn="密码错误",t.showAlert=!0):"验证码错误"==e.data.message?(t.showWarn="验证码错误",t.showAlert=!0):(localStorage.setItem("user",JSON.stringify(e.data)),t.$router.push("/"))})},goBack:function(){this.$router.go(-1)},moveButton:function(){"password"==this.type?this.type="text":"text"==this.type&&(this.type="password");var t=document.getElementsByClassName("circle_button")[0],e=document.getElementsByClassName("button_switch")[0];"1rem"==t.style.left?(t.style.left="-0.3rem",e.style.backgroundColor="#ccc"):(t.style.left="1rem",e.style.backgroundColor="#4cd964")},changeImg:function(){this.getCaptchas()},confrim:function(){this.showAlert=!1}}},i=r,n=(s("d9ae"),s("2877")),c=Object(n["a"])(i,a,o,!1,null,"793759e0",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-44c66194.32b37560.js.map
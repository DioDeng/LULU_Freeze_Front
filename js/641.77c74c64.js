"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[641],{5641:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var o=s(6252);const n={class:"form-floating mb-3"},a={for:"floatingInput"},r={class:"form-floating mb-5"},i={for:"floatingInput"},l={class:"d-flex flex-column align-items-center mb-4"},d=["disabled"],m=(0,o._)("a",{href:"#",class:"text-dark"},"忘記密碼",-1);function c(e,t,s,c,u,h){const b=(0,o.up)("VField"),p=(0,o.up)("ErrorMessage"),f=(0,o.up)("VForm");return(0,o.wg)(),(0,o.j4)(f,{ref:"formRef",onSubmit:h.signIn},{default:(0,o.w5)((({meta:e})=>[(0,o._)("div",n,[(0,o.Wm)(b,{name:"email",type:"email",rules:"required|email",class:"form-control bg-body-tertiary"}),(0,o._)("label",a,[(0,o.Uk)(" Email address"),(0,o.Wm)(p,{name:"email",class:"text-danger ms-3"})])]),(0,o._)("div",r,[(0,o.Wm)(b,{name:"password",type:"password",rules:"required",class:"form-control bg-body-tertiary"}),(0,o._)("label",i,[(0,o.Uk)(" Password"),(0,o.Wm)(p,{name:"password",class:"text-danger ms-3"})])]),(0,o._)("div",l,[(0,o._)("button",{type:"submit",class:"btn btn-outline-dark w-50 mb-4",disabled:!e.valid}," 登入 ",8,d),m])])),_:1},8,["onSubmit"])}s(7658);var u={methods:{signIn(e){const t="http://127.0.0.1:3000/admin/signIn";this.$http.post(t,e).then((e=>{const t=new Date(Date.now()+108e6).toGMTString();document.cookie=`LULU-Frozen-Admin=${e.data.user.token}; expires=${t}; path=/`,this.$router.push("/dashboard")})).catch((e=>{console.log(e)}))}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)LULU-Frozen\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`Bearer ${e}`;const t="http://127.0.0.1:3000/member/signIn";this.$http.get(t).then((e=>{console.log(e),this.$router.push("/dashboard")})).catch((e=>{console.log("錯誤",e)}))}},h=s(3744);const b=(0,h.Z)(u,[["render",c]]);var p=b}}]);
//# sourceMappingURL=641.77c74c64.js.map
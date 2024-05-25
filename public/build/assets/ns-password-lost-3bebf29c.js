import{_ as r}from"./currency-f8bd78d1.js";import{F as x,G as F,b as a,n as p,d as l}from"./bootstrap-5278e747.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{r as d,o as t,c,a as s,F as T,b as V,g as b,e as u,f,t as _,w as g,i as X}from"./runtime-core.esm-bundler-b48de70a.js";const N={name:"ns-login",data(){return{fields:[],xXsrfToken:null,validation:new x,isSubitting:!1}},mounted(){F([a.get("/api/fields/ns.password-lost"),a.get("/sanctum/csrf-cookie")]).subscribe(i=>{this.fields=this.validation.createFields(i[0]),this.xXsrfToken=a.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>p.doAction("ns-login-mounted",this),100)},i=>{l.error(i.message||r("An unexpected error occurred."),r("OK"),{duration:0}).subscribe()})},methods:{__:r,requestRecovery(){if(!this.validation.validateFields(this.fields))return l.error(r("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),p.applyFilters("ns-password-lost-submit",!0)&&(this.isSubitting=!0,a.post("/auth/password-lost",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{l.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},500)},e=>{this.isSubitting=!1,this.validation.enableFields(this.fields),e.data&&this.validation.triggerFieldsErrors(this.fields,e.data),l.error(e.message).subscribe()}))}}},R={class:"bg-white rounded shadow overflow-hidden transition-all duration-100"},B={class:"p-3 -my-2"},C={key:0,class:"py-2 fade-in-entrance anim-duration-300"},j={key:0,class:"flex items-center justify-center py-10"},E={class:"flex w-full items-center justify-center py-4"},K={href:"/sign-in",class:"hover:underline text-blue-600 text-sm"},O={class:"flex justify-between items-center bg-gray-200 p-3"};function q(i,e,z,A,n,o){const v=d("ns-field"),m=d("ns-spinner"),y=d("ns-button"),k=d("ns-link");return t(),c("div",R,[s("div",B,[n.fields.length>0?(t(),c("div",C,[(t(!0),c(T,null,V(n.fields,(h,w)=>(t(),b(v,{key:w,field:h},null,8,["field"]))),128))])):u("",!0)]),n.fields.length===0?(t(),c("div",j,[f(m,{border:"4",size:"16"})])):u("",!0),s("div",E,[s("a",K,_(o.__("Remember Your Password ?")),1)]),s("div",O,[s("div",null,[f(y,{onClick:e[0]||(e[0]=h=>o.requestRecovery()),class:"justify-between",type:"info"},{default:g(()=>[n.isSubitting?(t(),b(m,{key:0,class:"mr-2",size:"6",border:"2"})):u("",!0),s("span",null,_(o.__("Submit")),1)]),_:1})]),s("div",null,[f(k,{href:"/sign-up",type:"success"},{default:g(()=>[X(_(o.__("Register")),1)]),_:1})])])])}const G=S(N,[["render",q]]);export{G as default};

const __vite__fileDeps=["./ns-pos-order-type-popup-Ca2qtC2o.js","./bootstrap-BDmWue46.js","./currency-lOMYG1Wf.js","./runtime-core.esm-bundler-DzqFO6Tt.js","./ns-prompt-popup-QQJNozT8.js","./_plugin-vue_export-helper-DlAUqK2U.js","./ns-prompt-popup-CVxzoclS.css","./ns-orders-preview-popup-BLIcQ8eg.js","./index.es-Br67aBEV.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as r}from"./preload-helper-D6kgxu3v.js";import{P as n}from"./bootstrap-BDmWue46.js";import{_ as a}from"./currency-lOMYG1Wf.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as p,o as _,c,a as t,t as l}from"./runtime-core.esm-bundler-DzqFO6Tt.js";const m={name:"ns-pos-customers-button",methods:{__:a,openCustomerPopup(){n.show(p({loader:()=>r(()=>import("./ns-pos-order-type-popup-Ca2qtC2o.js").then(e=>e.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url)}))}},beforeDestroy(){nsHotPress.destroy("ns_pos_keyboard_create_customer")},mounted(){for(let e in nsShortcuts)["ns_pos_keyboard_create_customer"].includes(e)&&nsHotPress.create("ns_pos_keyboard_create_customer").whenNotVisible([".is-popup"]).whenPressed(nsShortcuts[e]!==null?nsShortcuts[e].join("+"):null,s=>{s.preventDefault(),this.openCustomerPopup()})}},i={class:"ns-button default"},d=t("i",{class:"mr-1 text-xl lar la-user-circle"},null,-1);function f(e,s,h,P,x,o){return _(),c("div",i,[t("button",{onClick:s[0]||(s[0]=b=>o.openCustomerPopup()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[d,t("span",null,l(o.__("Customers")),1)])])}const B=u(m,[["render",f]]);export{B as default};

const __vite__fileDeps=["./welcome-C1RXWtYb.js","./currency-lOMYG1Wf.js","./_plugin-vue_export-helper-DlAUqK2U.js","./runtime-core.esm-bundler-DzqFO6Tt.js","./database-D9pKRLIg.js","./bootstrap-BDmWue46.js","./setup-configuration-ZHtnrQgW.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./preload-helper-D6kgxu3v.js";import{b as e}from"./components-C2oHLMbi.js";import{c as p,a as n}from"./vue-router-C2-ZVUje.js";import{c as i}from"./bootstrap-BDmWue46.js";import"./ns-alert-popup-DynBmnO4.js";import"./currency-lOMYG1Wf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./runtime-core.esm-bundler-DzqFO6Tt.js";import"./ns-avatar-image-DJ0sRUTc.js";import"./index.es-Br67aBEV.js";import"./ns-prompt-popup-QQJNozT8.js";const a=()=>o(()=>import("./welcome-C1RXWtYb.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),s=()=>o(()=>import("./database-D9pKRLIg.js"),__vite__mapDeps([4,5,1,3,2]),import.meta.url),_=()=>o(()=>import("./setup-configuration-ZHtnrQgW.js"),__vite__mapDeps([6,5,1,3,2]),import.meta.url),c=[{path:"/",component:a},{path:"/database",component:s},{path:"/configuration",component:_}],m=p({routes:c,history:n()}),t=i({});t.use(m);for(let r in e)t.component(r,e[r]);t.mount("#nexopos-setup");window.nsRouter=m;
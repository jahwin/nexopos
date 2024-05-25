import{_ as b}from"./currency-f8bd78d1.js";import{F as S}from"./bootstrap-5278e747.js";import{g as x}from"./components-a64665b1.js";import{s as y,r as v,o as l,c,a as d,F as g,b as _,n as w,t as u,e as m,f as p,g as F,j as C,w as B,A as T,i as H}from"./runtime-core.esm-bundler-b48de70a.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./ns-alert-popup-5493aad8.js";import"./ns-avatar-image-35303576.js";import"./index.es-25aa42ee.js";import"./ns-prompt-popup-f1ddf178.js";const A={name:"ns-settings",props:["url"],components:{nsField:x},data(){return{validation:new S,form:{},isSubmitting:!1,test:""}},computed:{formDefined(){return Object.values(this.form).length>0},activeTab(){for(let t in this.form.tabs)if(this.form.tabs[t].active===!0)return this.form.tabs[t]},activeTabIdentifier(){const t=Object.values(this.form.tabs);return Object.keys(this.form.tabs)[t.indexOf(this.activeTab)]}},mounted(){const t=window.location.href,a=new URL(t);this.loadSettingsForm(a.searchParams.get("tab")||null)},methods:{__:b,async handleSaved(t,a){(await this.loadSettingsForm(this.activeTab)).tabs[this.activeTabIdentifier].fields.filter(e=>{e.name===a.name&&t.data.entry&&(e.value=t.data.entry.id)})},loadComponent(t){return y(nsExtraComponents[t])},async submitForm(){if(this.validation.validateForm(this.form).length>0)return nsSnackBar.error(b("Unable to proceed the form is not valid.")).subscribe();this.validation.disableForm(this.form);const t=this.validation.extractForm(this.form),a=nsHooks.applyFilters("ns-before-saved",()=>new Promise((i,e)=>(this.isSubmitting=!0,nsHttpClient.post(this.url,t).subscribe({next:r=>{this.isSubmitting=!1,i(r)},error:r=>{this.isSubmitting=!1,e(r)}}))));try{const i=await a(t);this.validation.enableForm(this.form);const e=Object.values(this.form.tabs),r=Object.keys(this.form.tabs)[e.indexOf(this.activeTab)];this.loadSettingsForm(r),i.data&&i.data.results&&i.data.results.forEach(s=>{s.status==="error"?nsSnackBar.error(s.message).subscribe():nsSnackBar.success(s.message).subscribe()}),nsHooks.doAction("ns-settings-saved",{result:i,instance:this}),nsSnackBar.success(i.message).subscribe()}catch(i){this.validation.enableForm(this.form),this.validation.triggerFieldsErrors(this.form,i),nsHooks.doAction("ns-settings-failed",{error:i,instance:this}),i.message&&nsSnackBar.error(i.message||b("Unable to proceed the form is not valid.")).subscribe()}},setActive(t,a){for(let i in this.form.tabs)this.form.tabs[i].active=!1;t.active=!0,nsHooks.doAction("ns-settings-change-tab",{tab:t,instance:this,identifier:a})},loadSettingsForm(t=null){return new Promise((a,i)=>{nsHttpClient.get(this.url).subscribe({next:e=>{a(e);let r=0,s=null;this.form={},t=e.tabs[t]!==void 0?t:null;for(let n in e.tabs)this.formDefined?e.tabs[n].active=this.form.tabs[n].active:(e.tabs[n].active=!1,(t===null&&r===0||t!==null&&n===t)&&(e.tabs[n].active=!0,s=n)),r++,e.tabs[n].fields===void 0&&(e.tabs[n].fields=[]);this.form=this.validation.createForm(e),nsHooks.doAction("ns-settings-loaded",this),nsHooks.doAction("ns-settings-change-tab",{tab:this.activeTab,instance:this,identifier:s})},error:e=>{nsSnackBar.error(e.message).subscribe(),i(e)}})})}}},O={key:0,id:"tabbed-card",class:"ns-tab"},I={id:"card-header",class:"flex flex-wrap ml-4"},D=["onClick"],V={key:0,class:"ml-2 rounded-full ns-inset-button error active text-sm h-6 w-6 flex items-center justify-center"},E={class:"card-body ns-tab-item"},N={class:"shadow rounded"},P={class:"-mx-4 flex flex-wrap p-2"},U={class:"flex flex-col my-2"},L={key:1,class:"w-full px-4"},R={key:0,class:"ns-tab-item-footer border-t p-2 flex justify-end"};function z(t,a,i,e,r,s){const n=v("ns-field"),k=v("ns-button");return s.formDefined?(l(),c("div",O,[d("div",I,[(l(!0),c(g,null,_(r.form.tabs,(o,f)=>(l(),c("div",{class:w([o.active?"active":"inactive","tab cursor-pointer flex items-center px-4 py-2 rounded-tl-lg rounded-tr-lg"]),onClick:h=>s.setActive(o,f),key:f},[d("span",null,u(o.label),1),o.errors&&o.errors.length>0?(l(),c("span",V,u(o.errors.length),1)):m("",!0)],10,D))),128))]),d("div",E,[d("div",N,[d("div",P,[s.activeTab.fields?(l(!0),c(g,{key:0},_(s.activeTab.fields,(o,f)=>(l(),c("div",{class:"w-full px-4 md:w-1/2 lg:w-1/3",key:f},[d("div",U,[p(n,{onSaved:h=>s.handleSaved(h,o),field:o},null,8,["onSaved","field"])])]))),128)):m("",!0),s.activeTab.component?(l(),c("div",L,[(l(),F(C(s.loadComponent(s.activeTab.component).value)))])):m("",!0)]),s.activeTab.fields&&s.activeTab.fields.length>0?(l(),c("div",R,[p(k,{disabled:r.isSubmitting,onClick:a[0]||(a[0]=o=>s.submitForm()),type:"info"},{default:B(()=>[T(t.$slots,"submit-button",{},()=>[H(u(s.__("Save Settings")),1)])]),_:3},8,["disabled"])])):m("",!0)])])])):m("",!0)}const Z=j(A,[["render",z]]);export{Z as default};

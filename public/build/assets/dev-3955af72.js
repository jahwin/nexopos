import{c as A,d as B,e as H,b as h}from"./components-a64665b1.js";import{h as $,c as y}from"./bootstrap-5278e747.js";import{c as G,a as M}from"./vue-router-fe7700e6.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.es-25aa42ee.js";import"./ns-prompt-popup-f1ddf178.js";import{r as o,o as u,c as f,f as e,w as l,i as s,F as g,a as D,t as k}from"./runtime-core.esm-bundler-b48de70a.js";import"./ns-alert-popup-5493aad8.js";import"./currency-f8bd78d1.js";import"./ns-avatar-image-35303576.js";const T={name:"date",components:{nsDatepicker:A},computed:{formattedDate(){return $(this.date).format("YYYY-MM-DD HH:MM:ss")}},data(){return{active:"demo",date:$().format(),field:{label:"Date",name:"range",description:"a date range picker",value:{startDate:$().clone().subtract(1,"week").format(),endDate:$().format()}}}}};function w(_,n,m,b,t,v){const c=o("ns-page-title"),a=o("ns-tabs-item"),r=o("ns-datepicker"),p=o("ns-tabs");return u(),f(g,null,[e(c,null,{title:l(()=>[s("Date Picker")]),description:l(()=>[s("A simple date picker")]),_:1}),e(p,{active:t.active,onActive:n[1]||(n[1]=i=>t.active=i)},{default:l(()=>[e(a,{identifier:"general",label:"General"}),e(a,{identifier:"demo",label:"Demo"},{default:l(()=>[e(r,{onSet:n[0]||(n[0]=i=>t.date=i),date:t.date},null,8,["date"])]),_:1})]),_:1},8,["active"])],64)}const F=d(T,[["render",w]]),P={name:"datepicker",components:{nsDaterangePicker:B},data(){return{active:"demo",field:{label:"Date",name:"range",description:"a date range picker"}}}};function C(_,n,m,b,t,v){const c=o("ns-page-title"),a=o("ns-tabs-item"),r=o("ns-daterange-picker"),p=o("ns-tabs");return u(),f(g,null,[e(c,null,{title:l(()=>[s("Date Range Picker")]),description:l(()=>[s("selects a range as a date.")]),_:1}),e(p,{active:t.active,onActive:n[0]||(n[0]=i=>t.active=i)},{default:l(()=>[e(a,{identifier:"general",label:"General"}),e(a,{identifier:"demo",label:"Demo"},{default:l(()=>[e(r,{field:t.field},null,8,["field"]),D("div",null,k(t.field),1)]),_:1})]),_:1},8,["active"])],64)}const I=d(P,[["render",C]]),S={components:{nsDateTimePicker:H},data(){return{active:"demo",field:{label:"Date",name:"date",description:"a sample datetime field",value:""}}}};function Y(_,n,m,b,t,v){const c=o("ns-page-title"),a=o("ns-tabs-item"),r=o("ns-date-time-picker"),p=o("ns-tabs");return u(),f(g,null,[e(c,null,{title:l(()=>[s("Date Time Picker")]),description:l(()=>[s("A date time picker.")]),_:1}),e(p,{active:t.active,onActive:n[0]||(n[0]=i=>t.active=i)},{default:l(()=>[e(a,{identifier:"general",label:"General"}),e(a,{identifier:"demo",label:"Demo"},{default:l(()=>[e(r,{field:t.field},null,8,["field"]),D("div",null,k(t.field),1)]),_:1})]),_:1},8,["active"])],64)}const L=d(S,[["render",Y]]),N={name:"index"};function R(_,n,m,b,t,v){return u(),f("h1",null,"Index")}const V=d(N,[["render",R]]),U={name:"input-label",data(){return{console,active:"demo",field:{label:"Tag Selector",name:"tag_selector",type:"inline-multiselect",value:"",options:[{label:"Home",value:"home"},{label:"Bar",value:"bar"},{label:"Foo",value:"foo"}]}}}};function E(_,n,m,b,t,v){const c=o("ns-page-title"),a=o("ns-tabs-item"),r=o("ns-inline-multiselect"),p=o("ns-tabs");return u(),f(g,null,[e(c,null,{title:l(()=>[s("Labels")]),description:l(()=>[s("creates a label selector fields.")]),_:1}),e(p,{active:t.active,onActive:n[2]||(n[2]=i=>t.active=i)},{default:l(()=>[e(a,{identifier:"general",label:"General"}),e(a,{identifier:"demo",label:"Demo"},{default:l(()=>[e(r,{onChange:n[0]||(n[0]=i=>console.log(i)),onBlur:n[1]||(n[1]=i=>console.log(i)),field:t.field},null,8,["field"]),D("div",null,k(t.field),1)]),_:1})]),_:1},8,["active"])],64)}const W=d(U,[["render",E]]),j={},q={class:"p-4 flex flex-col flex-auto"};function z(_,n){const m=o("router-view");return u(),f("div",q,[e(m)])}const J=d(j,[["render",z]]),K={name:"input-label",data(){return{active:"demo",field:{label:"Tag Selector",name:"tag_selector",type:"multiselect",value:"",options:[{label:"Home",value:"home"},{label:"Bar",value:"bar"},{label:"Foo",value:"foo"}]}}}};function O(_,n,m,b,t,v){const c=o("ns-page-title"),a=o("ns-tabs-item"),r=o("ns-field"),p=o("ns-tabs");return u(),f(g,null,[e(c,null,{title:l(()=>[s("Labels")]),description:l(()=>[s("creates a label selector fields.")]),_:1}),e(p,{active:t.active,onActive:n[0]||(n[0]=i=>t.active=i)},{default:l(()=>[e(a,{identifier:"general",label:"General"}),e(a,{identifier:"demo",label:"Demo"},{default:l(()=>[e(r,{field:t.field},null,8,["field"]),D("div",null,k(t.field),1)]),_:1})]),_:1},8,["active"])],64)}const Q=d(K,[["render",O]]),X={name:"input-label",data(){return{active:"demo",field:{label:"Upload",name:"uploader",type:"upload",value:"",options:[{label:"Home",value:"home"},{label:"Bar",value:"bar"},{label:"Foo",value:"foo"}]}}}};function Z(_,n,m,b,t,v){const c=o("ns-page-title"),a=o("ns-tabs-item"),r=o("ns-field"),p=o("ns-tabs");return u(),f(g,null,[e(c,null,{title:l(()=>[s("Labels")]),description:l(()=>[s("creates a label selector fields.")]),_:1}),e(p,{active:t.active,onActive:n[0]||(n[0]=i=>t.active=i)},{default:l(()=>[e(a,{identifier:"general",label:"General"}),e(a,{identifier:"demo",label:"Demo"},{default:l(()=>[e(r,{field:t.field},null,8,["field"]),D("div",null,k(t.field),1)]),_:1})]),_:1},8,["active"])],64)}const ee=d(X,[["render",Z]]),te=[{path:"/",component:V},{path:"/inputs",component:J,children:[{path:"date",component:F},{path:"daterange",component:I},{path:"datetime",component:L},{path:"inline-multiselect",component:W},{path:"multiselect",component:Q},{path:"upload",component:ee}]}],ne=G({history:M(),routes:te}),x=y({});for(const _ in h)x.component(_,h[_]);x.use(ne);x.mount("#dev-app");

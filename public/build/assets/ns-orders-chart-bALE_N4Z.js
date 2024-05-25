import{_ as i,n as d,a as x}from"./currency-lOMYG1Wf.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as h,o as u,c as f,a as s,t as l,f as p}from"./runtime-core.esm-bundler-DzqFO6Tt.js";const m={name:"ns-orders-chart",data(){return{totalWeeklySales:0,totalWeekTaxes:0,totalWeekExpenses:0,totalWeekIncome:0,chartOptions:{theme:{mode:window.ns.theme},chart:{id:"vuechart-example",width:"100%",height:"100%"},stroke:{curve:"smooth",dashArray:[0,8]},xaxis:{categories:[]},colors:["#5f83f3","#AAA"]},series:[{name:i("Current Week"),data:[]},{name:i("Previous Week"),data:[]}],reportSubscription:null,report:null}},methods:{__:i,nsCurrency:d,nsRawCurrency:x},mounted(){this.reportSubscription=Dashboard.weeksSummary.subscribe(n=>{n.result!==void 0&&(this.chartOptions.xaxis.categories=n.result.map(t=>t.label),this.report=n,this.totalWeeklySales=0,this.totalWeekIncome=0,this.totalWeekExpenses=0,this.totalWeekTaxes=0,this.report.result.forEach((t,c)=>{if(t.current!==void 0){const r=t.current.entries.map(e=>e.day_paid_orders);let a=0;r.length>0&&(a=r.reduce((e,o)=>e+o)),this.totalWeekExpenses+=t.current.entries.map(e=>parseFloat(e.day_expenses)).reduce((e,o)=>e+o),this.totalWeekTaxes+=t.current.entries.map(e=>parseFloat(e.day_taxes)).reduce((e,o)=>e+o),this.totalWeekIncome+=t.current.entries.map(e=>parseFloat(e.day_income)).reduce((e,o)=>e+o),this.series[0].data.push(a)}else this.series[0].data.push(0);if(t.previous!==void 0){const r=t.previous.entries.map(e=>e.day_paid_orders);let a=0;r.length>0&&(a=r.reduce((e,o)=>e+o)),this.series[1].data.push(a)}else this.series[1].data.push(0)}),this.totalWeeklySales=this.series[0].data.reduce((t,c)=>t+c))})}},b={id:"ns-orders-chart",class:"flex flex-auto flex-col shadow ns-box rounded-lg overflow-hidden"},k={class:"p-2 flex ns-box-header items-center justify-between border-b"},y={class:"font-semibold"},v={class:"foot -mx-4 flex flex-wrap"},w={class:"flex w-full lg:w-full border-b"},W={class:"px-4 w-1/2 lg:w-1/2 flex flex-col items-center justify-center"},g={class:"text-xs"},C={class:"text-lg xl:text-xl font-bold"},S={class:"px-4 w-1/2 lg:w-1/2 flex flex-col items-center justify-center"},E={class:"text-xs"},j={class:"text-lg xl:text-xl font-bold"},I={class:"flex w-full lg:w-full"},T={class:"px-4 w-full lg:w-1/2 flex flex-col items-center justify-center"},A={class:"text-xs"},O={class:"text-lg xl:text-xl font-bold"},B={class:"px-4 w-full lg:w-1/2 flex flex-col items-center justify-center"},F={class:"text-xs"},N={class:"text-lg xl:text-xl font-bold"};function R(n,t,c,r,a,e){const o=h("ns-close-button");return u(),f("div",b,[s("div",k,[s("h3",y,l(e.__("Recents Orders")),1),s("div",null,[p(o,{onClick:t[0]||(t[0]=D=>n.$emit("onRemove"))})])]),s("div",v,[s("div",w,[s("div",W,[s("span",g,l(e.__("Weekly Sales")),1),s("h2",C,l(e.nsCurrency(a.totalWeeklySales,"abbreviate")),1)]),s("div",S,[s("span",E,l(e.__("Week Taxes")),1),s("h2",j,l(e.nsCurrency(a.totalWeekTaxes,"abbreviate")),1)])]),s("div",I,[s("div",T,[s("span",A,l(e.__("Net Income")),1),s("h2",O,l(e.nsCurrency(a.totalWeekIncome,"abbreviate")),1)]),s("div",B,[s("span",F,l(e.__("Week Expenses")),1),s("h2",N,l(e.nsCurrency(a.totalWeekExpenses,"abbreviate")),1)])])])])}const z=_(m,[["render",R]]);export{z as default};
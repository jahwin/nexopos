import{b as y,d as h,G as P,P as b,v as S,w as q}from"./bootstrap-5278e747.js";import{n as C}from"./ns-procurement-quantity-d642b1b8.js";import{n as v,d as A,b as x}from"./ns-prompt-popup-f1ddf178.js";import{_ as c,n as g}from"./currency-f8bd78d1.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{r as V,o as l,c as u,a as t,B as U,t as r,F as j,b as k,e as p,i as f,g as L,w,f as N}from"./runtime-core.esm-bundler-b48de70a.js";const B={name:"ns-stock-adjustment",props:["actions"],data(){return{search:"",timeout:null,suggestions:[],products:[]}},mounted(){},methods:{__:c,nsCurrency:g,searchProduct(e){e.length>0&&y.post("/api/procurements/products/search-procurement-product",{argument:e}).subscribe(s=>{if(s.from==="products")if(s.products.length>0)s.products.length===1?this.addSuggestion(s.products[0]):this.suggestions=s.products;else return this.closeSearch(),h.error(c("Looks like no valid products matched the searched term.")).subscribe();else if(s.from==="procurements"){if(s.product===null)return this.closeSearch(),h.error(c("Looks like no valid products matched the searched term.")).subscribe();this.addProductToList(s.product)}})},addProductToList(e){if(this.products.filter(n=>n.procurement_product_id===e.id).length>0)return this.closeSearch(),h.error(c("The product already exists on the table.")).subscribe();const a=this.actions.filter(n=>n.value==="deleted");let d=a.length===1?a[0]:{value:"deleted"};const o=new Object;e.unit_quantity.unit=e.unit,o.selected=!1,o.quantities=[e.unit_quantity],o.name=e.name,o.adjust_unit=e.unit_quantity,o.adjust_quantity=1,o.adjust_action=d.value,o.adjust_reason="",o.adjust_value=0,o.id=e.product_id,o.accurate_tracking=1,o.available_quantity=e.available_quantity,o.procurement_product_id=e.id,o.procurement_history=[{label:`${e.procurement.name} (${e.available_quantity})`,value:e.id}],this.recalculateProduct(o),this.products.unshift(o),this.clearSearch()},addSuggestion(e){const s=this.products.filter(a=>a.id===e.id).length>0;P([y.get(`/api/products/${e.id}/units/quantities`)]).subscribe(a=>{if(a[0].length>0){const d=a[0].filter(_=>_.unit.base_unit),o=this.actions.filter(_=>_.value==="set");let n=o.length===1?o[0]:{value:"set"};e.selected=!1,e.quantities=a[0],e.adjust_quantity=1,e.adjust_action=n.value,e.adjust_reason="",e.adjust_unit=d.length>0&&!s?d[0]:"",e.adjust_value=0,e.procurement_product_id=0,this.recalculateProduct(e),this.products.unshift(e),this.clearSearch()}else return h.error(c("This product doesn't have any stock to adjust.")).subscribe();e.accurate_tracking})},closeSearch(){this.$refs.searchField.select(),this.suggestions=[]},clearSearch(){this.search="",this.suggestions=[]},recalculateProduct(e){e.adjust_unit!==""&&(["deleted","defective","lost"].includes(e.adjust_action)?e.adjust_value=-(e.adjust_quantity*e.adjust_unit.sale_price):e.adjust_value=e.adjust_quantity*e.adjust_unit.sale_price),this.$forceUpdate()},openQuantityPopup(e){e.quantity,new Promise((a,d)=>{b.show(C,{resolve:a,reject:d,quantity:e.adjust_quantity})}).then(a=>{if(!["added","set"].includes(e.adjust_action)){if(e.accurate_tracking!==void 0&&a.quantity>e.available_quantity)return h.error(c("The specified quantity exceed the available quantity.")).subscribe();if(a.quantity>e.adjust_unit.quantity)return h.error(c("The specified quantity exceed the available quantity.")).subscribe()}e.adjust_quantity=a.quantity,this.recalculateProduct(e)})},proceedStockAdjustment(){if(this.products.length===0)return h.error(c("Unable to proceed as the table is empty.")).subscribe();b.show(v,{title:c("Confirm Your Action"),message:c("The stock adjustment is about to be made. Would you like to confirm ?"),onAction:e=>{e&&y.post("/api/products/adjustments",{products:this.products}).subscribe(s=>{h.success(s.message).subscribe(),this.products=[]},s=>{h.error(s.message).subscribe()})}})},provideReason(e){new Promise((a,d)=>{b.show(A,{title:c("More Details"),resolve:a,reject:d,message:c("Useful to describe better what are the reasons that leaded to this adjustment."),input:e.adjust_reason,onAction:o=>{o!==!1&&(e.adjust_reason=o)}})}).then(a=>{h.success(c("The reason has been updated.")).susbcribe()}).catch(a=>{})},async selectAdjustmentUnit(e){try{const s=await new Promise((n,_)=>{b.show(x,{label:c("Select Unit"),resolve:n,reject:_,description:c("Select the unit that you want to adjust the stock with."),name:"adjust_unit",options:e.quantities.map(i=>({label:i.unit.name,value:i}))})}),a=this.products.indexOf(e);if(this.products.filter((n,_)=>_!==a).filter(n=>n.adjust_unit.unit.id===s.unit.id&&n.adjust_unit.product_id===s.product_id).length>0)return h.error(c("A similar product with the same unit already exists.")).subscribe();e.adjust_unit=s,this.recalculateProduct(e)}catch{}},async selectProcurement(e){try{console.log(e);const s=await new Promise((a,d)=>{b.show(x,{label:c("Select Procurement"),resolve:a,reject:d,description:c("Select the procurement that you want to adjust the stock with."),name:"adjust_procurement",options:e.procurement_history})});e.procurement_product_id=s,this.recalculateProduct(e)}catch(s){throw s}},async selectStockAdjustementAction(e){try{const s=await new Promise((a,d)=>{b.show(x,{label:c("Select Action"),resolve:a,reject:d,description:c("Select the action that you want to perform on the stock."),name:"adjust_action",options:this.actions})});e.adjust_action=s}catch(s){throw s}},removeProduct(e){b.show(v,{title:c("Confirm Your Action"),message:c("Would you like to remove this product from the table ?"),onAction:s=>{if(s){const a=this.products.indexOf(e);this.products.splice(a,1)}}})},getAdjustActionLabel(e){const s=this.actions.filter(a=>a.value===e);return s.length>0?s[0].label:c("N/A")},deleteSelectedProducts(){b.show(v,{title:c("Confirm Your Action"),message:c("Would you like to remove the selected products from the table ?"),onAction:e=>{e&&(this.products=this.products.filter(s=>!s.selected))}})}},watch:{search(){this.search.length>0?(clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.searchProduct(this.search)},500)):this.closeSearch()}}},Q={class:"input-field flex border-2 input-group rounded"},R={class:"px-3 py-2 rounded-none"},F={key:0,class:"h-0"},O={class:""},D={class:"shadow h-96 relative z-10 ns-vertical-menu zoom-in-entrance anim-duration-300 overflow-y-auto"},W=["onClick"],Y={class:"ns-box rounded shadow my-2 w-full"},z={class:"table w-full ns-table"},K={class:"border-b"},M={class:"p-2"},E={width:"120",class:"p-2 text-center hidden md:table-cell"},G={width:"120",class:"p-2 text-center hidden md:table-cell"},H={key:0},J={class:"p-2 border-b text-center hidden md:table-cell",colspan:"6"},I={class:"p-2 border-b text-center table-cell md:hidden",colspan:"4"},X={class:"p-2 border"},Z={class:"flex justify-between"},$=["onClick"],ee=["checked"],te=["onClick"],se={class:"flex -mx-2 md:flex-row flex-wrap"},ne=["onClick"],ie={class:"text-xs cursor-pointer border-b border-dashed border-info-secondary py-1"},oe={class:"text-xs"},ae={key:0,class:""},re={key:1},ce=["onClick"],de={class:"text-xs cursor-pointer border-b border-dashed border-info-secondary py-1"},le={class:"text-xs"},ue={class:""},he=["onClick"],_e={class:"text-xs cursor-pointer border-b border-dashed border-info-secondary py-1"},me={class:"text-xs"},be={class:""},pe=["onClick"],fe={class:"text-xs cursor-pointer border-b border-dashed border-info-secondary py-1"},ye={class:"text-xs"},ve={key:0},xe={key:1},je=["onClick"],ke={class:"text-xs cursor-pointer border-b border-dashed border-danger-secondary py-1"},we={class:"text-xs"},Pe=["onClick"],Se={class:"flex items-center justify-center cursor-pointer"},qe={class:"border-b border-dashed border-info-secondary py-2 px-4"},Ce={class:"p-2 border hidden md:table-cell"},Ae={class:"flex items-center justify-center"},ge={class:"border-b border-dashed border-info-secondary py-2 px-4"},Te={class:"ns-box-footer p-2 flex justify-end"},Ve={class:"-mx-2 flex"},Ue={class:"px-2"},Le=t("div",{class:"flex items-center justify-center h-6"},[t("i",{class:"las la-trash"})],-1),Ne={class:"hidden md:inline-block"},Be={class:"px-2"};function Qe(e,s,a,d,o,n){const _=V("ns-button");return l(),u("div",null,[t("div",Q,[U(t("input",{onKeyup:s[0]||(s[0]=q(i=>n.closeSearch(),["esc"])),ref:"searchField","onUpdate:modelValue":s[1]||(s[1]=i=>o.search=i),type:"text",class:"p-2 flex-auto outline-none"},null,544),[[S,o.search]]),t("button",R,r(n.__("Search")),1)]),o.suggestions.length>0?(l(),u("div",F,[t("div",O,[t("ul",D,[(l(!0),u(j,null,k(o.suggestions,i=>(l(),u("li",{onClick:m=>n.addSuggestion(i),key:i.id,class:"cursor-pointer border-b p-2 flex justify-between"},[t("span",null,r(i.name),1)],8,W))),128))])])])):p("",!0),t("div",Y,[t("table",z,[t("thead",K,[t("tr",null,[t("td",M,r(n.__("Product")),1),t("td",E,r(n.__("Quantity")),1),t("td",G,r(n.__("Value")),1)])]),t("tbody",null,[o.products.length===0?(l(),u("tr",H,[t("td",J,r(n.__("Search and add some products")),1),t("td",I,r(n.__("Search and add some products")),1)])):p("",!0),(l(!0),u(j,null,k(o.products,i=>(l(),u("tr",{key:i.id},[t("td",X,[t("div",Z,[t("div",null,[t("h3",{class:"font-bold cursor-pointer",onClick:m=>i.selected=!i.selected},[t("input",{type:"checkbox",checked:i.selected,name:"",id:""},null,8,ee),f(" "+r(i.name)+" ("+r((i.accurate_tracking===1?i.available_quantity:i.adjust_unit.quantity)||0)+")",1)],8,$)]),t("div",null,[t("span",{class:"md:hidden cursor-pointer border-dashed border-b border-info-secondary",onClick:m=>n.openQuantityPopup(i)},r(n.__("Quantity"))+" : "+r(i.adjust_quantity),9,te)])]),t("div",se,[t("div",{class:"px-2 w-1/2 md:w-auto",onClick:m=>n.selectAdjustmentUnit(i)},[t("div",ie,[t("span",oe,r(n.__("Unit:")),1),f("  "),i.adjust_unit.unit?(l(),u("span",ae,r(i.adjust_unit.unit.name),1)):p("",!0),i.adjust_unit.unit?p("",!0):(l(),u("span",re,r(n.__("N/A")),1))])],8,ne),t("div",{class:"px-2 w-1/2 md:w-auto",onClick:m=>n.selectStockAdjustementAction(i)},[t("div",de,[t("span",le,r(n.__("Operation:")),1),f("  "),t("span",ue,r(n.getAdjustActionLabel(i.adjust_action)),1)])],8,ce),i.accurate_tracking===1?(l(),u("div",{key:0,class:"px-2 w-1/2 md:w-auto",onClick:m=>n.selectProcurement(i)},[t("div",_e,[t("span",me,r(n.__("Procurement:")),1),f("  "),t("span",be,r(i.procurement_history.filter(m=>m.value===i.procurement_product_id)[0].label),1)])],8,he)):p("",!0),t("div",{class:"px-2 w-1/2 md:w-auto",onClick:m=>n.provideReason(i)},[t("div",fe,[t("span",ye,r(n.__("Reason:")),1),f("  "),i.adjust_reason?(l(),u("span",ve,r(n.__("Provided")),1)):(l(),u("span",xe,r(n.__("Not Provided")),1))])],8,pe),t("div",{class:"px-2 w-1/2 md:w-auto",onClick:m=>n.removeProduct(i)},[t("div",ke,[t("span",we,r(n.__("Remove")),1)])],8,je)])]),t("td",{class:"p-2 border hidden md:table-cell",onClick:m=>n.openQuantityPopup(i)},[t("div",Se,[t("span",qe,r(i.adjust_quantity),1)])],8,Pe),t("td",Ce,[t("div",Ae,[t("span",ge,r(n.nsCurrency(i.adjust_value)),1)])])]))),128))])]),t("div",Te,[t("div",Ve,[t("div",Ue,[o.products.filter(i=>i.selected).length>0?(l(),L(_,{key:0,onClick:s[2]||(s[2]=i=>n.deleteSelectedProducts()),type:"error"},{default:w(()=>[Le,t("span",Ne,r(n.__("Remove Selected")),1)]),_:1})):p("",!0)]),t("div",Be,[N(_,{onClick:s[3]||(s[3]=i=>n.proceedStockAdjustment()),type:"info"},{default:w(()=>[f(r(n.__("Proceed")),1)]),_:1})])])])])])}const ze=T(B,[["render",Qe]]);export{ze as default};

import{_ as c,$ as p,c as m,l as u,q as g,e as t,t as r,D as f,z as _,v as a,A as V,E as y,G as P,y as v}from"./index-a104d20c.js";import{a as b,V as h}from"./VRow-6ff96d89.js";import{V as F}from"./VCard-99e97b00.js";import{V as S}from"./VSpacer-1f031e0c.js";import{b as x}from"./VTextField-31e7c5f9.js";import{V as k,a as D}from"./VDataTable-cbe149f0.js";import"./VInput-d9e8c4f3.js";import"./VSelect-0d61c866.js";import"./VChip-c976a8e8.js";import"./VSlideGroup-5e7392b5.js";import"./VTable-eb1749b3.js";const I=l=>(y("data-v-05c227f6"),l=l(),P(),l),w=I(()=>v("div",null,null,-1)),C={__name:"SubSystemInfoPage",setup(l){const e=p({selected:[],tableDataList:[],currentPage:1,itemsPerPage:10}),i=[{title:"구분",key:""},{title:"도번",key:""},{title:"통상품명",key:""},{title:"부체계/담당자명",key:""}],d=m(()=>Math.ceil(e.tableDataList.length/e.itemsPerPage));return(n,o)=>(u(),g("div",{class:f(["overflow-auto pt-6",{"px-15":n.$vuetify.display.mdAndUp}])},[t(b,{class:"mb-3"},{default:r(()=>[t(S),t(h,{class:"d-flex ga-3",cols:"3"},{default:r(()=>[t(x,{"bg-color":"#FFFFFF","hide-details":"",label:"검색어",variant:"outlined",density:"compact"}),t(_,{flat:"",width:"80",height:"40",color:"primary",text:"검색"})]),_:1})]),_:1}),t(F,{variant:"outlined",flat:"",class:"card"},{default:r(()=>[t(k,{style:{"min-height":"calc(100vh - 280px)"},class:"cus-data-table",page:a(e).currentPage,"onUpdate:page":o[0]||(o[0]=s=>a(e).currentPage=s),"items-per-page":a(e).itemsPerPage,modelValue:a(e).selected,"onUpdate:modelValue":o[1]||(o[1]=s=>a(e).selected=s),headers:i,"show-select":""},{bottom:r(()=>[w]),_:1},8,["page","items-per-page","modelValue"]),t(V),t(D,{style:{color:"#000000","background-color":"#FFFFFF"},density:"compact",modelValue:a(e).currentPage,"onUpdate:modelValue":o[2]||(o[2]=s=>a(e).currentPage=s),length:a(d)},null,8,["modelValue","length"])]),_:1})],2))}},R=c(C,[["__scopeId","data-v-05c227f6"]]);export{R as default};
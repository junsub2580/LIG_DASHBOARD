import{bK as a}from"./index-a104d20c.js";import{$ as r}from"./dataset.Svc-c38d2df9.js";const i=a.value("rootApi"),o=i+"/api/auth",d={checkDuplicateUserId:n,registerUser:c,onLogin:u};async function n(t){return await r({url:o+`/check-duplicate?id=${t}`,method:"GET"})}async function c(t){return await r({url:o+"/register",method:"POST",data:t})}async function u(t,e){return await r({url:o+`/login?username=${t}&password=${e}`,method:"POST"})}a.value("rootApi");export{d as a};
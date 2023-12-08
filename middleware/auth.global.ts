export default defineNuxtRouteMiddleware((to, from)=>{
    console.log("To : ", to);
    console.log("From : ",from);
})
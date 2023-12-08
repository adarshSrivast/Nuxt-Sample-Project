export default defineNuxtRouteMiddleware((to, from)=>{
    const isLoggedIn = false;
    if(!isLoggedIn){
        return navigateTo('/login');
    }else{   
        // return navigateTo(to.fullPath)

        // let redirected = false;
        // if(!redirected){
        //     redirected = true;
        //     return navigateTo(to.fullPath)
        // } 

        if(to.redirectedFrom !== undefined){
            console.log(to.redirectedFrom)
            return navigateTo(to.fullPath)
        }

    }


})
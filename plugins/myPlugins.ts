export default defineNuxtPlugin(nuxtApp => {
    // console.log(nuxtApp);
    return {
        provide : {
            sayThis : (msg:string) => console.log(msg)
        }
    }
})

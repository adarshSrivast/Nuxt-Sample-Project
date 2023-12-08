export const useUtils = ()=>{
    const sayThis = (data:string)=>{
        console.log(data);
    }
    
    return {
        sayThis,
    }
}
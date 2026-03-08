// write  a javascript function which reslves a promise after n seconds . the function takes n as the parameter. use an IIFE to execute the function with diffrent value of n 

const delay=(n) =>{
 return new Promise((resolve)=>{

     setTimeout(()=>{
        resolve(`resolved after ${n} seconds`)
     }, n*1000)
    })

}
(async () => {
    
    let val1  = await delay(1)
console.log(val1);

})()
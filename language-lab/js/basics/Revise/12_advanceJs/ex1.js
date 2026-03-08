// write a program to print the following after 2 seconds delay "hellow", "world"

(function delay(){
    setTimeout(()=>{
        console.log("hellow", "world");
        
    }, 2000)
})()

const delay2 =(n)=>{
   return new Promise((resolve)=>{
    setTimeout(resolve,n*1000)
   })
}

(async function () {
    await delay2(2)
    console.log("hellow")
    console.log("world")
})()
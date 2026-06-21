// Immediately Invoked Function Expressions (IIFE)
// If you're having problem with the glob scope polution  so for removing it we use iife

(function chai() {
  console.log(`DB CONNECTED`);
})(); // ; is necessary for stoping the code working so that next arrow funcion will work 
// chai()

(()=>{
    console.log("DB CONNECTED AGAIN")
})();

((name)=>{
    console.log(`DB CONNECTED WITH ${name}`)
})("chaple");
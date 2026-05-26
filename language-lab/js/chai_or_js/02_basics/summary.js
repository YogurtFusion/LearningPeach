// arrays are shallow copies they share same reference point heap. it's not a deep copies( different reference point or fcopy) 


// slice, splice

console.log("A", myArr);// Actual array 

const myn1 = myArr.slice(1,3)// slices give you the copy
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)// slplice literally removes 
console.log(myn2);
console.log("c",myArr);


// signleton-obj: made by constructor 
// Object.create 
const tinderUser = new Object()
console.log(tinderUser);

// following are the objects literals
const tinderUser2 = {}
console.log(tinderUser2);


const mySym = Symbol("id1")

const JsUser ={
    name:"chaple",
    "full name":"chple cheese",
    // [Symbol("mySym2")]:"myKey1",// if you define symbol in obj you'll loose it's key everytime you call it  
    [mySym]:"myKey2",
}

// console.log(JsUser.full name);
console.log(JsUser["full name"]);// THIS IS THE better way to use objects
// console.log(JsUser[Symbol("mySym")]); // if you don't define symbol outside it will say un defined 


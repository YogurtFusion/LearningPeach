const mySym = Symbol("Key1")
// console.log(mySym);
// console.log(typeof(mySym));

const JsUser ={
    name:"chaple",
    "full name":"chple cheese",
    [mySym]:"myKey1",
    age:18,
    location:"mars",
    email:"denjilovesmilk@gmail.com",
    isLoggedIn :false,
}

console.log(JsUser.email);// this is the genral way to get objects
// console.log(JsUser.full name);
console.log(JsUser["email"]);// this is one of the BETTER WAY to use objects
console.log(JsUser["full name"]);// this is the ONLY way to  use two words or string objects
console.log(JsUser[mySym]);

// console.log(JsUser[Symbol("mySym")]); // if you don't define symbol outside it will say un defined 

JsUser.email = "chaple@gmail.com"


Object.freeze(JsUser) // COMMENT OUT before adding or chaing anything or it will not works 


JsUser["email"] = "pizza@gmail.com" 
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hellow world");
    
}

JsUser.greetingTwo = function () {
    console.log(`this is value in the object ${this.email}`);
    
}

// console.log(JsUser.greeting);// it will not work because it's not returning anything
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



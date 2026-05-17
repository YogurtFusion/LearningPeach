// primitive

// 7 types: String, Number, boolean, null, undefined, symbol, BigInt

// js is dynamic defie lang and ts (typescript) is static define or static typed language

const score = 100// number data type
const scroreValue = 100.3// number data type

const isLoggedIn = false // boolean
const outsideTemp = null //null
let userEmail; // undefined  
let userEmail2 = undefined // undefined

const id = Symbol("123")// both are different and used in frotned for unique datatype 
const anotherid=Symbol("123")

// console.log(id === anotherid);

const bigNumber = 238902390823093092n

console.log(typeof(bigNumber));


// master Objects, and web events and you mastered js
// Reference (Non primitive)

// Array, Objects, functions

// the datatype or typeof every or most non primitive data types are object  instead function are different even if it return function data types it's actually first class object 

const dishes = ["cheese pull", "oregano", "corns", "chilli flex"]

let myObj = {
    name:"chapple",
    place:"church",

}


const myfunc = function(){
    console.log("Hellow World");
    
}
myfunc()


let cat = true
console.log(Number(true))

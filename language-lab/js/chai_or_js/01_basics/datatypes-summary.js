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

//https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), heap(Non-primitive)

let cheese = "chapple cheese"

let cheesePUll = cheese
// console.log(cheesePUll );
cheesePUll = "melted cheese"

console.log(cheese); // cheese is still holds it's old value because js gave a copy of cheese to cheesepull so when cheesePUll became melted cheese we changed in the copy of cheeese not in the main cheese so it is still chapple cheese 
console.log(cheesePUll );

let userOne = {
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bread@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
// here both values will change because even though userOne or userTwo as an variable saves in stack their vaues are non-primitive so they will save in heap so heap don't gives you copy if you change something you're changing in real value or it's actual Reference

//  for more heap and stack see the diagram 
// C:\workspace\Learning Peach\LANGUAGE-LAB\js\chai_or_js\01_basics\www.youtube.com_watch_v=7gwc-1czolw&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10.png

let myDate = new Date()
console.log(typeof(myDate));

console.log(Math.floor(Date.now()/1000));// 1000 for converting in seconds and floor for roudning up 

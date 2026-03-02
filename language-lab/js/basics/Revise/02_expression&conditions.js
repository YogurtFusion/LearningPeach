// use logical operators to find out whether the the age of  a person lies between 10 & 20

let x = 10;

let y = 20;
// let z = x && y
let age = 13;

if (x <= age && age <= y) {
  console.log("yes it lies between y and x ");
} else {
  console.log("no you're a unc now or drink milk ");
}

let demo = x == y ? console.log("yes") : console.log("no");

// demonstrate the use of switch case statement in javascript

let day = 2;
switch (day) {
  case 1:
    console.log("mondays");
    break;
  case 2:
    console.log("no not monday");
    break;
  default:
    break;
}
// write a program to demonstrate whether the program is divisible by 2 and 3 

let $x = 2

let $y = 3
let input = 16
if ( (input % $x == 0)  && ( input % $y ===0)  ){
console.log("yes it's divisible ")
}
else{
    console.log("not it's not ");
    
}

// write a javascript program to find whether a no. is divisible by either 2 or 3 


if ((input% 2 ===0) || (input % 3 ===0)){
    console.log("yest it's divisible ");
    
}

else{
    console.log( "no it's not " )
}

// write a program to you can drive or not based on age being greater then 18 using ternary operator
let minor = 18
let drink_age = 29
let third = drink_age>= minor ? console.log("yes you can drive"): console.log("you can't drive ");


let drinking_age= drink_age >= 18 ? console.log("you can drive ") :console.log("you can't drive ")
 
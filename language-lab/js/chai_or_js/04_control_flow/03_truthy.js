const userEmail = "chai@chai.ai";

// it's working without check. what if user email will be potato or empty array still it's working
if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have the user email");
}

// flasy values

// false, 0 , -0 (asked in interviews), BigInt 0n (asked in interviews), ""(string with no space), null, undefined, NaN

// truthy values

// "0", "false", " "(string with space), [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empety ");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish coalescing operator  (??)

// let val1;

// val1 = 5 ?? 10; // here they will choose the first value
// console.log(val1);

// val1 = null ?? 10; // here it will avoid null 
// console.log(val1);

// val1 = undefined ?? 10; // here it will avoid undefined 
// console.log(val1);

// val1 = null ?? 10 ?? 20; // here they will choose the first value
// console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80? console.log("less then 80"):console.log("more then 80")
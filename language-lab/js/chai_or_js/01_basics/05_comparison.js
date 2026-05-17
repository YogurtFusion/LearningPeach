// console.log(2>1);// true
// console.log(2>=1);// false
// console.log(2<1);// false
// console.log(2==1);// true
// console.log(2!=1);// true

// string + number with > < >= <=
// -> JS usually converts string to number

console.log("2">1);
console.log("02">1);

// avoid null and undefined conversions
console.log("null starts here")
console.log(null >0);
console.log(null == 0);
console.log(null >=0);

// equality checks and comparisions works differently comparison =<  >= actually converts null in 0
console.log("undefined starts here")

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined<0);
console.log(undefined <=0);

// undefined behaves like NAN and null behave like 0 sometimes

// === 

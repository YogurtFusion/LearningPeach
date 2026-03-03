console.log(" har\"".length);
// explore the includes , starts with and ends with function of a string 

let str = " ok this is some kind of string!"
console.log(str.endsWith("string"));
console.log(str.endsWith("string!"));
console.log(str.startsWith("ok"));
console.log(str.startsWith(" ok"));


let word = "some"
let word2 = "okiess"

console.log(`
    the word ${word2} ${str.includes(word2) ? " is ": "is not"} includes in the sentence
    `);

// write a program to conver the given string into lower case

let givenstr = "LET'S SAY THIS IS THE GIVEN STRING"

function lowercaseConverter(string) {
    return string.toLowerCase()
}


let result = lowercaseConverter(givenstr)

console.log(result);

// Extract the amount out of the string 

let amount = "please give me 1000"

console.log(amount.split(" ").pop());



// try to chnage  a fourth character of a given string were you able to do that ? 

// can't do it strings are immutable 

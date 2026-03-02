// write a program to print the marks of the student in an object using for loop

const obj = {
  harry: "98",
  rohan: "70",
  aakash: "73",
};
let keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], obj[keys[i]]);
}

// write this same program with for in loop

for (const key in obj) {
    
    console.log(key, obj[key]);
}

// write a program to print try again until the users enter correct no. 
// let numb = 93
// let input = Number(prompt("enter your no."))
// while (numb !== input) {
//     console.log("try again");
    
// }

// write a function of finding a mean of  5 no.

function mean( a, b, c, d, e) {
    console.log((a+b+c+d+e)/5);
    
}
mean(1,2,3,4,5)
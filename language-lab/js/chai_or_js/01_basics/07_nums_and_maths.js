// const score = 400
// console.log(score);

// const balance  = new Number(100)
// console.log(balance);
// console.log(`\n${balance.toString()}`);
// console.log(balance.toString().length);
// console.log(`${typeof(balance.toString())}`);

// console.log(`\n${balance.toFixed(2)}`);


// const otherNumber = 123.8966

// console.log(`\n${otherNumber.toPrecision(3)}`);// can't go more then 1-21

// const hundreds = 1000000
// console.log(`\n${hundreds.toLocaleString("en-IN")}`);


// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(`\n${Math.abs(-4)}`);// it's just converts any -ve number to positive 
// console.log(`\n${Math.round(3.4)}`);
// console.log(`${Math.round(3.5)}`);
// console.log(`${Math.round(3.6)}`);
// console.log(`\n${Math.ceil(4.1)}`);// always chooses highest value 
// console.log(`${Math.floor(4.9)}`);// always chooses lowest value
// console.log(`\n${Math.max(3,2,6,4,9)}`);
// console.log(`${Math.min(3,2,6,4,9)}`);

console.log(`\n${Math.random()}`);// only sends value between 0 - 1
console.log(`${Math.random()*10}`); // multiplied by 10 so now it can shift 1 digit 
console.log(`${(Math.random()*10) + 1}`); // added by 1 so it never comes 0 
console.log(`${Math.floor(Math.random()*10) + 1}`); // added math floor for round up value 

let min = 10 
let max = 20

console.log(`${Math.floor((Math.random()*((max-min)+1)+min))}`);



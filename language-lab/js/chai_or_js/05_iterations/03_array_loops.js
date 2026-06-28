// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hellow  world";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set("In", "India");
map.set("USA", "United states of America ");
map.set("Fr", "France")
map.set("USA", "United states of America "); // will not print 2 times

for (const [key, value] of map) {
    console.log(key, ":-", value);
    console.log(map);
}

// for of in objects
const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) { // this will not work in object 
//   console.log(key, ":-", value);
// }

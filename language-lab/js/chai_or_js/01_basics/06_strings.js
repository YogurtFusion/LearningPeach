const cheese = "cheese pull";
const pull = 50;

console.log(
  `the lenght of cheese is ${cheese.length} here are some methods ${cheese.toUpperCase()}`,
);

// console.log(cheese+pull+"value");

console.log(
  `Hello my favorite thing in pizza is ${cheese} my dream is to eat ${pull}cm long cheese pull `,
);

// beginners advice
/*
always use 
"", [], {}, functions

never use here string convert it in actual object  
new String()
new Number()
new Boolean() */
const gameName = new String("Genshin-impact");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); // we don't have to write __proto__ every time we can directly do with .lenght

console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(4));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);// if you give it -ve value it will ignore it  and starts from 0 
console.log(`${newString} \n \n`);

const anotherString = gameName.slice(-18, 4); // when negative no. is bigger then string lenght then js starts with 0 
console.log(`using anotherString ${anotherString} `);

console.log(`using slice ${gameName.slice(0, -3)} \n`);


const salad = "   avacado  "
console.log(salad);
console.log(salad.trim());

const url = "https://chapplecheese.com/margereta%20pizza"

console.log(url.replace("%20","-"));

console.log(url.includes("pizza"));

console.log(url.split("/"));

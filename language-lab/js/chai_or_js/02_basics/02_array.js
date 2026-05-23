const cheese = ["chapple cheese", "cheese pull", "melted cheese"];
const pizza = ["peperoni", "oregano","olives", "sweet corns"]
const burger = ["buns", "patty","sauce"]

cheese.push(pizza)
console.log(cheese)
console.log(cheese[3])

console.log(cheese.join("     "));

let arr = cheese.concat(pizza)
console.log(arr)

const dish = [...cheese, ...pizza]// spread is more preferable then concoat because here you can add more then array like strings etc
const dish2 = [...cheese, ...pizza,"this is the string in concat", ...burger]// spread is more preferable then concoat because here you can add more then array like strings etc
console.log(dish, dish2);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_array = another_array.flat(Infinity)
console.log(usable_array);

console.log(Array.isArray("Church Chaple"));
console.log(Array.from(" Church Chaple "));
console.log(Array.from("Church Chaple"));
console.log(Array.from({name:"Cheese"}));// here it don't know want to convert in array so its confuse here that's why it chooses to return empty array

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));

const snacks = cheese.concat(pizza,burger)
console.log(snacks);

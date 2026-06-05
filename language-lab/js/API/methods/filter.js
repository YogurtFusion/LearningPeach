// .filter() = creates a new array by filtering
//              out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums, oddNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

const ages = [16, 16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const childs = ages.filter(isChild);

console.log(adults, childs);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

const shortWords = words.filter(moreThenSix);
console.log(shortWords);

const longWords = words.filter(lessThenSix);
console.log(longWords);

function moreThenSix(element) {
  return element.length <= 6;
}

function lessThenSix(element) {
  return element.length > 6;
}

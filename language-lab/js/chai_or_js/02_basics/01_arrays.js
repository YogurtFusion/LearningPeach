// array

const myArr = [0, 1, 2, 3, 4, 5];
const cheese = ["chapple cheese", "cheese pull", "melted cheese"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(
  ` this is my array index 0 result: ${myArr[0]}, this is my array index 3 result ${myArr2[3]}`,
);

// Array methods

myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)// not ideal adds it's to first and move all the array
console.log(myArr);

myArr.shift()// removes the firstvalue
console.log(myArr);

console.log(`does my array includes 9: ${myArr.includes(9)}`);
console.log(`the index of 0 is ${myArr.indexOf(0)}`);

const newArr = myArr.join()
console.log(newArr);
console.log(typeof(newArr));


console.log(myArr);


// slice, splice

console.log("A", myArr);// Actual array 

const myn1 = myArr.slice(1,3)// slices give you the copy
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)// slplice literally removes 
console.log(myn2);
console.log("c",myArr);

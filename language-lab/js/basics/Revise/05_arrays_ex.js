// // create an array of numbers and take input from the user to add numbers to this array

// let user_input = 32;

// function addArray(user_input) {
//   let array = [1, 3, 4, 6, 7, 3, 5, 3];
//   return (array.push(user_input), array);
// }

// function addArraySpread(user_input) {
//   let array = [1, 3, 4, 6, 7, 3, 5, 3];
//   return [...array, user_input];
// }

// let result = addArray(user_input);
// console.log(result);
// console.log(addArray(user_input));

// keep adding numbers to the array in question no. 1 until o is added to the array ?
// function untilZero(user_input) {
//   //   while (user_input !== 0) {
//   //     let array = [1, 3, 4, 6, 7, 3, 5, 3];
//   //     return [array.push(user_input), array];
//   //   }
//   let array = [1, 3, 4, 6, 7, 3, 5, 3];
//   for (let i = 0; i < array.length; i++) {
//     array.push(user_input[i])
//     if (user_input[i] === 0) {
//       break
      
//     }return array
//   }
// }

// let resultUntilZero = untilZero([1, 4, 9, 0]);
// console.log(resultUntilZero);


// create a array of square of given numbers 

// let array = [1,2,3,4,5]

// let square = array.map((e)=>e*e);
// console.log(square);

// use  reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)

let n = 5

let numbers = Array.from({length: n},(_, i)=>i+1)

let factorial = numbers.reduce((accumulator, currentValue)=>{
    return accumulator*currentValue
},1 )

console.log(factorial);

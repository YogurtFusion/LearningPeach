// for

// index - variable declared
// index<array.lenght - condition check
// index ++ - iteration/condition change
// { } - block

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

for (let index = 0; index < 10; index++) {
  const element = index;
  // console.log(index)
}
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is a best number")
  }
  // console.log(element)
}

// console.log(element)

for (let i = 0; i <= 10; i++) {
  //   console.log(`\n outer loop value ${i} \n`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value${j} & outer loop vlaue ${i}`);
    // console.log(`${i} * ${j} = ${i*j}`)
  }
}

let myArray = ["chaple", "cheese", "pizza"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
//   console.log(element);
}


// break & continue 

for (let i = 1; i<=20; i++){
    if(i===5){
// console.log("5 is detected ")
break
    }
    // console.log(`value of i is ${i}`)
}


for(let i = 1; i<=20; i++){
    if(i===5){
        console.log("detected 5")
        continue
    }
    console.log(`value of i ${i}`)
}

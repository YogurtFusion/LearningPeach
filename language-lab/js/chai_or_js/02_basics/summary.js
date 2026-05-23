// arrays are shallow copies they share same reference point heap. it's not a deep copies( different reference point or fcopy) 


// slice, splice

console.log("A", myArr);// Actual array 

const myn1 = myArr.slice(1,3)// slices give you the copy
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)// slplice literally removes 
console.log(myn2);
console.log("c",myArr);

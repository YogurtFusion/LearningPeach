console.log("Initializing script");

//   documet.getElementbyId("count").innerText = 5
//   let count = 5
//   console.log(count)
//
//   initialize the count as 0
//   listen for clicks on the increment button
//   increment the count variable when the button is clicked
//   change the coun el in the thtml to reflect the new count

// let count = document.getElementById("count");
// let btn = document.getElementById("btn");

// let value = 0;

// function increment() {
//     console.log("clicked");
//     value = value + 1;
// count.innerText = value    
// }

// btn.addEventListener("click", increment);

let count = document.getElementById("count")
let btn = document.getElementById("btn")
count.innerHTML+=0
let value = 0;
function increment (){
console.log("click")
value = value+1
count.innerText = value
}

btn.addEventListener("click", increment)
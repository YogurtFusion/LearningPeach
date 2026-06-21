// if

// if(false){       // If if's condition is false then it's code will never work

// }



// if(2!="2"){
// console.log("executed")
// }

// <, >, <=, >=, ==, !=, ===, !==

// const temperature = 41;

// if(temperature ===41){
//     console.log("less then 41")
// }else{
//     console.log("temperature is less greater then 41")
// }

// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }
// // console.log(`User Power: ${power}`);


// const balance = 1000;

////if(balance>500) console.log("test"),console.log("test2");// this is not the good practice

// if (balance < 500) {
//   console.log("less then 500");
// } else if (balance < 750) {
//   console.log("less then 750");
// } else if (balance < 900) {
//   console.log("less then 900");
// } else {
//   console.log("less then 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard ){
    console.log("Allowed access")
}
if(loggedInFromEmail || loggedInFromEmail){
    console.log("User logged in ")
}
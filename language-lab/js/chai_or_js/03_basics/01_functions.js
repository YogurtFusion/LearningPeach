function sayMyName() {
  console.log("c");
  console.log("h");
  console.log("a");
  console.log("p");
  console.log("l");
  console.log("e");
}

// function  - function keyword
// sayMyName - Reference/ function sayMyName
// ()        - function's paramerter (when we define function then () is parameter)
// {         - function's scope

// }

sayMyName();

//  sayMyName:  reference
//  () is excecution
// (number1, number3) now here it's called we're passing arguments



// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);

// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result

  return number1 + number2;
}

const result = addTwoNumbers(3, 3); // addTwoNumbers(3,NaN)
console.log("Result: ", result);

// function loginUserMessage(username = "same") {       // here sam is default value now it can't be empty or undefined or what so ever
function loginUserMessage(username) {
  //   if (username === undefined) {
  //     console.log("YOO!!!.. 🥺👉👈 Please enter your user name YOO!!!... 🥺👉👈");
  //     return; // so that if it's true nothing else will be retured in this function
  //   }
  if (!username) {
    // used ! instead === so that if value is falsey then it's also parse in if or if username is empty in anyway
    console.log("YOO!!!.. 🥺👉👈 Please enter your user name YOO!!!... 🥺👉👈");
    return; // so that if it's true nothing else will be retured in this function
  }

  return `${username} just logged in `;
}

console.log(loginUserMessage("cheesey pizza") )

//loginUserMessage("cheesey pizza") // Will not print anything because console log is missing
// console.log(loginUserMessage()); // this will give undefined not NuN

function calculateCartPrice(val1, val2, ...num1) {
  // it depends on the use case that '...' will be Rest operator or Spread operatory
  return num1;
}

console.log(calculateCartPrice(200, 300, 400, 500, 2000)); // here "..." are Rest operator it means collect all the no. and give it to me ohhh yeahhhh

const user = {
  username: "chaple",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

// handleObject(user)

handleObject({
  //you can also pass direct object
  username: "sam",
  price: 399,
});


const myNewArray   = [200,300,400,500,600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(`second value of myNewArray is ${returnSecondValue(myNewArray)}`)

console.log(returnSecondValue([200,500,100,300]));// just like object you can make array on the spot  

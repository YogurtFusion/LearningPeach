
function loginUserMessage (username) {
    return`${username} just logged in `
}

console.log(loginUserMessage("cheesey pizza") )
console.log(loginUserMessage() )// this will give undefined not NuN

function calculateCartPrice(val1, val2, ...num1){     // it depends on the use case that '...' will be Rest operator or Spread operatory   
  return num1
}

console.log(calculateCartPrice(200,300,400,500,2000)); // here "..." are Rest operator it means collect all the no. and give it to me ohhh yeahhhh
// first one will go in val 1 second in val 2 rest in ...num1

// ************ scope ************

// when we test scope in global enviroment is different then code enviroment
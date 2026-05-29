const user = {
  username: "chapple",
  price: "999",

  welcomeMessage: function () {
    console.log(`${this.username} welcome to our website sooobway`);
    // console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "pizza with cheese pull"
// user.welcomeMessage()

function cheese() {
  let username = "cheese pull";
  console.log(this);
  console.log(this.username); // it's output will be undefined because "this" don't works in  function
}
cheese();

const chessey = function(){
    let username = "spicey cheesy"
    console.log(this.username);
}

chessey()

const pizza =()=>{
    let food = "delicious"
    console.log(this.food);
    console.log(this);
    
    
}

pizza()

const addTwo = (num1,num2) =>{      // it's called basic aarow function or explicit return because you've to explicitly use return due to {}
    return num1 + num2
}

const againAddTwo = (num1,num2) =>  (num1 + num2)    // it's called implicit arrow function where you don't have to write return because you don't write {}. it works underthe hood thanks to ()

const objAddTwo =(num1,num2)=>({chai:"code"}) // it don't care about 3 and 4 also you've wrap object in () then curly braces {}


console.log("\n",addTwo(3,4),"\n", againAddTwo(3,4),"\n",objAddTwo(3,4));


// const myArray = [2,4,5,8,7,9]

var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    
    console.log("Inner a: ", a);
}

console.log(a);
//console.log(b);  // b is only defined in the scope
console.log("we defined var c = 300 but we're getting 30 because. it is global scope ",c);

function one() {
    const username = "chapple ";
    function two() {
        const website = "pizza";
        console.log(username);
        
    }
    
    // console.log(website); // it will give a error because It's scope is ended in the two
    
    two()
}

one();


if (true){
    const username = "cheese melt "
    if(username === true){
        const website = "choclate"
        console.log(username);
        
    }
    // console.log(website);
    
}


// console.log(username);

// ************************ interesting ************************

console.log(addone(5)) // it will following hoisting because just function and not stored in any value 
function addone(num){
    return num  + 1
}

addone(5)

//addTwo(5)// it's in the function so it's no follow the hoisting 
const addTwo  = function(num){              // it's a function some times it's called as expression 
    return num +2
}

addTwo(5)
var c = 300
let a = 300
if (true){
    let a  = 10
    const b = 20
    var c  = 30

    console.log("Inner a: ",a);
    
}

console.log(a);
//console.log(b);  // b is only defined in the scope
console.log("we defined var c = 300 but we're getting 30 because. it is global scope ",c);

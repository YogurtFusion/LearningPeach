// write a java script program to find average of numbers in an array using spread syntax

function sum (a,b,c,d,e){
return((a+b+c+d+e)/5);

}

let arr = [1, 2,3,4,5]

console.log(sum(...arr));

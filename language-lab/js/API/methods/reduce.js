// .reduce() = reduce the elements of an array 
//             to a single value

const prices = [5,30,10,25,15,20]

const total = prices.reduce(sum)
console.log(`$${total.toFixed(2)}`);


function sum(previous, next){
    return previous + next
}

const grades = [75,50,90,80,65,95];

const maximumvalue = grades.reduce(max)
console.log(maximumvalue);

const minvalue  =  grades.reduce(min)
console.log(minvalue);


function max (previous , next){
    return Math.max(previous,next)
}

function min (previous, next){
    return Math.min(previous, next)
}
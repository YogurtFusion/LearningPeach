//reduce

const myNums  = [1,2,3]
//                             (accumulator, currentValue)
const myTotal  = myNums.reduce(function (acc, currval) {
    console.log(`accumulator: ${acc} and currentValue: ${currval}`);
    return acc+currval
}, 0) // initial value

console.log(myTotal)

// const myNewTotal = myNums.reduce((acc,curvalue)=>
//     (acc+curvalue),0)
// console.log(myNewTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "python course",
        price: 999
    },
    {
        itemName : "rust  course",
        price: 6999
    },
    {
        itemName : "java course",
        price: 1999
    },
    {
        itemName : "swift course",
        price: 5999
    },
    {
        itemName : "dart course",
        price: 4999
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=>(acc+item.price),0)
console.log(priceToPay)
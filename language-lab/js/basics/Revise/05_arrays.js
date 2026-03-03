let array = [1,2,3,4,5,6,7,8,9]

console.log(

    array.map((e)=>{
        return e*2  
    })
    
);

console.log(array);
array.forEach(e => {
    // console.log(e*2);
    
});
let newArray = array.slice(1)

array.splice(2,2, 23,23)
 
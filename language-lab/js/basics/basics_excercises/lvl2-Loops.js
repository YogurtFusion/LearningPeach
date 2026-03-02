function getFinalPrice(price, ispremiumUser) {
  if (price < 100) {
    return price;
  } else {
    if (ispremiumUser === true) {
      return price - (price * 20) / 100;
    } else {
      return price - (price * 5) / 100;
    }
  }
}

console.log(getFinalPrice(120, true));

for (let i = 1; i< 51; i++) {    
    if(i%3 ===0&&i%5===0 ){
        console.log(`fizzBuzz`);
        
    }else if(i%3===0){
        console.log("fizz");
    }else if (i%5===0) {
        console.log("blizz");
        
    }
    else{
        console.log(i);
    }
}


for (let i = 1; i < 51; i++) {
    if(i%3===0&& i%5===0){
        console.log(`🍀🍀🍀🍀🍀🍀🍀`);
        
    }else if (i%3===0){
        console.log(`🍀🍀🍀`);
    }else if (i%5===0 ){
        console.log(`🍀🍀🍀🍀🍀`);
        
    }else{
        console.log(`${i}`);
        
    }
    
}


let i = 0

while(i<50){

    i++
    // console.log(i);
    if(i%3===0 && i%5 ===0){
        console.log(`fizzBuzz`)
    } else if(i%5 ===0){
        console.log(`blizz`);
    } else if(i%3 ===0){
        console.log(`flizz`);
    } else {
        console.log(`${i}`);
        
    }
}
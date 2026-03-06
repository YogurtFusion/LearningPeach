console.log("Initializing JS");

function hellow(callback) {
  console.log("");
}
function goodbye(callback) {
  console.log("goodbye");
}
goodbye(hellow);

// asynchronous

function func1() {
  setTimeout(() => {
    console.log("task 1");
  }, 5000);
}
function funct2() {
  console.log("task2");
  console.log("task3");
  console.log("task4");
}

func1(funct2);

function takeOutTrash() {
  return new Promise((resolve, reject) => {
 let takingTrash = true
 if (takingTrash){

     setTimeout(() => {
         resolve("you took out trash sucessfull 🗑️ ");
        }, 500);
    }
    else{
        reject("you didn't took trash out")
    }
  });
}

function walkDog() {
return new  Promise((resolve, reject) => {
    let WalkingDog = true
    if(WalkingDog){

        setTimeout(() => {
            resolve("you walked the dog sucessfully 🐶 ");
        }, 1500);
    }else{
        reject("You didn't walked the dog")
    }
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    let cleaningKitchen= true
    // let cleaningKitchen= false
    if(cleaningKitchen){

        setTimeout(() => {
            resolve("Kitchen cleaned sucessfull🧼");
        }, 3000);
    }else{
        reject("you didn't cleaned the kitchen")
    }
  });
}

walkDog().then(value =>{console.log(value);return cleanKitchen()})
         .then(value=>{console.log(value); return takeOutTrash()})
         .then(value=>{console.log(value); console.log("your chores done sucessfully")})   
         .catch(err=>console.error(err))

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("your chores done sucessfull");

//         })
//     })
// })

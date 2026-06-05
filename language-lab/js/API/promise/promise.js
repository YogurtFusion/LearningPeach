// Promise =    An Object that manages asynchronous operations.
//              Wrap a Promise Object around {asynchronous code}
//              "I promise to return a value"
//              PENDING -> RESOLVED or REJECTED
//              new Promise((resolve, reject)=>{asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("You walk the dog 🐕");
//     callback();
//   }, 1500);
// }

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      //   Writing if (trashTakenOut) behaves exactly the same as writing if (trashTakenOut === true)
      if (dogWalked) {
        resolve("You walk the dog 🐕");
      } else reject("You DIDN'T walked the dog");
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      //   Writing if (trashTakenOut) behaves exactly the same as writing if (trashTakenOut === true)
      if (kitchenCleaned) {
        resolve("You clean the Kitchen 🧹");
      } else {
        reject(" You DIDNT cleaned the kitchen");
      }
    }, 3000);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const TrashOut = true;
      //   Writing if (trashTakenOut) behaves exactly the same as writing if (trashTakenOut === true)
      if (TrashOut) {
        resolve("You clean the Trash ♻️");
      } else {
        reject("Your didn't Took trash out ");
      }
    }, 500);
  });
}

// walkDog().then((value) => console.log(value));

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log(`you completed all of your chores`);
  })
  .catch((error) => console.error());

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>console.log("you finished all the  chores")
//         )
//     })
// })

// ASYNC/AWAIT = Async = makes a function return a promise
//               Await = makes a async function wait for a Promise
//               Allows you write asynchronous code in a synchronous manner
//               Async don't have resolve or reject parameters
//               Everything after Await is placed in an even queue

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
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
      const TrashOut = false;
      if (TrashOut) {
        resolve("You clean the Trash ♻️");
      } else {
        reject("Your didn't Took trash out ");
      }
    }, 500);
  });
}

async function doChores(params) {
    try{

        const walkDogResult = await walkDog()
        console.log(walkDogResult)
        
        const cleanKitchenResult = await cleanKitchen()
        console.log(cleanKitchenResult)
        
        const takeOutTrashResult = await takeOutTrash()
        console.log(takeOutTrashResult)
        
        console.log("You finished all the chores!")
    }catch(error) {
 console.error(error)
    }
}

doChores()

// we don't need to do this with Async and Await


// Promises gave us a clean line instead of a messy pyramid. But if you actually want JavaScript to stop, put its hands in its pockets, and wait for the task to finish before reading the next line, you must use await.

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log(`you completed all of your chores`);
//   })
//   .catch((error) => console.error());

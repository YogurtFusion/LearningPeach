const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls, cryptography, network

  setTimeout(() => {
    console.log("async task i complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise complete");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitest", password: "123" });
    } else {
      reject("error: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Then promise is either resolved or rejected "));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUseres() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ",error);
    
  }
}

getAllUseres()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error))

// Promise.all([promiseOne, promiseThree])
// Promise.all
// yes this is also available , 
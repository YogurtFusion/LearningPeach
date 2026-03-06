// create a promise which rejects after 3 seconds use an async / await to get ti's value use a try catch to handle it's error

function rejection() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("your pormise is rejected lmao🐶");
    }, 3000);
  });
}

async function loading() {
try{
await rejection()
}catch(err) {
 console.error(err)
 alert(err)
}
}
loading()
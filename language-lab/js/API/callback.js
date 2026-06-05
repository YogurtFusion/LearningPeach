// callback = a function that is passed as an argument to another function.

// without callback:>
hellow();
goodbbye();
function hellow() {
  setTimeout(function () {
    console.log(`hellow`);
    console.log(`it's the set time out here hellow is printing after 3secs`);
  }, 3000);
}

function goodbbye() {
  console.log(`good bye`);
}

// with callback:>

hello(goodbye); // don't added () to good bye other wise you'll inmedeatily invoke it

function hello(callback) {
  setTimeout(function () {
    console.log(`\nhellow!!! `);
    callback();
  }, 4000);
}

function goodbye() {
  console.log(`goodbye !!!`);
}

// second example:>

sum(displayFunction, 3, 4);
sum(displayPage, 3, 4);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

// function displayFunction(result) {
//     console.log(result);
// }


function displayFunction(print) {
    console.log(print);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result 
}
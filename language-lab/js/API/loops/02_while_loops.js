// while loops = repeat some code WHILE  some conditions is  true

let username = "";

// while is the keyword
// username ==="":> primary test
//          OR ||
// username === null :> if you click cancel it says null or nothing
while (username === "" || username === null) {
  username = window.prompt(`Enter your name`);
}

console.log(`Hellow ${username}`);

// another variation of while loop "do while loop":> it means it atleast runs one time

let do_username;

do {
  do_username = window.prompt(`Enter your name`);
} while (do_username === "" || do_username === null);

console.log(`hellow${username}`);

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt(`Enter your name`);
  password = window.prompt(`Enter your password`);

  if (username === "myuser" && password === "mypass") {
    loggedIn = true;
    console.log(`you've sucessfully logged in`);
  } else {
    console.log(`Invalid credentials!!!....`);
  }
}

let loggedIn = true;
let username;
let password;

do {
  username = window.prompt(`Enter your name`);
  password = window.prompt(`Enter your password`);

  if (username === "myuser" && password === "mypass") {
    loggedIn = true;
    console.log(`you've sucessfully logged in`);
  } else {
    console.log(`Invalid credentials!!!....`);
  }
} while (!loggedIn);

// write a program using prompt function to take input of age as an value from the user and use alter to tell them if they can drive or not

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let input = prompt("enter your age: ");

  if (input >= 18) {
    alert("yes you can drive");
  } else {
    alert("you can't drive ");
  }
  let secInput = confirm("are you wanna se prompt again");
  while (secInput === true) {
    let input = prompt("enter your age: ");
    if (input >= 18) {
      alert("yes you can drive");
    } else {
      alert("no you can't ");
    }
  }
});

// In ques 1 use confirm to ask the user if he want to see prompt again or not
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
  let input = prompt("enter your age: ");

  if (input >= 18) {
    alert("yes you can drive");
  } else {
    alert("you can't drive ");
  }

  let again = confirm("are you wanna se prompt again");
  if (again) {
    let input = prompt("enter your age: ");
    if (input >= 18) {
      alert("yes you can drive");
    } else {
      alert("you can't drive");
    }
  }
});

// In the previous question use console.error to log the error if the age is entered is negative

let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {
  let input = prompt("enter your age");
  if (input < 0) {
    console.error("your input is less then 0");
  } else if (input >= 18) {
    alert("yes you can drive");
  } else {
    alert("you can't drive");
  }

  let again = confirm("are you wanna see the prompt again ");
  if (again) {
    let input = prompt("enter your age");
    if (input >= 18) {
      alert("yes you can drive");
    } else {
      alert("no you can't drive");
    }
  }
});

// write  a program to change the url to google.com (redirection ) if user enter a number greater then 4
let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", () => {
  let input = prompt("enter your number");
  if (input > 4) {
    window.location.href = "https://google.com";
  }
});

// change the background color of the page to yellow red or any color based on user input through prompt

let userInput = document.getElementById("input");

let button = document.getElementById("button");
button.addEventListener("click", () => {
  document.body.style.backgroundColor = userInput.value;
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.body.style.backgroundColor = userInput.value;
  }
});

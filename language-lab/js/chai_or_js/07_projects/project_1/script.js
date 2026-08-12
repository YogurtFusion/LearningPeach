const green = document.body.querySelector("#green");
const white = document.body.querySelector("#white");
const blue = document.body.querySelector("#blue");
const yellow = document.body.querySelector("#yellow");
const button = document.body.querySelectorAll(".button");

button.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("button are clicked");

    if (e.target === green) {
      document.body.style.backgroundColor = "green";
      console.log("green button is clicked ");
    } else if (e.target === white) {
      document.body.style.backgroundColor = "white";
      console.log("color button is clicked white");
    } else if (e.target === blue) {
      document.body.style.backgroundColor = "blue";
      console.log("color button is clicked blue");
    } else if (e.target === yellow) {
      document.body.style.backgroundColor = "yellow";
      console.log("color button is clicked yellow");
    } else {
      document.body.style.backgroundColor = "red";
    }
  });
});

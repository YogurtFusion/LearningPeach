let intervalId;
console.log(Math.floor(Math.random() * 16));

function randomColor() {
  let color = "#";
  let hex = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  console.log(color);

  return color;
}

let startchangeColor = function () {
  if (!intervalId) {
    // this a saftey check for null
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.background = randomColor();
  }
  console.log("start is working");
};

let stopChangeColor = function () {
  clearInterval(intervalId);
  intervalId = null;
  console.log("stop is working");
};

let start = document
  .querySelector("#start")
  .addEventListener("click", startchangeColor, false);

let stop = document
  .querySelector("#stop")
  .addEventListener("click", stopChangeColor, false);

randomColor();

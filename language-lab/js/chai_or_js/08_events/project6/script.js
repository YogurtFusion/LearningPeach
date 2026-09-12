let hex = "0123456789abcdef";
 let change;
console.log(Math.floor(Math.random() * 16));

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  console.log(color);

  return color;
}

let start = document.querySelector("#start").addEventListener(
  "click",
  function (e) {
    
   change =  setInterval(function(){
      document.body.style.background = randomColor();
    },1000)
    // let stop = document.querySelector("#stop").addEventListener("click",function(){
    //   clearInterval(change)
    //   console.log("stop is working");
      
    // },false)
    

    console.log("start is working");
  },
  false,
);
let stop = document.querySelector("#stop").addEventListener("click",function(){
      clearInterval(change)
      console.log("stop is working");
      
    },false)

randomColor();

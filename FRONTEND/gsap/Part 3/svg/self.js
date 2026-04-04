let initialPath = document.querySelector("path");

let finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector("#string");

string.addEventListener("mouseenter", function (e) {
  //   console.log("mouse entered 🪤 with events: ", e);
});

string.addEventListener("mouseleave", function (e) {
  //   console.log("mouse leave 🐁💨 with events: ", e);
});

string.addEventListener("mousemove", function (e) {
  let rect = string.getBoundingClientRect();
  // console.log('mouse moved with event\'s: ',e )
//   initialPath = `M 10 100 Q 500 ${e.y} 990 100`;
  //   console.log(initialPath);
  console.log(rect.left);

  let X = e.x - rect.left;
  let Y = e.y - rect.top;

  let newPath = `M 10 100 Q ${X} ${Y}  990 100`;

  initialPath.setAttribute("d", newPath);
});


string.addEventListener("mouseleave", function(){
    let leave = `M 10 100 Q 500 100 990 100`
    initialPath.setAttribute("d", "M 10 100 Q 500 100 990 100")
})
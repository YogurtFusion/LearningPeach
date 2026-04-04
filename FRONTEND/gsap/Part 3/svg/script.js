let path = document.querySelector("path");

let finalPath = `M 10 100 Q 500 100 990 100`;

let string = document.querySelector("#string");

string.addEventListener("mouseenter", function (e) {
  //   console.log("mouse entered 🪤 with events: ", e);
});

string.addEventListener("mouseleave", function (e) {
  //   console.log("mouse leave 🐁💨 with events: ", e);
});

string.addEventListener("mousemove", function (e) {
  path = `M 10 100 Q ${e.x} ${e.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration:0.2,
    ease:"power3.out"
  });
});

string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        ease:"elastic.out(1,0.2)",
        duration:1.5,
    })
})

let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (e) {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
  });
});

imageDiv.addEventListener("mouseenter", function (e) {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 4,
  });
});

imageDiv.addEventListener("mouseleave", function (e) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 0,
  });
});

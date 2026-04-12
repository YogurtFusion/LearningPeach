function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1text = h1.textContent;

  let splittedText = h1text.split("");
  console.log(splittedText);

  let clutter = "";

  splittedText.forEach(function (e) {
    //   clutter = clutter + `<span>${e}</span>`;
    clutter += `<span>${e}</span>`;
    // clutter+=e
  });
  console.log(clutter);
  h1.innerHTML = clutter;
}

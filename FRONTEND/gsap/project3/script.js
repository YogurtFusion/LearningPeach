function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1text = h1.textContent;

  let splittedText = h1text.split("");
//   console.log(splittedText);

  let halfText = Math.floor(splittedText.length / 2);
//   console.log(halfText);

  let clutter = "";

  splittedText.forEach(function (e, i) {
      // clutter= clutter +e
      // console.log(e,i)
      
      if(i<halfText){
        clutter += `<span class="first-half" >${e}</span>`;
        // console.log(e);
        
    }else{
        clutter += `<span class="second-half">${e}</span>`;
        // console.log("half < ", e);
        
    }

    // console.log(halfText,clutter);
    
});
//   console.log(clutter);
  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 span", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  // yoyo:true,
  repeat: -1,
  stagger: 0.15,
});

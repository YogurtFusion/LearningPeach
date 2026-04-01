gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "#fff",
  borderRadius: "100%"
});

gsap.from("#box2", {
  x: 1200,
  duration: 2,
  delay: 1,
});

gsap.from("h1",{
    opacity: 0,
    duration: 1,
    y:30,
    delay: 1,
    stagger: 0.3,
})

gsap.to("#Box",{
    x:1200,
    duration:1,
    delay:1,
    rotate: 360,
    // infinity
    repeat: -1,
    // yoyo
    yoyo: true,
})

gsap.to("#Box1",{
    x:1500,
    rotate: 360,
    duration: 1.5,
    delay:1
})

gsap.to("#Box2", {
    x:1500,
    backgroundColor:"lightyellow",
    duration:1.5,
    // box 1 duration + delay
    delay:2.5

})

gsap.to("#Box3",{
    x:1500,
    scale: 0.5,
    borderRadius:"50%",
    duration:1.5,
    // Box1 + Box2 : delay and duration = Box3 delay
    delay: 4

})

// Timeline

let tl =  gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
})

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1
})
gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    rotate:720,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #box2",
        scroller:"body",
        markers:true,
        start

    }
})
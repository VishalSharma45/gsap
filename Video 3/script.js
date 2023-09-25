gsap.from("#page1 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360
})

gsap.from("#page2 #box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 #box", //Which Element to be targeted
        scroller: "body",
        markers: true,
        start: "top 50%", // Markers start position
        end: "top 10%", // Markers start position
        // scrub: true, // Write scrub method 1 
        scrub: 3, // Write scrub method 2(from 1 - 5)
    }
})
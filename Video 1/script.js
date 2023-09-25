// gsap.to("#box",{
//     x: 700,
//     y: 400,
//     duration: 2,
//     delay: 2,
//     backgroundColor: "blue",
//     rotate: 360,
//     scale : 0.5
// });

// gsap.from("#box",{
//     x: 700,
//     y: 400,
//     duration: 2,
//     delay: 2,
//     backgroundColor: "blue",
//     rotate: 360,
//     scale : 0.5
// });

// gsap.to("h1", {
//     x: 300,
//     color: "orange",
//     duration: 2,
//     delay: 1,

// })

// gsap.to("h2", {
//     x: 300,
//     color: "salmon",
//     duration: 3,
//     delay: 1,
// })

// gsap.to("h3", {
//     x: 300,
//     color: "black",
//     duration: 3,
//     delay: 3,
// })

gsap.to("h1, h2", {
    x:600,
    duration: 1,
    delay: 0.5,
    // stagger: 1,
    repeat: -1,
    yoyo: true
})
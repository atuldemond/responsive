// gsap.to(".box",{  //instail to final 

//     x:1000,
//     duration:2,
//     Delay:2,
//     rotate:360,
//     backgroundColor:"orange",

// })

// gsap.from(".box",{  // final to intial

//     x:1000,
//     duration:5,
//     Delay:2,
//     rotate:360,
//     backgroundColor:"orange",
//     borderRadius:"50%"

// })


let tl = gsap.timeline();  //time line

tl.to(".box1",{

  x:1000,
  duration:3,
  delay:2,
  scale:0.5


})
tl.to(".box2",{

    x:1000,
    duration:3,
    
    scale:1.2,
    rotate:360,
   
})
tl.to(".box3",{

    x:1000,
    duration:3,
   
    scale:1.2,
    rotate:360,
   
})
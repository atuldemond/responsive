gsap.to(".page1 #box", {
  scale: 2,
  duration: 3,
  rotate: 360,
  backgroundColor: "green",
  ease: "power1.easeInOut",
});
gsap.to(".page2 #box", {
  rotate: 360,
  scale: 3,
  duration: 3,
  backgroundColor: "red",
  ease: "power1.easeInOut",
  scrollTrigger: {
    trigger: ".page2",
    scrub: 5,
    start: "top 0%",
    end: "top -150%",
    markers: true,
    pin: true,
  },
});
gsap.to(".page3 #box", {
  duration: 3,
  rotate: 360,
  scale: 2,
  backgroundColor: "blue",
  ease: "power1.easeInOut",
  scrollTrigger: {
    trigger: ".page3 #box",

    scrub: true,
    markers: true,
  },
});

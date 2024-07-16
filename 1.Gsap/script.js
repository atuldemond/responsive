gsap.to(".box", {
  x: 1000,
  backgroundColor: "red",
  delay: 1,
  duration: 2,
  borderRadius: "50%",
  rotation: 360,
  scale: 0.5,
});

gsap.from(".box2", {
  x: 1000,
  backgroundColor: "black",
  delay: 1,
  duration: 2,
});
gsap.to("h1", {
  x: 1200,

  color: "purple",
  delay: 1,
  duration: 2,
  stagger: 0.5,
  repeat: -1, //-1 infinite count
  yoyo: true,
});
var tl = gsap.timeline();

tl.to(".rec", {
  x: 950,
  backgroundColor: "green",
  delay: 1,
  duration: 2,
  borderRadius: "50%",
  rotation: 360,
  scale: 0.5,
});
tl.to(".rec1", {
  x: 950,
  backgroundColor: "green",
  delay: 1,
  duration: 2,
  borderRadius: "50%",
  rotation: 360,
});
tl.to(".rec2", {
  x: 950,
  backgroundColor: "green",
  delay: 1,
  borderRadius: "50%",
  rotation: 360,
  duration: 2,
});
tl.to(".rec3", {
  x: 950,
  backgroundColor: "green",
  delay: 1,
  borderRadius: "50%",
  rotation: 360,
  duration: 2,
});

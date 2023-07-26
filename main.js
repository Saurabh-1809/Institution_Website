gsap.from(".navbar", {
  duration: 1,
  opacity: 0,
  y: "-70",
  ease: "circ",
});

gsap.from(".nav-item", {
  duration: 2,
  opacity: 0,
  delay: 1,
  stagger: 0.1,
});

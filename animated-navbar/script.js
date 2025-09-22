const tl = gsap.timeline();
const openMenu = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");

tl.to("#sideMenu", {
  right: 0,
  duration: 0.3,
  ease: "power4.in",
});

tl.from("#menu p", {
  x: 500,
  opacity: 0,
  stagger: 0.1,
});

tl.from(closeMenu, {
  x: 200,
  opacity: 0,
  duration: 0.1,
});

tl.pause();

openMenu.addEventListener("click", () => {
  tl.play();
});

closeMenu.addEventListener("click", () => {
  tl.reverse();
});

// navbar animation
gsap.to("nav", {
  backdropFilter: "blur(10px)",
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: { trigger: "#menuBtn", start: "top 0" },
});

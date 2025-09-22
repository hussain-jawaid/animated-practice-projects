window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    // scroll down → move right
    gsap.to(".marquee", {
      x: "+=100%", // move further right each time
      duration: 5.5,
      ease: "none",
      overwrite: "auto",
      repeat: -1, // infinite repeat
    });
    gsap.to(".marquee img", { rotate: 0, duration: 0.3, overwrite: "auto" });
  } else {
    // scroll up → move left
    gsap.to(".marquee", {
      x: "-=100%", // move further left each time
      duration: 5.5,
      ease: "none",
      overwrite: "auto",
      repeat: -1,
    });
    gsap.to(".marquee img", { rotate: 180, duration: 0.3, overwrite: "auto" });
  }
});

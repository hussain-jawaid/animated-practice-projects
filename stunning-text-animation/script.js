function splitText(element) {
  const text = element.textContent;
  const splittedText = text.split("");
  const halfVal = Math.floor(splittedText.length / 2);

  // Clear the original text
  element.textContent = "";

  splittedText.forEach((char, idx) => {
    const span = document.createElement("span");
    span.classList.add("block");
    // Assign different classes based on half
    if (idx < halfVal) {
      span.classList.add("first-half");
    } else {
      span.classList.add("second-half");
    }
    span.textContent = char === " " ? "\u00A0" : char; // Preserve spaces
    element.appendChild(span);
  });
}

const h1 = document.querySelector("h1");
splitText(h1);

gsap.from("h1 .first-half", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  delay: 0.3,
});
gsap.from("h1 .second-half", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: -0.1,
  delay: 0.3,
});

const greetingAnimation = document.querySelector("section.greeting-animation");
const banner = document.querySelector(".banner");
const blocks = document.getElementsByClassName("blocks");
// const greetingAnimationTitle = document.querySelector("h2");

const numberOfBlocks = 400; // numbers of all blocks on the screen

// for (let i = 1; i < numberOfBlocks; i++) {
//   banner.innerHTML += '<div class="blocks"></div>';
//   const duration = Math.random() * 2;
//   blocks[i].style.animationDuration = 1.5 + duration + "s";
//   blocks[i].style.animationDelay = duration + "s";
// }

setTimeout(() => {
  // greetingAnimation.classList.add("active");
  // greetingAnimationTitle.classList.remove("greeting-animation__title");
}, 6000);

setTimeout(() => {
  // greetingAnimation.style.display = "none";
}, 12000);

// setTimeout(() => {
//   greetingAnimationTitle.classList.add("greeting-animation__title");
// }, 2500);

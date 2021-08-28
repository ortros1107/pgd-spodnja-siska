const hamMenuBtn = document.querySelector("#hamburger-menu");
const navbarLinks = document.querySelector(".navbar-links");

const toggleNavMenu = hamMenuBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

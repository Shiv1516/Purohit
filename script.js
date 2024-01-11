const menuButton = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar");
menuButton.addEventListener("click", () => {
  if (!menuButton.classList.contains("nav-close")) {
    menuButton.classList.add("nav-close");
    navBar.classList.add("on-nav");
  } else {
    menuButton.classList.remove("nav-close");
    navBar.classList.remove("on-nav");
  }
});
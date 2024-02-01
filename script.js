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

var swiper = new Swiper(".mySwiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".swiper2", {
  slidesPerView:
      window.innerWidth <= 450
          ? 1
          : window.innerWidth <= 1025
              ? 2
              : window.innerWidth <= 1400
                  ? 3
                  : 4,
  direction: getDirection(),
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "horizontal" : "horizontal";

  return direction;
}



// temple-service hero slider

var swiper = new Swiper(".hero-mySwiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "horizontal" : "horizontal";

  return direction;
}
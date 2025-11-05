document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu-container");
  const closeMenu = document.querySelector(".close-menu");
  const menuLinks = document.querySelectorAll(".nav-menu-container a");

  hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.add("menu-open");
  });

  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("menu-open");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("menu-open")) {
        navMenu.classList.remove("menu-open");
      }
    });
  });
});
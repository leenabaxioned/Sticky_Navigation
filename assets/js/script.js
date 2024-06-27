/* Author: */
// Scroll up button starts here------------------------------
var scrollUp = document.querySelector(".scroll");
scrollUp.addEventListener("click", scrollToTop);
function scrollToTop() {
    $(window).scrollTop(0);
}
// Scroll up button ends here------------------------------

// Sticky navigation starts here------------------------------
window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("header").classList.add("scrolled");
    } else {
      document.querySelector("header").classList.remove("scrolled");
    }
  }
// Sticky navigation ends here---------------------------------

  // Ontoggle hamburger function starts here------------------------------------
const menu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
// Ontoggle hamburger function ends here-----------------------------------
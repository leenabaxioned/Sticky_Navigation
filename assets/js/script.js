/* Author: */
var scrollUp = document.querySelector(".scroll");
scrollUp.addEventListener("click", scrollToTop);
function scrollToTop() {
    $(window).scrollTop(0);
}

window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").classList.add("scrolled");
    } else {
      document.getElementById("header").classList.remove("scrolled");
    }
  }
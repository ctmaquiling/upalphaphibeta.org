window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 100);
  })

var typed = new Typed('.type', {
  strings: [
    'ALPHA PHI BETA', 'UP COLLEGE OF LAW'],
    smartBackspace: true,
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});
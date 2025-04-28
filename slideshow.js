$(document).ready(function() {
  let slides = $('.slide');
  let index = 0;

  function showSlide(i) {
    slides.removeClass('active');
    slides.eq(i).addClass('active');
  }

  setInterval(function() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4000); // Change every 4 seconds
});

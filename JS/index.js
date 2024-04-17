/* ------------------ MENU ANIMATION ------------------ */

$("#myname, #h2_header").on("mouseover", function(){
  $("#myname").slideUp(2500).slideDown(2500);
  $("#h2_header").fadeOut(2500).fadeIn(2500);
})

/* ------------------ ROTATE IMAGE ------------------ */

$(".matheus_img").on("mouseover", function(){
  $(".matheus_img").toggleClass("rotated90");
})

/* ------------------ SWIPER ------------------ */

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


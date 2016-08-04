//Function for the toggle function in the navbar
function navToggle() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

//Function for the slides
$(document).ready(function(){
  $('.slides').slick({
    accessibility: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    initialSlide: 0
  });
});
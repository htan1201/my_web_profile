//Function for the toggle function in the navbar
function naviToggle() {
    document.getElementsByClassName("topnavi")[0].classList.toggle("responsive");
}

//Function for the slides
$(document).ready(function(){
  $('.slides').slick({
    accessibility: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
});
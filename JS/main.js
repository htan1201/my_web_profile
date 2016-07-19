function myFunction() {
    document.getElementsByClassName("topnavi")[0].classList.toggle("responsive");
}

$(document).ready(function(){
  $('.slides').slick({
    accessibility: true,
    dots: true
  });
});
//slick Slide
$(function(){
    $(".watch-slider").slick({
        slidesToShow: 3,
        slidesToScroll:1,
        prevArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-next"),

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll:2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });
})


let show = true;
const nav = document.querySelector(".header-nav-res");
const botao = document.querySelector(".button-res");


botao.addEventListener('click', function(){
  nav.classList.toggle("active", show);
  botao.classList.toggle("mudarCor", show);
  show = !show;
})
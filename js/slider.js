$(document).ready(function(){

    $('.slider').slick({
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                // slidesToShow: 3
              }
            }
        ]
    })

})
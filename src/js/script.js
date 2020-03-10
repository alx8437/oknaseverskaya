$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_back.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.svg"></button>',
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    autoplay: false, 
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: false, 
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    autoplay: false, 
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
        ]


    });
});
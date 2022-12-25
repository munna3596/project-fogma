$(document).ready(function () {
    $('.software-img-slide').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 4000,
        autoplay: true,
        slidesToShow: 1,
        focusOnSelect: false,
        slidesToScroll: 1,
        prevArrow: '.left',
        nextArrow: '.right',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})



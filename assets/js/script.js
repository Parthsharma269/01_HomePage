$('.slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    }
    ]
});

let icon = document.querySelector(".icon");
let page = document.querySelector(".mobile-view");
icon.addEventListener("click", function () {
    if (page.classList !== document.querySelector(".right-0")) {
        page.classList.toggle("right-0");
    }
})
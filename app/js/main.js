$(".header__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    dots: true,
    arrows: false,
    customPaging: function(slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();
        return "<button>" + ("0" + (i + 1)).slice(-2) + "</button>"; // <-- new
    },
});

$(".header__btn").on("click", function() {
    $(".header__aside").toggleClass("header__aside--active");

    // $(".header__aside").console.log("qwerty");
});
$(".header__aside-close").on("click", function() {
    $(".header__aside").removeClass("header__aside--active");
});

$(".wedidthat__slider").slick({
    centerMode: true,
    prevArrow: '<img class="wedidthat__slider-arrow-prev" src="img/slider-arrow-left.svg" alt=""></img',
    nextArrow: '<img class="wedidthat__slider-arrow-next" src="img/slider-arrow-right.svg" alt=""></img',
    //   variableWidth: true,
    // centerPadding: '80px',
    //   adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 2,
                // variableWidth: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true
            }
        },

    ]
});
$('.reviews__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<img class="reviews-arrow-prev" src="img/reviews-arrow-prev.svg" alt=""></img',
    nextArrow: '<img class="reviews-arrow-next" src="img/reviews-arrow-next.svg" alt=""></img',
    responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 578,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        },
    ]
});
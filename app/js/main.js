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
    // variableWidth: true,
    // centerPadding: '80px',
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 3
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 1
    //         }
    //     }
    // ]
});
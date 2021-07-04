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
  customPaging: function (slider, i) {
    var thumb = jQuery(slider.$slides[i]).data();
    return "<button>" + ("0" + (i + 1)).slice(-2) + "</button>"; // <-- new
  },
});

$(".header__btn").on("click", function () {
  $(".header__aside").toggleClass("header__aside--active");

  // $(".header__aside").console.log("qwerty");
});
$(".header__aside-close").on("click", function () {
  $(".header__aside").removeClass("header__aside--active");
});

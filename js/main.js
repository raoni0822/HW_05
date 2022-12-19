$(function () {
    $('.mainSlide').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        // 마우스가 올라가도 슬라이드 넘기기
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
    })

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.main_dots li').eq(c).addClass('on').siblings().removeClass('on');
    })

    $('.main_dots li').on('click', function () {
        var idx = $(this).index();
        $('.mainSlide').slick('slickGoTo', idx)
    })

    $('.artslide').slick({
        autoplay: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: false,
    })
})
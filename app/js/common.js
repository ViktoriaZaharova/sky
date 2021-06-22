// хэдер при скролле
function checkHeaderScroll() {
    if ($(window).scrollTop() > 0 && !$("header").is(".header-fixed")) {
        $("header").removeClass('header').addClass("header-fixed");
    } else if ($(window).scrollTop() === 0) {
        $("header").removeClass("header-fixed");
        $(".header-home").addClass("header");
    }
}

checkHeaderScroll();
$(window).on("scroll", checkHeaderScroll);

$('[name="phone"]').mask('+7 (999) 999-99-99');


$('.type-ceiling-slider1').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    appendArrows: '.type-ceiling-slider-nav1',
    appendDots: '.type-ceiling-slider-nav1',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.type-ceiling-slider2').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    appendArrows: '.type-ceiling-slider-nav2',
    appendDots: '.type-ceiling-slider-nav2',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.type-ceiling-slider3').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    appendArrows: '.type-ceiling-slider-nav3',
    appendDots: '.type-ceiling-slider-nav3',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.type-ceiling-slider4').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    appendArrows: '.type-ceiling-slider-nav4',
    appendDots: '.type-ceiling-slider-nav4',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.type-ceiling-slider5').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    appendArrows: '.type-ceiling-slider-nav5',
    appendDots: '.type-ceiling-slider-nav5',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.type-ceiling-slider6').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    appendArrows: '.type-ceiling-slider-nav6',
    appendDots: '.type-ceiling-slider-nav6',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.portfolio-slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    appendArrows: '.portfolio-slider-nav1',
    appendDots: '.portfolio-slider-nav1',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});

$('.portfolio-slider2').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    appendArrows: '.portfolio-slider-nav2',
    appendDots: '.portfolio-slider-nav2',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});

$('.portfolio-slider3').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    appendArrows: '.portfolio-slider-nav3',
    appendDots: '.portfolio-slider-nav3',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});

$('.service-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    appendArrows: '.service-slider-nav',
    appendDots: '.service-slider-nav',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.about-slider-max').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.about-slider-preview'
});

$('.about-slider-preview').slick({
    slidesToShow: 3,
    focusOnSelect: true,
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    asNavFor: '.about-slider-max',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

$('.reviews-slider-max').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.reviews-slider-preview'
});

$('.reviews-slider-preview').slick({
    slidesToShow: 3,
    focusOnSelect: true,
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    asNavFor: '.reviews-slider-max',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() > 650) {
        $('.list-articles-slider:not(.slick-initialized)').slick({
            slidesToShow: 3,
            slidesToScroll: 2,
            dots: true,
            appendArrows: '.list-articles-slider-nav',
            appendDots: '.list-articles-slider-nav',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 940,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    } else {
        $(".list-articles-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.type-product-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    appendArrows: '.type-product-slider-nav',
    appendDots: '.type-product-slider-nav',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                variableWidth: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
});


$('.portfolio-photo-slider-preview').slick({
    slidesToShow: 5,
    asNavFor: '.portfolio-slider-info',
    focusOnSelect: true,
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    appendArrows: '.portfolio-photo-slider-preview-nav',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                variableWidth: true,
            }
        }
    ]
});

$('.portfolio-slider-info').slick({
    asNavFor: '.portfolio-photo-slider-preview',
    arrows: false,
    slidesToScroll: 1,
    fade: true,
});

$(".calculate-range-slider1").slider({
    range: "max",
    min: 1,
    max: 100,
    step: 1,
    value: 0,
    slide: function (event, ui) {
        $(".input-range1").val(ui.value);
        $(ui.value).val($('.input-range1').val());
        // var value1 = $(".input-range1").val();
        // $(".calculate-range-slider1").find(".ui-slider-handle").text(value1);
    }
});

$(".input-range1").keyup(function () {
    $(".calculate-range-slider1").slider("value", $(this).val());
    // var value1 = $(".input-range1").val();
    // $(".calculate-range-slider1").find(".ui-slider-handle").text(value1);
});

$('.btn-range1').click(function () {
    var direction = $(this).data("dir");
    var value = $(".calculate-range-slider1").slider("value");
    if (direction === "plus") {
        $(".calculate-range-slider1").slider("value", value + 1);
    } else {
        $(".calculate-range-slider1").slider("value", value - 1);
    }
    var currentVal = $(".calculate-range-slider1").slider("value");
    $(".input-range1").val(currentVal);
    // $(".calculate-range-slider1").find(".ui-slider-handle").text(currentVal);
});


$(".calculate-range-slider2").slider({
    range: "max",
    min: 4,
    max: 16,
    step: 1,
    value: 0,
    slide: function (event, ui) {
        //var value1 = $("#storlekslider").slider("value");
        $(".input-range2").val(ui.value);
        $(ui.value).val($('.input-range2').val());
    }
});

$(".input-range2").keyup(function () {
    $(".calculate-range-slider2").slider("value", $(this).val());
});

$('.btn-range2').click(function () {
    var direction = $(this).data("dir");
    var value = $(".calculate-range-slider2").slider("value");
    if (direction === "plus") {
        $(".calculate-range-slider2").slider("value", value + 1);
    } else {
        $(".calculate-range-slider2").slider("value", value - 1);
    }
    var currentVal = $(".calculate-range-slider2").slider("value");
    $(".input-range2").val(currentVal);
});


$(".calculate-range-slider3").slider({
    range: "max",
    min: 1500,
    max: 6500,
    step: 1,
    value: 0,
    slide: function (event, ui) {
        //var value1 = $("#storlekslider").slider("value");
        $(".input-range3").val(ui.value);
        $(ui.value).val($('.input-range3').val());
    }
});

$(".input-range3").keyup(function () {
    $(".calculate-range-slider3").slider("value", $(this).val());
});

$('.btn-range3').click(function () {
    var direction = $(this).data("dir");
    var value = $(".calculate-range-slider3").slider("value");
    if (direction === "plus") {
        $(".calculate-range-slider3").slider("value", value + 1);
    } else {
        $(".calculate-range-slider3").slider("value", value - 1);
    }
    var currentVal = $(".calculate-range-slider3").slider("value");
    $(".input-range3").val(currentVal);
});

// mobile menu
$('.menu-link-dropdown').on('click', function (e) {
    e.preventDefault();

    var $this = $(this);

    if (!$this.hasClass('open-menu')) {
        $this.addClass('open-menu');
        $this.parents('.mobile-menu-list').find('.nav-item').fadeOut();
        $('.dropdown-menu-mobile').fadeIn();

    } else {
        $this.removeClass('open-menu');
        $this.parents('.mobile-menu-list').find('.nav-item').fadeIn();
        $('.dropdown-menu-mobile').fadeOut();
    }
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut()
});

$('.btn-burger-mobile').on('click', function () {
    $('.mobile-menu').fadeIn();
});

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});


$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.card-col:hidden').slice(0, 3).slideDown();
});

$('.btn-filter').on('click', function (e) {
    e.preventDefault();
    $('.sidebar-wrap').fadeIn();
});

$('.btn-close-sidebar').on('click', function () {
   $('.sidebar-wrap').fadeOut();
});

// слайдеры
let room_html = $('.tabs__content.active').html();

$('.slider-horisontal').each(function() {
    let slider = $(this);
    init_slider(slider);
});

function init_slider(slider) {
    let container = slider.closest('.slider_container');
    let input_cur_val = $(container).find('.inp-slider-val');
    let min = Number(slider.data('min'));
    let max = Number(slider.data('max'));
    let start = Number(slider.data('current'));
    slider = slider.get(0);

    noUiSlider.create(slider, {
        step: 1,
        behaviour: 'tap-drag',
        tooltips: true,
        start: start,
        connect: 'lower',
        range: {
            'min': min,
            'max': max
        },
        format: wNumb({
            decimals: 0,
            thousand: ' '
        })
    });

    slider.noUiSlider.on('update', function(values, handle) {
        input_cur_val.val(values[handle]);
        calc();
    });

    input_cur_val.on('input', function() {
        let input = $(this);
        if (timeout_link) {
            clearTimeout(timeout_link)
        }
        timeout_link = setTimeout(function() {
            slider.noUiSlider.set(input.val());
        }, 500);
    })
}

// табы в калькуляторе
$('ul.tabs__caption').on('click', 'li:not(.active):not(.add-tab)', function() {
    $(this).addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// добавить комнату
$('.js--add-tab').on('click', function() {
    let add_button = $(this);
    let index = add_button.index();
    add_button.before('<li class="room-item">' + (index + 1) + ' комната</li>');
    $('.tabs__content_container').append('<div class="tabs__content tabs__content' + (index + 1) + '">' + room_html + '</div>')
    $('.tabs__content:last-child').find('.calculate-range-slider').each(function() {
        // let slider = $(this);
        // init_slider(slider);
        $(".calculate-range-slider1").slider({
            range: "max",
            min: 1,
            max: 100,
            step: 1,
            value: 0,
            slide: function (event, ui) {
                $(".input-range1").val(ui.value);
                $(ui.value).val($('.input-range1').val());
                // var value1 = $(".input-range1").val();
                // $(".calculate-range-slider1").find(".ui-slider-handle").text(value1);
            }
        });

        $(".input-range1").keyup(function () {
            $(".calculate-range-slider1").slider("value", $(this).val());
            // var value1 = $(".input-range1").val();
            // $(".calculate-range-slider1").find(".ui-slider-handle").text(value1);
        });

        $('.btn-range1').click(function () {
            var direction = $(this).data("dir");
            var value = $(".calculate-range-slider1").slider("value");
            if (direction === "plus") {
                $(".calculate-range-slider1").slider("value", value + 1);
            } else {
                $(".calculate-range-slider1").slider("value", value - 1);
            }
            var currentVal = $(".calculate-range-slider1").slider("value");
            $(".input-range1").val(currentVal);
            // $(".calculate-range-slider1").find(".ui-slider-handle").text(currentVal);
        });


        $(".calculate-range-slider2").slider({
            range: "max",
            min: 4,
            max: 16,
            step: 1,
            value: 0,
            slide: function (event, ui) {
                //var value1 = $("#storlekslider").slider("value");
                $(".input-range2").val(ui.value);
                $(ui.value).val($('.input-range2').val());
            }
        });

        $(".input-range2").keyup(function () {
            $(".calculate-range-slider2").slider("value", $(this).val());
        });

        $('.btn-range2').click(function () {
            var direction = $(this).data("dir");
            var value = $(".calculate-range-slider2").slider("value");
            if (direction === "plus") {
                $(".calculate-range-slider2").slider("value", value + 1);
            } else {
                $(".calculate-range-slider2").slider("value", value - 1);
            }
            var currentVal = $(".calculate-range-slider2").slider("value");
            $(".input-range2").val(currentVal);
        });
    });

    // let count = $("ul.tabs__caption li").length - 2;
    // $(".inp-square").last().attr('name', 'indexcalc_square[' + count + ']');
    // $(".inp-angle").last().attr('name', 'indexcalc_angle[' + count + ']');
    // $(".inp-trumpet").last().attr('name', 'trumpet[' + count + ']');
    // $(".inp-lights").last().attr('name', 'lights[' + count + ']');
    // $(".rezult__sum-1").last().removeClass().addClass('rezult__sum-1 rezult__sum-1-' + count);
    // $(".rezult__sum-2").last().removeClass().addClass('rezult__sum-2 rezult__sum-2-' + count);
    // calc();

    return false;
});
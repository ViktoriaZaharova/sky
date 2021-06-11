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

$('.list-articles-slider').slick({
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

// mobile menu
$('.menu-link-dropdown').on('click', function (e) {
    e.preventDefault();

    var $this = $(this);

    if(!$this.hasClass('open-menu')){
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

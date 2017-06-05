//////////////////////////////////NAVIGATION////////////////////////////////////////

function checkSection () {    		//функция определяет видно сейчас секцию на экране или нет
    $(".screen").each(function(){	//проходим по всем секциям

        var $this = $(this),
            topEdge = $this.offset().top - 61,		//определяем верхний край секции (-200px что бы было видно 7ю секцию)
            bottomEdge = topEdge + $this.height(),	//определяем нижний край секции
            whereScroll = $(window).scrollTop();	//определяем где скролл на странице

        if (topEdge < whereScroll && bottomEdge > whereScroll){		//если края у нас в окне то мы эту секцию видим

            var currentId = $this.data("section");
            reqLink = $(".header-nav__item").filter('[href="#' + currentId + '"]');	//определяем какую именно ссылку подсветить с помощью метода filter,
            //фильтруем по тому href который совпадет с текущей секцией на экране
            reqLink.closest('.header-nav__item').addClass('header-nav__item_current')	//подсвечивая классом active выделяем наш пункт
                .siblings().removeClass('header-nav__item_current');					//удаляем посветку соседей
        }
    });
}

function showSection(section, isAnimate) {			//функция которая скролит страницу к нужной секции (секция которую нужно показать, анимированно или сразу)
    var direction = section.replace(/#/, ''),		//удаляем решетку из названия так как оно берется из атрибута href который с решеткой в названии
        reqSection = $('.screen').filter('[data-section="' + direction + '"]'),		//фильтруем по href какую именно секцию показать
        reqSectionPos = reqSection.offset().top;	//определяем верхний край секции что бы при анимации проскролить именно к нему

    if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 600);
    } else {
        $('body, html').scrollTop(reqSectionPos);
    }
}

//////////////////////////////////EVENTS////////////////////////////////////////

$(document).ready(function () {
    $('.header-nav__item').on('click', function(e){	//клик по навигации для пользователя
        e.preventDefault();

        showSection($(this).attr('href'), true);		//вызывается функция showSection но у же с анимированным эффектом
    });

    showSection(window.location.hash, false);			//при загруке страницы определяем какой именно хэш стоит в адресе и притягиваем страницу к нужному месту

});

$(document).scroll(function () {						//событие прокрутнки страницы
    checkSection()									//вызов функции проверяющей где находиться секция
});

//////////////////////////////////EO NAVIGATION////////////////////////////////////////



$(window).on("load", function(){

    // MOBILE MENU
    $(".header-nav-mobile_open").on("click", function(e){
        $(".header-nav, .header-nav-mobile_close").addClass("visible");
        $(".header-nav-mobile_close").removeClass("hidden");
        $(".header-nav-mobile_open").addClass("hidden");
    })

    $(".header-nav-mobile_close, .header-nav__item").on("click", function(e){
        $(".header-nav, .header-nav-mobile_close").removeClass("visible");
        $(".header-nav-mobile_close").addClass("hidden");
        $(".header-nav-mobile_open").removeClass("hidden");
    })

    // FIXED MENU
    $(window).scroll(function(){
        if ($(this).scrollTop()) {
            $(".header").addClass("fixed-nav");
        } else {
            $(".header").removeClass("fixed-nav");
        };
    });

    if ($(window).width() <= 900) {
        $(".header-nav").css("background-color", "white");
    } else {
        $(".header-nav").css("background-color", "inherit");
    }
});

// SLIDER
(function () {
    if ($('.portfolio-slider').length!=0){
        $('.portfolio-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
} )();

// Pop-ups with content
( function() {
    var popupInit = function (popupBox, popupTrigger, popupContent) {
        var popup = "#popup";
        $(popupTrigger).magnificPopup({
            callbacks: {
                open: function() {
                },
                close: function() {
                    $(popup).html('');
                }
            }
        });
        $(popupBox).on("click", function () {
            popup = $(this).find(popupTrigger).attr("href");
            $(popup).html($(this).find(popupContent).html());
        });
    };
    popupInit('.popup-box','.popup-trigger','.popup-content');
} )();

////////////////////////////////////////////////////////////////////////////////
// loading preview image for video boxes
( function() {
    if($('.video-box, .cases-video__box, .wakeup-video__box').length!=0){
        $('.video-box, .cases-video__box, .wakeup-video__box').each(function(){
            $(this).css('background-image',"url('https://img.youtube.com/vi/"+ $(this).find('.preview-video__play').attr("attrvideo") + "/sddefault.jpg')");
            $(this).addClass('cases-video__box');
        });
    }
} )();

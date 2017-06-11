// MOBILE MENU
$(".header-nav-mobile_open").on("click", function(e){
    $(".header-nav, .header-nav-mobile_close").addClass("visible");
    $(".header-nav-mobile_close").removeClass("hidden");
    $(".header-nav-mobile_open").addClass("hidden");
});

$(".header-nav-mobile_close, .header-nav__item").on("click", function(e){
    $(".header-nav, .header-nav-mobile_close").removeClass("visible");
    $(".header-nav-mobile_close").addClass("hidden");
    $(".header-nav-mobile_open").removeClass("hidden");
});

// FIXED MENU
$(window).scroll(function(){
    if ($(this).scrollTop()) {
        $(".header").addClass("fixed-nav");
    } else {
        $(".header").removeClass("fixed-nav");
    };
});
if ($(window).width() <= 1000) {
    $(".header-nav").css("background-color", "white");
} else {
    $(".header-nav").css("background-color", "inherit");
};




//////////////////////////////////NAVIGATION////////////////////////////////////////
(function (){
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

})()
//////////////////////////////////EO NAVIGATION////////////////////////////////////////




//////////////////////////////////BLOCKS HEIGHT FIX////////////////////////////////////////

$(document).ready(function() {
    function setEqualHeight(columns){
        var tallestcolumn = 0;
        columns.each(
        
        function(){
        currentHeight = $(this).height();
            
            if(currentHeight > tallestcolumn){
                tallestcolumn = currentHeight;
            }
        });

        columns.height(tallestcolumn);
    }

        setEqualHeight($(".info-plans-box > div"));
});
//////////////////////////////////EO BLOCKS HEIGHT FIX////////////////////////////////////////




//////////////////////////////////PORTFOLIO SLIDER////////////////////////////////////////
(function () {
    if ($('.slider').length!=0){
        $('.slider').slick({
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
//////////////////////////////////EO PORTFOLIO SLIDER////////////////////////////////////////




//////////////////////////////////POPUPS////////////////////////////////////////

(function(){
    $('.popup-trigger').magnificPopup({
        showCloseBtn: true,
        closeBtnInside: false,
        callbacks: {
            open: function() {                    
                $('.popup-content').removeClass('hidden');
                slider = $('#popup').lightSlider({
                    rtl:true,
                    item:1,
                    loop:true,
                    slideMargin:0,
                    cssEasing: 'easy',
                });
            },
            close: function() {
                $('.popup-content').addClass('hidden');
                $('.lSSlideOuter').html('');

            },
            
        }
    });
    $('.popup-trigger1').magnificPopup({
        showCloseBtn: true,
        closeBtnInside: false,
        callbacks: {
            open: function() {                    
                $('.popup-content1').removeClass('hidden');
                slider = $('#popup1').lightSlider({
                    rtl:true,
                    item:1,
                    loop:true,
                    slideMargin:0,
                    cssEasing: 'easy',
                });
            },
            close: function() {
                $('.popup-content').addClass('hidden');
                $('.lSSlideOuter').html('');

            },
            
        }
    });
})();

//////////////////////////////////FIFTH SCREEN POPUP/////////////////////////////////////
(function(){
    $('.plan-info__link').magnificPopup({
        showCloseBtn: true,
        closeBtnInside: false,
        callbacks: {
            open: function() {                  
                $('.threeD-popup').removeClass('hidden');
            },
            close: function() {
                $('.threeD-popup').addClass('hidden');
            },
        }
    });
    $(document).ready(function () {
        $('#aniimated-thumbnials').lightGallery();
    });
})()
//////////////////////////////////EO POPUPS/////////////////////////////////////

//
// Dear maintainer:
//
// Once you are done trying to 'optimize' this routine,
// and have realized what a terrible mistake that was,
// please increment the following counter as a warning
// to the next guy:
//
// total_hours_wasted_here = 30
//
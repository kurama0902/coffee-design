// $(function() {
//
// 	// Пользовательские функции
//
// });

$(document).ready(function () {

    $(".add-address-company").click(function (event) {
        event.preventDefault();
        $(".hidden-post-code").show();
        $(".add-address-company").remove();
    });
    $(".add-phone-2").click(function (event) {
        event.preventDefault();
        $(".hidden-phone-company").show();
        $(".add-phone-2").remove();
    });
    $(".add-phone-3").click(function (event) {
        event.preventDefault();
        $(".hidden-phone-company-3").show();
        $(".add-phone-3").remove();
    });
    $(".add-website").click(function (event) {
        event.preventDefault();
        $(".hidden-website-company").show();
        $(".add-website").remove();
    });

    $(".add-phone-personal").click(function (event) {
        event.preventDefault();
        $(".hidden-phone").show();
        $(".add-phone-personal").remove();
    });

    $(".add-phone-personal-2").click(function (event) {
        event.preventDefault();
        $(".hidden-phone-2").show();
        $(".add-phone-personal-2").remove();
    });

    $(".add-website-personal").click(function (event) {
        event.preventDefault();
        $(".hidden-website").show();
        $(".add-website-personal").remove();
    });

    $(".demo-button").click(function (event) {
        event.preventDefault();
    });

    //scroll якорів
    $('.scroll[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var anchor = this.hash;
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 10
        }, 1500);
    });
    //scroll якорів

    // Header Scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 550) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
        if ($(document).width() <= 1024) {
            $('nav').removeClass('fixed');
        }
    });

    // Mobile Navigation
    $('.toggle-menu').click(function () {
        $('#menu-mobile').toggleClass('open');
        $('.toggle-menu').toggleClass('active');
        $('.toggle-menu span').toggleClass('active');
        $('body').toggleClass('active');
    });


    //open-info
    $('.open-info').click(function () {
        $('.item-info').addClass('active-info');
        $('.open-info').hide();
    });
    //close-info
    $('.close-info').click(function () {
        $('.item-info').removeClass('active-info');
        $('.open-info').show();
    });
    //you-must-lig-in
    $('.you-mast-log-in').click(function (event) {
        event.preventDefault();
        $('.price-container').show();
        $('.you-mast-log-in').hide();
    });
    //open-more
    $('.open-more').click(function (event) {
        event.preventDefault();
        $('.more-text').toggle();
        $('.open-more').toggleClass('revers-img');
    });
    //hide-go-it
    $('.go-it').click(function (event) {
        event.preventDefault();
        $('.go-it-container').hide('slow');
    });
    //open-panel
    $('.active-close').click(function () {
        $('.close-panel').toggleClass('active')
    });
    $('.active-close2').click(function () {
        $('.close-panel2').toggleClass('active')
    });
    $('.active-close3').click(function () {
        $('.close-panel3').toggleClass('active')
    });

    //zoom-img
     $('.img-container').click(function () {
         $('img').toggleClass('zoom-img');
         $('.shadow-block').toggleClass('zoom-img');
         $('.img-container').toggleClass('cursor');
     });

    // Mobile Navigation
    // $('.nav-bar').click(function () {
    //     $('menu').slideToggle('Open');
    // });
    // $('menu a').click(function () {
    //     if($(document).width() <676){
    //         $('menu').slideToggle('Open');
    //     }
    // });

    // Desktop navigation
    // $(window).resize(function(){
    //     var windowWidth = $(window).width();
    //     if(windowWidth > 676) {
    //         $("menu").css({"display": "block"});
    //     }
    //     else {
    //         $("menu").css({"display": "none"});
    //     }
    // });

    //progress-bar
    var progressObj = {
        parent: '#nav'
    };
    var progress = new Mprogress(progressObj);
    $(".progress-on").click(function (event) {
        event.preventDefault();
        progress.start();
        setTimeout(function () {
            progress.end();
        }, 3500);

    });
//tabs-control
    $('a[data-toggle="tab"]').on('hide.bs.tab', function (e) {
        var $old_tab = $($(e.target).attr("href"));
        var $new_tab = $($(e.relatedTarget).attr("href"));

        if ($new_tab.index() < $old_tab.index()) {
            $old_tab.css('position', 'relative').css("right", "0").show();
            $old_tab.animate({"right": "-100%"}, 500, function () {
                $old_tab.css("right", 0).removeAttr("style");
            });
        }
        else {
            $old_tab.css('position', 'relative').css("left", "0").show();
            $old_tab.animate({"left": "-100%"}, 500, function () {
                $old_tab.css("left", 0).removeAttr("style");
            });
        }
    });

    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var $new_tab = $($(e.target).attr("href"));
        var $old_tab = $($(e.relatedTarget).attr("href"));

        if ($new_tab.index() > $old_tab.index()) {
            $new_tab.css('position', 'relative').css("right", "-2500px");
            $new_tab.animate({"right": "0"}, 500);
        }
        else {
            $new_tab.css('position', 'relative').css("left", "-2500px");
            $new_tab.animate({"left": "0"}, 500);
        }
    });

//tabs-control

    //limit
    $(function () {
        $("textarea[id='your-message']").keyup(function count() {
            number = $("textarea[id='your-message']").val().length;
            $("#count").html(number);
        });
    });

});
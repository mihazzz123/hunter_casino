


$(document).ready(function() {

  // слайдер на главной
  $('.slider_1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // touchThreshold: 1000,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  });
  // остальные слайдеры
  $('.slider_2').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    // touchThreshold: 1000,
    speed: 300,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
  $('.slider_3').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    // touchThreshold: 1000,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.slider_4').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: true,
    // touchThreshold: 1000,
    speed: 300,
    nextArrow: '<div class="arrow-right"></div>',
    prevArrow: '<div class="arrow-left"></div>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // кастомный select
  $('.options').animate({'height' : 'hide'}, 0);
  
  $('.select').on('click', function() {
    
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.options').animate({'height' : 'hide'}, 300);
      $('.sidebar-language__arrow').removeClass('sidebar-language__arrow_active');
      $('.select-parent').removeClass('noShadow');
      $('.input-main').removeClass('noShadow');
      $(this).addClass('active');
      $(this).parent('.select-parent').find('.options').animate({'height' : 'show'}, 300);
      $(this).parent('.select-parent').find('.sidebar-language__arrow').addClass('sidebar-language__arrow_active');
      $(this).parents('.select-parent').addClass('noShadow');
      $(this).parents('.input-main').addClass('noShadow');
    } else {
      $('.select').removeClass('active');
      $('.options').animate({'height' : 'hide'}, 300);
      $('.sidebar-language__arrow').removeClass('sidebar-language__arrow_active');
      $('.select-parent').removeClass('noShadow');
      $('.input-main').removeClass('noShadow');
      }
      
    });

    $('.option').on('click', function() {
      var attrValue = $(this).attr('data-value');
    $(this).parents('.select-parent').find('.select').find('span').text(attrValue);
    $(this).parents('.select-parent').find('.options').animate({'height' : 'hide'}, 300);
    $('.sidebar-language__arrow').removeClass('sidebar-language__arrow_active');
    $('.select').removeClass('active');
    $(this).parents('.input-main').removeClass('noShadow');
    $('.select-parent').removeClass('noShadow');
  });
  // $('.select').on('click', function() {
  //   if($('.select').hasClass('active')){
  //     $('.select').removeClass('active');
  //     $('.options').animate({'height' : 'hide'}, 300);
  //     $('.sidebar-language__arrow').removeClass('sidebar-language__arrow_active');
  //     $('.select-parent').removeClass('noShadow');
  //     $('.input-main').removeClass('noShadow');
  //     $(this).addClass('active');
  //   } else {
  //     $(this).addClass('active');
      
  //     // $(this).toggleClass('active');
  //     // $('.options').animate({'height' : 'hide'}, 300);
  //   }
  //     if($(this).hasClass('active')){
  //       $(this).parent('.select-parent').find('.options').animate({'height' : 'show'}, 300);
  //       $(this).parent('.select-parent').find('.sidebar-language__arrow').addClass('sidebar-language__arrow_active');
  //       $(this).parents('.select-parent').addClass('noShadow');
  //       $(this).parents('.input-main').addClass('noShadow');
  //     } else {
  //       // $('.select').removeClass('active');
  //       $('.options').animate({'height' : 'hide'}, 300);
  //       $('.sidebar-language__arrow').removeClass('sidebar-language__arrow_active');
  //       $('.select-parent').removeClass('noShadow');
  //       $('.input-main').removeClass('noShadow');
  //     }
  //   });

  //   $('.option').on('click', function() {
  //     var attrValue = $(this).attr('data-value');
  //   $(this).parents('.select-parent').find('.select').find('span').text(attrValue);
  //   $(this).parents('.select-parent').find('.options').animate({'height' : 'hide'}, 300);
  //   $('.sidebar-language__arrow').removeClass('sidebar-language__arrow_active');
  //   $('.select').removeClass('active');
  //   $(this).parents('.input-main').removeClass('noShadow');
  //   $('.select-parent').removeClass('noShadow');
  // });



  // sidebar + menu 
  $('.sidebar.flex.mobile').find('.sidebar-nav').animate({'height' : 'hide'}, 0);
  $('.sidebar-gamburger').on('click', function() {
    if(window.matchMedia('(max-width: 1200px)').matches){
      $(this).toggleClass('sidebar-gamburger_active');
      if($(this).hasClass('sidebar-gamburger_active')){
        $('.sidebar.flex.mobile').find('.sidebar-nav').animate({'height' : 'show'}, 300);
      } else {
        $('.sidebar.flex.mobile').find('.sidebar-nav').animate({'height' : 'hide'}, 300);
      }
    }
  });
  function heightModals() {
    var height = $('body').height();
    $('.modals').height(height);
  }
  heightModals();
  
  $('.sidebar-language__option').click(function() {
    var flagDef = $(this).find('.sidebar-language__flag-stack').attr('data-language');
    var flag = $(this).find('.sidebar-language__flag').attr('data-language');
    $('.sidebar-language__flag-stack').removeClass('en').removeClass('ru').removeClass('isl').removeClass('ger').removeClass('uk').removeClass('sp').removeClass('en');
    $('.sidebar-language__flag-stack').addClass(flagDef);
    $('.sidebar-language__flag-stack').addClass(flag).attr('data-language', flag);
  });
  
  
  
  $(window).on('resize', function() {
    heightModals();
    sliderWidth();
    gameScreen();
  });

  $('img').on("dragstart", function(event) {
     event.preventDefault(); 
  });



  
  // Пупапы 
  $('.checkbox-item').click(function() {
    $(this).find('.checkbox-item__click').toggleClass('checkbox-item__click-active');
  });
  
  $('.modal-close').on('click', function() {
    $('.modals').fadeOut(300);
    $('.modal').fadeOut(300);
    // $('body').attr('style', '');
  });
  $('.modal-close-sec').on('click', function() {
    $('.modals').fadeOut(300);
    $('.modal').fadeOut(300);
    // $('body').attr('style', '');
  });
  
  $('.open-modal').on('click', function() {
    var modalName = $(this).attr('data-modal-name');
    $('.modals').fadeIn(300);
    $('.modal').fadeOut(300);
    $(modalName).fadeIn(300);
    // $('body').css({'overflow' : 'hidden'});
  });
  
  $('.tab__first').on('click', function() {
    $('.tab-item__first').hide();
    $('.cabinet-nav__item').removeClass('cabinet-nav__item_active');
    $(this).addClass('cabinet-nav__item_active');
    var tabName = $(this).attr('data-name-class');
    $(tabName).fadeIn(300);
  });
  $('.tab').on('click', function() {
    $('.tab-item').hide();
    $('.cabinet-cashbox-nav__item').removeClass('cabinet-cashbox-nav__item_active');
    $(this).addClass('cabinet-cashbox-nav__item_active');
    var tabName = $(this).attr('data-name-class');
    $(tabName).fadeIn(300);
  });
  $('.deposite-change__item').on('click', function() {
    $('.deposite-change__item').removeClass('deposite-change__item_active');
    $(this).addClass('deposite-change__item_active');
  });



  $('.theme-quest__items').hide();
  $('.theme-quest__answer').hide();

  // FAQ 
  $('.theme-title').on('click', function() {
    $(this).find('.theme-title__icon').toggleClass('theme-title__icon_active');
    $(this).find('.theme-title__text').toggleClass('theme-title__text_active');
    $(this).find('.theme-title__close').toggleClass('theme-title__close_active');
    $(this).toggleClass('theme-title_active');
    $(this).parents('.faq-theme').toggleClass('faq-theme_active');
    if($(this).hasClass('theme-title_active')){
      $(this).parents('.faq-theme').find('.theme-quest__items').animate({'height' : 'show'},300);
    } else {
      $(this).parents('.faq-theme').find('.theme-quest__items').animate({'height' : 'hide'},300);

    }
  });

  $('.theme-quest__title').on('click', function() {
    $(this).toggleClass('theme-quest__title_active');
    $(this).find('.theme-quest__icon').toggleClass('theme-quest__icon_active');
    if($(this).hasClass('theme-quest__title_active')){
      $(this).parents('.theme-quest').find('.theme-quest__answer').animate({'height' : 'show'},200);
    } else {
      $(this).parents('.theme-quest').find('.theme-quest__answer').animate({'height' : 'hide'},200);
    }
  });

  // ширина слайдера на странике с игрой
  function sliderWidth () {
    var i = $('.game-row-2').width();
    if(window.matchMedia('(min-width: 1800px)').matches){
      i = +i * 60 / 100;
      $('.game-records').width(i);
    } else if (window.matchMedia('(max-width: 1800px)').matches){
      var i = $('.game-row-2').width();
      i = +i * 55 / 100;
      $('.game-records').width(i);
      if (window.matchMedia('(max-width: 1600px)').matches){
        var i = $('.game-row-2').width();
        i = +i * 50 / 100;
        $('.game-records').width(i);
        if (window.matchMedia('(max-width: 1400px)').matches){
          var i = $('.game-row-2').width();
          i = +i * 45 / 100;
          $('.game-records').width(i);
          if (window.matchMedia('(max-width: 992px)').matches){
            i = 100;
            $('.game-records').css('width','100%');
          }
        }
      }
    }
  }
  sliderWidth();

  // страница бонусы
  $('.bonus-item__button').on('click', function() {
    $(this).parent('.bonus-item').find('.bonus-item-sec').fadeIn(300);
  });
  $('.bonus-item__close').on('click', function() {
    $(this).parents('.bonus-item').find('.bonus-item-sec').fadeOut(300);
  });

  function gameScreen () {
    var heightWindow = $(window).height();
    var widthWindow = $(window).width();
    var heightGame = heightWindow;
    var widthGame = heightGame; 
    if(window.matchMedia('(min-width: 1200px)').matches){
      $('.game').height(heightWindow);
      heightGame = +heightWindow - 300;
      widthGame = (+heightGame / 9) * 16; 
      $('.game-block').height(heightGame);
      $('.game-block').width(widthGame);
    } else if(window.matchMedia('(max-width: 1200px)').matches){
      heightWindow = +heightWindow - 90;
      $('.game').height(heightWindow);
      heightGame = +heightWindow - 50;
      widthGame = heightGame; 
      $('.game-block').height(heightGame);
      $('.game-block').width(widthGame);
      if(widthGame >= widthWindow){
        widthWindow = +widthWindow - 30; 
        $('.game-block').width(widthWindow);
        $('.game-block').height(widthWindow);
      }
    }
  }
  gameScreen();

  // валидация
  $('.form-button').on('click', function(event) {
    $(this).parents('form').find('.input-required').each(function(){
      if($(this).val() == ''){
        $(this).parent('.input-box').find('.no-value').fadeIn(300);
        $(this).fadeOut(100);
        event.preventDefault();
      }
    });
  });
  $('.no-value').on('click', function() {
    $(this).hide();
    $(this).parent('.input-box').find('.input-required').show().focus();
  });
});
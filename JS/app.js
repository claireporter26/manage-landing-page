// jQuery code

$(document).ready(function(){

    $(".hamburger-icon").click(function(){
        $(".main-navigation_ul").toggleClass("main-navigation_ul_toggle-active");
        $(".intro-illustration").toggleClass("intro-illustration_toggle-active");
        $(".greyed-out").toggleClass("greyed-out_toggle-active");

        if ($(".hamburger-icon").attr("src") === "./images/icon-hamburger.svg"){
            $(this).attr("src", "./images/icon-close.svg");
        } else if ($(".hamburger-icon").attr("src") === "./images/icon-close.svg"){
            $(this).attr("src", "./images/icon-hamburger.svg");
        };
    });

    $('#email-signup-form').validate({
      rules: {
        email: {
          required: false,
          email: false
        }
      } 
    });

    jQuery.extend(jQuery.validator.messages, {
      email: "Please insert a valid email",
    });

});

//swiperJS code

const swiper = new Swiper('.swiper-container', {
    spaceBetween: 20,
    slidesPerView: 'auto',
    allowTouchMove: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});












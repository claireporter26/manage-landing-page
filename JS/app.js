
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

});

$('#email-signup-form').validate({
  email: {
    required: true
  }
});

jQuery.extend(jQuery.validator.messages, {
  
  email: "Please insert a valid email",
 
});

// const swiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
// });

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


// const hamburgerIcon = document.querySelector('.hamburger-icon');
// let navListContainer = document.querySelector('.main-navigation--lrg')
// let navList = document.querySelector('.main-navigation_ul');
// let navListItem = document.querySelectorAll('.main-navigation_li');
// let introImg = document.querySelector('.intro-illustration');
// let body = document.querySelector('.body');
// const greyedOut = document.querySelector('.greyed-out');
// const testimonials = document.querySelectorAll('.testimonial');



// hamburgerIcon.addEventListener("click", function(){
//     navList.classList.toggle('main-navigation_ul_toggle-active')
//     // navListContainer.classList.toggle('main-navigation--lrg_toggle-active')
//     introImg.classList.toggle('intro-illustration_toggle-active')
//     greyedOut.classList.toggle('greyed-out_toggle-active')
    
//     // navListItem.classList.add('main-navigation_li_toggle-active')
//     // for (let i = 0; i < navListItem.length; i++) {
//     //     navListItem[i].classList.toggle('main-navigation_li_toggle-active');
//     // }

//     // console.log(hamburgerIcon.src)

//     if (hamburgerIcon.src === "http://127.0.0.1:5500/images/icon-hamburger.svg"){
//         hamburgerIcon.src = "http://127.0.0.1:5500/images/icon-close.svg"
        
//     } else if (hamburgerIcon.src === "http://127.0.0.1:5500/images/icon-close.svg"){
//         hamburgerIcon.src = "http://127.0.0.1:5500/images/icon-hamburger.svg" 
//     }
// });










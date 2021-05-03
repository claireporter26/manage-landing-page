
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










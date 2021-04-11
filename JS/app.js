const hamburgerIcon = document.querySelector('.hamburger-icon');
let navList = document.querySelector('.main-navigation_ul');
let navListItem = document.querySelectorAll('.main-navigation_li');
let introImg = document.querySelector('.intro-illustration');
let body = document.querySelector('.body');
const greyedOut = document.querySelector('.greyed-out');



hamburgerIcon.addEventListener("click", function(){
    navList.classList.toggle('main-navigation_ul_toggle-active')
    introImg.classList.toggle('intro-illustration_toggle-active')
    greyedOut.classList.toggle('greyed-out_toggle-active')
    
    // navListItem.classList.add('main-navigation_li_toggle-active')
    // for (let i = 0; i < navListItem.length; i++) {
    //     navListItem[i].classList.toggle('main-navigation_li_toggle-active');
    // }

    // console.log(hamburgerIcon.src)

    if (hamburgerIcon.src === "http://127.0.0.1:5500/images/icon-hamburger.svg"){
        hamburgerIcon.src = "http://127.0.0.1:5500/images/icon-close.svg"
        
    } else if (hamburgerIcon.src === "http://127.0.0.1:5500/images/icon-close.svg"){
        hamburgerIcon.src = "http://127.0.0.1:5500/images/icon-hamburger.svg" 
    }
})





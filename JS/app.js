const hamburgerIcon = document.querySelector('.hamburger-icon');
let navList = document.querySelector('.main-navigation_ul');

hamburgerIcon.addEventListener("click", function(){
    navList.classList.toggle('main-navigation_toggle-active')
})






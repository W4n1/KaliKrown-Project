const menu= document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function(){ // function ruling of the below to be activated on a user click
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});
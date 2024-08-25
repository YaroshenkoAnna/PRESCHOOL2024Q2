

/* BURGER-MENU */

const nav = document.querySelector(".nav__items");
const menu = document.querySelector('.burger-menu__checkbox');
const schadedArea = document.querySelector('span');

menu.addEventListener("click", openHideMenu);  

 function isNavLink(event){
    let target = event.target;

    if (target.tagName == 'A' || target.tagName == 'LI' ) {
        menu.checked = false;
        openHideMenu();
    }
};

function openHideMenu(){
   document.body.style.overflow = menu.checked === true ? 'hidden' : '';
   if (document.querySelector(".header__text_dark")) {
       document.querySelector(".nav").classList.toggle("nav_dark");
        document.querySelector(".burger-menu__label").classList.toggle("burger-menu__label_dark");  
   } 
   nav.classList.toggle("nav__items_open");

    schadedArea.classList.toggle("blackout");
    schadedArea.addEventListener("click", function(event){
        if (event.target ==schadedArea) {
        menu.checked = false;
        openHideMenu();
        }
    });

    nav.addEventListener("click", isNavLink, {once: true})
         window.addEventListener('resize', function(){
             if (window.innerWidth > 767 && menu.checked === true) {
                 menu.checked = false;
                 openHideMenu();
             }
         })
};





/* MODAL */


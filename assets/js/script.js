// const menuPart = document.querySelectorAll('.menuPart');
// const menuLength = menuPart.length;
// const btnNext = document.querySelector('.rightArrow');
// const btnPrevious = document.querySelector('.leftArrow');
// let count = 0;

// // Fonctions qui passent de slide en slide sur le menu de la landing page au clic sur les flèches.
// // Création d'un tableau avec chaque slide et déplacement de +1 ou -1 sur ce tableau

// function nextSlide() {
//     menuPart[count].classList.remove('active');

//     if(count < menuLength - 1) {
//         count++;
//     } else {
//         count = 0;
//     }

//     menuPart[count].classList.add('active');
// }

// function previousSlide() {
//     menuPart[count].classList.remove('active');

//     if(count > 0) {
//         count--;
//     } else {
//         count =  menuLength - 1;
//     }

//     menuPart[count].classList.add('active');
// }

// btnNext.addEventListener('click', () => {
//     nextSlide();
// })

// btnPrevious.addEventListener('click', () => {
//     previousSlide();
// })

// ##############################################################
// ##########             Anim Menu Burger             ##########
// ##############################################################

let menuBtnOpen = document.querySelector('.menu');
let menuBtnClose = document.querySelector('.close');
let overlayMenu = document.querySelector('.overlayMenuBurger');

menuBtnOpen.addEventListener('click', () => {
    overlayMenu.classList.add('active');
})

menuBtnClose.addEventListener('click', () => {
    overlayMenu.classList.remove('active');
})
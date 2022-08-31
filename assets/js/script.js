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
    overlayMenu.classList.add('open');
    overlayMenu.classList.remove('close');
})

menuBtnClose.addEventListener('click', () => {
    overlayMenu.classList.add('close');
    overlayMenu.classList.remove('open');
})

// ##############################################################
// ###########             Aperçu du menu             ###########
// ##############################################################

let starter = document.querySelector('#starterPreview');
let mainDishes = document.querySelector('#mainDishesPreview');
let dessert = document.querySelector('#dessertPreview');
let drinks = document.querySelector('#drinksPreview');
let container = document.querySelector('.catDishesContainer')

starter.addEventListener('click', () => {
    container.innerHTML =   `<div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Entrée 1</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Entrée 2</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Entrée 3</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Entrée 4</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>`
})
mainDishes.addEventListener('click', () => {
    container.innerHTML = `<div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Plat 1</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Plat 2</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Plat 3</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Plat 4</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>`
})
dessert.addEventListener('click', () => {
    container.innerHTML = `<div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Dessert 1</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Dessert 2</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Dessert 3</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Dessert 4</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>`
})
drinks.addEventListener('click', () => {
    container.innerHTML = `<div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Boisson 1</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Boisson 2</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Boisson 3</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div class="catDishiesItem">
                            <div class="catDishiesItemTitle">
                                <h4>Boisson 4</h4>
                                <span>25€</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>`
})
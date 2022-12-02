const menu = document.querySelector(".main-nav__ul"),
  menuBurger = document.querySelector(".menu__burger"),
  images = document.querySelector(".slider__img1"),
  imagesTwo = document.querySelector(".slider__img2");

function visiblMenu() {
  menu.classList.toggle("active"), menuBurger.classList.toggle("active");
}
visiblMenu();

menuBurger.addEventListener("click", function () {
  menu.classList.toggle("active"),
    menuBurger.classList.toggle("active"),
    images.classList.toggle("slider__img--burgeroff"),
    imagesTwo.classList.toggle("slider__img--burgeroff");
});

menu.addEventListener("click", function () {
  menu.classList.toggle("active"),
    menuBurger.classList.toggle("active"),
    images.classList.toggle("slider__img--burgeroff"),
    imagesTwo.classList.toggle("slider__img--burgeroff");
});

const headerNav = document.querySelector('.header__nav');
const toggleMenu = document.querySelector('.toggle__menu');
toggleMenu.addEventListener('click', ()=>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
});

//scroll
const nav = document.querySelectorAll(".header__nav ul li a");
nav.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

// const faqs = document.querySelectorAll(".header__nav a");
// faqs.forEach((drop) => {
//   drop.addEventListener("click", () => {
//     drop.nextElementSibling.classList.toggle("open");
//     drop.querySelector("i").classList.toggle("open");
//   });
// });
const headerNav = document.querySelector('.header__wrapper ul');
const toggleMenu = document.querySelector('.toggle__menu');
toggleMenu.addEventListener('click', ()=>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
});

const nav = document.querySelectorAll(".header__wrapper ul li a");
nav.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.classList.toggle("open");
  });
});

const gutter = document.querySelector(".header__wrapper.nav");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 300) {
    gutter.classList.add("top");
  } else {
    gutter.classList.remove("top");
  }
});

// const faqs = document.querySelectorAll(".header__nav a");
// faqs.forEach((drop) => {
//   drop.addEventListener("click", () => {
//     drop.nextElementSibling.classList.toggle("open");
//     drop.querySelector("i").classList.toggle("open");
//   });
// });


// const baba = document.querySelectorAll(".header-mob__nav ul li h4");
// baba.forEach((drop) => {
//   drop.addEventListener("click", () => {
//     drop.nextElementSibling.classList.toggle("open");
//     drop.querySelector("i").classList.toggle("open");
//   });
// });

// const toggleMenu = document.querySelector(".toggle__menu");
// const mobileNav = document.querySelector(".header-mob__nav");
// toggleMenu.addEventListener("click", () => {
//   toggleMenu.classList.toggle("open");
//   mobileNav.classList.toggle("open");
// });

const tabNav = document.querySelectorAll(".tab-nav-link");
const tabContent = document.querySelectorAll(".about__text__content");
tabNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveNav();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveNav() {
  tabNav.forEach((nav) => {
    nav.classList.remove("active");
  });
}

function removeActiveContent() {
  tabContent.forEach((nav) => {
    nav.classList.remove("active");
  });
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
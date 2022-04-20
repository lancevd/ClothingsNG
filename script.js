// RESPONSIVE MENU
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const navBar = document.querySelector(".nav");
const mobileNav = document.querySelector(".mobile-nav");

function openMobileMenu() {
  // alert('CLicked')
  navBar.classList.add("hide");
  mobileNav.style = `
    margin-left: 0;
    `;
}

function closeMobileMenu() {
  // alert('CLicked')
  navBar.classList.remove("hide");
  mobileNav.style = `
    margin-left: -1000;
    `;
}


// Payment Message

let checkoutContain = document.querySelector(".checkout-contain");
let successBox = document.querySelector(".success-box");
let checkoutNoti = document.querySelector(".checkout-noti");
let orderBtn = document.getElementById("order-btn-checkout");

function showSuccess () {
  successBox.classList.remove('hide')
  checkoutContain.style.display = 'none'
  checkoutNoti.style.display = 'none'
}

function redirect () {
  window.location.href = "./index.html";
}

orderBtn.addEventListener('click', showSuccess)
// orderBtn.addEventListener("click", setTimeout(() => {
//   redirect;
// }, 3000));

// SLIDERS

// $(".best-content").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: false,
//   autoplaySpeed: 2000,
//   dots: true,
//   autoWidth: true,
//   autoplay: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     760: {
//       items: 2,
//     },
//     1000: {
//       items: 4,
//     },
//   },
// });

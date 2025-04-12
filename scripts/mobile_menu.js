document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".open_mobile_menu");
    const menuMobile = document.querySelector(".mobile_menu");
  
    menu.addEventListener("click", function () {
      menuMobile.classList.toggle("active");
    });
  });
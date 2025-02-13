const navMenu = document.querySelector(".nav-list"),
  openBtn = document.querySelector(".header .fa-bars"),
  closeBtn = document.querySelector(".nav-list .fa-xmark");

openBtn.addEventListener("click", () => navMenu.classList.add("active"));
closeBtn.addEventListener("click", () => navMenu.classList.remove("active"));

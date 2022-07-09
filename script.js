const menu = document.querySelectorAll(".menu");
menu.forEach(function (menu) {
  const hambergerMenu = menu.querySelector(".hambergerMenu");
  menu.addEventListener("click", function () {
    hambergerMenu.classList.toggle("open");
  });
});

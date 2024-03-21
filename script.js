let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
//   navBar = document.querySelector(".header-navigation");
  navBar.classList.toggle("active");
};

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});

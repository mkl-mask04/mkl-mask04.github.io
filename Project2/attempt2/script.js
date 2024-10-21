const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".dropdown-menu");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();

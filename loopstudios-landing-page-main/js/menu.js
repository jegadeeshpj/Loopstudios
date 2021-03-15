const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const close = document.querySelector(".close");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
};

navSlide();

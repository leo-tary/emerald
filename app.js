const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const man = document.querySelector("#man");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
  man.classList.toggle("z-10");
});

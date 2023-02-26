const menuBtn = document.querySelector(".menu-btn");
const menuComponents = document.querySelector(".menu-components");
const closeBtn = document.querySelector(".close-btn");
const darkLayer = document.querySelector(".layer");
const darken = document.querySelector(".darken");

menuBtn.addEventListener("click", () => {
  menuComponents.classList.add("active");
  darkLayer.classList.add("darken");
  document.body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  menuComponents.classList.remove("active");
  darkLayer.classList.remove("darken");
  document.body.style.overflowY = "visible";
  document.body.style.overflowX = "hidden";
});
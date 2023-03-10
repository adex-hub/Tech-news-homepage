const menuBtn = document.querySelector(".menu-btn");
const menuComponents = document.querySelector(".menu-components");
const closeBtn = document.querySelector(".close-btn");
const darkLayer = document.querySelector(".layer");
const darken = document.querySelector(".darken");

menuBtn.addEventListener("click", () => {
  menuComponents.style.display = "grid";
  setTimeout(() => {
    menuComponents.classList.add("active");
    darkLayer.classList.add("darken");
    document.body.style.overflow = "hidden";
  }, 200);

});
closeBtn.addEventListener("click", () => {
  menuComponents.classList.remove("active");
  darkLayer.classList.remove("darken");

  setTimeout(() =>{
    menuComponents.style.display = "none"; 
    document.body.style.overflow = "scroll";
  }, 300)
});
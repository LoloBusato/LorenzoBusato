
// Menu selección de seccciones para dispositivos moviles//
const menuLinks = document.querySelectorAll(".categorias a[href^='#']");
console.log(menuLinks);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.categorias a[href^="#${id}"]`);

    if (entry.isIntersecting) {
      document.querySelector(".categorias a.selected").classList.remove("selected");
      menuLink.classList.add("selected");
    }
  });
}, { rootMargin: "-30% 0px -70% 0px" });

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function(){
    menu.classList.remove("menu_opened");
  });
  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

const menu = document.querySelector(".categorias");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}
//---------------------------------------------------------------//

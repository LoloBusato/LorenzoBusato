let contactoLinks = document.querySelector('.contact-links');

const infoSeccionContacto = [
  {info: " GitHub", img1: "fab", img2: "fa-github", href: "https://github.com/LoloBusato"},
  {info: " Enviar email", img1: "fas", img2: "fa-at", href: "mailto: lorenzobusato07@gmail.com"},
  {info: " Llamar", img1: "fas", img2: "fa-mobile-alt", href: "tel:5491161252839"},
  {info: " Linkedin", img1: "fa-brands", img2: "fa-linkedin", href: "https://www.linkedin.com/in/lorenzo-busato/"}
];

function contactoSeccion(info, img1, img2, href) {
  let i = document.createElement("i");
  i.classList.add(img1);
  i.classList.add(img2);
  let a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.innerHTML = info;
  a.prepend(i);
  contactoLinks.append(a);
}

infoSeccionContacto.forEach(({info, img1, img2, href}) => contactoSeccion(info, img1, img2, href));

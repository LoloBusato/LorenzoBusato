let listaContacto = document.querySelector('.parrafo-2');

const infoContacto = [
  {info: " +54 9 11 6125 2839", img1: "fa-solid", img2: "fa-phone", href: "https://api.whatsapp.com/send?phone=541161252839"},
  {info: " lorenzobusato07@gmail.com", img1: "fa-solid", img2: "fa-envelope", href: "mailto: lorenzobusato07@gmail.com"},
  {info: " Buenos Aires, Argentina", img1: "fa-solid", img2: "fa-location-dot", href: "https://www.google.com/maps/place/Buenos+Aires,+CABA/@-34.6158238,-58.4332985"},
  {info: " lolobusato.github.io/LorenzoBusato/", img1: "fa-solid", img2: "fa-globe", href: "https://lolobusato.github.io/LorenzoBusato/"}
];

function contacto(info, img1, img2, href) {
  let div = document.createElement("div");
  div.classList.add("curriculum-contacto");
  let i = document.createElement("i");
  i.classList.add(img1);
  i.classList.add(img2);
  let a = document.createElement("a");
  a.href = href;
  a.classList.add("curriculum-texto");
  a.target = "_blank";
  a.innerHTML = info;
  if(a.innerHTML == " lolobusato.github.io/LorenzoBusato/"){
    a.classList.add("webpage");
  }
  div.append(a);
  a.prepend(i);
  listaContacto.append(div);
}

infoContacto.forEach(({info, img1, img2, href}) => contacto(info, img1, img2, href));

let experienciaLaboral = document.querySelector('#experienciaLaboral');
let estudios = document.querySelector('#estudios');
let cursos = document.querySelector('#cursos');

const infoExperienciaLaboral = [
  {title: "TÉCNICO ESPECIALIZADO EN APPLE" , lugar: "2020-actualidad", empresa: "TheDoniPhone" , text: "Servicio técnico especializado en reparación de MacBook, iPhone, iPad tanto de periféricos como microsoldadura."}
];

const infoEstudios = [
  {title: "LICENCIATURA EN ANÁLISIS DE SISTEMAS", lugar: "2022-actualidad", text: "Universidad de Buenos Aires"},
  {title: "TÉCNICO EN ELECTRÓNICA", lugar: "2015-2020", text: 'Escuela Técnica N°28 D.E. 10 "República Francesa"'}
];

const infoCursos = [
  {title: "RESPONSIVE WEB DESIGN", lugar: "FreeCodeCamp", text:"Curso de programación sobre HTML y CSS de 300hs de duración."},
  {title: "JavaScript Algorithms and Data Structures", lugar: "FreeCodeCamp", text: "Curso de programación sobre JavaScript de 300hs de duración."},
  {title: "FrontEnd Development Libraries", lugar: "FreeCodeCamp", text: "Curso de programación sobre librerias FrontEnd de 300hs de duración."}
];

function informacion(title, lugar, text) {
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let b = document.createElement("b");
  let i = document.createElement("i");
  div.classList.add("curriculum-parrafo-der");
  b.innerHTML = title;
  i.innerHTML = lugar;
  p3.innerHTML = text;
  p1.append(b);
  p2.append(i);
  div.append(p1);
  div.append(p2);
  div.append(p3);
  return div;
}
infoEstudios.forEach(({title, lugar, text}) => {
  estudios.append(informacion(title,lugar,text));
});
infoCursos.forEach(({title, lugar, text}) => {
  cursos.append(informacion(title,lugar,text));
});

function informacionExperiencia(title, lugar, empresa, text) {
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let b = document.createElement("b");
  let i = document.createElement("i");
  div.classList.add("curriculum-parrafo-der");
  b.innerHTML = title;
  i.innetHTML = lugar;
  p3.innerHTML = empresa;
  p4.innerHTML = text;
  p1.append(b);
  p2.append(i);
  div.append(p1);
  div.append(p2);
  div.append(p3);
  div.append(p4);
  return div;
}
infoExperienciaLaboral.forEach(({title, lugar, empresa, text}) => {
  experienciaLaboral.append(informacionExperiencia(title, lugar, empresa, text));
});

const biografia = [
  {infoMe: "Técnico Superior con 2 años de experiencia en reparación de dispositivos electrónicos."},
  {infoMe: "Me encanta aprender cosas nuevas, soy una persona autodidactica y responsable."},
  {infoMe: "Busco un puesto en el que pueda emplear y ampliar mis conocimientos de programación."}
];

let biografiasText = document.querySelector('.separo');

function createP(infoMe) {
  let p = document.createElement("p");
  p.innerText = infoMe;
  p.classList.add("curriculum-texto");
  return p
}

biografia.forEach(({infoMe}) => {
  biografiasText.append(createP(infoMe));
});

let languageCheck = document.querySelector("#slider").checked;

// Seccion NavBar//
const seccionesMenuNavBar = document.querySelector(".categorias");

//base de datos//
const linksNavBarEs = [
  {href: "#inicio", text: "Inicio"},
  {href: "#about", text: "Sobre mi"},
  {href: "#proyectos", text: "Proyectos"},
  {href: "#curriculum", text: "Curriculum"},
  {href: "#contacto", text: "Contacto"}
];
const linksNavBarEn = [
  {href: "#inicio", text: "Home"},
  {href: "#about", text: "About"},
  {href: "#proyectos", text: "Projects"},
  {href: "#curriculum", text: "Resume"},
  {href: "#contacto", text: "Contact"}
];
//-------------------//

function createNavBar(href, text) {
  let a = document.createElement("a");
  let li = document.createElement("li");
  a.href = href;
  a.innerHTML = text;
  if(text == "Inicio" || text == "Home"){
    a.classList.add("selected");
  }
  li.append(a);
  seccionesMenuNavBar.append(li);
}

//----------------------------------------------------------------------//

// Seccion de Proyectos//
let proyectsWrapper = document.querySelector('.wrapper');

//base de datos//
const proyectosUnitEs = [
  {hrefPage: "https://codepen.io/LoloBusato/full/BaxYPXe", hrefRep: "https://codepen.io/LoloBusato/pen/BaxYPXe", text: "Maquina de Refranes"},
  {hrefPage: "https://lolobusato.github.io/25-5-Clock/", hrefRep: "https://github.com/LoloBusato/25-5-Clock", text: "Pomodoro"},
  {hrefPage: "https://lolobusato.github.io/Drum-Machine/", hrefRep: "https://github.com/LoloBusato/Drum-Machine", text: "Batería Virtual"},
  {hrefPage: "https://lolobusato.github.io/Markdown-Previewer/", hrefRep: "https://github.com/LoloBusato/Markdown-Previewer", text: "Markdown Vista"},
  {hrefPage: "https://lolobusato.github.io/JavaScript-Calculator/", hrefRep: "https://github.com/LoloBusato/JavaScript-Calculator", text: "Calculadora"},
  {hrefPage: "https://lolobusato.github.io/LorenzoBusato/", hrefRep: "https://github.com/LoloBusato/LorenzoBusato", text: "Lorenzo Página"},
];
const proyectosUnitEn = [
  {hrefPage: "https://codepen.io/LoloBusato/full/BaxYPXe", hrefRep: "https://codepen.io/LoloBusato/pen/BaxYPXe", text: "Quote Machine"},
  {hrefPage: "https://lolobusato.github.io/25-5-Clock/", hrefRep: "https://github.com/LoloBusato/25-5-Clock", text: "Pomodoro"},
  {hrefPage: "https://lolobusato.github.io/Drum-Machine/", hrefRep: "https://github.com/LoloBusato/Drum-Machine", text: "Drum Machine"},
  {hrefPage: "https://lolobusato.github.io/Markdown-Previewer/", hrefRep: "https://github.com/LoloBusato/Markdown-Previewer", text: "Markdown Previewer"},
  {hrefPage: "https://lolobusato.github.io/JavaScript-Calculator/", hrefRep: "https://github.com/LoloBusato/JavaScript-Calculator", text: "Calculator"},
  {hrefPage: "https://lolobusato.github.io/LorenzoBusato/", hrefRep: "https://github.com/LoloBusato/LorenzoBusato", text: "Lorenzo Website"},
];
//---------------------//

function createImageProyect(hrefPage ,hrefRep ,text) {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let h21 = document.createElement("h2");
  let h22 = document.createElement("h2");
  let a1 = document.createElement("a");
  let i1 = document.createElement("i");
  let p1 = document.createElement("p");
  let a2 = document.createElement("a");
  let i2 = document.createElement("i");
  let p2 = document.createElement("p");
  if(languageCheck) {
    p2.innerHTML = "Repository";
    p1.innerHTML = "WebPage";
  } else {
    p2.innerHTML = "Repositorio";
    p1.innerHTML = "Sitio Web";
  }
  i2.classList.add("fa-brands");
  i2.classList.add("fa-github");
  a2.href = hrefRep;
  a2.classList.add("links");
  a2.target = "_blank";
  a2.append(i2);
  a2.append(p2);
  i1.classList.add("fa-solid");
  i1.classList.add("fa-globe");
  a1.href = hrefPage;
  a1.classList.add("links");
  a1.target = "_blank";
  a1.append(i1);
  a1.append(p1);
  div4.classList.add("info");
  div4.append(a1);
  div4.append(a2);

  h22.innerHTML = text;
  div3.classList.add("parcial");
  div3.append(h22);
  div3.append(div4);

  h21.innerHTML = text;
  div2.classList.add("solo");
  div2.append(h21);

  div1.classList.add("completo");
  div1.append(div2);
  div1.append(div3);
  proyectsWrapper.append(div1);
}

//---------------------------------------------------------------------//

//Seccion de contactos//
let contactoLinks = document.querySelector('.contact-links');

//Base de datos//
const infoSeccionContactoEs = [
  {info: " GitHub", img1: "fab", img2: "fa-github", href: "https://github.com/LoloBusato"},
  {info: " Enviar email", img1: "fas", img2: "fa-at", href: "mailto: lorenzobusato07@gmail.com"},
  {info: " Llamar", img1: "fas", img2: "fa-mobile-alt", href: "tel:5491161252839"},
  {info: " Linkedin", img1: "fa-brands", img2: "fa-linkedin", href: "https://www.linkedin.com/in/lorenzo-busato/"}
];
const infoSeccionContactoEn = [
  {info: " GitHub", img1: "fab", img2: "fa-github", href: "https://github.com/LoloBusato"},
  {info: " Send email", img1: "fas", img2: "fa-at", href: "mailto: lorenzobusato07@gmail.com"},
  {info: " Call me", img1: "fas", img2: "fa-mobile-alt", href: "tel:5491161252839"},
  {info: " Linkedin", img1: "fa-brands", img2: "fa-linkedin", href: "https://www.linkedin.com/in/lorenzo-busato/"}
];
//-----------------//

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

//-------------------------------------------------------------------------//


// Seccion de Curriculum//

//Base de Datos//
const biografiaEs = [
  {infoMe: "Técnico Superior con 2 años de experiencia en reparación de dispositivos electrónicos."},
  {infoMe: "Me encanta aprender cosas nuevas, soy una persona autodidactica y responsable."},
  {infoMe: "Busco un puesto en el que pueda emplear y ampliar mis conocimientos de programación."}
];
const biografiaEn = [
  {infoMe: "Senior Technician with 2 years experience in electonic devices repair."},
  {infoMe: "I like to learn new skills, a self-taught person and responsible."},
  {infoMe: "I am loooking for a opportunity where I can use and expand my programming knowledge."}
];
//-------------------//
const infoContacto = [
  {info: " +54 9 11 6125 2839", img1: "fa-solid", img2: "fa-phone", href: "https://api.whatsapp.com/send?phone=541161252839"},
  {info: " lorenzobusato07@gmail.com", img1: "fa-solid", img2: "fa-envelope", href: "mailto: lorenzobusato07@gmail.com"},
  {info: " Buenos Aires, Argentina", img1: "fa-solid", img2: "fa-location-dot", href: "https://www.google.com/maps/place/Buenos+Aires,+CABA/@-34.6158238,-58.4332985"},
  {info: " lolobusato.github.io/LorenzoBusato/", img1: "fa-solid", img2: "fa-globe", href: "https://lolobusato.github.io/LorenzoBusato/"}
];
//------------------//
const infoExperienciaLaboralEs = [
  {title: "TÉCNICO ESPECIALIZADO EN APPLE" , lugar: "2020-actualidad", empresa: "TheDoniPhone" , text: "Servicio técnico especializado en reparación de MacBook, iPhone, iPad tanto de periféricos como microsoldadura."}
];
const infoExperienciaLaboralEn = [
  {title: "Technician specialized in Apple" , lugar: "2020-present", empresa: "TheDoniPhone" , text: "Technical service specialized in repair of MacBook, iPhone, iPad, Apple Watch both parts and microsoldering."}
];
//------------------//
const infoEstudiosEs = [
  {title: "LICENCIATURA EN ANÁLISIS DE SISTEMAS", lugar: "2022-actualidad", text: "Universidad de Buenos Aires"},
  {title: "TÉCNICO EN ELECTRÓNICA", lugar: "2015-2020", text: 'Escuela Técnica N°28 D.E. 10 "República Francesa"'}
];
const infoEstudiosEn = [
  {title: "BACHELOR DEGREE IN SYSTEMS ANALYSIS", lugar: "2022-present", text: "Buenos Aires University"},
  {title: "ELECTRONICS TECHNICIAN", lugar: "2015-2020", text: 'Technical School N°28 D.E. 10 "Republic of France"'}
];
//------------------//
const infoCursosEs = [
  {title: "RESPONSIVE WEB DESIGN", lugar: "FreeCodeCamp", text:"Curso de programación sobre HTML y CSS de 300hs de duración."},
  {title: "JavaScript Algorithms and Data Structures", lugar: "FreeCodeCamp", text: "Curso de programación sobre JavaScript de 300hs de duración."},
  {title: "FrontEnd Development Libraries", lugar: "FreeCodeCamp", text: "Curso de programación sobre librerias FrontEnd de 300hs de duración."}
];
const infoCursosEn = [
  {title: "RESPONSIVE WEB DESIGN", lugar: "FreeCodeCamp", text:"Programming course on HTML and CSS of 300 hours of duration."},
  {title: "JavaScript Algorithms and Data Structures", lugar: "FreeCodeCamp", text: "Programming course on JavaScript of 300 hours of duration."},
  {title: "FrontEnd Development Libraries", lugar: "FreeCodeCamp", text: "Programming course on FrontEnd libraries of 300 hours duration."}
];

let languagesEs = [
  {idioma: "INGLES", nivel: " - ALTO."},
  {idioma: "ESPAÑOL", nivel: " - NATIVO."}
];
let languagesEn = [
  {idioma: "ENGLISH", nivel: " - FLUID."},
  {idioma: "SPANISH", nivel: " - NATIVE."}
];

let curriculumStudiesEs = "Estudiante de Licenciatura en Análisis";
let curriculumStudiesEn = "Student of Bachelor Degree in Systems Analysis";
//----------------------//

let listaContacto = document.querySelector('.parrafo-2');

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

let experienciaLaboral = document.querySelector('#experienciaLaboral');
let estudios = document.querySelector('#estudios');
let cursos = document.querySelector('#cursos');

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
  i.innerHTML = lugar;
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

function curriculumTitle(clase, texto) {
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let h2 = document.createElement("h2");
  div3.classList.add("arrow");
  div2.classList.add("arrow-box");
  div1.classList.add("curriculum-title");
  h2.innerHTML = texto;
  div2.append(div3);
  div1.append(div2);
  div1.append(h2);
  document.querySelector(clase).prepend(div1);
}

let lenguajesContenedor = document.querySelector(".curriculum-parrafo-der");

function escrituraLenguajes(idioma, nivel){
  let p = document.createElement("p");
  let b = document.createElement("b");
  p.innerText = nivel;
  b.innerText = idioma;
  p.prepend(b);
  lenguajesContenedor.append(p);
}
let biografiasText = document.querySelector('.separo');

function createP(infoMe) {
  let p = document.createElement("p");
  p.innerText = infoMe;
  p.classList.add("curriculum-texto");
  return p
}


//--------------------------------------------------------------------------//

//Seccion About//

let aboutSkills = document.querySelector('.skills');

const infoSeccionAbout = [
  {info: "HTML", foto: "./Pictures/HTML.png"},
  {info: "CSS", foto: "./Pictures/CSS.png"},
  {info: "JavaScript", foto: "./Pictures/javascript.png"},
  {info: "Bootstrap", foto: "./Pictures/Bootstrap.png"},
  {info: "React", foto: "./Pictures/react.png"},
  {info: "Redux", foto: "./Pictures/redux.png"}
];

function aboutSeccion(info, foto) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let img = document.createElement("img");
  img.classList.add("about-image");
  img.src = foto;
  img.alt = info + " Logo";
  p.innerHTML = info;
  div.classList.add("about-marco");
  div.append(img);
  div.append(p);
  aboutSkills.append(div);
}

//----------------------------------------------------------------//

//Seccion contacto texto//
//Base de datos//
const contactoTextoInfoEs = [
  {titulo: "Trabajemos juntos...", subtitulo: "¿Qué tipo de música le gusta?"}
];
const contactoTextoInfoEn = [
  {titulo: "Let's work together...", subtitulo: "What kind of music do you like?"}
];
//---------------//
let contactoTexto = document.querySelector('.contact-header');

function createContactoTexto(titulo, subtitulo) {
  let h = document.createElement("h1");
  let p = document.createElement("p");
  h.innerHTML = titulo;
  p.innerHTML = subtitulo;
  contactoTexto.append(h);
  contactoTexto.append(p);
}
//-------------------------------------------------------------------//
let inicioSubtituloEs = "Desarrollador FrontEnd";
let inicioSubtituloEn = "FrontEnd Developer";
let aboutTituloEs = "¡Hola mundo!";
let aboutTituloEn = "Hello world!";
let aboutInformacionEs = "Me llamo Lorenzo Busato y soy técnico en electrónica. Me encuentro cursando la carrera de licenciatura en análisis de sistemas. Además, soy programador autodidacta, actualmente enfocado en FrontEnd, y adquiriendo nuevos conocimientos día a día.</br>Esta es mi página web que refleja mis habilidades actuales, bienvenidos!";
let aboutInformacionEn = "My name is Lorenzo Busato, I am an Electronics Technician and I am studying for a bachelor degree in Systems Analysis. Also, I am a self-taught programmer, currently focused on FrontEnd, and acquiring new knowledge day by day.<br />This is my portfolio reflecting my current skills. Welcome!";
let aboutSkillsTituloEs = "Habilidades";
let aboutSkillsTituloEn = "Skills";
let proyectosTituloEs = "Estos son algunos de mis proyectos";
let proyectosTituloEn = "These are some of my projects";
let footerTextEs = "© Creado por Lorenzo Busato";
let footerTextEn = "© Created by Lorenzo Busato";

//------------------------------------------------------------------//
 let check = document.querySelector("#slider");
 check.addEventListener('click',idioma)

function idioma(){
  if(languageCheck == true){
    window.location.href = "indexEs.html";
  } else {
    window.location.href = "indexEn.html";
  }
}

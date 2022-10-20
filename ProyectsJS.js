let proyectsWrapper = document.querySelector('.wrapper');

const proyectosUnit = [
  {hrefPage: "https://codepen.io/LoloBusato/full/BaxYPXe", hrefRep: "https://codepen.io/LoloBusato/pen/BaxYPXe", text: "Maquina de Refranes"},
  {hrefPage: "https://lolobusato.github.io/25-5-Clock/", hrefRep: "https://github.com/LoloBusato/25-5-Clock", text: "Pomodoro"},
  {hrefPage: "https://lolobusato.github.io/Drum-Machine/", hrefRep: "https://github.com/LoloBusato/Drum-Machine", text: "Batería Virtual"},
  {hrefPage: "https://lolobusato.github.io/Markdown-Previewer/", hrefRep: "https://github.com/LoloBusato/Markdown-Previewer", text: "Markdown Vista"},
  {hrefPage: "https://lolobusato.github.io/JavaScript-Calculator/", hrefRep: "https://github.com/LoloBusato/JavaScript-Calculator", text: "Calculadora"},
  {hrefPage: "https://lolobusato.github.io/LorenzoBusato/", hrefRep: "https://github.com/LoloBusato/LorenzoBusato", text: "Lorenzo Página"},
];

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
  p2.innerHTML = "Repository";
  i2.classList.add("fa-brands");
  i2.classList.add("fa-github");
  a2.href = hrefRep;
  a2.classList.add("links");
  a2.target = "_blank";
  a2.append(i2);
  a2.append(p2);
  p1.innerHTML = "WebPage";
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

proyectosUnit.forEach(({hrefPage ,hrefRep ,text}) => createImageProyect(hrefPage ,hrefRep ,text));
console.log(proyectsWrapper);

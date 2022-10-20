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

infoSeccionAbout.forEach(({info, foto}) => aboutSeccion(info, foto));

import { state } from "./model.js";
import {
  navBarViewer,
  navBarCloser,
  destinationRender,
  crewRender,
  technologyRender,
  updateImageSrc,
} from "./view.js";

const btnNavOpn = document.querySelector(".btn-nav-opn");
const btnNavClose = document.querySelector(".btn-nav-close");
const destinationPage = document.querySelector(".destination-page");
const crewPage = document.querySelector(".crew-page");
const technologyPage = document.querySelector(".technology-page");
const technologyImg = document.querySelector(".technology-img img");

btnNavOpn.addEventListener("click", () => navBarViewer(btnNavOpn));
btnNavClose.addEventListener("click", () => navBarCloser(btnNavClose));

document.body.addEventListener("click", (e) => {
  const clicked = e.target;

  if (clicked.id === "moon") {
    destinationRender(state.destinations[0], destinationPage);
  }
  if (clicked.id === "mars") {
    destinationRender(state.destinations[1], destinationPage);
  }
  if (clicked.id === "europa") {
    destinationRender(state.destinations[2], destinationPage);
  }
  if (clicked.id === "titan") {
    destinationRender(state.destinations[3], destinationPage);
  }
  if (clicked.classList.contains("dot")) {
    const allChilds = [...clicked.parentElement.children];
    allChilds.forEach((e) => {
      e.classList.remove("dot-active");
    });

    crewRender(state.crew[clicked.dataset.index], crewPage);
    const z = document.querySelector(`[data-index="${clicked.dataset.index}"]`);
    z.classList.add("dot-active");
  }
});

let currentTech = 0;
document.body.addEventListener("click", (e) => {
  const clicked = e.target;

  if (clicked.classList.contains("dot-big")) {
    [...clicked.parentElement.children].forEach((i) => {
      console.log(i);
      i.classList.remove("dot-big-active");
    });
    currentTech = clicked.dataset.indexBig;
    technologyRender(
      state.technology[clicked.dataset.indexBig],
      technologyPage
    );

    const z = document.querySelector(
      `[data-index-big="${clicked.dataset.indexBig}"]`
    );
    z.classList.add("dot-big-active");
  }
});

technologyImg.src = updateImageSrc(state.technology[0]);
window.addEventListener("resize", () => {
  technologyImg.src = updateImageSrc(state.technology[currentTech]);
});

console.log(state);

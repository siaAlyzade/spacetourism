export {
  navBarViewer,
  navBarCloser,
  destinationRender,
  crewRender,
  technologyRender,
  updateImageSrc,
};

// navbar
const navBarViewer = function (btnNav) {
  btnNav.classList.toggle("hidden");
  document.querySelector(".navbar-mobile").classList.remove("off");

  document.querySelector(".navbar-mobile").classList.add("on");
};
const navBarCloser = function (btnNav) {
  btnNav.classList.toggle("hidden");
  document.querySelector(".navbar-mobile").classList.toggle("off");
};

const destinationRender = function (destinationObj, destinationPage) {
  destinationPage.innerHTML = "";
  destinationPage.insertAdjacentHTML(
    "afterbegin",
    ` <main class="grid grid-2col grid-ch grid-cv mb40">
        <h5 class="destination-title tp5 color-font-white mt48 mb48">
          <span style="opacity: 0.25">01</span> PICK YOUR DESTINATION
        </h5>
        <div></div>
        <div class="planet-img container">
          <img src=${destinationObj.images.webp} alt="" />
        </div>
        <div
          class="planet-data container flex flex-column color-font-white gap32"
        >
          <ul
            class="planet-pagination tp8 flex flex-l gap32 color-font-blue-300"
          >
            <li id="moon">MOON</li>
            <li id="mars">MARS</li>
            <li id="europa">EUROPA</li>
            <li id="titan">TITAN</li>
          </ul>
          <h3 class="planet-title tp2">${destinationObj.name.toUpperCase()}</h3>
          <p class="planet-p tp9 color-font-blue-300">
            ${destinationObj.description}
          </p>
          <div class="line1 color-bg-white"></div>
          <ul class="planet-stats flex gap32">
            <li class="planet-dist flex flex-column gap24">
              <p class="tp7 color-font-blue-300">AVG. DISTANCE</p>
              <p class="tp6">${destinationObj.distance}</p>
            </li>
            <li class="planet-travel flex flex-column gap24">
              <p class="tp7 color-font-blue-300">Est. travel time</p>
              <p class="tp6">${destinationObj.travel}</p>
            </li>
          </ul>
        </div>
      </main>`
  );
};
const crewRender = function (crewObj, crewPage) {
  crewPage.innerHTML = "";
  crewPage.insertAdjacentHTML(
    "afterbegin",
    `   <main class="grid grid-2col grid-ch grid-cv">
        <h5 class="crew-title tp5 color-font-white mt48 mb48">
          <span style="opacity: 0.25">02</span> MEET YOUR CREW
        </h5>
        <div></div>

        <div class="crew-data flex flex-column color-font-white gap40">
          <p class="bio tp4" style="opacity: 50.42%">${crewObj.role}</p>
          <h5 class="name tp3">${crewObj.name}</h5>
          <p class="bio tp9 color-font-blue-300">
            ${crewObj.bio}
          </p>
          <div class="crew-pagination flex gap40">
            <div class="dot " data-index="0"></div>
            <div class="dot " data-index="1"></div>
            <div class="dot" data-index="2"></div>
            <div class="dot" data-index="3"></div>
          </div>
        </div>
        <div class="planet-img container">
          <img src=${crewObj.images.webp} alt="" />
        </div>
      </main>`
  );
};
function updateImageSrc(technologyObj) {
  let src;
  if (window.matchMedia("(max-width: 950px)").matches) {
    src = technologyObj.images.landscape;
  } else {
    src = technologyObj.images.portrait;
  }
  return src;
}

const technologyRender = function (technologyObj, technologyPage) {
  technologyPage.innerHTML = "";
  technologyPage.insertAdjacentHTML(
    "afterbegin",
    ` <main class="grid grid-3col grid-cv grid-e mb48 pl40 gap32">
        <h5 class="technology-title tp5 color-font-white mt48 mb48">
          <span style="opacity: 0.25">03</span> SPACE LAUNCH 101
        </h5>
        <div></div>
        <div
          class="technology-pagination flex flex-column gap32 color-font-white"
        >
          <div class="dot-big " data-index-big="0">
            <p class="tp4">1</p>
          </div>
          <div class="dot-big" data-index-big="1"><p class="tp4">2</p></div>
          <div class="dot-big" data-index-big="2"><p class="tp4">3</p></div>
        </div>

        <div class="technology-data flex flex-column color-font-white gap40">
          <p class="tp4" style="opacity: 50.42%">THE TERMINOLOGY…</p>
          <h5 class="name tp3">${technologyObj.name}</h5>
          <p class="description tp9 color-font-blue-300">
            ${technologyObj.description}
          </p>
        </div>

        <div class="technology-img container pr0">
          <img
            src="${updateImageSrc(technologyObj)}"
            alt=""
          />
        </div>
      </main>`
  );
};

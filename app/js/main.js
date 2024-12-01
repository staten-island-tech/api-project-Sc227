import "../css/style.css";

const DOMSelectors = {
  container: document.querySelector(".container"),
  form: document.getElementById("form"),
  all: document.getElementById("all"),
  pyro: document.getElementById("pyro"),
  hydro: document.getElementById("hydro"),
  anemo: document.getElementById("anemo"),
  electro: document.getElementById("electro"),
  dendro: document.getElementById("dendro"),
  cryo: document.getElementById("cryo"),
  geo: document.getElementById("geo"),
};

const apiEntry = "https://genshin.jmp.blue/characters/all";

async function fetchData() {
  try {
    const response = await fetch(apiEntry);
    console.log(response.status);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
    alert("error");
  }
}
fetchData(apiEntry);

function getCharacters(characters) {
  DOMSelectors.container.innerHTML = "";

  characters.forEach((character) => {
    const lowerCasedID = character.id.toLowerCase();
    const imageURL = `https://genshin.jmp.blue/characters/${lowerCasedID}/icon-big`;

    DOMSelectors.container.innerHTML += `
    <div class="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="${imageURL}"
      alt="${character.name}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${character.name}</h2>
    <p><strong>Vision:</strong> ${character.vision}</p>
    <p><strong>Nation:</strong> ${character.nation}</p>
    <p><strong>Weapon:</strong> ${character.weapon}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    `;
  });
}

async function showAllCharacters() {
  try {
    const characters = await fetchData();
    const allCharacters = characters.filter(
      (character) => character.vision !== "Pancake"
    );
    getCharacters(allCharacters);
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

async function showAllPyroCharacters() {
  try {
    const characters = await fetchData();
    const pyroCharacters = characters.filter(
      (character) => character.vision === "Pyro"
    );
    getCharacters(pyroCharacters);
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

async function showAllHydroCharacters() {
  try {
    const characters = await fetchData();
    const hydroCharacters = characters.filter(
      (character) => character.vision === "Hydro"
    );
    getCharacters(hydroCharacters);
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

async function showAllAnemoCharacters() {
  try {
    const characters = await fetchData();
    const anemoCharacters = characters.filter(
      (character) => character.vision === "Anemo"
    );
    getCharacters(anemoCharacters);
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

async function showAllElectroCharacters() {
  try {
    const characters = await fetchData();
    const electroCharacters = characters.filter(
      (character) => character.vision === "Electro"
    );
    getCharacters(electroCharacters);
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

async function showAllDendroCharacters() {
  try {
    const characters = await fetchData();
    const dendroCharacters = characters.filter(
      (character) => character.vision === "Dendro"
    );
    getCharacters(dendroCharacters);
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

async function showAllCryoCharacters() {
  try {
    const characters = await fetchData();
    const cryoCharacters = characters.filter(
      (character) => character.vision === "Cryo"
    );
    getCharacters(cryoCharacters);
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

async function showAllGeoCharacters() {
  try {
    const characters = await fetchData();
    const geoCharacters = characters.filter(
      (character) => character.vision === "Geo"
    );
    getCharacters(geoCharacters);
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

DOMSelectors.all.addEventListener("click", (el) => {
  el.preventDefault();
  showAllCharacters();
});

DOMSelectors.pyro.addEventListener("click", (el) => {
  el.preventDefault();
  showAllPyroCharacters();
});

DOMSelectors.hydro.addEventListener("click", (el) => {
  el.preventDefault();
  showAllHydroCharacters();
});

DOMSelectors.anemo.addEventListener("click", (el) => {
  el.preventDefault();
  showAllAnemoCharacters();
});

DOMSelectors.electro.addEventListener("click", (el) => {
  el.preventDefault();
  showAllElectroCharacters();
});

DOMSelectors.dendro.addEventListener("click", (el) => {
  el.preventDefault();
  showAllDendroCharacters();
});

DOMSelectors.cryo.addEventListener("click", (el) => {
  el.preventDefault();
  showAllCryoCharacters();
});

DOMSelectors.geo.addEventListener("click", (el) => {
  el.preventDefault();
  showAllGeoCharacters();
});

import "../css/style.css";

const DOMSelectors = {
  container: document.querySelector(".container"),
  form: document.getElementById("form"),
  all: document.getElementById("all"),
  hydro: document.getElementById("hydro"),
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
      <div class="card card-side bg-base-100 shadow-xl flex-row">
        <figure class="w-1/3">
          <img class="rounded-lg object-cover"
            src="${imageURL}" 
            alt="${character.name}" 
          />
        </figure>
        <div class="card-body w-2/3">
          <h2 class="card-title">${character.name}</h2>
          <p><strong>Vision:</strong> ${character.vision}</p>
          <p><strong>Nation:</strong> ${character.nation}</p>
          <p><strong>Weapon:</strong> ${character.weapon}</p>
          <p>${character.description}</p>
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

DOMSelectors.all.addEventListener("click", (el) => {
  el.preventDefault();
  showAllCharacters();
});

DOMSelectors.hydro.addEventListener("click", (el) => {
  el.preventDefault();
  showAllHydroCharacters();
});

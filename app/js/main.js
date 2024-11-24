import "../css/style.css";

const DOMSelectors = {
  container: document.querySelector(".container"),
  form: document.getElementById("form"),
  all: document.getElementById("all"),
  hydro: document.getElementById("hydro"),
};

const apiEntry = "https://gsi.fly.dev/characters";

async function fetchData() {
  try {
    const response = await fetch(apiEntry);
    console.log(response.status);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      return data.results;
    }
  } catch (error) {
    console.log(error);
    alert("error");
  }
}
fetchData(apiEntry);

function renderCharacters(characters) {
  DOMSelectors.container.innerHTML = "";

  const cards = characters.map(
    (character) => `
    <div class="card">
      <h3>${character.name}</h3>
      <p><strong>Element:</strong> ${character.vision}</p>
      <p><strong>Weapon:</strong> ${character.weapon}</p>
      <p><strong>Region:</strong> ${character.wiki_url}</p>
    </div>
  `
  );

  DOMSelectors.container.innerHTML = cards;
}

async function showAllCharacters() {
  try {
    const characters = await fetchData(); // Fetch all characters
    const allCharacters = characters.filter(
      (character) => character.vision !== "Pancake"
    ); // Filter Hydro
    renderCharacters(allCharacters); // Render Hydro characters
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}
/**
 * Handle filtering and displaying Hydro characters.
 */
async function showHydroCharacters() {
  try {
    const characters = await fetchData(); // Fetch all characters
    const hydroCharacters = characters.filter(
      (character) => character.vision === "Hydro"
    ); // Filter Hydro
    renderCharacters(hydroCharacters); // Render Hydro characters
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

DOMSelectors.all.addEventListener("click", (e) => {
  e.preventDefault();
  showAllCharacters();
});

DOMSelectors.hydro.addEventListener("click", (e) => {
  e.preventDefault();
  showHydroCharacters(); // Fetch and display Hydro characters
});

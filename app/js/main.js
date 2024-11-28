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

  const cards = characters.map((character) => {
    return `
<div class="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://genshin.jmp.blue/${character.name}/portrait" alt="${character.name}"/>
  </figure>
  <div class="card-body">
    <h3>${character.name}</h3>
      <p><strong>Vision:</strong> ${character.vision}</p>
      <p><strong>Weapon:</strong> ${character.weapon}</p>
      <p><strong>Region:</strong> ${character.wiki_url}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  `;
  });
  console.log("Generated HTML for cards:", cards);
  DOMSelectors.container.innerHTML = cards;
  console.log("Container innerHTML updated:", DOMSelectors.container.innerHTML);
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

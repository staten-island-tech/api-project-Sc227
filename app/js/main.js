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

function renderCharacters(characters) {
  DOMSelectors.container.innerHTML = "";

  const cards = characters.map(
    (character) => `
    <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h3>${character.name}</h3>
      <p><strong>Element:</strong> ${character.vision}</p>
      <p><strong>Weapon:</strong> ${character.weapon}</p>
      <p><strong>Region:</strong> ${character.wiki_url}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
  `
  );
  DOMSelectors.container.innerHTML = cards;
}

async function showAllCharacters() {
  try {
    const characters = await fetchData();
    const allCharacters = characters.filter(
      (character) => character.vision !== "Pancake"
    );
    renderCharacters(allCharacters);
  } catch (error) {
    DOMSelectors.container.innerHTML = `<p>Error: Unable to load characters.</p>`;
  }
}

async function showHydroCharacters() {
  try {
    const characters = await fetchData();
    const hydroCharacters = characters.filter(
      (character) => character.vision === "Hydro"
    );
    renderCharacters(hydroCharacters);
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
  showHydroCharacters();
});

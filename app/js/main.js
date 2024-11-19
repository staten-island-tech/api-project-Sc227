import "../css/style.css";

const apiEntry = "https://gsi.fly.dev/characters";

console.log(fetch(apiEntry));

fetch(apiEntry)
  .then((response) => response.json()) // use the `.json()` method
  .then((data) => console.log(data));

async function getData(apiEntry) {
  //fetch returns a promise
  try {
    const response = await fetch(apiEntry);
    //guard clause
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

getData(apiEntry);

document.querySelector(".all").addEventListener("click", function (event) {
  event.preventDefault();
  allCards();
});

function allCards() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  apiEntry.forEach((character) => {
    container.innerHTML += `
      <div class="card">
        <h2> ${character.title} </h2>
        <img class="pic" src="${character.imageUrl}" alt="${character.altText}">
      </div>`;
  });
}

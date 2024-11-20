import "../css/style.css";

const apiEntry = "https://gsi.fly.dev/characters";

let globalData = [];

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
      globalData = data;
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
  allCards(globalData);
});

function allCards(data) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  data.forEach((character) => {
    container.innerHTML += `
      <div class="card">
        <h2> ${results.name} </h2>
        <img class="pic" src="${results.imageUrl}" alt="${results.altText}">
      </div>`;
  });
}

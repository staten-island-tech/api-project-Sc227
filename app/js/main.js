import "../css/style.css";

const DOMSelectors = {
  container: document.querySelector(".container"),
  form: document.querySelector("form"),
};

async function getData(apiEntry) {
  const apiEntry = "https://gsi.fly.dev/characters";
  try {
    const response = await fetch(apiEntry);
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
getData();

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = DOMSelectors.results.name;
  const card = createObject(name);
  injectCard(card);
  clearFields();
  removeCard();
});

function createObject(name) {
  return {
    name: name,
  };
}

function injectCard(card) {
  const cardHTML = `<div class="card">
    <h2>${card.name}</h2>
  </div>`;

  DOMSelectors.box.insertAdjacentHTML("beforeend", cardHTML);
}

function startData() {
  DOMSelectors.container.innerHTML = "";
  const name = results[0].name;
  `
      <div class="card">
        <h2> ${name} </h2>
      </div>`;
}
startData();

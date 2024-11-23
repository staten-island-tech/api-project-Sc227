import "../css/style.css";

const DOMSelectors = {
  container: document.querySelector(".container"),
  form: document.querySelector(".form"),
  search: document.getElementById("search-box"),
};

async function getData() {
  DOMSelectors.form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const search = DOMSelectors.search.value;
    const apiEntry = `https://gsi.fly.dev/characters/${search}`;
    create();

    try {
      const response = await fetch(apiEntry);
      if (response.status != 200) {
        throw new Error(response);
      } else {
        const data = await response.json();
        console.log(data);
        create(data); // Pass the data
        return data;
      }
    } catch (error) {
      console.log(error);
      alert("error");
    }
  });
}
getData();

DOMSelectors.container.innerHTML = ``;
if (!data || !data.length) {
  DOMSelectors.container.innerHTML = `<p>No results found.</p>`;
}

const diction = data[0].name;
const meanings = data[0].element || [];

meanings.forEach((meaning) => {
  const card = `
      <div class="card">
          <h3>${diction}</h3>
          <div class="meanings">
              <h4>${meaning.element || "Unknown"}</h4>
          </div>
          <div class="sources">
              <h6 class="s-head">Source: "${data[0].sourceUrls || "N/A"}"</h6>
              <h6>License: ${data[0].license?.name || "N/A"}, ${
    data[0].license?.url || "N/A"
  }</h6>
          </div>
      </div>
    `;
  DOMSelectors.container.innerHTML += card;
});

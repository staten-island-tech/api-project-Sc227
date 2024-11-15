import "../css/style.css";

const apiEntry = "/api/v2/facts/random";

console.log(fetch(apiEntry));

async function getData() {
  //fetch returns a promise
  try {
    const response = await fetch("");
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h1").textContent = data.name;
      //console.log(data);
    }
  } catch (error) {
    console.log(error);
    alert("error");
  }
}

getData();

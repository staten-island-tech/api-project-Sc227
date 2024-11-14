import "../css/style.css";

async function getData() {
  //fetch returns a promise
  try {
    const response = await fetch(
      "https://foodish-api.com/images/butter-chicken/butter-chicken13"
    );
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
    alert("sorry could not find that pocket monster");
  }
}

getData();

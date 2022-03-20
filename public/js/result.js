import { fetchUrl } from "./fetchUrl.js";
import { createLi, createImg } from "./elements.js";

const data = await fetchUrl("./data.json");

const ul = document.getElementById("js-list");
const recap = document.getElementById("js-recap");
recap.innerHTML = "Voici les spécifications techniques pour : ";
let recapList = [];

const params = new URLSearchParams(window.location.href.split("?")[1] || "");
for (let p of params) {
  data.forEach((element) => {
    if (element["value"] === p[0] && p[1] === "on") {
      ul.appendChild(
        createLi(
          element["value"],
          createImg("./media/", element["filename"], element["name"])
        )
      );
      recapList.push(element["name"]);
    }
  });
}

recap.innerHTML += recapList.join(", ");

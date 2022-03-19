import { fetchUrl } from "./fetchUrl.js";
import { createLi, createImg } from "./elements.js";

const data = await fetchUrl("./data.json");

const ul = document.getElementById("js-list");

const params = new URLSearchParams(window.location.href.split("?")[1] || "");
for (let p of params) {
  data.forEach((element) => {
    if (element["value"] === p[0] && p[1] === "on") {
      ul.appendChild(
        createLi(createImg("./media/", element["filename"], element["name"]))
      );
    }
  });
}

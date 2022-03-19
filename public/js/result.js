import fetchUrl from "./fetchUrl.js";

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

/**
 *
 * @param {HTMLElement} item
 * @returns {HTMLElement}
 */
function createLi(item = null) {
  const li = document.createElement("li");
  if (item) {
    li.appendChild(item);
  }

  return li;
}

/**
 *
 * @param {string} path
 * @param {string} filename
 * @param {string} alt
 * @returns {HTMLImageElement}
 */
function createImg(path, filename = "", alt = null) {
  const img = document.createElement("img");
  img.setAttribute("src", path + filename);
  if (alt) {
    img.setAttribute("alt", alt);
  }

  return img;
}

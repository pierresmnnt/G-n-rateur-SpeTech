/**
 *
 * @param {string} legendTitle
 * @param {array} fields
 * @returns {HTMLElement}
 */
export function createFieldset(legendTitle = null, fields = null) {
  const fieldset = document.createElement("fieldset");

  if (legendTitle) {
    const legend = document.createElement("legend");
    legend.innerText =
      legendTitle.charAt(0).toUpperCase() + legendTitle.slice(1);
    fieldset.appendChild(legend);
  }

  const multipleCheckboxDiv = document.createElement("div");
  multipleCheckboxDiv.classList.add("multiple-checkbox");
  fieldset.appendChild(multipleCheckboxDiv);

  if (fields) {
    fields.forEach((element) => {
      multipleCheckboxDiv.appendChild(
        createInput(element["value"], element["name"])
      );
    });
  }

  return fieldset;
}

/**
 *
 * @param {string} value
 * @param {string} name
 * @returns {HTMLElement}
 */
export function createInput(value, name) {
  const div = document.createElement("div");

  const input = document.createElement("input");
  input.setAttribute("id", value);
  input.setAttribute("name", value);
  input.setAttribute("type", "checkbox");

  const label = document.createElement("label");
  label.setAttribute("for", value);
  label.innerText = name;

  div.appendChild(input);
  div.appendChild(label);

  return div;
}

/**
 * @param {string} id
 * @param {HTMLElement|string} item
 * @returns {HTMLElement}
 */
export function createLi(id, item = null) {
  const li = document.createElement("li");
  li.setAttribute("id", id);
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
export function createImg(path, filename = "", alt = null) {
  const src = path + filename;
  const img = document.createElement("img");
  img.setAttribute("src", src);
  if (alt) {
    img.setAttribute("alt", alt);
  }

  return img;
}

/**
 *
 * @param {string} path
 * @param {string} text
 * @returns {HTMLImageElement}
 */
export function createLink(path, text) {
  const a = document.createElement("a");
  a.setAttribute("href", path);
  a.innerText = text;

  return a;
}

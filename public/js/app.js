import fetchUrl from "./fetchUrl.js";

console.log("ready");

const data = await fetchUrl("./data.json");

/**
 *
 * @param {array} array
 * @param {string} key
 * @returns {Object}
 */
const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

const groupedData = groupBy(data, "type");

const form = document.getElementById("js-form");
const formInputs = document.getElementById("js-inputs");

/**
 *
 * @param {string} legendTitle
 * @param {array} fields
 * @returns {HTMLElement}
 */
function createFieldset(legendTitle = null, fields = null) {
  const fieldset = document.createElement("fieldset");

  const legend = document.createElement("legend");
  legend.innerText = legendTitle;

  const multipleCheckboxDiv = document.createElement("div");
  multipleCheckboxDiv.classList.add("multiple-checkbox");

  fieldset.appendChild(legend);
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
function createInput(value, name) {
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
 *
 * @param {Object} array
 */
function createFormFields(array) {
  for (const [key, value] of Object.entries(array)) {
    const fieldset = createFieldset(key, value);
    formInputs.appendChild(fieldset);
  }
}

createFormFields(groupedData);

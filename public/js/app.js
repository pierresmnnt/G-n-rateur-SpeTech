import { fetchUrl } from "./fetchUrl.js";
import { createFieldset } from "./elements.js";

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
 * @param {Object} array
 */
function createFormFields(array) {
  for (const [key, value] of Object.entries(array)) {
    const fieldset = createFieldset(key, value);
    formInputs.appendChild(fieldset);
  }
}

createFormFields(groupedData);

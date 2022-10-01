import { fetchUrl } from "./fetchUrl.js";
import { createDetails } from "./elements.js";

const data = await fetchUrl("./faq.json");
const content = document.getElementById("js-faq");

data.forEach((element) => {
  content.appendChild(createDetails(element["question"], element["answer"]));
});

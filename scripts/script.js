import { translate } from "./modules/translator-logic.js";
import { rotateArrow } from "./modules/arrow-logic.js";
import { switchText } from "./modules/select-logic.js";
import * as dom from "./modules/dom-utils.js";

console.log(dom.arrow);

// dom utils
// select options
// const selectInput = document.querySelector("#selectInput");
// const selectOutput = document.querySelector("#selectOutput");
// const arrow = document.querySelector(".arrow");

// // text
// const textInput = document.querySelector("#mainInput");
// const textOutput = document.querySelector("#mainOutput");

dom.arrow.addEventListener("click", (event) => {
  switchText();
  rotateArrow();
});

dom.textInput.addEventListener("keydown", (event) => {
  setTimeout(() => {
    // console.log(dom.textInput.value);
    let str = translate(dom.textInput.value);
    console.log(str);
    dom.textOutput.value = str;
  }, 1);
});

// const updateTextOutput = (value) => {
//   dom.textOutput.textContent = value;
// };

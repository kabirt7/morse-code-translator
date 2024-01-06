import { translate } from "./modules/translator-logic.js";

// dom utils
// select options
const selectInput = document.querySelector("#selectInput");
const selectOutput = document.querySelector("#selectOutput");

// text
const textInput = document.querySelector("#mainInput");
const textOutput = document.querySelector("#mainOutput");

textInput.addEventListener("keydown", (event) => {
  setTimeout(() => {
    console.log(textInput.value);
    let str = translate(textInput.value);
    updateTextOutput(str);
  }, 1);
});

const updateTextOutput = (value) => {
  textOutput.textContent = value;
};

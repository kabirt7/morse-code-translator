// import { transformSync } from "@babel/core";
import * as dom from "./dom-utils.js";

// select change
// in one since the logic is dependent on the other
export const selectToggle = () => {
  if (dom.selectInput.value === "morse") {
    dom.selectInput.value = "latin";
  } else if (dom.selectInput.value === "latin") {
    dom.selectInput.value = "morse";
  }
  if (dom.selectOutput.value === "latin") {
    dom.selectOutput.value = "morse";
  } else if (dom.selectOutput.value === "morse") {
    dom.selectOutput.value = "latin";
  }
};

export const switchText = () => {
  let tmp = dom.textInput.value;
  let tmpTwo = dom.textOutput.value;
  dom.textInput.value = tmpTwo;
  dom.textOutput.value = tmp;
};

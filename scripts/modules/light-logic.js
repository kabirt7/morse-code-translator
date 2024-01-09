import * as dom from "./dom-utils.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const lightLogic = async (value) => {
  console.log("reached light logic");
  for (const char of value) {
    if (char === "-") {
      dom.box.style.backgroundColor = "white";
      await delay(200);
      dom.box.style.backgroundColor = "black";
      await delay(200);
      console.log("-");
    } else if (char === ".") {
      dom.box.style.backgroundColor = "white";
      await delay(100);
      dom.box.style.backgroundColor = "black";
      await delay(100);
      console.log(".");
    } else if (char === " ") {
      dom.box.style.backgroundColor = "black";
      await delay(200);
      console.log("break");
    }
  }
};

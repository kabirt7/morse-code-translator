import * as dom from "./dom-utils.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const lightLogic = async (value) => {
  console.log("reached light logic");
  for (const char of value) {
    if (dom.sharedState.stopFlag === true) {
      return;
    } else {
      if (char === "-") {
        dom.box.style.backgroundColor = "white";
        await delay(175);
        dom.box.style.backgroundColor = "black";
        await delay(175);
        console.log("-");
      } else if (char === ".") {
        dom.box.style.backgroundColor = "white";
        await delay(105);
        dom.box.style.backgroundColor = "black";
        await delay(105);
        console.log(".");
      } else if (char === " ") {
        dom.box.style.backgroundColor = "black";
        await delay(300);
        console.log("break");
      }
    }
  }
};

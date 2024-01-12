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
        await delay(500);
        dom.box.style.backgroundColor = "black";
        await delay(80);
        console.log("-");
      } else if (char === ".") {
        dom.box.style.backgroundColor = "white";
        await delay(200);
        dom.box.style.backgroundColor = "black";
        await delay(80);
        console.log(".");
      } else if (char === " ") {
        dom.box.style.backgroundColor = "black";
        await delay(400);
        console.log("break");
      } else if (char === "/") {
        dom.box.style.backgroundColor = "black";
        await delay(600);
        console.log("break");
      }
    }
  }
};

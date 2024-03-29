import * as dom from "./dom-utils.js";

const mySoundDah = new Audio("../../src/sounds/dah.wav");
const mySoundDit = new Audio("../../src/sounds/dit.wav");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const playPromise = (audio) =>
  new Promise((resolve) => {
    audio.addEventListener("ended", resolve);
    audio.play();
  });

export const lightAndSoundLogic = async (value) => {
  console.log("reached light and sound logic");

  for (const char of value) {
    if (dom.sharedState.stopFlag === true) {
      return;
    } else {
      if (char === "-") {
        dom.box.style.backgroundColor = "white";
        await delay(300);
        dom.box.style.backgroundColor = "black";
        await playPromise(mySoundDah);
        await delay(50);
      } else if (char === ".") {
        dom.box.style.backgroundColor = "white";
        await delay(100);
        dom.box.style.backgroundColor = "black";
        await playPromise(mySoundDit);
        await delay(50);
      } else if (char === " ") {
        dom.box.style.backgroundColor = "black";
        await delay(250);
      } else if (char === "/") {
        dom.box.style.backgroundColor = "black";
        await delay(400);
      }
    }
  }
};

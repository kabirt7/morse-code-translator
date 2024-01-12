import * as dom from "./dom-utils.js";

const mySoundDah = new Audio("../../src/sounds/dah.wav");
const mySoundDit = new Audio("../../src/sounds/dit.wav");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const soundLogic = async (str) => {
  const playPromise = (audio) =>
    new Promise((resolve) => {
      audio.addEventListener("ended", resolve);
      audio.play();
    });

  for (let x of str) {
    if (dom.sharedState.stopFlag === true) {
      return;
    } else {
      if (x === "-") {
        await playPromise(mySoundDah);
        console.log("mySoundDah.play()");
      } else if (x === ".") {
        await playPromise(mySoundDit);
        console.log("mySoundDit.play()");
      } else if (x === " ") {
        await delay(150);
      } else if (x === "/") {
        await delay(300);
      }
    }
  }
};

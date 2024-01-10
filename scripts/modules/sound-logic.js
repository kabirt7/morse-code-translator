// import * as dom from "./dom-utils.js";

const mySoundDah = new Audio("../../src/sounds/dah.wav");
const mySoundDit = new Audio("../../src/sounds/dit.wav");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const soundLogic = async (str) => {
  for (let x of str) {
    if (x === "-") {
      mySoundDah.play();
      await delay(250);
      console.log("mySoundDah.play()");
    } else if (x === ".") {
      mySoundDit.play();
      await delay(100);
      console.log("mySoundDit.play()");
    } else if (x === " ") {
      await delay(200);
    }
    await delay(100);
  }
};

import * as dom from "./dom-utils.js";
import { lightLogic } from "./light-logic.js";

const morseCode = {
  " ": "/",
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..---",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  "¿": "..-.-",
  "¡": "--...-",
};

const morseArr = Object.entries(morseCode);

export const translate = (value, utils = dom) => {
  if (
    utils.selectInput.value === "latin" &&
    utils.selectOutput.value === "morse"
  ) {
    let newArr = [];
    let translation = "";
    for (let x of value) {
      newArr.push(
        morseArr.map((char) =>
          x.toUpperCase() === char[0] ? char[1] + " " : ""
        )
      );
    }
    console.log("reached latin to morse");
    return (translation = newArr.flat().join(""));
  } else if (
    utils.selectInput.value === "morse" &&
    utils.selectOutput.value === "latin"
  ) {
    let newArr = [];
    let translation = "";

    for (let x of value.split(" ")) {
      newArr.push(morseArr.map((char) => (x === char[1] ? char[0] : "")));
      console.log(x);
    }
    console.log("reached morse to latin");

    return (translation = newArr.flat().join(""));
  } else {
    console.log("reached else");

    return value;
  }
};

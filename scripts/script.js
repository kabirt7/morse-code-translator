import { translate } from "./modules/translator-logic.js";
import { rotateArrow } from "./modules/arrow-logic.js";
import { switchText } from "./modules/select-logic.js";
import * as dom from "./modules/dom-utils.js";
import { lightLogic } from "./modules/light-logic.js";
import { soundLogic } from "./modules/sound-logic.js";
import { lightAndSoundLogic } from "./modules/light-and-sound-logic.js";

dom.arrow.addEventListener("click", (event) => {
  switchText();
  rotateArrow();
});

let inputStr = "";

dom.textInput.addEventListener("keydown", (event) => {
  setTimeout(() => {
    inputStr = translate(dom.textInput.value);
    dom.textOutput.value = inputStr;
  }, 1);
});

dom.lightButton.addEventListener("click", (e) => {
  e.target.toggleAttribute("selected");

  e.target.classList.toggle("footer--selected-light");
});

dom.soundButton.addEventListener("click", (e) => {
  e.target.toggleAttribute("selected");

  e.target.classList.toggle("footer--selected-sound");
});

dom.playButton.addEventListener("click", (event) => {
  dom.sharedState.stopFlag = false;
  if (
    dom.lightButton.hasAttribute("selected") &
    dom.soundButton.hasAttribute("selected")
  ) {
    lightAndSoundLogic(inputStr);
    console.log("l and s");
  } else if (dom.lightButton.hasAttribute("selected")) {
    lightLogic(inputStr);
    console.log("light");
  } else if (dom.soundButton.hasAttribute("selected")) {
    soundLogic(inputStr);
    console.log("sound");
  }
});

dom.stopButton.addEventListener("click", (event) => {
  dom.sharedState.stopFlag = true;
});

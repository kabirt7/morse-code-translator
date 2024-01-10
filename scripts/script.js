import { translate } from "./modules/translator-logic.js";
import { rotateArrow } from "./modules/arrow-logic.js";
import { switchText } from "./modules/select-logic.js";
import * as dom from "./modules/dom-utils.js";
import { lightLogic } from "./modules/light-logic.js";
import { soundLogic } from "./modules/sound-logic.js";

console.log(dom.arrow);

dom.arrow.addEventListener("click", (event) => {
  switchText();
  rotateArrow();
  // dom.stopFlag = false;
});

let inputStr = "";

dom.textInput.addEventListener("keydown", (event) => {
  setTimeout(() => {
    // console.log(dom.textInput.value);
    inputStr = translate(dom.textInput.value);
    // console.log(str);
    // lightLogic(str);
    // soundLogic(str);
    dom.textOutput.value = inputStr;
  }, 1);
});

dom.lightButton.addEventListener("click", () =>
  dom.lightButton.toggleAttribute("selected")
);

dom.soundButton.addEventListener("click", () =>
  dom.soundButton.toggleAttribute("selected")
);

dom.playButton.addEventListener("click", (event) => {
  if (
    dom.lightButton.hasAttribute("selected") &
    dom.soundButton.hasAttribute("selected")
  ) {
    soundLogic(inputStr);
    lightLogic(inputStr);
    console.log("l and s");
  } else if (dom.lightButton.hasAttribute("selected")) {
    lightLogic(inputStr);
    console.log("light");
  } else if (dom.soundButton.hasAttribute("selected")) {
    soundLogic(inputStr);
    console.log("sound");
  }
});

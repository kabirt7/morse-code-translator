import { translate } from "./modules/translator-logic.js";
import { rotateArrow } from "./modules/arrow-logic.js";
import { switchText } from "./modules/select-logic.js";
import * as dom from "./modules/dom-utils.js";
import { lightLogic } from "./modules/light-logic.js";
import { soundLogic } from "./modules/sound-logic.js";

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

dom.lightButton.addEventListener("click", () => {
  dom.lightButton.toggleAttribute("selected");
  console.log(dom.sharedState.flag);
});

dom.soundButton.addEventListener("click", () =>
  dom.soundButton.toggleAttribute("selected")
);

dom.playButton.addEventListener("click", (event) => {
  dom.sharedState.stopFlag = false;
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

dom.stopButton.addEventListener("click", (event) => {
  dom.sharedState.stopFlag = true;
});

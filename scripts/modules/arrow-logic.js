import { selectToggle } from "./select-logic.js";

export function rotateArrow() {
  const arrowElement = document.querySelector(".arrow");
  arrowElement.classList.toggle("arrow__rotated");
  selectToggle();
}

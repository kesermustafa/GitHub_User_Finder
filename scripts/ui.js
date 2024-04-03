import { elements } from "./helpers.js";

export class UI {
  constructor() {}

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = className;
    div.textContent = message;

    elements.warning.appendChild(div);
  }
}

import { elements } from "./helpers.js";

export class UI {
  constructor() {}

  //*uyari mesaji olusturma
  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = className;
    div.textContent = message;

    elements.warning.appendChild(div);

    //*uyari mesaji ni ekrandan silme
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //*uyari mesaji ni ekrandan silme fonksiyonu
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }
}

import { elements } from "./scripts/helpers.js";
import { Github } from "./scripts/api.js";
import { UI } from "./scripts/ui.js";

// github class in ornegini olusturduk
const github = new Github();

const ui = new UI();
ui.showAlert("Kullanici bulunamadi", "alert alert-danger");

const getInput = (e) => {
  e.preventDefault();
  const value = elements.searchInput.value;

  if (value == "") return;

  if (value) {
    github.fetchUserData(value);
  }
};

elements.searchBtn.addEventListener("click", getInput);

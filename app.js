import { elements } from "./scripts/helpers.js";
import { Github } from "./scripts/api.js";

// github class in ornegini olusturduk
const github = new Github();

const getInput = (e) => {
  e.preventDefault();
  const value = elements.searchInput.value;

  if (value == "") return;

  if (value) {
    github.fetchUserData(value);
  }
};

elements.searchBtn.addEventListener("click", getInput);

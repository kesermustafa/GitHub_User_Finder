import { elements } from "./scripts/helpers.js";
import { Github } from "./scripts/api.js";
import { UI } from "./scripts/ui.js";

// github class in ornegini olusturduk
const github = new Github();

const ui = new UI();

const getInput = (e) => {
  e.preventDefault();
  const value = elements.searchInput.value;

  if (value == "") return;

  if (value) {
    github
      .fetchUserData(value)
      .then((res) => {
        if (res.message === "Not Found") {
          ui.showAlert("Kullanici Bulunamadi", "alert alert-danger");
        } else {
          ui.showAlert("Kullanici Bulundu", "alert alert-success");
        }
      })
      .catch((err) => console.log(err));
  }
};

elements.searchBtn.addEventListener("click", getInput);

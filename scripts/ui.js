import { elements } from "./helpers.js";

export class UI {
  constructor() {
    this.profile = elements.profile;
    this.buuton = elements.btnClear;
    this.input = elements.searchInput;
    this.btnDark = elements.btn;
    this.body = elements.body;
    //olay izleme
    this.buuton.addEventListener("click", this.clearProfile.bind(this));
    this.btnDark.addEventListener("click", this.darkMode.bind(this));
  }

  // profil arayuzunu ekrana basar
  renderProfile(res) {
    const created_at = new Date(res.created_at).toLocaleDateString();
    this.profile.innerHTML = `        
    <div class="row border p-4 my-4 rounded-3">
        <div class="col-md-3">
            <img
              src="${res.avatar_url}"
              alt=""
              class="img-fluid rounded shadow img"
                  />
                  <a href="${res.html_url}" target = "_blank" class="btn btn-primary w-100 mt-4">Profili Göster</a>
        </div>
          <div class="col-md-9 gap-3" id="profileButton">
              <span class="badge fs-6 bg-primary">Açık Repolar: ${res.public_repos}</span>
              <span class="badge fs-6 bg-secondary">Açık Gistler: ${res.public_gists} </span>
              <span class="badge fs-6 bg-success">Takipçiler: ${res.followers} </span>
              <span class="badge fs-6 bg-info">Takip Edilenler:${res.following} </span>
        
              <ul class="list-group mt-3">
                <li class="list-group-item">Hakkında: ${res.bio}</li>
                <li class="list-group-item">Şirket: ${res.company}</li>
                <li class="list-group-item">Website: ${res.blog}</li>
                <li class="list-group-item">Konum: ${res.location}</li>
                <li class="list-group-item">Hesap Oluşturma: ${created_at}</li>
              </ul>
          </div>
    </div>
`;
  }

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

  clearProfile(e) {
    e.preventDefault();
    if (confirm("Silmek istediginize emin misiniz?")) {
      this.profile.innerHTML = "";
      this.input.value = "";
      this.showAlert("Butun veriler silindi", "alert alert-info");
    }
  }

  darkMode() {
    if (this.body.classList.contains("bg-dark")) {
      this.body.className = "bg-light text-bg-light";
      this.btnDark.className = "btn btn-dark";
      this.btnDark.textContent = "Dark Mode";
    } else {
      this.body.className = "bg-dark text-bg-dark";
      this.btnDark.className = "btn btn-light";
      this.btnDark.textContent = "Light Mode";
    }

    elements.title.classList.toggle("text-dark");
  }
}

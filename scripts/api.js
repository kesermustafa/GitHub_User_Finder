export class Github {
  constructor() {
    this.client_id = "";
    this.client_secret = "";
    this.per_page = 10;
    this.sort = "asc";
  }

  //* api'den kullanıcı bilgilerini alma
  async fetchUserData(username) {
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
    );

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`,
    );

    // api den aldigimiz cevabi json a cevirdik
    const data = await profileRes.json();
    const repos = await repoRes.json();

    //fonksiyonun cagrildigi yere bilgileri gonderdik
    return { data, repos };
  }
}

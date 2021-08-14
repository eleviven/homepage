class GithubAPI {
  constructor() {
    this.api = "https://api.github.com";
    this.get.user = this.get.user.bind(this);
  }
  get = {
    async user(username) {
      try {
        const data = await fetch(`${this.api}/users/${username}`).then((res) =>
          res.json()
        );
        return data;
      } catch (err) {
        return {};
      }
    },
  };
}

export default new GithubAPI();

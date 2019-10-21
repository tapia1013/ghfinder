class Github {

  // constructor
  constructor() {
    this.client_id = 'Iv1.113dc52a407dcd6e';
    this.client_secret = 'a2a5bf5da5a66bda3c48e5b9d87558bc696e5b8f';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'
  }

  // create get user method
  async getUser(user) {
    // profile response
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    // repo response
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)


    // profile json data
    const profile = await profileResponse.json();

    // repo json data
    const repos = await reposResponse.json();

    // return json data object
    return {
      profile,
      repos
    }

  }

}
// Init github
const github = new Github;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser')

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // wanna get text being typed inside input
  const userText = e.target.value;

  // make sure not empty/blank
  if (userText !== '') {
    // make an http call to github
    github.getUser(userText)
      .then(data => {
        // check if user exists
        if (data.profile.message === 'Not Found') {
          // show alert if user not found in UI.js... tajes msg& class
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          // Show profile if does exist in UI.js
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }

      })

  } else {
    // if true clear profile
    ui.clearProfile();

  }
})
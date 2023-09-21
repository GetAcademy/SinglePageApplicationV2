function logIn() {
    if (userNameInput == 'terje' && passwordInput == 'hemmelig') {
        loggedInAs = 'terje';
    } else {
        error = 'Ugyldig brukernavn eller passord';
    }
    updateView();
}
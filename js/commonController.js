function goToPage(pageName) {
    currentPage = pageName;
    updateView();
}

function logOut() {
    loggedInAs = null;
    updateView();
}
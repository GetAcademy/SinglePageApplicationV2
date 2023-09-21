function saveProfile(){
    model.app.user.firstName = model.inputs.profilePage.firstName;
    model.app.user.imageUrl = model.inputs.profilePage.imageUrl;
    model.app.currentPage = 'main';
    updateView();
}
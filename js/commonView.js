function createMenuHTML() {
    const imageUrl = model.app.user.imageUrl;
    let imageHtml = '';
    if (imageUrl != null) {
        imageHtml = `<img src="${imageUrl}" style="width: 50px; height: 50px;"/>`;
    }
    return /*HTML*/`
        <button onclick="goToPage('editProfile')">Redigere profil</button>
        <button onclick="logOut()">
            ${imageHtml}
            Logg ut</button>
    `;
}

// function createInputField(label, modelFieldName, type) {
//     return /*HTML*/`
//         <div>${label}:</div>
//         <input 
//             type="${type}"
//             oninput="${modelFieldName} = this.value" 
//             value="${eval(modelFieldName) || ''}"
//             />
//     `;
// }
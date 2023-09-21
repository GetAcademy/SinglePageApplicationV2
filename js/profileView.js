function updateViewEditProfile() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Redigere profil</h1>
        <button onclick="goToPage()">Meny</button>

        <div style="display: grid; grid-template-columns: 100px 200px">
            ${createInputField('Fornavn', 'firstName', 'text')}
            ${createInputField('Bilde-URL', 'imageUrl', 'text')}
        </div>    
        <button onclick="goToPage()">Oppdatere</button>             
    `;
}
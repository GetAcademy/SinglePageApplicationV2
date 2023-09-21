function updateViewEditProfile() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Redigere profil</h1>
        <button onclick="goToPage()">Meny</button>

        <div style="display: grid; grid-template-columns: 100px 200px">
            <div>Fornavn:</div>
            <input 
                type="text"
                oninput="model.inputs.loginPage.firstName = this.value" 
                value="${model.inputs.loginPage.firstName || ''}"
                />
            <div>${label}:</div>
            <input 
                type="text"
                oninput="model.inputs.loginPage.imageUrl = this.value" 
                value="${model.inputs.loginPage.imageUrl || ''}"
                />
        </div>    
        <button onclick="goToPage()">Oppdatere</button>             
    `;
}
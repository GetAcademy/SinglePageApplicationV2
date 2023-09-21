function updateViewLogin() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Logg inn</h1>
        <div style="display: grid; grid-template-columns: 100px 200px">
            <div>Brukernavn:</div>
            <input 
                type="text"
                oninput="userNameInput = this.value" 
                value="${userNameInput || ''}"
                />
            <div>Passord:</div>
            <input 
                type="password"
                oninput="passwordInput = this.value" 
                />
        </div>    
        <button onclick="logIn()">Logg inn</button>
        <br/>Du er logget inn som ${loggedInAs || '(IKKE)'}
        <div style="color: red">${error || ''}</div>

        <button onclick="loggedInAs = 'terje'; updateView()">.</button>
    `;
}

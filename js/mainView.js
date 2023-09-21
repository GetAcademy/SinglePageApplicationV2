function updateViewMain() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Velkommen${firstName == null ? '!' : ', ' + firstName}<h1>
        ${createMenuHTML()}
    `;
}
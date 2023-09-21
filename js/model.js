const model = {
    app: {
        loggedInAs: '',
        currentPage: '',
        user: {
            firstName: '',
            imageUrl: '',
        },
    },
    inputs: {
        loginPage: {
            userName: '',
            password: '',
            error: '',
        },
        profilePage: {
            firstName: '',
            imageUrl: '',
        },
        mainPage: {
        },
    },
    themes: [
        {name: 'light', foreColor: 'black', backColor: 'white'},
        {name: 'dark', foreColor: 'lightgray', backColor: '#222222'},
        {name: 'mix', foreColor: 'white', backColor: 'darkblue'},
    ]
};

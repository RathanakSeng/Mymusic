const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
    /* Route */
    app.post('/register', AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.get('/songs', SongsController.index)
    app.post('/songs', SongsController.post)
}

const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    /* Route */
    app.post('/register', AuthenticationController.register)

    app.post('/login', AuthenticationController.login)
}

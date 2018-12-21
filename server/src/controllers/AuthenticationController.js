const {User} = require('../models') // Mean will take User.js from models
const jwt = require('jsonwebtoken')
const config = require('../config/config')

/* For Generating Cookie Token */
function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}
/* End */

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            // email already exists'
            res.status(400).send({
                success: false,
                message: 'This email account is already in use.'
            })
        }
    },

    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                            success: false,
                            message: 'The login information was incorrect'
                        })
            }

            const isPasswordValid = password === user.password
            if (!isPasswordValid) {
                return res.status(403).send({
                    success: false,
                    message: 'The login password was incorrect'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            // email already exists'
            res.status(500).send({
                success: false,
                message: 'Invalid login information.'
            })
        }
    }
}

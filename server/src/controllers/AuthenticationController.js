const {User} = require('../models') // Mean will take User.js from models
const jwt = require('jsonwebtoken')
const config = require('../config/config')

/* For Generating Cookie Token */
function jwtSignUser (user) {
    const ONE_DAY = 24
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_DAY
    })
}

module.exports = {
    async register (req, res) {
        try {
            console.log('12345678')
            const user = await User.create(req.body)
            res.send(user.toJSON())
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

            const isPaswordValid = await user.comparePassword(password)
            if (!isPaswordValid) {
                return res.status(403).send({
                    success: false,
                    message: 'The login information was incorrect'
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

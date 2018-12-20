/**
 * Use to create the express middleware which is use to validate that certain requirments or data constraint passed or failed
 */
const Joi = require('joi')
module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string()
        }
        const {error, value} = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        success: false,
                        message: 'You must provide avalid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        success: false,
                        message: 'You must provide avalid password'
                    })
                    break
                default :
                    res.status(400).send({
                        success: false,
                        message: 'Invalid registration'
                    })
            }
        } else {
            next()
        }
    }
}

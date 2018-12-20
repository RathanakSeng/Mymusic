const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// function to hash the password
function hashPassword (user, options) {
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return;
    }
    console.log('1234567890')
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function (candidatePassword) {
        return bcrypt.compareSync(candidatePassword, this.password)
    }

    return User
}
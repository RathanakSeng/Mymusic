/**
 * This is the file that is use to connect to the database
 */
const fs = require('fs') // file System
const path = require('path') // to get the path of the directory
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  ).forEach((file) => {
      const model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

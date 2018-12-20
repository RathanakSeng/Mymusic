/**
 * @author Rathanak
 */

/*import every dependancy that installed*/
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config') // define port
/* end */

const app = express() // Build an express server
/* middleware */
app.use(morgan('combined'))
app.use(bodyParser.json()) // Allow express app to easily pars any json request that are sent
app.use(cors()) // Allow any host or client to access | want a server to host in a different domain
/* end */

/* Call route */
require('./routes')(app)

// Defined the port of the webApp
app.listen(process.env.PORT || 8081)
sequelize.sync()
    .then( () => {
        app.listen(config.port)
        console.log(`Server start on port ${config.port}`)
    })

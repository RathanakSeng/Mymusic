/**
 * @author Rathanak
 */

/*import every dependancy that installed*/
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
/*end*/

const app = express() //Build an express server
/*middleware*/
app.use(morgan('combined'))
app.use(bodyParser.json()) //Allow express app to easily pars any json request that are sent
app.use(cors()) //Allow any host or client to access | want a server to host in a different domain
/*end*/

//Defined the port of the webApp
app.listen(process.env.PORT || 8081)

/*Route*/
app.get('/status', (req, res) => {
    res.json({
        message: 'hello world'
    })
})

// load in frameworks
const path = require('path')
const express = require('express')
const fs = require('fs')
const hbs = require('hbs')

const dataRoutes = require('./routes/data')
const indexRoutes = require('./routes/index')
const dayRoutes = require('./routes/day')


// create instance of express 
const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// getting routes
app.use(express.json())
app.use(dataRoutes)
app.use(indexRoutes)
app.use(dayRoutes)

// 404 pages
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Persona 5 Royal Calendar Guide',
        errorMessage: 'Page Not Found'
    })
})

// Start web server
app.listen(port, () => {
    console.log('listening on port: ', port)
})
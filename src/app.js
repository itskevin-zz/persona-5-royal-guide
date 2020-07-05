// load in frameworks
const path = require('path')
const express = require('express')
const fs = require('fs')
const hbs = require('hbs')

const dataRoutes = require('./routes/data')
const indexRoutes = require('./routes/index')
const dayRoutes = require('./routes/day')
const confidantRoutes = require('./routes/confidants')
const dayRefactor = require('./routes/day-refactor')


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
app.use(confidantRoutes)
app.use(dayRefactor)

// 404 pages
app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page Not Found'
    })
})

// Start web server
app.listen(port, () => {
    console.log('listening on port: ', port)
})
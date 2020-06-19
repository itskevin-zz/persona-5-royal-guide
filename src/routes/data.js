// load in frameworks
const express = require('express')
const fs = require('fs')
const routes = new express.Router

// JSON
const dataPath = './data/data.json'

// get JSON

let data = { }
fs.readFile(dataPath, (error, calendarData) => {
    if (error) throw error
    data = JSON.parse(calendarData)
})

// return data
routes.get('/data', (req, res) => {
    res.send(data.calendar)
})

module.exports = routes
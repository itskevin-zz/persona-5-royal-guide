// load in frameworks
const express = require('express')
const fs = require('fs')
const routes = new express.Router

const dataPath = './data/data.json'

let data = { }
fs.readFile(dataPath, (error, calendarData) => {
    if (error) throw error
    data = JSON.parse(calendarData)
})

// return data
routes.get('/data', (req, res) => {
    res.send(data)
})

module.exports = routes
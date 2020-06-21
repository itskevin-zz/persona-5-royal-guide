const express = require('express')
const routes = new express.Router
const fs = require('fs')

const dataPath = './data/data.json'

let data = { }
fs.readFile(dataPath, (error, calendarData) => {
    if (error) throw error
    data = JSON.parse(calendarData)
})

routes.get('/confidants', (req, res) => {
    const confidantsNameArray = data.confidants.map(confidant => confidant.name)
    const confidantsArcanaArray = data.confidants.map(confidant => confidant.arcana)
    const confidantsArray = confidantsNameArray.map((name, arcana) => name + " - " + confidantsArcanaArray[arcana])
      res.render('confidants', {
          confidants: confidantsArray
      })
})

routes.get('/confidants/:id', (req, res) => {
    res.send('single confidant page')
})

module.exports = routes
const express = require('express')
const routes = new express.Router
const fs = require('fs')

const dataPath = './data/data.json'
const confidantsPath = './data/confidants.json'

let data = { }
fs.readFile(dataPath, (error, calendarData) => {
    if (error) throw error
    data = JSON.parse(calendarData)
})

let confidants = {}
fs.readFile(confidantsPath, (error, confidantsList) => {
    if (error) throw error
    confidants = JSON.parse(confidantsList)
})

// store dates and confidants in object for page data. then cast in array for links/list using object.entries/keys/values

routes.get('/confidants/:confidant', (req, res) => {
    const confidantID = req.params.confidant

    let confidantNames= []
    for (let [key, value] of Object.entries(data.confidants)) {
        confidantNames = Object.keys(data.confidants)
    }
    
    res.render('confidant', {
        confidantName: data.confidants[confidantID].name,
        confidantArcana: data.confidants[confidantID].arcana,
        confidantLocation: data.confidants[confidantID].location,
        confidantNotes: data.confidants[confidantID].notes,
        confidantRanks: data.confidants[confidantID].ranks[0],
        confidants: confidants.confidantsList
    })
    
})

routes.get('/confidants', (req, res) => {
    res.render('confidants',{
        confidants: confidants.confidantsList
    })
    console.log(confidants.confidantsList)
})

module.exports = routes
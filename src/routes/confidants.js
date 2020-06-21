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

// let confidants = {}
// fs.readFile(confidantsPath, (error, confidantsArray) => {
//     if (error) throw error
//     confidants = JSON.parse(confidantsArray)
// })

routes.get('/confidants', (req, res) => {
    let confidantsName = []
    for (let [key, value] of Object.entries(data.confidants)) {
        confidantsName = value.name
        console.log(confidantsName)
    }

    res.render('confidants', {
        names: confidantsName
    })

})

routes.get('/confidants/:id', (req, res) => {
    const confidantName = req.params.id

    res.render('confidant', {
        name: data.confidants.filter(confidant => confidant.name === 'Tae Takemi')
    })
})

module.exports = routes
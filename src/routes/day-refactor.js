const fs = require('fs')
const express = require('express')
const routes = new express.Router

const dataPath = './data/workingData/april.json'

let data = { }
fs.readFile(dataPath, (error, monthData) => {
    if (error) throw error
    data = JSON.parse(monthData)
})

routes.get('/day-refactor', (req, res) => {
    // res.send(data[0].date)

    res.render('day-refactor', {
        date: data[0],
        // timeOfDay: ,
        // weather: ,
        // socialStat: ,
        // confidantAvail: ,
        // metaverse: ,
        // extraNotes: ,
        // undefined: 
    })
    console.log(data)
})

module.exports = routes
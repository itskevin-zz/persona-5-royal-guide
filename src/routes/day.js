const express = require('express')
const routes = new express.Router

const fs = require('fs')

// JSON
const dataPath = './data/data.json'

let data = { }
fs.readFile(dataPath, (error, calendarData) => {
    if (error) throw error
    data = JSON.parse(calendarData)
})

routes.get('/day/:date', async (req, res) => {
    var urlDate = req.params.date
    res.render('day', { 
        title: 'Persona 5 Royal Guide',
        date: data.calendar[urlDate].date,
        weekDay: data.calendar[urlDate].weekDay,
        dayType: data.calendar[urlDate].day[0].desc,
        dayWeather: data.calendar[urlDate].day[0].weather,
        dayStats: data.calendar[urlDate].day[0].socialStat,
        dayConfidants: data.calendar[urlDate].day[0].confidants,
        daySales: data.calendar[urlDate].day[0].sales,
        dayMetaverse: data.calendar[urlDate].day[0].metaverse,
        dayExtras: data.calendar[urlDate].day[0].extraNotes,
        nightType: data.calendar[urlDate].night[0].desc,
        nightWeather: data.calendar[urlDate].night[0].weather,
        nightStats: data.calendar[urlDate].night[0].socialStat,
        nightConfidants: data.calendar[urlDate].night[0].confidants,
        nightSales: data.calendar[urlDate].night[0].sales,
        nightMetaverse: data.calendar[urlDate].night[0].metaverse,
        nightExtras: data.calendar[urlDate].night[0].extraNotes,
        spoilers: data.calendar[urlDate].spoilers
     })
})

module.exports = routes
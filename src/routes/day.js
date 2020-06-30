const express = require('express')
const routes = new express.Router
const fs = require('fs')


const dataPath = './data/data.json'
const datesPath = './data/dates.json'

let data = { }
fs.readFile(dataPath, (error, calendarData) => {
    if (error) throw error
    data = JSON.parse(calendarData)
})

let dates = { }
fs.readFile(datesPath, (error, datesArray) => {
    if (error) throw error
    dates = JSON.parse(datesArray)
})

routes.get('/day/:date', (req, res) => {
    const urlDate = req.params.date
    //dates.js
    const indexCurrentDate = dates.datesArray.findIndex(date => date === urlDate)
    const nextDate = dates.datesArray[indexCurrentDate + 1]
    const prevDate = dates.datesArray[indexCurrentDate - 1]

    if (!dates.datesArray.find(date => date === urlDate)) {
        res.status(404).render('404', {
            errorMessage: 'Page not found'
        })
    } else {

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
            spoilers: data.calendar[urlDate].spoilers,
            nextDate,
            prevDate
        })
        console.log(data.calendar[urlDate].day[0].confidants)
    }
})


module.exports = routes
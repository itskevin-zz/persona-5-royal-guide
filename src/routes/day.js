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

routes.get('/day/:date', (req, res) => {
    const urlDate = req.params.date
    const dateNav = Object.keys(data.calendar)

    const indexCurrentDate = dateNav.findIndex(date => date === urlDate)
    const nextDate = dateNav[indexCurrentDate + 1]
    const prevDate = dateNav[indexCurrentDate - 1]

    if (!dateNav.find(date => date === urlDate)) {
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
            dayQuestions: data.calendar[urlDate].day[0].questions,
            dayConfidants: data.calendar[urlDate].day[0].confidants,
            daySales: data.calendar[urlDate].day[0].sales,
            dayMetaverse: data.calendar[urlDate].day[0].metaverse,
            dayExtras: data.calendar[urlDate].day[0].extraNotes,
            nightType: data.calendar[urlDate].night[0].desc,
            nightWeather: data.calendar[urlDate].night[0].weather,
            nightStats: data.calendar[urlDate].night[0].socialStat,
            nightQuestions: data.calendar[urlDate].night[0].questions,
            nightConfidants: data.calendar[urlDate].night[0].confidants,
            nightSales: data.calendar[urlDate].night[0].sales,
            nightMetaverse: data.calendar[urlDate].night[0].metaverse,
            nightExtras: data.calendar[urlDate].night[0].extraNotes,
            spoilers: data.calendar[urlDate].spoilers,
            nextDate,
            prevDate,
            // confidantName: data.confidants[data.calendar[urlDate].day[0].confidants].name
        })
    }
})


module.exports = routes
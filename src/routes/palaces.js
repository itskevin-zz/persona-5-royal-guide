const express = require('express')
const route = new express.Router

route.get('/palaces', (req, res) => {
    res.render('palaces')
})

route.get('/palaces/first-palace', (req, res) => {
    res.render('first-palace')
})
route.get('/palaces/second-palace', (req, res) => {
    res.render('second-palace')
})
route.get('/palaces/third-palace', (req, res) => {
    res.render('third-palace')
})
route.get('/palaces/fourth-palace', (req, res) => {
    res.render('fourth-palace')
})
route.get('/palaces/fifth-palace', (req, res) => {
    res.render('fifth-palace')
})
route.get('/palaces/sixth-palace', (req, res) => {
    res.render('sixth-palace')
})
route.get('/palaces/seventh-palace', (req, res) => {
    res.render('seventh-palace')
})

module.exports = route
const express = require('express')
const route = new express.Router

route.get('/calendar', (req, res) => {
    res.render('calendar')
})

module.exports = route
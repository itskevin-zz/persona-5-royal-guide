const express = require('express')
const routes = new express.Router
const fs = require('fs')


routes.get('/confidants', (req, res) => {
    res.send('list of confidants page')
})

routes.get('/confidants/:id', (req, res) => {
    res.send('single confidant page')
})

module.exports = routes
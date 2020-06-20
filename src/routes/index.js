const express = require('express')
const routes = new express.Router

routes.get('', async (req, res) => {
    res.render('index', { 
     })
})

module.exports = routes
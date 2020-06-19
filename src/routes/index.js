const express = require('express')
const routes = new express.Router

routes.get('', async (req, res) => {
    res.render('index', { 
        title: 'Persona 5 Royal Guide'
     })
})

module.exports = routes
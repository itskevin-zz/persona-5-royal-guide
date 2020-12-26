const express = require('express')
const route = new express.Router

route.get('/status-ailments', (req, res) => {
    res.render('status-ailments')
})

module.exports = route
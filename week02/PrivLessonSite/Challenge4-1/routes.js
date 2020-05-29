const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.redirect('/teachers')
})

routes.get('/teachers', (req, res) => {
    return res.render('teachers/index')
})

routes.get('/teachers/create', (req, res) => {
    return res.render('teachers/create')
})

routes.get('/teachers', (req, res) => {
    return res.render('teachers/index')
})


routes.post('/students', (req, res) => {
    return res.send('Received')
})

module.exports = routes
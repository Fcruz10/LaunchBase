const express = require('express');
const routes = express.Router();
const client = require('./controllers/client');
const admin = require('./controllers/admin');

routes
    .get('/', client.index)
    .get('/about', client.about)
    .get('/recipes', client.recipes)
    .get('/recipes/:id', client.show)

    .get('/admin', (req, res) => {
        return res.redirect('/admin/recipes')
    })
    .get('/admin/recipes', admin.index)
    .get('/admin/recipes/create', admin.create)
    .get('/admin/recipes/:id', admin.show)
    .get('/admin/recipes/:id/edit', admin.edit)

    .post('/admin/recipes', admin.post)
    .put('/admin/recipes', admin.put)
    .delete('/admin/recipes', admin.delete);

module.exports = routes;
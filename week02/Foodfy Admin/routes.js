const express = require('express');
const routes = express.Router();
const client = require('./controllers/client');
const admin = require('./controllers/admin');

routes
    .get('/', client.index)
    .get('/about', client.about)
    .get('/recipes', client.recipes)
    .get('/recipes/:id', client.show)

    .get('/admin/recipes', admin.index)
    .get('/admin/recipes/create', (req, res) => {
        return res.render('admin/create')
    })
    .get('/admin/recipes/:id', admin.show)
    // .get('/admin/recipes/:id/edit', recipes.edit)

    .get('/admin/recipes', admin.post)
    .get('/admin/recipes', admin.put)
    .get('/admin/recipes', admin.delete);

module.exports = routes;
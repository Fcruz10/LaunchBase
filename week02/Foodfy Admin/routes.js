const express = require('express');
const routes = express.Router();
const client = require('./controllers/client');
const admin = require('./controllers/admin');

routes
    .get('/', client.index)
    .get('/about', client.about)
    .get('/recipes', client.recipes)
    .get('/recipes/:id', client.show)

    .get('/admin/recipes', admin.index) //index
    // .get('/admin/recipes/create', recipes.create)
    // .get('/admin/recipes/:id', recipes.show) //single
    // .get('/admin/recipes/:id/edit', recipes.edit)

    // .get('/admin/recipes', recipes.post)
    // .get('/admin/recipes', recipes.put)
    // .get('/admin/recipes', recipes.delete);

module.exports = routes;
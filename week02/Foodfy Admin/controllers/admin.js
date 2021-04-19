const data = require('../database/data.json');
const fs = require('fs');

exports.index = (req, res) => {
    return res.render('admin/index', { recipes: data.recipes })
}

exports.show = (req, res) => {
const { id } = req.params;

const foundRecipe = data.recipes.find((recipe) => {
    return id == recipe.id;
})

if(!foundRecipe) return res.send('Recipe not found!');

const recipe = {
    ...foundRecipe
}

    return res.render('admin/single', { recipe })
}
const data = require('../database/data.json');

exports.index = (req, res) => {
    return res.render('client/index', { recipes: data.recipes })
};

exports.about = (req, res) => {
    return res.render('client/about')
};

exports.recipes = (req, res) => {
    return res.render('client/recipes', { recipes: data.recipes })
};

exports.show = (req, res) => {
    const { id } = req.params;

    const foundRecipe = data.recipes.find((recipe) => {
        return id == recipe.id;
    });

    if(!foundRecipe) return res.send('Recipe not found!'); 

    const recipe = foundRecipe;

    return res.render('client/single', { recipe })
};
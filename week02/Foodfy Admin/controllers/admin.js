const data = require('../database/data.json');
const fs = require('fs');
const { ingredients, preparation } = require('../utils');

exports.index = (req, res) => {
    return res.render('admin/index', { recipes: data.recipes })
};

exports.create = (req, res) => res.render('admin/create');

exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "")
            return res.send('Please, fill all fields!')
    }

    let {image, title, author, ingredients, preparation, information} = req.body;

    const id = Number(data.recipes.length + 1);

    data.recipes.push({
        id,
        image,
        title,
        author,
        ingredients,
        preparation,
        information
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send('Write File Error!')

        return res.redirect('/admin')
    });
};

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
};

exports.edit = (req,res) => {

    const { id } = req.params

    const foundRecipe = data.recipes.find((recipe) => {
        return id == recipe.id
    })

    if(!foundRecipe) return res.send('Recipe not found!')

    const recipe = {
        ...foundRecipe
    }

    return res.render('admin/edit', {recipe})
};

exports.put = (req, res) => {
    const { id } = req.body;

    let index = 0;

    const foundRecipe = data.recipes.find((recipe, foundIndex) => {
        if(id == recipe.id) {
            index = foundIndex
            return true
        }
    });

    if(!foundRecipe) return res.send('Recipe not found!')

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id),
        ingredients: ingredients(req.body.ingredients),
        preparation: preparation(req.body.preparation)
    };

    data.recipes[index] = recipe

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send('Write error!')

        return res.redirect(`/admin/recipes/${id}`)
    })
};

exports.delete = (req, res) => {
    const { id } = req.body

    const filteredRecipes = data.recipes.filter((recipe) => {
        return recipe.id !== id
    })

    data.recipes = filteredRecipes

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('Write File Error!')

        return res.redirect('/admin/recipes')
    })
};
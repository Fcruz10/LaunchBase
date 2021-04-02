const data = require('../database/data.json');
const fs = require('fs');

exports.index = (req, res) => {
    return res.render('admin/index', { recipes: data.recipes })
}
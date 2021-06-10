const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const methodOverride = require('method-override');

const server = express();

server
    .use(express.static('public'))
    .use(express.urlencoded({ extends: true }))
    .use(methodOverride('_method'))
    .use(routes)

    .set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.listen(3000, () => {});
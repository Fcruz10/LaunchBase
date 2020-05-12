const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require("./data");

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/62726284?s=460&u=07d9615f0ba27083ee5e7c972b58ef65423c4b65&v=4",
        name: "Francisco Cruz",
        role: 'Student - <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        description: 'Prospective full-stack developer, focused on getting further because great men are not born great, they grow great.',
        links: [
            { name: "Github", url: "https://github.com/Fcruz10" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/francisco-cruz-074208140/" },
            { name: "Instagram", url: "https://www.instagram.com/cruz.fr07/?hl=pt" }
        ]
    };

    return res.render('about', { about })
});

server.get("/classes", function (req, res) {
    return res.render('classes', { items: videos })
});

server.get("/video", function (req, res) {
    const id = req.query.id;

    const video = videos.find(function (video) {
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
});

server.listen(5000, function () {

});
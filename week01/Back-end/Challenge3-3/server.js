const express = require("express");
const nunjucks = require('nunjucks');

const server = express();
const courses = require("./data");

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function (req, res) {
    const about = {
        logo_url: "https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg",
        name: '<a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>',
        description: "Transform your career and be a desired programmer in the market, mastering the most modern web and mobile development tools.",
        method: "Immersive training in the most modern web and mobile development technologies for those who have no time to waste.",
        links: [
            { name: "Github", url: "https://github.com/Rocketseat" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" }
        ]
    };

    return res.render('about', { about })
});

server.get("/courses", function (req, res) {
    const about = {
        links: [
            { name: "Github", url: "https://github.com/Rocketseat" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" }
        ]
    };

    return res.render('courses', { courses, about })
});

server.get("/courses/:id", function (req, res) {
    const id = req.params.id;
    const about = {
        links: [
            { name: "Github", url: "https://github.com/Rocketseat" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" }
        ]
    };

    const course = courses.find(function(course) {
        return course.id == id;
    })

    if (!course) {
       return res.status(404).render("not-found", { about });
    }

    return res.render("details", {course, about});
});

server.use(function (req, res) {
    const about = {
        links: [
            { name: "Github", url: "https://github.com/Rocketseat" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" }
        ]
    };

    res.status(404).render("not-found", { about });
});

server.listen(5000, function () { });
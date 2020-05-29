const fs = require('fs');
const data = require('./data.json');
const { age, graduation, date } = require('./utils');

//show
exports.show = (req, res) => {
    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
        return teacher.id == id 
    })

    if (!foundTeacher) return res.send('Teacher not found!')

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        graduation: graduation(foundTeacher.educationLevel),
        subjects: foundTeacher.subjects.split(','),
        created_at: new Intl.DateTimeFormat('pt-PT').format(foundTeacher.created_at)
    }

    return res.render('./teachers/show', { teacher })
};

//create
exports.post = (req, res) => {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "")
            return res.send('Please, fill all fields!')
    }

    let { avatar_url, name, birth, educationLevel, classType, subjects  } = req.body;

    birth = Date.parse(birth);
    const created_at = Date.now();
    const id = Number(data.teachers.length + 1);
    
    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        educationLevel,
        classType,
        subjects,
        created_at
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send('Write File Error!')
        
        return res.redirect("teachers")
    });
};
//edit
exports.edit = (req, res) => {

    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
        return id == teacher.id
    })

    if (!foundTeacher) return res.send('Teacher not found!')

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render('teachers/edit', { teacher })
};

//delete

const name = 'Carlos';
const weight = 84;
const height = 1.88;

const imc = weight / (height * height);

let message = ''

if (imc >= 30) {
    message = ` ${name} is overweight.`
} else {
    message = ` ${name} isn't overweight.`
}

console.log(message)

//Carlos isn't overweight.

/*
======== OR =========
const name = 'Carlos';
const weight = 84;
const height = 1.88;

const imc = weight / (height * height);

(imc >= 30) ? console.log(` ${name} is overweight.`) : console.log(` ${name} isn't overweight.`)

======== OR =========

For more people

const people = [
    {
        name: 'Carlos',
        weight: 84,
        height: 1.88
    },

    {
        name: 'Afonso',
        weight: 100,
        height: 1.68
    }
];

for (let user of people) {
    const imc = user.weight / (user.height * user.height);

    let message = ''

    if (imc >= 30) {
        message = ` ${user.name} is overweight.`
    } else {
        message = ` ${user.name} isn't weight.`
    }
    console.log(message)
    
    //Carlos isn't overweight.
    //Afonso is overweight.
}; */
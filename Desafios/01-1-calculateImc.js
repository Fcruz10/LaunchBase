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


/*
OU 

For more people

const people = [
    {
        name: 'Carlos',
        weight: 184,
        height: 1.88
    },

    {
        name: 'Afonso',
        weight: 84,
        height: 1.88
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
}; */
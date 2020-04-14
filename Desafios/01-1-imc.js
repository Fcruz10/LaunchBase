const nome = 'Carlos';
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

let message = ''

if (imc >= 30) {
    message = ` ${nome} está acima do peso.`
} else {
    message = ` ${nome} Carlos não está acima do peso.`
}

console.log(message)


/*
OU 
const peoples = [
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

for (let people of peoples) {
    const imc = people.weight / (people.height * people.height);

    let message = ''

    if (imc >= 30) {
        message = ` ${people.name} está acima do weight.`
    } else {
        message = ` ${people.name} não está acima do weight.`
    }
    console.log(message)
}; */
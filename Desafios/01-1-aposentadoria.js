const nome = 'Silvina';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

const calculoContribuicao = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if (homemPodeAposentar || mulherPodeAposentar) {
    console.log(` ${nome}, pode-se aposentar! `)
} else {
    console.log(` ${nome}, não se pode aposentar! `)
}
 
/* OU


const people = [
    {
        name: 'Silvana',
        sex: 'F',
        age: 48,
        contribution: 23
    },
    {
        name: 'Carlos',
        sex: 'M',
        age: 48,
        contribution: 23
    },
    {
        name: 'Madalena',
        sex: 'F',
        age: 48,
        contribution: 58
    }, {
        name: 'Pedro',
        sex: 'M',
        age: 48,
        contribution: 59
    }
];


for (let user of people) {

    const sumAgeContribution = user.age + user.contribution;

    const manCanRetire = user.sex == 'M' && user.contribution >= 35 && sumAgeContribution >= 95
    const womenCanRetire = user.sex == 'F' && user.contribution >= 30 && sumAgeContribution >= 85

    if (manCanRetire || womenCanRetire) {
        console.log(` ${user.name} pode-se aposentar! `)
    } else {
        console.log(` ${user.name} não pode-se aposentar! `)
    }
}; */
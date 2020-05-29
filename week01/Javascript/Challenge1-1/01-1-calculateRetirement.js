const name = 'Silvina';
const sex = 'F';
const age = 48;
const contribution = 23;

const calculationRetirement = age + contribution

const menCanRetire = sex == 'M' && contribution >= 35 && calculationRetirement >= 95
const womenCanRetire = sex == 'F' && contribution >= 30 && calculationRetirement >= 85

if (menCanRetire || womenCanRetire) {
    console.log(` ${name}, can retire! `)
} else {
    console.log(` ${name}, can't retire! `)
}

//Silvina, can't retire!
/*

======== OR =========
 
const name = 'Silvina';
const sex = 'F';
const age = 48;
const contribution = 23;

const calculationRetirement = age + contribution

const menCanRetire = sex == 'M' && contribution >= 35 && calculationRetirement >= 95
const womenCanRetire = sex == 'F' && contribution >= 30 && calculationRetirement >= 85


(menCanRetire || womenCanRetire) ? console.log(` ${name}, can retire `) : console.log(` ${name}, can't retire `)

======== OR =========

For more people

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

    const calculationRetirement = user.age + user.contribution;

    const manCanRetire = user.sex == 'M' && user.contribution >= 35 && calculationRetirement >= 95
    const womenCanRetire = user.sex == 'F' && user.contribution >= 30 && calculationRetirement >= 85

    if (manCanRetire || womenCanRetire) {
        console.log(` ${user.name} can retire! `)
    } else {
        console.log(` ${user.name} can't retire! `)
    }

    // Silvina, can't retire!
    // Carlos, can't retire!
    // Madalena, can retire!
    // Pedro, can retire!
}; */
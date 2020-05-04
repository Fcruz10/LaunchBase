const user = {
    name: 'Diego',
    company: {
        name: 'Rocketseat',
        color: 'Roxo',
        focus: 'Programação',
        adress: {
            street: 'Rua Guilherme Gembala',
            number: 260
        }

    }
};

console.log(`The company ${user.company.name} is located in ${user.company.adress.street}, ${user.company.adress.number} `);

// The company Rocketseat is located in Rua Guilherme Gembala, 260

/*OU

const user = {
   name: "Diego",
   company: {
       name: "Rocketseat",
       color: 'Roxo',
       focus: 'Programação',
       adress: ['Rua Guilherme Gembaila', 260]
   }
};

console.log(`The company ${user.company.name} is located in ${user.company.adress.join(', ')} `);

// The company Rocketseat is located in Rua Guilherme Gembala, 260
*/
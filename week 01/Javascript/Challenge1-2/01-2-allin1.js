const data = {
    user: {
        name: 'Diego',
        age: 32,
        technologies: [
            { name: 'C++', specialty: 'Desktop' },
            { name: 'Python', specialty: 'Data Science' },
            { name: 'JavaScript', specialty: 'Web/Mobile' }
        ]
    },

    company: {
        name: 'Rocketseat',
        color: 'Roxo',
        focus: 'Programação',
        address: ['Rua Guilherme Gembala', 260]
    }
};

console.log(` The company ${data.user.name} is located in ${data.company.address.join(', ')} `);


console.log(` The user's name is ${data.user.name}`);

console.log(` The user ${data.user.name} has ${data.user.age} years 
and uses ${data.user.technologies[0].name} technology with specialty
in ${data.user.technologies[0].specialty} `);
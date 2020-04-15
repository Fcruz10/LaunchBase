const user = {
        name: 'Carlos',
        age: 32,
        property: [
                { name: "C++", specialty: "Desktop" },
                { name: 'Python', specialty: 'Data Science' },
                { name: "JavaScript", specialty: "Web/Mobile" }
        ]
};

console.log(` The user ${user.name} has ${user.age} years and uses ${user.property[0].name} technology in ${user.property[0].specialty} `);
const users = [
    { name: "Carlos", technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Tuane", technologies: ["HTML", "Node.js"] }
];

for (let user of users) {
    console.log(` The user ${user.name} works with ${user.technologies.join(', ')} `)
};

// The user Carlos works with HTML, CSS
// The user Jasmine works with JavaScript, CSS
// The user Tuane works with HTML, Node.js
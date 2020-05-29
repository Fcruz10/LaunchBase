const users = [
    { name: "Carlos", technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Tuane", technologies: ["HTML", "Node.js"] }
];

function checkIfUserUseCSS(user) {
    for (let tech of user.technologies) {
        if (tech == 'CSS') return true;
    }
    return false
};

for (let user of users) {
    const userWorkWithCSS = checkIfUserUseCSS(user);

    if (userWorkWithCSS) {
        console.log(`The user ${user.name} works with CSS`); 
    }
};

// The user Carlos works with CSS
// The user Jasmine works with CSS
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for (let user of usuarios) {
    console.log(` ${user.nome} trabalha com ${user.tecnologias.join(', ')} `)
};
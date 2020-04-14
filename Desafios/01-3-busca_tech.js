const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(user) {
    for (let tech of user.tecnologias) {
        if (tech == 'CSS') return true;
    }
    return false
};

//A criação do let é opcional roda das 2 maneiras
for (let user of usuarios) {
    const userTrabalhaComCSS = checaSeUsuarioUsaCSS(user);

    if (userTrabalhaComCSS) {
        console.log(`O usuário ${user.nome} trabalha com CSS`);
    }
};
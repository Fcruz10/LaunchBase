const usuario = {
        nome: 'Carlos',
        idade: 32,
        propriedade: [
                { nome: "C++", especialidade: "Desktop" },
                { nome: 'Python', especialidade: 'Data Science' },
                { nome: "JavaScript", especialidade: "Web/Mobile" }
        ]
};

console.log(` O usuário ${usuario.nome} tem ${usuario.idade} e trabalha com ${usuario.propriedade[0].nome} em ${usuario.propriedade[0].especialidade} `);
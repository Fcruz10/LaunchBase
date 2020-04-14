const data = {
    usuario: {
        nome: 'Diego',
        idade: 32,
        tecnologias: [
            { nome: 'C++', especialidade: 'Desktop' },
            { nome: 'Python', especialidade: 'Data Science' },
            { nome: 'JavaScript', especialidade: 'Web/Mobile' }
        ]
    },

    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereço: ['Rua Guilherme Gembala', 260]
    }
};

console.log(` A empresa ${data.usuario.nome} está localizada em ${data.empresa.endereço.join(', ')} `);


console.log(` O nome do usuário é ${data.usuario.nome}`);

console.log(` O usuário ${data.usuario.nome} tem ${data.usuario.idade} anos
e usa a tecnologia ${data.usuario.tecnologias[0].nome} coms especialidade
em ${data.usuario.tecnologias[0].especialidade} `);
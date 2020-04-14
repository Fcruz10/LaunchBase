const usuario = {
    nome: 'Diego',
    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereço: {
            rua: 'Rua Guilherme Gembala',
            numero: 260
        }

    }
};

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereço.rua}, ${usuario.empresa.endereço.numero} `);

//OU

//const usuario = {
//    nome: "Diego",
//    empresa: {
//        nome: "Rocketseat",
//        cor: 'Roxo',
//        foco: 'Programação',
//        endereço: ['Rua Guilherme Gembaila', 260]
//    }
//};
//
//console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereço.join(', ')} `);
const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS']},
    { nome: 'Jasmine', tecnologias: ['Javascript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
];

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}
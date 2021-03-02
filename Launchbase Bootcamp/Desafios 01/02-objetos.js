const usuario = {
    nome: 'Bruno',
    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxo',
        foco: 'Programação',
        endereco: {
            rua: 'Rua Guilherme Gembala',
            numero: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome}, onde o usuário ${usuario.nome} trabalha,
está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}.`)
const usuarios = [
    { nome: 'Bruno', idade: 23, tecnologias: ['JavaScript', 'HTML', 'CSS'], especialidade: 'FrontEnd' },
    { nome: 'Lucas', idade: 30, tecnologias: ['Java', 'C++'], especialidade: 'Desktop' },
    { nome: 'Helder', idade: 28, tecnologias: ['HTML', 'CSS', 'React'], especialidade: 'Web'}
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
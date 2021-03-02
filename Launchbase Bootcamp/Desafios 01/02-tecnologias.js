const usuarios = [
    { nome: 'Bruno', idade: 23, tecnologias: ['JavaScript', 'HTML', 'CSS'], especialidade: 'FrontEnd' },
    { nome: 'Lucas', idade: 30, tecnologias: ['Java', 'C++'], especialidade: 'Desktop' },
    { nome: 'Helder', idade: 28, tecnologias: ['HTML', 'CSS', 'React'], especialidade: 'Web'}
]

for (let i = 0; i < usuarios.length; i++) {
    console.log(`\nO usuário ${usuarios[i].nome} tem ${usuarios[i].idade} anos e usa a tecnologia ${usuarios[i].tecnologias[0]} com especialidade em ${usuarios[i].especialidade}`)
}
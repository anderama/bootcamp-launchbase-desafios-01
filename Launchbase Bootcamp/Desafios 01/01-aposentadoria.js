const nome =  'Bruno'
const sexo = 'M'
const idade = 23
const contribuicao = 20

const calculoContribuicao = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if (homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você poderá se aposentar!`)
} else {
    console.log(`${nome}, você não poderá se aposentar!`)
}
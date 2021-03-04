let nome = 'Bruno'
let peso = 54
let altura = 1.63
let sexo = 'masculino'

const imc = peso / (altura * altura)
console.log(imc)

if (imc >= 30) {
    console.log(`${nome}, você está acima do peso`)
} else {
    console.log(`Parabéns ${nome}, você não encontra-se acima do peso!`)
}

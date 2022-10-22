var valor_aleatorio = Math.floor(Math.random() * 10 + 1)

var chute = parseInt(prompt('Chute um valor de 1 a 10'))


if (chute >= valor_aleatorio) {
     alert('Chute foi maior que o valor gerado')
}
else if(chute < valor_aleatorio){
     alert('Chute foi menor que o valor gerado')
}
else if(chute == valor_aleatorio){
     alert('Vc acertou!!')
}
let velocidade = parseInt(prompt('Dijiti sua velocidade: '))
let velocidade_maxima = 80

if (velocidade <= velocidade_maxima){
     alert('Não tou um multa')
}

if(velocidade > velocidade_maxima & velocidade <= velocidade_maxima + 10){
     alert('Levou multa leve')
}

if(velocidade >= velocidade_maxima + 11 & velocidade <= velocidade_maxima + 20){
     alert('Levou multa grave')
}

if(velocidade > velocidade_maxima + 20){ 
     alert('Levou multa gravissima')
}

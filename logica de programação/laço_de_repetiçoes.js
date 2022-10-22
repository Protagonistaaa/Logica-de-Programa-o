//Laço de repetiçoes e Lista

for (var i = 0; i < 3; i++){
     console.log("carregando")
}

for (var item = 0; item < 20; item++){
     console.log(item)
}

for (var item = 1; item < 20; item = item + 3){
     console.log(item)
}


var nomes = ['Caio', 'isa', 'Enzo', 'samuel']

for(var nomes;nomes.length; nomes++){
     console.log(nomes)
}

var valor_maximo = parseInt(prompt("Dijite um valor maximo: "))

for(var valor_inicial = 1; valor_inicial < valor_maximo + 1; valor_maximo + 1){
     alert(valor_inicial++)
     
}
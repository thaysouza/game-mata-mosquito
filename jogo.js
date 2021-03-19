var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


function posicaoRandomica(){

//remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    }
    
    

//Gera valores aleatorio de 0 a 1 
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

//retirar a possibilidade de posições negativas
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//Criar elemento html
var mosquito = document.createElement('img')

mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() 
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'

document.body.appendChild(mosquito)


}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch(classe) {
        case 0: 
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    console.log(classe)

    switch(classe) {
        case 0: 
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}
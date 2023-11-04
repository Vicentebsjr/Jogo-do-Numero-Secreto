let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
 function exibirMensagemInicial () {
    exibirTextoNaTela ('h1','Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
 }

exibirMensagemInicial();

function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(Math.random() *numeroLimite +1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if (quantidadeDeElementosNaLista ==9); {
    listaDeNumerosSorteados =[];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',
    true) 
}
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);
    if (chute==numeroSecreto) {
        exibirTextoNaTela ('h1','Acertou! Você descobriu!');
        let PalavraTentativa = tentativas > 1? 'tentativas':'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${PalavraTentativa}!`;
        exibirTextoNaTela ('p', mensagemTentativas);
        limparCampo(); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else{
        limparCampo();
        if (chute<numeroSecreto) {
        exibirTextoNaTela ('p', 'O número é maior!');
    } else {exibirTextoNaTela ('p', 'O número é menor!')}
    } tentativas++
    }



;
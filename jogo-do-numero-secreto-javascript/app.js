let listaDeNumerosSorteados = [];
let numeroMaximo = 20;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();


exibirMensagemInicial();

function exibirMensagemInicial(){
    alterarTexto('h1' , 'Jogo do número secreto.');
    alterarTexto('p' , `Escolha um número entre 1 e ${numeroMaximo}.`);
}
//funções.
function alterarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}.`
        alterarTexto('h1', 'Parabêns, você acertou!');
        alterarTexto('p', mensagemTentativas);  
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute > numeroSecreto) {
            alterarTexto('p', 'O número secreto é menor!');
            } else {
                alterarTexto('p', 'O número secreto é maior!');
            }
        tentativas ++
        limparCampo();
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}





  











const grelha = document.querySelector("#grid");
const botao = document.querySelector("#next");
botao.addEventListener('click', showAllBoard);

function createBoard() {
    for (let i = 1; i <= 9; i++) {
        const card = document.createElement('div')
        card.setAttribute('id', 'carta' + i)
        card.setAttribute('value', i)
        if (i % 2 == 1) {
            card.classList.add("carta-branca");
        }
        grelha.appendChild(card)

    }
}

function showAllBoard() {
    for (let i = 1; i <= 9; i++) {
        const card = document.querySelector('#carta' + i);
        card.classList.remove("carta-branca");
    }

    resultado("Agora vais mover o dedo, para cima e baixo, esq ou dir, sem ser na diagonal...<br>4 casas");
    botao.addEventListener('click', passo2);
}

function passo2() {
    document.querySelector('#carta7').classList.add("carta-branca");
    resultado("Agora vais mover o dedo...<br>3 casas");
    botao.addEventListener('click', passo3);
}

function passo3() {
    document.querySelector('#carta4').classList.add("carta-branca");
    document.querySelector('#carta8').classList.add("carta-branca");
    resultado("Agora vais mover o dedo...<br>3 casas");
    botao.addEventListener('click', passo4);
}

function passo4() {
    document.querySelector('#carta9').classList.add("carta-branca");
    resultado("Agora vais mover o dedo...<br>2 casas");
    botao.addEventListener('click', passo5);
}

function passo5() {
    document.querySelector('#carta1').classList.add("carta-branca");
    document.querySelector('#carta5').classList.add("carta-branca");
    resultado("Agora vais mover o dedo...<br>1 casa");
    botao.addEventListener('click', passoFinal);
}

function passoFinal() {
    document.querySelector('#carta2').classList.add("carta-branca");
    document.querySelector('#carta6').classList.add("carta-branca");
    resultado("Estás NESTA CASA!");
    botao.remove();
}

function resultado(texto, certo){
    resultadoBox = document.querySelector("#resultado");
    resultadoBox.innerHTML = texto;
    if (certo){
        resultadoBox.classList.add("porta-certa");
    }
}


createBoard();




function inserirNum(num){
    let telaConta = document.getElementById("tela-conta").innerHTML;
    document.getElementById("tela-conta").innerHTML += num;
    rolarParaDireita();
}

function inserirOperador(op){
    let telaConta = document.getElementById("tela-conta").innerHTML;
    let operadores = "+-*/."
    let ultimoCaractere = telaConta.slice(-1);

    if (operadores.includes(ultimoCaractere) || telaConta.length === 0){
        alert("Operadores só podem ser colocados depois de números");
    }else{
    document.getElementById("tela-conta").innerHTML += op;
    rolarParaDireita();
    }
}

function inserirParenteses(){
    let telaConta = document.getElementById("tela-conta").innerHTML;
    let parenteses = "(";

    let abreParenteses = (telaConta.match(/\(/g) || []).length
    let fechaParenteses = (telaConta.match(/\)/g) || []).length

    if(abreParenteses > fechaParenteses){
        parenteses = ")";
    }
    document.getElementById('tela-conta').innerHTML += parenteses;
    rolarParaDireita();
}

function apagar(){
    document.getElementById('tela-conta').innerHTML = document.getElementById('tela-conta').innerHTML.slice(0, -1);
}

function limpar(){
    document.getElementById('tela-conta').innerHTML = "";
}

function calcular(){
    let telaConta = document.getElementById('tela-conta').innerHTML;
    resultado = eval(telaConta);
    document.getElementById('resultado').innerHTML = resultado;
}

function rolarParaDireita() {
    let telaConta = document.getElementById('tela-conta');
    telaConta.scrollLeft = telaConta.scrollWidth;
}

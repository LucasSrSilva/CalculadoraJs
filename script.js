function inserirNum(num){
    document.getElementById("tela-conta").innerHTML += num;
}

function inserirOperador(op){
    let tela_conta = document.getElementById("tela-conta").innerHTML;
    let operadores = "+-*/."
    let ultimoCaractere = tela_conta.slice(-1);

    if (operadores.includes(ultimoCaractere) || tela_conta.length === 0){
        alert("Operadores só podem ser colocados depois de números");
    }else{
    document.getElementById("tela-conta").innerHTML += op;
    }
}

function inserirParenteses(){
    let tela_conta = document.getElementById("tela-conta").innerHTML;
    let parenteses = "(";

    let abreParenteses = (tela_conta.match(/\(/g) || []).length
    let fechaParenteses = (tela_conta.match(/\)/g) || []).length

    if(abreParenteses > fechaParenteses){
        parenteses = ")";
    }
    document.getElementById('tela-conta').innerHTML += parenteses;
}

function apagar(){
    document.getElementById('tela-conta').innerHTML = document.getElementById('tela-conta').innerHTML.slice(0, -1);
}

function limpar(){
    document.getElementById('tela-conta').innerHTML = "";
}

function calcular(){
    tela_conta = document.getElementById('tela-conta').innerHTML;
    resultado = eval(tela_conta);
    document.getElementById('resultado').innerHTML = resultado;
}
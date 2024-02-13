function insert(num){
    document.getElementById('resultado').innerHTML += num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function apagar(){
    document.getElementById('resultado').innerHTML = document.getElementById('resultado').innerHTML.slice(0,-1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
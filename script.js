function insert(num){
    var resultado = document.getElementById('resultado').innerHTML;
    if (('+-*/').includes(resultado.slice(-1)) && '+-*/'.includes(num)) {
        return;
    }
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

        var resultadoCalculado = eval(resultado);

        document.getElementById('resultado').innerHTML = resultadoCalculado;

        var historico = document.getElementById('historico')
        var novoItem = document.createElement('li')

        novoItem.textContent = resultado + '=' + resultadoCalculado;
        historico.appendChild(novoItem);
    }
}

function mostrarBalao(){
    var balao = document.getElementById('balao');

    if(balao.style.display === 'none'){
        balao.style.display = 'block';
    }
    else{
        balao.style.display = 'none';
    }
}


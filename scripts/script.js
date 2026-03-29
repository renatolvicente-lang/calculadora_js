// Funcionalidade de Operações 
const input_soma = document.getElementById("+").addEventListener("click", soma);//basicamente essa linha substitue a função do onclick().

function soma(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);//nesta linha ele força o numero que foi digitado ser um tipo de valor numérico
    const num2 = parseFloat(document.getElementById("numero2").value);//.value serve para pegar o valor que está dentro o input ao invez de pegar o input
    
    const res = num1 + num2; // aqui ele soma os dois numeros
    historico.push(res);//aqui pega o resultado e guarda no array historico.   
    document.getElementById("resultado").value = res; //aqui ele exibe o resultado no output substituindo o valor dele pesa operação feitas
    
}

const input_sub = document.getElementById("-").addEventListener("click", sub)

function sub(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    
    const res = num1 - num2;
    historico.push(res);
    document.getElementById("resultado").value = res;
}

const input_multi = document.getElementById("*").addEventListener("click", multi)

function multi(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    
    const res = num1 * num2;
    historico.push(res)
    document.getElementById("resultado").value = res;
}
const input = document.getElementById("/").addEventListener("click", divi)

function divi(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    
    let di_zero = 0;    
    
    if(num1 != 0 && num2 != 0){// esse if verifica se não é 0
        di_zero = num1 / num2;
    }else{
        di_zero = "Não é possivel fazer divisão por 0";
    }
    historico.push(di_zero);
    document.getElementById("resultado").value = di_zero;
}

//Funcionalidade de Histórico


let historico = []; // array que irá armazenar o historico.

function at_historico(){
    let ul = document.getElementById("lista_hist"); // aqui puxa o elemento da lista com id "lista_hist" e joga na variavel "ul"
    ul.inneHTML = ""; // aqui serve para limpar a lista antes de recriar e botar as operações
    
    historico.forEach(function(item){ // percorre o array para criar os elemento li novos
        let li = document.createElement("li"); //cria os elementos li
        li.textContent = "Resultado: " + item; // modifica o conteudo dos li
        
        ul.appendChild(li); // aqui pega as li e coloca dentro da ul
    });
}

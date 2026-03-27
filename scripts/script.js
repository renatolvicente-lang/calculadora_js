
const input_soma = document.getElementById("+").addEventListener("click", soma)//basicamente essa linha substitue a função do onclick().

function soma(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);//nesta linha ele força o numero que foi digitado ser um tipo de valor numérico
    const num2 = parseFloat(document.getElementById("numero2").value);//.value serve para pegar o valor que está dentro o input ao invez de pegar o input

    return alert("Sua resposta é: "+ (num1 + num2));
}

const input_sub = document.getElementById("-").addEventListener("click", sub)

function sub(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);

    return alert("Sua resposta é: " + (num1 - num2));
}

const input_multi = document.getElementById("*").addEventListener("click", multi)

function multi(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);

    return alert("Sua resposta é: " + (num1 * num2));
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

    return alert("Sua resposta é: " + di_zero);
}
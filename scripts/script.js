function soma(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);//nesta linha ele força o numero que foi digitado ser um tipo de valor numérico
    const num2 = parseFloat(document.getElementById("numero2").value);
    return alert("Sua resposta é: "+ (num1 + num2));
}
function sub(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    return alert("Sua resposta é: " + (num1 - num2));
}
function multi(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    return alert("Sua resposta é: " + (num1 * num2));
}
function divi(a,b){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    let di_zero = 0;    
    if(num1 != 0 && num2 != 0){
        di_zero = num1 / num2;
    }else{
        di_zero = "Não é possivel fazer divisão por 0";
    }

    return alert("Sua resposta é: " + di_zero);
}
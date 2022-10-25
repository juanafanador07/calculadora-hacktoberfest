let calcularBtn = document.querySelector("#calcular");
let operationInput = document.querySelector("#operation");
let numAInput = document.querySelector("#numA");
let numBInput = document.querySelector("#numB");
let resultadoText = document.querySelector("#resultado");

calcularBtn.addEventListener("click", calcular)

function calcular(){
    let resultado = parseFloat(numAInput.value);
    let b = parseFloat(numBInput.value);
    let op = operationInput.value;
    let sign = "";

    switch (op) {
        case "+":
            resultado += b;
            break;

        case "-":
            resultado -= b;
            break;

        case "*":
            resultado *= b;
            break;

        case "/":
            resultado /= b;
            break;

        case "^":
            resultado = Math.pow(resultado, b);
            break;

        case "porc":
            resultado = resultado * 100 / b;
            sign = "%";
            break;
    }

    if(resultado % 1 * 1000 > 0){
        resultado = resultado.toFixed(2);
    }

    if(!isNaN(resultado)){
        resultadoText.innerHTML = "El resultado es " + resultado + sign;
    } else {
        resultadoText.innerHTML = "Error, los datos de entrada son incorrectos";
    }
    
}


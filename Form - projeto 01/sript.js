//exercicio 1 
// var valorDoInput = document.getElementById("raio").value;

// let raio = parseInt(prompt("Qual o raio?"))

// let calculo = 3.14 * raio**2

// console.log(calculo)
// alert(`A area e: ${calculo}`)
// // pi* r**




// exercicio 2 
// let base = parseInt((prompt("Qual a base?")))
// let area = base * base
// let dobroArea = area * 2
// alert(`O dobro da área é: ${dobroArea}`)



// exercicio 3
// let metros parseInt(prompt(converta Cm em M aqui: ))
function nomeFuncao() {
    let valorDoInput = document.querySelector("#raio").value;
    let campoResultado = document.querySelector("#valorResultado");
    let containerResposta = document.querySelector("#containerResposta");

    let calculo = 3.14 * valorDoInput**2

    campoResultado.innerText = calculo;
    containerResposta.style.display = "block"
}
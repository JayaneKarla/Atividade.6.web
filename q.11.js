let contador = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt("digite o " + i +"º"+ " numero:"));

   
    if (numero > 8) {
        contador++;
    }
}


alert("quantidade de numeros maiores que 8 é: " + contador);

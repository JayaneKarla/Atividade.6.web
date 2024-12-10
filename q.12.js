let contador = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseInt(prompt("digite o " + i + "º" + " numero:"));

   
    if (numero % 2 === 0) {
        contador++;
    }
}


alert("quantidade de numeros pares: " + contador);

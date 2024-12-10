let contador = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt("digite o " + i + "º" + " numero:"));

   
    if (numero >= 0 && numero <= 100) {
        contador++;
    }
}


alert("quantidade de numeros entre 0 e 100 é : " + contador);

let soma = 0;

for (let i = 1; i <= 10; i++) {

    let numero = parseFloat(prompt("Digite o " + i +"º" + " numero:"));
  
    soma += numero;
}


alert("a soma de todos os números é igual a : " + soma);

let maioresDeIdades = 0;

for (let i = 1; i <= 20; i++) {

    let idade = parseInt(prompt("Digite a idade da " + i +"º" +  "pessoa: "));
    if (idade >= 18) {
        maioresDeIdades++;
    }
} 


alert("O numero de pessoas maiores de idade é igual a: " + maioresDeIdades

);

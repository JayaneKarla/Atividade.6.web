let somaDasIdades = 0;

for (let i = 1; i <= 20; i++) {

    let idade = parseInt(prompt("Digite a idade da " + i + "º" + " pessoa:"));
    
    somaDasIdades+= idade;
}

alert("A soma de todas as idades é igual a : " + somaDasIdades);

let somaDasIdades = 0;

for (let i = 1; i <= 20; i++) {

    let idade = parseInt(prompt("Digite a idade da " + i + "º" + " pessoa:"));
    
    somaDasIdades+= idade;
}

let mediaDasIdades = somaDasIdades/20;

alert("A media de todas as idades é igual a : " + mediaDasIdades);

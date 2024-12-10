var pessoas = [];

for (var i = 0; i < 10; i++) {
    var nome = prompt("digite o nome da pessoa " + (i + 1) + ":");
    var idade = parseInt(prompt("digite a idade de " + nome + ":"), 10);

    pessoas[i] = { nome: nome, idade: idade };
}


var maisNova = pessoas[0].nome;
var menorIdade = pessoas[0].idade;


for (var j = 1; j < pessoas.length; j++) {
    if (pessoas[j].idade < menorIdade) {
        menorIdade = pessoas[j].idade;
        maisNova = pessoas[j].nome;
    }
}

alert("A pessoa mais nova é: " + maisNova + ", com " + menorIdade + " anos.");

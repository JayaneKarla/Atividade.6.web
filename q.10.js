let numero = parseInt(prompt("digite um numero para ver sua tabuada a seguir :"), 10);

if (numero === numero) {
    alert("tabuada de multiplição do número é" + numero + ":");

  
    for (var i = 1; i <= 10; i++) {
        alert(numero + " x " + i + " = " + (numero * i));
    }

} else {

    alert("por favor, insira um número valido.");
    
}

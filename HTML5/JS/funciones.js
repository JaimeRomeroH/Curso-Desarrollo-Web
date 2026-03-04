function resta(valor1, valor2){
   var resultado = valor1 - valor2;
   return resultado;
}

document.writeln(resta(50, 30));

document.writeln("<br>");

var valorMinimo = function(valor1, valor2){
    if(valor1 < valor2){
        return valor1;
    }else{
        return valor2;
    }
}

document.writeln(valorMinimo(100, 80));
document.writeln("<br>");
document.writeln(valorMinimo(50, 70));

//Notas
//Variable Global es aquella que se puede usar dentro de todo el codigo de JS - existe en todo el documento de JS
//Variable Local es aquella que solo se puede usar dentro de una funcion - existe solo dentro de una funcion
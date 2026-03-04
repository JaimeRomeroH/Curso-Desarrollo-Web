var i = 0;
var colores = ["Amarillo", "Azul", "Verde", "Rojo"];
var longitud = colores.length;

//Pregunta y luego ejecuta
while(i <= 10){
   document.writeln(i + "<br>");
   i++;
}

i = 0;
while(i < longitud){
   document.writeln(colores[i] + "<br>");
   i++;
}

//Do-while
//Primero pregunta una vez y luego ejecuta, es decir se ejecuta por lo menos una vez
/*do{

}while(condicion){

}*/
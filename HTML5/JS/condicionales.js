var nombre = "Jaime";
var edad = 34;

if (edad == 31) {
    document.writeln("Si se cumple mi condicion <br>");
}else {
    document.writeln("No se cumple mi condicion <br>");
}

if(edad >= 18){
    document.writeln("Puedes acceder <br>");
}else{
    document.writeln("No puedes acceder, eres menor de edad <br>");
}

if(edad >= 18 && nombre == "Jaime"){
    document.writeln("Tienes 18 y tu nombre es: " + nombre)
}else{
    document.writeln("No cumples ninguna de las dos condiciones") 
}


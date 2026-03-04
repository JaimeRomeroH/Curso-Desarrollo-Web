//Declarar arreglo
var colores = ["amarillo", "verde", "azul", "rojo", "gris"];
var colores2 = ["rosa", "naranja", "blanco", "morado"];

//Metodos mas utilizados

//Acceder y cambiar elementos del arreglo

  /*colores[4] = "naranja"
  colores[5] = "negro";
  colores[6] = "morado";
  document.writeln(colores);*/

  //Metodo 1
  /*var longitudArreglo = colores.length;
  colores[longitudArreglo] = "morado";
  document.writeln(colores);*/

  //Metodo 2
  /*colores.push("rosa", "blanco", "naranja");
  document.writeln(colores);*/

//Eliminar elementos
   /*colores.pop();
   document.writeln(colores);*/

//Concatenar arreglos
   /*var coloresTotales = colores.concat(colores2); 
   document.writeln(coloresTotales);*/

//Cambiar estilo de arreglo
    /*var arregloMejorado = colores.join(" - ");
    document.writeln(arregloMejorado);*/ 

//Ordenar alfabeticamente
   var ordenarArreglo = colores.sort();
   document.writeln(ordenarArreglo);
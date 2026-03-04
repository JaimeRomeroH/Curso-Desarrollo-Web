//Editar contenido
var primerElemento = document.getElementById("uno");

//Metodo 1
//primerElemento.innerHTML = "Nuevo <i>elemento</i>";  //Este toma en cuenta las etiquetas

//Metodo 2
//primerElemento.textContent = "Nuevo elemento de texto"; //Este No toma en cuenta las etiquetas

//Reemplazar elemento
var elemento = document.createElement("li");
var contenido = document.createTextNode("Jaime Romero");
elemento.appendChild(contenido);

var contenedor = document.getElementById("lista");
var posicion = document.getElementsByTagName("li")[1];
//contenedor.replaceChild(elemento, posicion);


//Eliminar elemento
contenedor.removeChild(posicion);
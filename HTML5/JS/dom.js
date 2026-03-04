//Acceder a elementos con el DOM

var parrafos = document.getElementsByTagName("p");
var elemento1 = document.getElementById("elemento");
var elementoClase = document.getElementsByClassName("miparrafo");

//Crear un nuevo nodo con el Dom

//1. Crear elemento
var nuevo = document.createElement("h3");

//2. Crear el contenido
var contenido = document.createTextNode("Este es mi nuevo elemento");

//3. Juntar el elemeto creado con el contenido
nuevo.appendChild(contenido);

//4. Agregar nuevo elemento creado a mi documento
document.getElementById("subtitulo").appendChild(nuevo);

//5. Crear atributos (solo si es necesario)
nuevo.setAttribute("class", "misubtitulo");
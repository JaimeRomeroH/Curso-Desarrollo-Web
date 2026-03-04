//Creamos nuestro elemento
var lista = document.createElement("li");
var contenido = document.createTextNode("Elemento N3");
lista.appendChild(contenido);

//Metodo 1 (la mas recomendada)
/*var contenedor = document.getElementById("lista")
contenedor.appendChild(lista);*/

//Metodo 2
/*var contenedor = document.getElementsByTagName("li")[0].parentNode;
contenedor.appendChild(lista);*/

//Metodo 3
var contenedor = document.getElementsByTagName("li")[0].parentElement;
var posicion = document.getElementsByTagName("li")[1];
contenedor.insertBefore(lista, posicion);

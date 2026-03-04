//Eventos a boton
/*(function() {
    
    var holaMundo = function(){
        console.log("Hola mundo!!!");
    }

    var boton = document.getElementById("boton");
    boton.addEventListener("click", holaMundo);
}())*/


//Eventos para input
(function() {
    
    var holaMundoInput = function(){
        console.log("Mi input cambio");
    }

    var input = document.getElementById("input");
    input.addEventListener("keypress", holaMundoInput);
}())


//Saber el tipo de evento
(function() {
    
    var holaMundoEvento = function(e){
        console.log("El evento que se esta ejecutando es: " + e.target);
        
    }

    var boton = document.getElementById("boton");
    boton.addEventListener("click", holaMundoEvento);
}())
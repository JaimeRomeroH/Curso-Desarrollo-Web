//Timeout
/*(function(){
    function holaMundo(){
        console.log("Hola Mundo");
    }

    setTimeout(holaMundo, 3000);
}());*/

//Interval
contador = 0;
(function(){
    function holaMundo(){
        contador++;
        console.log(contador);

        if(contador == 10){
            clearInterval(repeticion);
        }
    }

    var repeticion = setInterval(holaMundo, 1000);
}());
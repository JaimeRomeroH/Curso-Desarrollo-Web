(function actualizarDatos(){
   //Obtener datos de tiempo y fecha
   var fecha = new Date(),
       ampm,
       horas = fecha.getHours(),
       minutos = fecha.getMinutes(),
       segundos = fecha.getSeconds(),
       diaSemana = fecha.getDay(),  //Comienza desde 0
       dias = fecha.getDate(),
       mes = fecha.getMonth(), //Comienza desde 0
       year = fecha.getFullYear();
       
    //Obtenemos nuestros elementos HTML
    var elementoHoras = document.getElementById("horas"),
        elementoMinutos = document.getElementById("minutos"),
        elementoSegundos = document.getElementById("segundos"),
        elementoAMPM = document.getElementById("ampm"),
        elementoDiaSemana = document.getElementById("diaSe"),
        elementodia = document.getElementById("dia"),
        elementomes = document.getElementById("mes"),
        elementoyear = document.getElementById("year");

    //Declarar Arreglo de dias y meses
    var arraySemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
        arrayMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    //Asignamos datos de fecha
    elementoDiaSemana.textContent = arraySemana[diaSemana];
    elementodia.textContent = dias;
    elementomes.textContent = arrayMes[mes];
    elementoyear.textContent = year;

    //Transformar el reloj de 24 a 12 horas
    if(horas >= 12){
        horas = horas - 12;
        ampm = "PM";
    }

    //Agregamos 0 a las horas, minutos y segundos
    if(horas < 10){
        horas = "0" + horas;
    }

    if(minutos < 10){
        minutos = "0" + minutos;
    }

    if(segundos < 10){
        segundos = "0" + segundos;
    }

    //Agregar condicional para evitar la hora 00
    if(horas == 0){
       horas = 12; 
    }

    //Asignar elementos de tiempo
    elementoHoras.textContent = horas;
    elementoMinutos.textContent = minutos;
    elementoSegundos.textContent = segundos;
    elementoAMPM.textContent = ampm;
    
    //Actualiza el reloj automaticamente
    setInterval(actualizarDatos, 1000);   //Esta funcion es solo ejemplo porque usarlo asi podria saturar la memoria o cpu(Seria mejor modificarla)

}()) 
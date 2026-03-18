(function(){
    //Obtener fecha completa
    var fecha = new Date();
    document.writeln(fecha);

    //Obtener horas
    var hora = (fecha.getHours() - 12);
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    console.log(hora);
    console.log(minutos);
    console.log(segundos);

    //Obtener fechas
    var dia = fecha.getDay();
    var diames = fecha.getDate();
    var mes = fecha.getMonth();
    var year = fecha.getFullYear();
    console.log(dia);
    console.log(diames);
    console.log(mes);
    console.log(year);
}());
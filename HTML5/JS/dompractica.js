function accion(){
    var box = document.getElementById("box");

    if(box.className == "container"){
        box.className = "container grande";
    }else{
        box.className = "container";
    }
}
console.log("Javascript carregado");

function nota(){
    var a = document.getElementById("not1").value;  
}

function totalParcial (a, b, c, d){
    
    var media = 4; 
    var calculo = a + b + c + d;
    return calculo/media;  
}
    console.log(totalParcial());

    document.getElementById("resuldadoNotas").value = totalParcial()

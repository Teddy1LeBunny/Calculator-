console.log("Javascript carregado");
function setUp(){
        
    function totalParcial (){
        let a = document.getElementById("not1").value;  
        let b = document.getElementById("not2").value;
        let c = document.getElementById("not3").value;
        let d = document.getElementById("not4").value;
        var media = document.getElementById("peso").value; 

        var calculo = a + b + c + d;
        var total = calculo / media; 
        return total 
    }
    document.getElementById("resuldadoNotas").value = totalParcial();
}

window.onload = function (){
    setUp();
}
console.log("Javascript carregado");

function setUp(){

    document.getElementById("resuldadoNotas").value = 0  

    function totalParcial (){
        let a = parseFloat( document.getElementById("not1").value);  
        let b = parseFloat( document.getElementById("not2").value);
        let c = parseFloat( document.getElementById("not3").value);
        let d = parseFloat( document.getElementById("not4").value);
        var media =parseFloat(  document.getElementById("peso").value); 

        console.log(a, b, c, d, media)
    
        
        var calculo = a + b + c + d;
        var total = calculo / media; 

        return total;

    }

    document.getElementById("resuldadoNotas").value = totalParcial();
}
var button = document.getElementById("button1");

button.onclick = function (){
    setUp();
}
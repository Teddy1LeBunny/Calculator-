console.log("Javascript carregado");

function primeirasNotas(){

    document.getElementById("resuldadoNotas").value = 0  

    function totalParcial (){
        let a = parseFloat( document.getElementById("not1").value);  
        let b = parseFloat( document.getElementById("not2").value);
        let c = parseFloat( document.getElementById("not3").value);
        let d = parseFloat( document.getElementById("not4").value);
        var media = parseFloat(  document.getElementById("peso").value);     
        
        var calculo = (a + b + c + d)/4 ;
        var total1 = (calculo * media) /100; 

        return total1;

    }

    document.getElementById("resuldadoNotas").value = totalParcial();
}
var button = document.getElementById("button1");

button.onclick = function (){
    primeirasNotas();
}

function provaFinal (){
    function notaUltima(){
        var prova = parseFloat(document.getElementById("notaFinal").value);
        var peso = parseFloat(document.getElementById("pesoFinal").value);

        total2 = (prova * peso) / 100; 

        return total2
}

document.getElementById("resultadoProvaFinal").value = notaUltima();
}

var button2 = document.getElementById("button2");

button2.onclick = function(){
    provaFinal ()
}

function totalFinal (){
    function resultadoFinal(){
        
        var resultado1 = parseFloat(document.getElementById("resuldadoNotas").value);
        var resultado2 = parseFloat(document.getElementById("resultadoProvaFinal").value);


        return resultado1 + resultado2; 
        
    }
    
    document.getElementById("notaTotalFinal").value = resultadoFinal();
    }
    
    var button3 = document.getElementById("button3");
    
    button3.onclick = function(){
        document.getElementById('success').style.display = 'none';
        document.getElementById('error').style.display = 'none';

        totalFinal ()
         var valor = parseFloat(document.getElementById("notaTotalFinal").value);
        if(valor >= 6){
            document.getElementById('success').style.display = 'block';
          
        }
        else{
            document.getElementById('error').style.display = 'block';
        }
    }
console.log("Javascript carregado")

 function total (a, b, c, d){
    var calculo = a + b + c + d;
    return calculo; 
}
var nota1 = document.getElementByid('not1').value;
var nota2 = document.getElementById('not2').value;
var nota3 = document.getElementById('not3').value;
var nota4 = document.getElementById('not4').value;

console.log(total (nota1, nota2, nota3, nota4))


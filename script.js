// FUNÇÃO PARA CLACULO
function calcular(){
    
    // SALÁRIO
    var salario = parseFloat(document.getElementById('salario').value); // Conversão do salário em float

    // DSR
    var domFer = parseInt(document.getElementById('dias').value); // Conversão em inteiro
    var uteis = parseInt(document.getElementById('sem').value); // Conversão em inteiro
    
    // CALCULO DE 60%
    var hora60 = parseInt(document.getElementById('he60-h').value); // Conversão da hora em inteiro
    var minuto60 = parseFloat(document.getElementById('he60-m').value); // Conversão dos minutos em float        
    var min60 = minuto60 / 60; // Conversão dos minutos em decimal
    var resultado60 = hora60 + min60; // Calculo para saber a quantidade de hora extra, hora/minutos em valor decimal        

    // CALCULO DE 100%
    var hora100 = parseInt(document.getElementById('he100-h').value); // Conversão da hora em inteiro
    var minuto100 = parseFloat(document.getElementById('he100-m').value); // Conversão dos minutos em float       
    var min100 = minuto100 / 60; // Conversão dos minutos em decimal
    var resultado100 = hora100 + min100; // Calculo para saber a quantidade de hora extra, hora/minutos em valor decimal

    // CALCULO DE R$ EM HE 60%
    var valorHE60 = ((salario/220)*1.6)*resultado60;

    // CALCULO DE R$ EM HE 100%
    var valorHE100 = ((salario/220)*2)*resultado100;

    // TOTAL DE R$ EM HE

    var total = valorHE100+valorHE60;

    // CALCULO DE DSR
    var dsr = ((valorHE60+valorHE100)/uteis)*domFer;



    resultado.innerHTML = "Salário Mensal: R$ "+salario+"<br>Quantidade de HE à 60%: "+resultado60.toFixed(2)+"<br>Quantidade de HE à 100%: "+resultado100.toFixed(2)+"<br><br>Valor de HE à 60%: R$ "+valorHE60.toFixed(2)+"<br>Valor de HE à 100%: R$ "+valorHE100.toFixed(2)+"<br><br>Total à receber de Hora Extra: R$ "+total.toFixed(2)+"<br><br> O valor à receber de DSR é: R$ "+dsr.toFixed(2);
}

// FUNÇÃO QUE LIMPA O RESULTADO
function limpar() {

apagar = document.getElementById('resultado');
apagar.innerHTML = "Salário Mensal:<br>Quantidade de HE à 60%:<br>Quantidade de HE à 100%:<br><br>Valor de HE à 60%:<br>Valor de HE à 100%:<br><br>Total à receber de Hora Extra:<br><br> O valor à receber de DSR é:";

}
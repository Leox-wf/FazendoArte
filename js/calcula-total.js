//Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

//Passa por cada encomenda, calculando o valor total
for (var count=0; count < clientes.length; count++){
    //captura a quantidade encomenda
    var qtde = clientes[count].querySelector(".info-qtde").textContent;

    //captura o valor unitario do produto
    var unitario = clientes[count].querySelector(".info-valor").textContent;

    //valida a quantidade
    if(qtde<1 || isNaN(qtde)){
        //quantidade ok, avisa o usuario
        clientes[count].querySelector(".info-qtde").textContent = "qtde invalida!";
        clientes[count].querySelector.info-qtde.toLocalString('pt-BR',{style:'currency',currency:'BRL'});
        clientes[count].querySelector("info-qtde").style.color="red";
        //clientes[count].style.backgroundColor="red";
    }else{
        
        if(unitario <= 0 || isNaN(unitario)){
            clientes[count].querySelector(".info-total").textContent ="Valor invalido"
            clientes[count].style.backgroundColor="red";
        }else{    
        //Quantidade ok, prossegue
        //calcula o valor total da encomenda
        clientes[count].querySelector(".info-total").textContent = calculaTotal(qtde,unitario);
        }
    }

    //calcula o valor total da encomenda
    //1º teste clientes[count].querySelector(".info-total").textContent = qtde * unitario;
    //2º teste clientes[count].querySelector(".info-total").textContent = calculaTotal(qtde,unitario);

}

//Função para calcular o valor total da encomenda
function calculaTotal(qtde,unitario){
    var total = 0;
    total=qtde*unitario;
    return total;
}
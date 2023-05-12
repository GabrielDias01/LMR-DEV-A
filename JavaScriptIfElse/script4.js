let operacao;
let numero1;numero2;

operacao=prompt("Digite a Operação desejada","+, -, *, /")
numero1=prompt("Digite o 1º")
numero2=prompt("Digite o 2º")

switch(operacao){
    case("+"): document.write(parseInt(numero1)+parseInt(numero2));
    break
    case("-"): document.write(parseInt(numero1)-parseInt(numero2));
    break
    case("*"): document.write(parseInt(numero1)*parseInt(numero2));
    break
    case("/"):
    if(numero2==0){
        document.write("Não Dividirás por 0")     
    }else{
        document.write(parseFloat(numero1)/parseFloat(numero2));
    }
    break;
    default:document.write("Digite um Operação Válida");
   
}
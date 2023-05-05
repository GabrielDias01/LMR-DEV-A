let HT; // Horas Trabalhadas
let VH; // Valor Hora
let PD; // Percentual de desconto
let TD; // Total de desconto
let SB; // Salario bruto
let SL; // Salario liquido

HT = prompt('Digite as Horas Trabalhadas:', 'Informe aqui.');
VH = prompt('Entre com o valor da hora:', 'Informe aqui.');
PD = prompt('Informe o Percentual de desconto:', 'em porcentagem.');
SB= parseFloat(HT)*parseFloat(VH);
TD= parseFloat(PD)*SB/100;
SL =SB - TD;

document.write('Salario = ', SL);


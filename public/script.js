let nome=String(prompt("Digite o seu nome:"));
let renda_mensal=Number(prompt("Digite a sua renda mensal:"));
let numero_despesas=Number(prompt("Digite o número de despesas mensais:"));
if (numero_despesas>5){
    (numero_despesas)=5;
if (numero_despesas<1){
    (numero_despesas)=1
}
};      
while (isNaN(Number(renda_mensal))){
    alert("Digite um número válido para a renda mensal.");
    renda_mensal=Number(prompt("Digite a sua renda mensal:"));
    }
while (isNaN(Number(numero_despesas))){
    alert("Digite um número válido para o número de despesas.");
    numero_despesas=Number(prompt("Digite o número de despesas mensais:"));
}
let total_despesas=0;
for (let i = 0; i < numero_despesas; i++) {
    let despesa=Number(prompt(`Digite o valor da despesa R${i+1}:`));
    total_despesas+=despesa;
    while (isNaN(Number(despesa))){
        alert("Digite um número válido para a despesa.");
        despesa=Number(prompt(`Digite o valor da despesa R${i+1}:`));
}
}
let mensagem='';
let sobra=renda_mensal-total_despesas;
if (total_despesas>renda_mensal){
    mensagem=('⚠️ Atenção: você gastou mais do que ganhou.');
}else {
    if (sobra >=(renda_mensal*0.3)){
        mensagem=('✅ Ótimo: boa margem de sobra.');
    }
    if (sobra <(renda_mensal*0.3)){
        mensagem=('🙂 Ok: dá para melhorar a sobra.');
    }
    if  (sobra==0){
        mensagem=('⚠️ Cuidado: suas despesas estão exatamente iguais à sua renda.');
    }
}
console.log("nome do indivíduo: " + nome);
console.log("Renda mensal: R$" + renda_mensal.toFixed(2));
console.log("Total de despesas: R$" + total_despesas.toFixed(2));
console.log("Sobras: R$" + sobra.toFixed(2));
console.log("classificação: " + mensagem);

alert("Nome: " + nome);
alert("Renda mensal: R$" + renda_mensal.toFixed(2));
alert("Total de despesas: R$" + total_despesas.toFixed(2));
alert("Sobra: R$" + sobra.toFixed(2));
alert("Classificação: " + mensagem);
{ 
}
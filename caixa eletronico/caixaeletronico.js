var nome = prompt("Digite seu nome:");
alert("Olá " + nome + " bem-vindo ao Jv Bank");

var senha = 3589;
var saldo = 100.5;

function inicio() {
    var escolha = parseInt(prompt('Selecione uma opção:  (1.Saldo),(2.Saque),(3.Depósito),(4.extrato),(5.Fazer Transferência),(6.Sair)'));

    switch (escolha) {
        case 1: ver_saldo()
            break;
        case 2: fazer_saque()
            break;
        case 3: fazer_deposito()
            break;
        case 4: ver_extrato()
            break;
        case 5: fazer_transferencia()
            break;
        case 6: exit()
        default:
            erro()
            break;
    }
}

function ver_saldo() {
    var a_senha = parseInt(prompt("Digite sua  Senha:"));
    if (a_senha == senha){ 
          alert('Seu saldo atual é: ' + saldo)
    inicio();
    }
    else{
        alert("Insira a senha novamente!")
        ver_saldo()
    }
  
}



function fazer_saque() {

    var a_senha = parseInt(prompt("Digite sua senha "));
    if (a_senha == senha) {
        var saque = parseFloat(prompt('Qual o valor para saque ? '));
        if (isNaN(saque) || saque === '') {
            alert('Por favor, informe um número. ');
            fazer_saque();

        } else if (saque >= saldo) {
            alert("Operação não Autorizada!");
            fazer_saque();

        } else if (saque <= 0) {
            alert("Operação não Autorizada!");
            fazer_saque();
        }
        else {
            saldo -= saque;
            ver_saldo();
        }
    }
    else{
        alert("Insira a senha novamente!")
        fazer_saque()
    }
}


function fazer_deposito() {
    var deposito = parseFloat(prompt("Informe o valor para depósito."));
    if (isNaN(deposito) || deposito === '') {
        alert("Operação não Autorizada!");
        fazer_deposito();
    }
    else if (deposito <= 0) {
        alert("Operação não Autorizada!");
        fazer_deposito();
    }
    else {
        saldo += deposito;
        ver_saldo();
    }
}

function ver_extrato() {
    var a_senha =  parseInt(prompt("Digite sua  Senha:"));
    if(a_senha == senha){
        alert("R$ + 4.000 Salário. \n" + " R$ - 500 Cartão Nubank.\n" + "R$ - 100 Conta de Luz.\n" + " R$ - 50 Conta de Luz\n" + "R$ - 800 Sonda Supermercados.\n" + "R$ - 1.000  Alugel.\n"
        )
        inicio()

    }
    else{ 
        alert("Digite a Senha novamente.");
        ver_extrato();
        
    }
}

function fazer_transferencia(){
    var a_senha = parseInt(prompt("Digite sua senha "));
    if (a_senha == senha) {
        var transf = parseFloat(prompt('Qual o valor da Transferência ? '));
        if (isNaN(transf) || transf === '') {
            alert('Por favor, informe um número. ');
            fazer_transferencia();

        } else if (transf <= 0) {
            alert("Operação não Autorizada!");
            fazer_transferencia();
        }
        else if (transf >= saldo){
            alert("Operação não Autorizada!");
            fazer_transferencia();
        }
        else {
             saldo -= transf
            ver_saldo();
        }
    }
    else{
        alert("Digite a Senha novamente.");
        fazer_transferencia()
    }
    
}

function exit(){
    alert(nome + " Obriagdo por escolher  o Jv Bank. Foi um prazer ter você aqui !!")
    
}
inicio()
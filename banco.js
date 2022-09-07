var cliente = {
    nome: 'Felipe' ,
    login: 'felipeemiliano' ,
    senha: '123',
    conta: 'FE123',
    saldo: '5.000' ,

}

var add_dinheiro = function (valor){
    cliente.saldo = cliente.saldo + valor;
}

var remover_dinheiro = function (valor){
    cliente.saldo = cliente.saldo - valor;
}

var consultar_saldo = function (){
    console.log('saldo' + cliente.saldo);

}

var consultar_cliente = function (){
    console.log('nome' + cliente.nome);
    console.log('login' + + cliente.login);
    console.log('senha' + cliente.senha);
    console.log('conta' + cliente.conta);
    console.log('saldo' + cliente.saldo);

}

consultar_cliente();
#para adicionar dinheiro digite: add_dinheiro e o valor.
#para remover: remover_dinheiro e o valor.

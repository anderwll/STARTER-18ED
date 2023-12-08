// Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"


let totalCompra = 149.90;
let numeroParcelas = 2;
let valorParcela = totalCompra / numeroParcelas;

document.write(`O valor total da compra foi R$ ${totalCompra.toFixed(2)} <br>`)
document.write(`Forma de pagamento: ${numeroParcelas}x de R$ ${valorParcela}`) 
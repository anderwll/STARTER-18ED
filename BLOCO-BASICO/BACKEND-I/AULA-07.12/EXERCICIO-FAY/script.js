console.log('EXERCÍCIO FAY');

// Desenvolva um algoritmo que transforma a idade de uma pessoa expressa em anos, meses e dias e no final dê a idade da pessoa expressa em dias.

// Considerar : 1 ano com 365 dias | 1 mês com 30 dias | 

// Usar para esse exercício uma pessoa com 24 anos , 3 mêses e 24 dias de idade .


/* FAZER :

    - Diagrama do algoritmo (paint | drwaio | word)
    - Código algoritmo 
    - Transformar em reutilizável (perguntar para pessoa usuária a idade em anos | os meseses | dias 
    - SE  anos em dia for > = 10000 => Parabéns tá sobrevivendo bem a idade tá batendo a idade 
    - SE NÃO anos em dia for >= 10000 , parabéns vc é uma pessoa xoven ! 

*/

let ano = Number(prompt("Digite idade em anos: "));
let mes = Number(prompt('Digite idade em mes: '));
let dias = Number(prompt(`Digite idade em dias: `));

console.log('Ano -> ', ano);
console.log("Mes -> ", mes);
console.log(`Dia -> ${dias}`);

// camelCase
// PascalCase
// snake_case
let idadeEmDias = (ano * 365) + (mes * 30) + dias; 

document.write(`Sua idade em dias é: ${idadeEmDias} <br>`)
console.log(`Sua idade em dias é: ${idadeEmDias}`)

if(idadeEmDias >= 10000) {  
    console.log('Parabéns tá sobrevivendo bem a idade tá batendo a idade');
    document.write('Parabéns tá sobrevivendo bem a idade tá batendo a idade')
} else   {
    console.log('Parabéns vc é uma pessoa xoven');
    document.write('Parabéns vc é uma pessoa xoven');
}; 





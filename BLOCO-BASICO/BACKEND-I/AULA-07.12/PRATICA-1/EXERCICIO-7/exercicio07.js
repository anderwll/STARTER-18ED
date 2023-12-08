// 7. Desenvolva um algoritmo para ler o número total de eleitores de um
// município, o número de votos brancos, nulos e válidos. Calcular e
// escrever o percentual que cada um representa em relação ao total
// de eleitores. 

let votosBrancos = Number(prompt(`digite o numero de votos brancos`));
let votosNulos = Number(prompt(`digite o numero de votos nulos`));
let votosValidos = Number(prompt(`digite o numero de votos validos`));
let votosTotais = votosBrancos + votosNulos + votosValidos;
let percentualBrancos = (votosBrancos / votosTotais) * 100;
let percentualNulos = (votosNulos / votosTotais) * 100;
let percentualValidos = (votosValidos / votosTotais) * 100;

document.write(`A Porcentual de votos nulos ${percentualNulos.toFixed(2)}`);
document.write(`A Porcentual de votos brancos ${percentualBrancos.toFixed(2)}`);
document.write(`A Porcentual de votos validos ${percentualValidos.toFixed(2)}`);





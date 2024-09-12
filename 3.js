const faturamentoMensal = [1000, 1500, 800, 1200, 2000, 0, 0, 
    1800, 1300, 
    1600, 0, 1400, 900, 1100, 1700, 1900, 0, 
    0, 1000, 1500, 1300, 1400, 1600, 1200, 1800, 2000, 0, 0, 1100
];

// Calculando o valor mínimo
const minFaturamento = Math.min(...faturamentoMensal);

// Calculando o valor máximo
const maxFaturamento = Math.max(...faturamentoMensal);

// Calculando o valor médio
const faturamentoSemZeros = faturamentoMensal.filter(valor => valor !== 0);
const mediaMensal = faturamentoSemZeros.reduce((acc, valor) => acc + valor, 0) / faturamentoSemZeros.length;

// Contando o número de dias com faturamento > mediaMensal
const diasAcimaDaMedia = faturamentoMensal.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: ${minFaturamento}`);
console.log(`Maior valor de faturamento: ${maxFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
// Instruções para entrega
//  # 2️ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída



//entrada

const vitorias = 21;
const derrotas = 3;

const { saldoVitorias, nivel } = calcular(vitorias, derrotas);


//função
function calcular(vitorias, derrotas) {
	const saldoVitorias = vitorias - derrotas;
    
    let nivel;

if (vitorias < 10) {
	nivel = 'ferro'; 
    
}  else if (vitorias >= 11 && vitorias <= 20) {
	nivel = 'Bronze';
     
} else if (vitorias >= 21 && vitorias <= 50) {
	nivel = 'Prata';

} else if (vitorias >= 51 && vitorias <= 80) {
	nivel = 'Ouro';
    
} else if (vitorias >= 81 && vitorias <= 90) {
	nivel = 'Diamante'
    
} else if (vitorias >= 91 && vitorias <= 100) {
	nivel = 'Lendario'; 
    
} else if (vitorias => 101) {
	nivel = 'Imortal' 
}

 return { saldoVitorias, nivel };
}

//Saída 

console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);



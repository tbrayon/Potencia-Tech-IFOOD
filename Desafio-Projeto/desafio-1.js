// //Instruções para entrega}
// # 1️ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
// depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída




// Entrada do nome e XP do herói
// use ('.') entre os 0 ex: 1.000
let heroiName = "Morgana";
let xp = 6.000;
let nivel = '';

// Determinação do nível
if (xp <= 1.000) { 
	nivel = 'ferro';
    
} else if (xp >= 1.001 && xp<= 2.000) {
  	nivel = 'bronze';
  
} else if (xp >= 2.001 && xp <= 5.000) {
	nivel= 'Prata';

} else if (xp >= 5.001 && xp <= 7.000) {
	nivel='Ouro';

}else if (xp >= 7.001 && xp <= 8.000) {
	nivel= 'Platina';
    
}else if (xp >= 8.001 && xp <= 9.000) {
	nivel='Ascendente';
    
} else if (xp >= 9.001 && xp <= 10.000) { 
	nivel= 'Imortal';
    
} else if (xp >= 10.001) {
	nivel= 'Radiante'
    
}



// Saída da mensagem
console.log('O heroi do nome '+ heroiName + 'esta no nivel de '+ nivel)

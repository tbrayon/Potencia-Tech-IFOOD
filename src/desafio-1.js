// Entrada do nome e XP do herói
let heroiName = "Morgana";
let xp = 6.000;
let nivel = '';

// Determinação do nível
if (xp < 1.000) { 
	nivel = 'ferro';
    
} else if (xp <= 2.000) {
  	nivel = 'bronze';
  
} else if (xp <= 5.000) {
	nivel= 'Prata';

} else if (xp <= 7.000) {
	nivel='Ouro';

}else if (xp <= 8.000) {
	nivel= 'Platina';
    
}else if (xp <= 9.000) {
	nivel='Ascendente';
    
} else if (xp <= 10.000) { 
	nivel= 'Imortal';
    
} else if (xp >= 10.001) {
	nivel= 'Radiante'
    
}



// Saída da mensagem
console.log('O heroi do nome '+ heroiName + 'esta no nivel de '+ nivel)

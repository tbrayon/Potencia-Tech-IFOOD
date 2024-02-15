
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



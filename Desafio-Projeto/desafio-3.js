// Instruções para entrega
// # 3️ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

let invoice = {
    name: '',
    age: '',
    Type: {
        0: 'guerreiro',
        1: 'mago',
        2: 'monge',
        3: 'ninja',
    },
};

function atacar(name, age, type) {
    let ataque;

    switch (type) {
        case 'mago':
            ataque = 'usou magia';
            break;

        case 'guerreiro':
            ataque = 'usou espada';
            break;

        case 'monge':
            ataque = 'usou artes marciais';
            break;

        case 'ninja':
            ataque = 'usou shuriken';
            break;
    }

    console.log(`O ${type} atacou usando ${ataque}`);
}

// Example usage:
atacar('lucas', 25, 'monge');

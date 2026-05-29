// Dados sobre Skate
const skateData = {
    historia: {
        titulo: "História do Skate",
        conteudo: `O skate surgiu na Califórnia nos anos 1950, quando surfistas 
procuravam uma forma de treinar em dias sem ondas. Começou como uma simples 
tábua de madeira com rodas de patim.

A evolução do skate foi rápida. Nos anos 1960 e 1970, o esporte ganhou 
popularidade com a criação de competições e a evolução do design das pranchas.

A década de 1980 marcou a revolução técnica com a criação do kickflip por 
Rodney Mullen, transformando o skate em uma forma de expressão artística.

Hoje, o skate é reconhecido mundialmente como esporte olímpico desde 2020, 
com atletas profissionais em todo o mundo.`,
        cores: {
            fundo: '#ff6600',
            texto: '#000'
        }
    },
    
    manobras: {
        titulo: "Manobras Fundamentais",
        conteudo: `
KICKFLIP - A prancha gira 360° enquanto você está no ar
OLLIE - Impulso para saltar sem usar as mãos
MANUAL - Andar apenas com as rodas traseiras
GRIND - Deslizar a prancha sobre um obstáculo
HEEL FLIP - Variação do kickflip com movimento do calcanhar
SHOVE-IT - Rotação apenas da prancha sem o skater
TRICK FLIP - Combinação de tricks para criar manobras novas`,
        cores: {
            fundo: '#00d4ff',
            texto: '#000'
        }
    },
    
    estilos: {
        titulo: "Estilos de Skate",
        conteudo: `
STREET SKATE - Fazer tricks em ruas, escadas e obstáculos urbanos
VERT - Skatear em rampa em forma de U/pipe, saltando para cima
PARK - Competir em parques de skate com diferentes obstáculos
FREESTYLE - Tricks técnicos em superfície plana
DOWNHILL - Velocidade em descidas montanhosas
CRUISING - Andar casualmente pela cidade sem tricks`,
        cores: {
            fundo: '#00ff88',
            texto: '#000'
        }
    },
    
    equipamento: {
        titulo: "Equipamento Essencial",
        conteudo: `
PRANCHA - Feita de madeira de bordo com 7 camadas
RODAS - De uretano, variando em dureza e tamanho
TRUCK - Estrutura de metal que conecta as rodas à prancha
ROLAMENTO - Permite que as rodas girem suavemente
LIXA - Fornece tração entre pés e prancha
PROTEÇÃO - Capacete, joelheiras, cotoveleiras e protetores de pulso

Para iniciantes: invista em equipamento de qualidade!`,
        cores: {
            fundo: '#ff33cc',
            texto: '#fff'
        }
    },
    
    dicas: {
        titulo: "Dicas para Iniciantes",
        conteudo: `
1. Comece devagar - Aprenda a empurrar e frear bem
2. Use proteção - Nunca negligencie segurança
3. Pratique o ollie - É a base para quase todos os tricks
4. Encontre comunidade - Skateparques são ótimos lugares para aprender
5. Assista tutoriais - YouTube tem ótimos conteúdos
6. Tenha paciência - Leva tempo para dominar novas manobras
7. Cuide do equipamento - Manutenção regular prolonga a vida da prancha
8. Divirta-se - O skate é principalmente sobre diversão!`,
        cores: {
            fundo: '#ffaa00',
            texto: '#000'
        }
    }
};

// Array com as seções do menu
const menuSections = Object.keys(skateData);

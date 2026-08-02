export interface GrammarExample {
  spanish: string;
  portuguese: string;
}

export interface GrammarRule {
  id: string;
  rule: string;
  examples: GrammarExample[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  emoji: string;
  description: string;
  rules: GrammarRule[];
}

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'reflexivos',
    title: 'Verbos Reflexivos',
    emoji: '🪞',
    description: 'Pronomes reflexivos e verbos pronominais',
    rules: [
      {
        id: 'ref-1',
        rule: 'Pronomes reflexivos: me, te, se, nos, os, se — sempre antes do verbo conjugado',
        examples: [
          { spanish: 'Me levanto a las 7', portuguese: 'Levanto-me às 7' },
          { spanish: 'Se ducha por la mañana', portuguese: 'Ele/Ela toma banho de manhã' },
          { spanish: 'Nos vemos mañana', portuguese: 'Nos vemos amanhã' },
        ],
      },
      {
        id: 'ref-2',
        rule: 'Verbos que são reflexivos em espanhol mas não em português',
        examples: [
          { spanish: 'Me llamo Juan', portuguese: 'Eu me chamo Juan (Meu nome é Juan)' },
          { spanish: 'Se fue a casa', portuguese: 'Foi para casa (ir-se embora)' },
          { spanish: 'Me acuerdo de ti', portuguese: 'Lembro de você' },
          { spanish: 'Se queja mucho', portuguese: 'Reclama muito' },
        ],
      },
      {
        id: 'ref-3',
        rule: 'Com infinitivo/gerúndio: pronome vai no final ou antes do verbo auxiliar',
        examples: [
          { spanish: 'Voy a ducharme = Me voy a duchar', portuguese: 'Vou tomar banho' },
          { spanish: 'Estoy vistiéndome = Me estoy vistiendo', portuguese: 'Estou me vestindo' },
          { spanish: 'Quiero irme = Me quiero ir', portuguese: 'Quero ir embora' },
        ],
      },
    ],
  },
  {
    id: 'subjuntivo',
    title: 'Subjuntivo',
    emoji: '🎭',
    description: 'Modo verbal para dúvida, desejo, emoção',
    rules: [
      {
        id: 'subj-1',
        rule: 'Usa-se subjuntivo após verbos de desejo, dúvida, emoção e necessidade',
        examples: [
          { spanish: 'Quiero que vengas', portuguese: 'Quero que você venha' },
          { spanish: 'Espero que estés bien', portuguese: 'Espero que você esteja bem' },
          { spanish: 'Dudo que llegue a tiempo', portuguese: 'Duvido que chegue a tempo' },
        ],
      },
      {
        id: 'subj-2',
        rule: 'Após expressões impessoais: es necesario que, es importante que, ojalá',
        examples: [
          { spanish: 'Es necesario que estudies', portuguese: 'É necessário que você estude' },
          { spanish: 'Ojalá llueva mañana', portuguese: 'Tomara que chova amanhã' },
          { spanish: 'Es posible que no venga', portuguese: 'É possível que não venha' },
        ],
      },
      {
        id: 'subj-3',
        rule: 'Após quando (cuando) referindo-se ao futuro',
        examples: [
          { spanish: 'Cuando llegues, llámame', portuguese: 'Quando chegar, me liga' },
          { spanish: 'Cuando tenga dinero, viajaré', portuguese: 'Quando tiver dinheiro, viajarei' },
          { spanish: 'Avísame cuando termines', portuguese: 'Me avisa quando terminar' },
        ],
      },
    ],
  },
  {
    id: 'perifrasis',
    title: 'Perífrases Verbais',
    emoji: '🔗',
    description: 'Combinações de verbos auxiliares',
    rules: [
      {
        id: 'peri-1',
        rule: 'IR A + infinitivo: futuro próximo (vou fazer)',
        examples: [
          { spanish: 'Voy a comer', portuguese: 'Vou comer' },
          { spanish: 'Van a llegar tarde', portuguese: 'Vão chegar tarde' },
          { spanish: '¿Qué vas a hacer?', portuguese: 'O que você vai fazer?' },
        ],
      },
      {
        id: 'peri-2',
        rule: 'ESTAR + gerúndio: ação em progresso (estou fazendo)',
        examples: [
          { spanish: 'Estoy trabajando', portuguese: 'Estou trabalhando' },
          { spanish: 'Estaba durmiendo', portuguese: 'Estava dormindo' },
          { spanish: '¿Qué estás haciendo?', portuguese: 'O que você está fazendo?' },
        ],
      },
      {
        id: 'peri-3',
        rule: 'ACABAR DE + infinitivo: ação recém concluída (acabei de fazer)',
        examples: [
          { spanish: 'Acabo de llegar', portuguese: 'Acabei de chegar' },
          { spanish: 'Acaba de salir', portuguese: 'Acabou de sair' },
          { spanish: 'Acabamos de comer', portuguese: 'Acabamos de comer' },
        ],
      },
      {
        id: 'peri-4',
        rule: 'TENER QUE / HAY QUE + infinitivo: obrigação',
        examples: [
          { spanish: 'Tengo que irme', portuguese: 'Tenho que ir' },
          { spanish: 'Hay que estudiar más', portuguese: 'É preciso estudar mais' },
          { spanish: 'Tienes que llamarle', portuguese: 'Você tem que ligar para ele' },
        ],
      },
    ],
  },
  {
    id: 'articulos',
    title: 'Artículos',
    emoji: '📝',
    description: 'Artigos definidos e indefinidos',
    rules: [
      {
        id: 'art-1',
        rule: 'Artigos definidos: el (o), la (a), los (os), las (as)',
        examples: [
          { spanish: 'El libro está en la mesa', portuguese: 'O livro está na mesa' },
          { spanish: 'Los niños juegan en las calles', portuguese: 'As crianças brincam nas ruas' },
        ],
      },
      {
        id: 'art-2',
        rule: 'Artigos indefinidos: un (um), una (uma), unos (uns), unas (umas)',
        examples: [
          { spanish: 'Quiero un café y una tostada', portuguese: 'Quero um café e uma torrada' },
          { spanish: 'Hay unos libros en la estantería', portuguese: 'Há uns livros na estante' },
        ],
      },
      {
        id: 'art-3',
        rule: 'Contração: a + el = al, de + el = del',
        examples: [
          { spanish: 'Voy al supermercado', portuguese: 'Vou ao supermercado' },
          { spanish: 'Vengo del trabajo', portuguese: 'Venho do trabalho' },
        ],
      },
    ],
  },
  {
    id: 'genero',
    title: 'Género',
    emoji: '⚥',
    description: 'Diferenças de gênero entre português e espanhol',
    rules: [
      {
        id: 'gen-1',
        rule: 'Palavras masculinas em espanhol que são femininas em português',
        examples: [
          { spanish: 'El árbol es grande', portuguese: 'A árvore é grande' },
          { spanish: 'El color rojo', portuguese: 'A cor vermelha' },
          { spanish: 'El viaje fue largo', portuguese: 'A viagem foi longa' },
          { spanish: 'El puente está cerrado', portuguese: 'A ponte está fechada' },
        ],
      },
      {
        id: 'gen-2',
        rule: 'Palavras femininas em espanhol que são masculinas em português',
        examples: [
          { spanish: 'La leche está fría', portuguese: 'O leite está frio' },
          { spanish: 'La sal está en la mesa', portuguese: 'O sal está na mesa' },
          { spanish: 'La nariz es grande', portuguese: 'O nariz é grande' },
        ],
      },
      {
        id: 'gen-3',
        rule: 'Palavras terminadas em -aje são masculinas (equivalem a -agem em PT)',
        examples: [
          { spanish: 'El viaje, el paisaje, el mensaje', portuguese: 'A viagem, a paisagem, a mensagem' },
          { spanish: 'El equipaje está listo', portuguese: 'A bagagem está pronta' },
        ],
      },
    ],
  },
  {
    id: 'ser-estar',
    title: 'Ser vs Estar',
    emoji: '🔄',
    description: 'Quando usar ser e quando usar estar',
    rules: [
      {
        id: 'se-1',
        rule: 'SER: características permanentes, identidade, origem, profissão',
        examples: [
          { spanish: 'Soy brasileño', portuguese: 'Sou brasileiro' },
          { spanish: 'Ella es médica', portuguese: 'Ela é médica' },
          { spanish: 'El libro es interesante', portuguese: 'O livro é interessante' },
        ],
      },
      {
        id: 'se-2',
        rule: 'ESTAR: estados temporários, localização, resultado de ação',
        examples: [
          { spanish: 'Estoy cansado', portuguese: 'Estou cansado' },
          { spanish: 'Madrid está en España', portuguese: 'Madri fica/está na Espanha' },
          { spanish: 'La puerta está cerrada', portuguese: 'A porta está fechada' },
        ],
      },
      {
        id: 'se-3',
        rule: 'Mesmo adjetivo muda de significado com SER ou ESTAR',
        examples: [
          { spanish: 'Es listo (é esperto)', portuguese: 'Está listo (está pronto)' },
          { spanish: 'Es aburrido (é chato)', portuguese: 'Está aburrido (está entediado)' },
          { spanish: 'Es malo (é mau)', portuguese: 'Está malo (está doente)' },
        ],
      },
    ],
  },
  {
    id: 'preposiciones',
    title: 'Preposiciones',
    emoji: '➡️',
    description: 'Preposições mais importantes',
    rules: [
      {
        id: 'prep-1',
        rule: 'POR vs PARA: por (causa, meio, troca) vs para (destino, finalidade)',
        examples: [
          { spanish: 'Gracias por tu ayuda', portuguese: 'Obrigado pela sua ajuda' },
          { spanish: 'Este regalo es para ti', portuguese: 'Este presente é para você' },
          { spanish: 'Pagué 10 euros por el libro', portuguese: 'Paguei 10 euros pelo livro' },
          { spanish: 'Estudio para aprender', portuguese: 'Estudo para aprender' },
        ],
      },
      {
        id: 'prep-2',
        rule: 'A: direção, destinatário, hora (+ objeto direto de pessoa)',
        examples: [
          { spanish: 'Voy a Madrid', portuguese: 'Vou a/para Madri' },
          { spanish: 'Llamo a mi madre', portuguese: 'Ligo para minha mãe' },
          { spanish: 'A las ocho de la mañana', portuguese: 'Às oito da manhã' },
        ],
      },
      {
        id: 'prep-3',
        rule: 'EN: lugar (dentro), meio de transporte, tempo',
        examples: [
          { spanish: 'Estoy en casa', portuguese: 'Estou em casa' },
          { spanish: 'Voy en coche / en tren', portuguese: 'Vou de carro / de trem' },
          { spanish: 'En enero hace frío', portuguese: 'Em janeiro faz frio' },
        ],
      },
    ],
  },
  {
    id: 'pronombres',
    title: 'Pronombres',
    emoji: '👤',
    description: 'Pronomes pessoais e de objeto',
    rules: [
      {
        id: 'pron-1',
        rule: 'Pronomes sujeito: yo, tú, él/ella/usted, nosotros, vosotros, ellos/ustedes',
        examples: [
          { spanish: 'Yo trabajo, tú estudias', portuguese: 'Eu trabalho, você estuda' },
          { spanish: 'Nosotros somos amigos', portuguese: 'Nós somos amigos' },
        ],
      },
      {
        id: 'pron-2',
        rule: 'Pronomes objeto direto: me, te, lo/la, nos, os, los/las',
        examples: [
          { spanish: 'Te quiero mucho', portuguese: 'Te amo muito' },
          { spanish: 'Lo veo todos los días', portuguese: 'Eu o vejo todos os dias' },
          { spanish: 'Las compré ayer', portuguese: 'As comprei ontem' },
        ],
      },
      {
        id: 'pron-3',
        rule: 'Pronomes objeto indireto: me, te, le, nos, os, les',
        examples: [
          { spanish: 'Le dije la verdad', portuguese: 'Disse a verdade a ele/ela' },
          { spanish: 'Te traje un regalo', portuguese: 'Trouxe um presente para você' },
          { spanish: 'Les escribo una carta', portuguese: 'Escrevo uma carta para eles' },
        ],
      },
    ],
  },
  {
    id: 'tiempos',
    title: 'Tiempos Verbales',
    emoji: '⏰',
    description: 'Quando usar cada tempo verbal',
    rules: [
      {
        id: 'temp-1',
        rule: 'Pretérito Indefinido: ações concluídas em momento específico do passado',
        examples: [
          { spanish: 'Ayer comí paella', portuguese: 'Ontem comi paella' },
          { spanish: 'El año pasado viajé a España', portuguese: 'No ano passado viajei à Espanha' },
        ],
      },
      {
        id: 'temp-2',
        rule: 'Pretérito Perfecto: ações passadas conectadas ao presente (hoje, esta semana...)',
        examples: [
          { spanish: 'Hoy he trabajado mucho', portuguese: 'Hoje trabalhei muito' },
          { spanish: 'Este mes he leído tres libros', portuguese: 'Este mês li três livros' },
        ],
      },
      {
        id: 'temp-3',
        rule: 'Imperfecto: ações habituais no passado, descrições, ações em progresso',
        examples: [
          { spanish: 'Cuando era niño, jugaba al fútbol', portuguese: 'Quando era criança, jogava futebol' },
          { spanish: 'Hacía sol y los pájaros cantaban', portuguese: 'Fazia sol e os pássaros cantavam' },
        ],
      },
    ],
  },
  {
    id: 'muy-mucho',
    title: 'Muy vs Mucho',
    emoji: '📊',
    description: 'Diferença entre muy e mucho',
    rules: [
      {
        id: 'mm-1',
        rule: 'MUY + adjetivo ou advérbio (nunca varia)',
        examples: [
          { spanish: 'Es muy alto', portuguese: 'É muito alto' },
          { spanish: 'Corre muy rápido', portuguese: 'Corre muito rápido' },
          { spanish: 'Estoy muy cansada', portuguese: 'Estou muito cansada' },
        ],
      },
      {
        id: 'mm-2',
        rule: 'MUCHO + substantivo (varia: mucho/mucha/muchos/muchas)',
        examples: [
          { spanish: 'Tengo mucho trabajo', portuguese: 'Tenho muito trabalho' },
          { spanish: 'Hay muchas personas', portuguese: 'Há muitas pessoas' },
          { spanish: 'Bebo mucha agua', portuguese: 'Bebo muita água' },
        ],
      },
      {
        id: 'mm-3',
        rule: 'MUCHO depois de verbo (advérbio, não varia)',
        examples: [
          { spanish: 'Te quiero mucho', portuguese: 'Te amo muito' },
          { spanish: 'Trabajo mucho', portuguese: 'Trabalho muito' },
        ],
      },
    ],
  },
  {
    id: 'heterotonicos',
    title: 'Heterotônicos',
    emoji: '🎯',
    description: 'Palavras com sílaba tônica diferente',
    rules: [
      {
        id: 'het-1',
        rule: 'Palavras paroxítonas em espanhol, oxítonas em português',
        examples: [
          { spanish: 'TEléfono (te-LÉ-fo-no)', portuguese: 'TeleFOne (te-le-FO-ne)' },
          { spanish: 'DEMOcracia (de-mo-CRA-cia)', portuguese: 'DemoCRAcia' },
          { spanish: 'ALcohol (AL-co-hol)', portuguese: 'ÁlCOOL' },
        ],
      },
      {
        id: 'het-2',
        rule: 'Palavras proparoxítonas em espanhol, paroxítonas em português',
        examples: [
          { spanish: 'aCAdemia (a-ca-DE-mia)', portuguese: 'acaDEmia' },
          { spanish: 'pOlícia → poliCÍa', portuguese: 'poLÍcia' },
          { spanish: 'nÍvel → niVEL', portuguese: 'NÍvel' },
        ],
      },
      {
        id: 'het-3',
        rule: 'Palavras comuns com acento diferente — memorize!',
        examples: [
          { spanish: 'célebre, atmósfera, océano', portuguese: 'celÉbre, atmosfEra, oceAno' },
          { spanish: 'elogio, microfono, heroe', portuguese: 'elOgio, microFOne, herÓi' },
          { spanish: 'nostalgia, alergia, anemia', portuguese: 'nostalGIa, alerGIa, aneMIa' },
        ],
      },
    ],
  },
  {
    id: 'acentuacion',
    title: 'Acentuación',
    emoji: '✏️',
    description: 'Regras de acentuação gráfica',
    rules: [
      {
        id: 'acent-1',
        rule: 'Palavras agudas: acento se terminam em vogal, N ou S',
        examples: [
          { spanish: 'café, sofá, jamás, corazón', portuguese: 'Terminam em vogal/n/s → levam acento' },
          { spanish: 'comer, ciudad, reloj', portuguese: 'Terminam em consoante (exceto n/s) → sem acento' },
        ],
      },
      {
        id: 'acent-2',
        rule: 'Palavras graves (llanas): acento se NÃO terminam em vogal, N ou S',
        examples: [
          { spanish: 'árbol, lápiz, fácil, azúcar', portuguese: 'Terminam em consoante (exceto n/s) → levam acento' },
          { spanish: 'casa, libro, examen', portuguese: 'Terminam em vogal/n/s → sem acento' },
        ],
      },
      {
        id: 'acent-3',
        rule: 'Palavras esdrújulas e sobresdrújulas: SEMPRE levam acento',
        examples: [
          { spanish: 'música, médico, teléfono', portuguese: 'Esdrújulas sempre acentuadas' },
          { spanish: 'dígamelo, cómpratelo', portuguese: 'Sobresdrújulas sempre acentuadas' },
        ],
      },
      {
        id: 'acent-4',
        rule: 'Acento diacrítico: diferencia palavras iguais com significados diferentes',
        examples: [
          { spanish: 'él (ele) vs el (o artigo)', portuguese: 'Pronome vs artigo' },
          { spanish: 'tú (você) vs tu (teu)', portuguese: 'Pronome sujeito vs possessivo' },
          { spanish: 'sí (sim) vs si (se)', portuguese: 'Afirmação vs condicional' },
          { spanish: 'qué/cuándo (pergunta) vs que/cuando', portuguese: 'Interrogativo vs relativo' },
        ],
      },
    ],
  },
  {
    id: 'conectores',
    title: 'Conectores',
    emoji: '🔀',
    description: 'Conjunções e conectores textuais',
    rules: [
      {
        id: 'con-1',
        rule: 'Conectores de adição e contraste',
        examples: [
          { spanish: 'además, también, tampoco', portuguese: 'Além disso, também, tampouco' },
          { spanish: 'sin embargo, no obstante, aunque', portuguese: 'Porém, contudo, embora' },
          { spanish: 'pero, sino (mas sim)', portuguese: 'Mas, senão/mas sim' },
        ],
      },
      {
        id: 'con-2',
        rule: 'Conectores de causa e consequência',
        examples: [
          { spanish: 'porque, ya que, puesto que', portuguese: 'Porque, já que, posto que' },
          { spanish: 'por eso, por lo tanto, así que', portuguese: 'Por isso, portanto, então' },
          { spanish: 'como (causa) + indicativo', portuguese: 'Como chovia, fiquei em casa' },
        ],
      },
      {
        id: 'con-3',
        rule: 'Conectores de tempo e ordem',
        examples: [
          { spanish: 'primero, luego, después, finalmente', portuguese: 'Primeiro, logo, depois, finalmente' },
          { spanish: 'mientras, cuando, antes de que', portuguese: 'Enquanto, quando, antes que' },
          { spanish: 'en cuanto, tan pronto como', portuguese: 'Assim que, tão logo' },
        ],
      },
    ],
  },
];

export interface Connector {
  id: string;
  spanish: string;
  portuguese: string;
  usage: string;
  example: string;
  exampleTranslation: string;
  category: 'causa' | 'contraste' | 'tempo' | 'condicao' | 'adicao' | 'finalidade';
}

export const connectors: Connector[] = [
  // ═══════════════════════════════════════════════════
  // CAUSA
  // ═══════════════════════════════════════════════════
  {
    id: 'con-cau-01',
    spanish: 'porque',
    portuguese: 'porque',
    usage: 'Introduz causa direta. Seguido de indicativo.',
    example: 'No fui al trabajo porque estaba enfermo.',
    exampleTranslation: 'Não fui ao trabalho porque estava doente.',
    category: 'causa',
  },
  {
    id: 'con-cau-02',
    spanish: 'como',
    portuguese: 'como / já que',
    usage: 'Causa conhecida, vai no início da frase.',
    example: 'Como no tenía dinero, no pude pagar.',
    exampleTranslation: 'Como não tinha dinheiro, não pude pagar.',
    category: 'causa',
  },
  {
    id: 'con-cau-03',
    spanish: 'ya que',
    portuguese: 'já que / visto que',
    usage: 'Causa que justifica uma conclusão.',
    example: 'Ya que estás aquí, ayúdame con esto.',
    exampleTranslation: 'Já que está aqui, me ajuda com isso.',
    category: 'causa',
  },
  {
    id: 'con-cau-04',
    spanish: 'puesto que',
    portuguese: 'posto que / uma vez que',
    usage: 'Causa formal, equivale a "dado que".',
    example: 'Puesto que tienes NIE, puedes abrir la cuenta.',
    exampleTranslation: 'Uma vez que tem NIE, pode abrir a conta.',
    category: 'causa',
  },

  // ═══════════════════════════════════════════════════
  // CONTRASTE
  // ═══════════════════════════════════════════════════
  {
    id: 'con-con-01',
    spanish: 'pero',
    portuguese: 'mas',
    usage: 'Contraste simples entre duas ideias.',
    example: 'El piso es pequeño pero está bien ubicado.',
    exampleTranslation: 'O apartamento é pequeno mas bem localizado.',
    category: 'contraste',
  },
  {
    id: 'con-con-02',
    spanish: 'sin embargo',
    portuguese: 'no entanto / porém',
    usage: 'Contraste formal, equivale a "no obstante".',
    example: 'Es caro; sin embargo, lo voy a alquilar.',
    exampleTranslation: 'É caro; no entanto, vou alugar.',
    category: 'contraste',
  },
  {
    id: 'con-con-03',
    spanish: 'aunque',
    portuguese: 'embora / mesmo que',
    usage: 'Contraste concesivo. Com indicativo = fato; com subjuntivo = hipótese.',
    example: 'Aunque llueve, voy a salir.',
    exampleTranslation: 'Embora esteja chovendo, vou sair.',
    category: 'contraste',
  },
  {
    id: 'con-con-04',
    spanish: 'a pesar de (que)',
    portuguese: 'apesar de (que)',
    usage: 'Concessão formal. Com "de que" leva subjuntivo ou indicativo.',
    example: 'A pesar de estar cansado, terminé el informe.',
    exampleTranslation: 'Apesar de estar cansado, terminei o relatório.',
    category: 'contraste',
  },

  // ═══════════════════════════════════════════════════
  // TEMPO
  // ═══════════════════════════════════════════════════
  {
    id: 'con-tem-01',
    spanish: 'cuando',
    portuguese: 'quando',
    usage: 'Tempo simultâneo ou posterior. Futuro = subjuntivo!',
    example: 'Cuando llegues, llámame.',
    exampleTranslation: 'Quando chegar, me liga.',
    category: 'tempo',
  },
  {
    id: 'con-tem-02',
    spanish: 'antes de (que)',
    portuguese: 'antes de (que)',
    usage: 'Anterioridade. Com infinitivo ou subjuntivo.',
    example: 'Llama antes de venir.',
    exampleTranslation: 'Liga antes de vir.',
    category: 'tempo',
  },
  {
    id: 'con-tem-03',
    spanish: 'después de (que)',
    portuguese: 'depois de (que)',
    usage: 'Posterioridade. Com infinitivo ou subjuntivo.',
    example: 'Después de terminar, salimos a cenar.',
    exampleTranslation: 'Depois de terminar, saímos para jantar.',
    category: 'tempo',
  },
  {
    id: 'con-tem-04',
    spanish: 'mientras',
    portuguese: 'enquanto',
    usage: 'Simultaneidade. Com indicativo = fato real.',
    example: 'Mientras esperas, puedes leer la revista.',
    exampleTranslation: 'Enquanto espera, pode ler a revista.',
    category: 'tempo',
  },

  // ═══════════════════════════════════════════════════
  // CONDIÇÃO
  // ═══════════════════════════════════════════════════
  {
    id: 'con-cond-01',
    spanish: 'si',
    portuguese: 'se',
    usage: 'Condicional real (si + presente/futuro). Nunca "si + futuro"!',
    example: 'Si tienes tiempo, ven a verme.',
    exampleTranslation: 'Se tiver tempo, venha me ver.',
    category: 'condicao',
  },
  {
    id: 'con-cond-02',
    spanish: 'a menos que',
    portuguese: 'a menos que',
    usage: 'Condição negativa. Sempre com subjuntivo.',
    example: 'Voy, a menos que llueva mucho.',
    exampleTranslation: 'Vou, a menos que chova muito.',
    category: 'condicao',
  },
  {
    id: 'con-cond-03',
    spanish: 'con tal de que',
    portuguese: 'contanto que / desde que',
    usage: 'Condição positiva. Sempre com subjuntivo.',
    example: 'Acepto el trabajo con tal de que paguen bien.',
    exampleTranslation: 'Aceito o trabalho contanto que paguem bem.',
    category: 'condicao',
  },
  {
    id: 'con-cond-04',
    spanish: 'en caso de (que)',
    portuguese: 'no caso de (que)',
    usage: 'Condição hipotética. Com infinitivo ou subjuntivo.',
    example: 'En caso de emergencia, llama al 112.',
    exampleTranslation: 'Em caso de emergência, ligue para o 112.',
    category: 'condicao',
  },

  // ═══════════════════════════════════════════════════
  // ADIÇÃO
  // ═══════════════════════════════════════════════════
  {
    id: 'con-adi-01',
    spanish: 'además',
    portuguese: 'além disso / ademais',
    usage: 'Adiciona informação reforçando a ideia anterior.',
    example: 'El piso es amplio y, además, tiene garaje.',
    exampleTranslation: 'O apartamento é amplo e, além disso, tem garagem.',
    category: 'adicao',
  },
  {
    id: 'con-adi-02',
    spanish: 'también',
    portuguese: 'também',
    usage: 'Adiciona elemento à enumeração.',
    example: 'Hablo español y también entiendo catalán.',
    exampleTranslation: 'Falo espanhol e também entendo catalão.',
    category: 'adicao',
  },
  {
    id: 'con-adi-03',
    spanish: 'incluso',
    portuguese: 'inclusive / até mesmo',
    usage: 'Adiciona algo surpreendente ou extremo.',
    example: 'Trabaja incluso los fines de semana.',
    exampleTranslation: 'Trabalha inclusive nos finais de semana.',
    category: 'adicao',
  },
  {
    id: 'con-adi-04',
    spanish: 'ni siquiera',
    portuguese: 'nem sequer / nem ao menos',
    usage: 'Negação enfática de adição.',
    example: 'Ni siquiera me llamó para avisar.',
    exampleTranslation: 'Nem sequer me ligou para avisar.',
    category: 'adicao',
  },

  // ═══════════════════════════════════════════════════
  // FINALIDADE
  // ═══════════════════════════════════════════════════
  {
    id: 'con-fin-01',
    spanish: 'para (que)',
    portuguese: 'para (que)',
    usage: 'Finalidade. Com infinitivo (mesmo sujeito) ou subjuntivo (sujeitos diferentes).',
    example: 'Estudio español para encontrar trabajo.',
    exampleTranslation: 'Estudo espanhol para encontrar trabalho.',
    category: 'finalidade',
  },
  {
    id: 'con-fin-02',
    spanish: 'con el fin de (que)',
    portuguese: 'com o objetivo de / a fim de (que)',
    usage: 'Finalidade formal. Uso escrito.',
    example: 'Vine a España con el fin de mejorar mi vida.',
    exampleTranslation: 'Vim à Espanha com o objetivo de melhorar minha vida.',
    category: 'finalidade',
  },
  {
    id: 'con-fin-03',
    spanish: 'a fin de (que)',
    portuguese: 'a fim de (que)',
    usage: 'Finalidade muito formal. Equivale a "con el fin de".',
    example: 'Envíe los documentos a fin de agilizar el proceso.',
    exampleTranslation: 'Envie os documentos a fim de agilizar o processo.',
    category: 'finalidade',
  },
  {
    id: 'con-fin-04',
    spanish: 'con el objetivo de',
    portuguese: 'com o objetivo de',
    usage: 'Finalidade formal. Usado em textos escritos e apresentações.',
    example: 'Hice el curso con el objetivo de conseguir el certificado.',
    exampleTranslation: 'Fiz o curso com o objetivo de conseguir o certificado.',
    category: 'finalidade',
  },
];

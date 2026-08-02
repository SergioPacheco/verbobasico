export interface Refran {
  id: string;
  spanish: string;
  portuguese: string;
  meaning: string;
  usage: string;
  category: 'sabedoria' | 'trabalho' | 'amizade' | 'dinheiro' | 'tempo' | 'amor' | 'vida';
  verbs: Array<{
    word: string;
    infinitive: string;
    translation: string;
  }>;
}

export const refranes: Refran[] = [
  // === SABEDORIA ===
  {
    id: 'ref-01',
    spanish: 'Quien tiene un amigo, tiene un tesoro',
    portuguese: 'Quem tem um amigo, tem um tesouro',
    meaning: 'A verdadeira amizade é mais valiosa que qualquer riqueza material.',
    usage: 'Usado para valorizar amizades genuínas.',
    category: 'amizade',
    verbs: [
      { word: 'tiene', infinitive: 'tener', translation: 'tem' },
    ],
  },
  {
    id: 'ref-02',
    spanish: 'No es oro todo lo que reluce',
    portuguese: 'Nem tudo que reluz é ouro',
    meaning: 'As aparências enganam. Algo pode parecer valioso mas não ser.',
    usage: 'Para alertar sobre julgamentos superficiais.',
    category: 'sabedoria',
    verbs: [
      { word: 'es', infinitive: 'ser', translation: 'é' },
      { word: 'reluce', infinitive: 'relucir', translation: 'reluz/brilha' },
    ],
  },
  {
    id: 'ref-03',
    spanish: 'Más vale pájaro en mano que ciento volando',
    portuguese: 'Mais vale um pássaro na mão do que cem voando',
    meaning: 'É melhor ter algo garantido do que arriscar por algo incerto.',
    usage: 'Para aconselhar prudência em decisões.',
    category: 'sabedoria',
    verbs: [
      { word: 'vale', infinitive: 'valer', translation: 'vale' },
      { word: 'volando', infinitive: 'volar', translation: 'voando' },
    ],
  },
  {
    id: 'ref-04',
    spanish: 'El que mucho abarca, poco aprieta',
    portuguese: 'Quem muito abarca, pouco aperta',
    meaning: 'Quem tenta fazer muitas coisas ao mesmo tempo não faz nenhuma bem.',
    usage: 'Para aconselhar foco e priorização.',
    category: 'trabalho',
    verbs: [
      { word: 'abarca', infinitive: 'abarcar', translation: 'abarca/abrange' },
      { word: 'aprieta', infinitive: 'apretar', translation: 'aperta' },
    ],
  },
  {
    id: 'ref-05',
    spanish: 'A quien madruga, Dios le ayuda',
    portuguese: 'Deus ajuda quem cedo madruga',
    meaning: 'Quem se esforça e age cedo tem mais chances de sucesso.',
    usage: 'Para incentivar proatividade.',
    category: 'trabalho',
    verbs: [
      { word: 'madruga', infinitive: 'madrugar', translation: 'madruga' },
      { word: 'ayuda', infinitive: 'ayudar', translation: 'ajuda' },
    ],
  },
  {
    id: 'ref-06',
    spanish: 'Ojos que no ven, corazón que no siente',
    portuguese: 'O que os olhos não veem, o coração não sente',
    meaning: 'É mais fácil ignorar problemas quando não os presenciamos.',
    usage: 'Sobre distância emocional.',
    category: 'amor',
    verbs: [
      { word: 'ven', infinitive: 'ver', translation: 'veem' },
      { word: 'siente', infinitive: 'sentir', translation: 'sente' },
    ],
  },
  {
    id: 'ref-07',
    spanish: 'Dime con quién andas y te diré quién eres',
    portuguese: 'Dize-me com quem andas e te direi quem és',
    meaning: 'Somos influenciados pelas pessoas com quem convivemos.',
    usage: 'Para alertar sobre más companhias.',
    category: 'amizade',
    verbs: [
      { word: 'Dime', infinitive: 'decir', translation: 'diz-me' },
      { word: 'andas', infinitive: 'andar', translation: 'andas' },
      { word: 'diré', infinitive: 'decir', translation: 'direi' },
      { word: 'eres', infinitive: 'ser', translation: 'és' },
    ],
  },
  {
    id: 'ref-08',
    spanish: 'Cuando el río suena, agua lleva',
    portuguese: 'Quando o rio faz barulho, água leva',
    meaning: 'Se há rumores, geralmente há alguma verdade por trás.',
    usage: 'Sobre boatos e fofocas.',
    category: 'sabedoria',
    verbs: [
      { word: 'suena', infinitive: 'sonar', translation: 'soa/faz barulho' },
      { word: 'lleva', infinitive: 'llevar', translation: 'leva' },
    ],
  },
  {
    id: 'ref-09',
    spanish: 'No hay mal que por bien no venga',
    portuguese: 'Não há mal que não venha para bem',
    meaning: 'Mesmo situações ruins podem trazer algo positivo.',
    usage: 'Para consolar em momentos difíceis.',
    category: 'vida',
    verbs: [
      { word: 'hay', infinitive: 'haber', translation: 'há' },
      { word: 'venga', infinitive: 'venir', translation: 'venha' },
    ],
  },
  {
    id: 'ref-10',
    spanish: 'Más vale tarde que nunca',
    portuguese: 'Antes tarde do que nunca',
    meaning: 'É melhor fazer algo atrasado do que não fazer.',
    usage: 'Para incentivar a ação mesmo tardia.',
    category: 'tempo',
    verbs: [
      { word: 'vale', infinitive: 'valer', translation: 'vale' },
    ],
  },
  {
    id: 'ref-11',
    spanish: 'En boca cerrada no entran moscas',
    portuguese: 'Em boca fechada não entram moscas',
    meaning: 'É melhor ficar calado para evitar problemas.',
    usage: 'Para aconselhar discrição.',
    category: 'sabedoria',
    verbs: [
      { word: 'cerrada', infinitive: 'cerrar', translation: 'fechada' },
      { word: 'entran', infinitive: 'entrar', translation: 'entram' },
    ],
  },
  {
    id: 'ref-12',
    spanish: 'A caballo regalado no le mires el diente',
    portuguese: 'A cavalo dado não se olha os dentes',
    meaning: 'Não critique presentes ou favores gratuitos.',
    usage: 'Sobre gratidão.',
    category: 'sabedoria',
    verbs: [
      { word: 'regalado', infinitive: 'regalar', translation: 'dado/presenteado' },
      { word: 'mires', infinitive: 'mirar', translation: 'olhes' },
    ],
  },
  {
    id: 'ref-13',
    spanish: 'Quien mucho habla, mucho yerra',
    portuguese: 'Quem muito fala, muito erra',
    meaning: 'Falar demais aumenta a chance de cometer erros.',
    usage: 'Para aconselhar cautela ao falar.',
    category: 'sabedoria',
    verbs: [
      { word: 'habla', infinitive: 'hablar', translation: 'fala' },
      { word: 'yerra', infinitive: 'errar', translation: 'erra' },
    ],
  },
  {
    id: 'ref-14',
    spanish: 'Agua que no has de beber, déjala correr',
    portuguese: 'Água que não hás de beber, deixa-a correr',
    meaning: 'Não se meta em assuntos que não são da sua conta.',
    usage: 'Sobre não interferir na vida alheia.',
    category: 'sabedoria',
    verbs: [
      { word: 'has', infinitive: 'haber', translation: 'hás' },
      { word: 'beber', infinitive: 'beber', translation: 'beber' },
      { word: 'déjala', infinitive: 'dejar', translation: 'deixa-a' },
      { word: 'correr', infinitive: 'correr', translation: 'correr' },
    ],
  },
  {
    id: 'ref-15',
    spanish: 'El tiempo es oro',
    portuguese: 'Tempo é dinheiro',
    meaning: 'O tempo é valioso e não deve ser desperdiçado.',
    usage: 'Para valorizar o tempo.',
    category: 'tempo',
    verbs: [
      { word: 'es', infinitive: 'ser', translation: 'é' },
    ],
  },
  {
    id: 'ref-16',
    spanish: 'Haz bien y no mires a quién',
    portuguese: 'Faça o bem sem olhar a quem',
    meaning: 'Ajude os outros sem esperar recompensa.',
    usage: 'Sobre generosidade.',
    category: 'vida',
    verbs: [
      { word: 'Haz', infinitive: 'hacer', translation: 'faz' },
      { word: 'mires', infinitive: 'mirar', translation: 'olhes' },
    ],
  },
  {
    id: 'ref-17',
    spanish: 'Quien siembra vientos, recoge tempestades',
    portuguese: 'Quem semeia ventos, colhe tempestades',
    meaning: 'Ações negativas trazem consequências negativas.',
    usage: 'Sobre consequências de más ações.',
    category: 'vida',
    verbs: [
      { word: 'siembra', infinitive: 'sembrar', translation: 'semeia' },
      { word: 'recoge', infinitive: 'recoger', translation: 'colhe' },
    ],
  },
  {
    id: 'ref-18',
    spanish: 'De tal palo, tal astilla',
    portuguese: 'Tal pai, tal filho',
    meaning: 'Os filhos costumam ser parecidos com os pais.',
    usage: 'Sobre herança de comportamento.',
    category: 'vida',
    verbs: [],
  },
  {
    id: 'ref-19',
    spanish: 'Perro que ladra no muerde',
    portuguese: 'Cão que ladra não morde',
    meaning: 'Quem ameaça muito raramente cumpre.',
    usage: 'Sobre ameaças vazias.',
    category: 'sabedoria',
    verbs: [
      { word: 'ladra', infinitive: 'ladrar', translation: 'ladra' },
      { word: 'muerde', infinitive: 'morder', translation: 'morde' },
    ],
  },
  {
    id: 'ref-20',
    spanish: 'Cría cuervos y te sacarán los ojos',
    portuguese: 'Cria corvos e eles te arrancarão os olhos',
    meaning: 'Quem ajuda ingratos pode ser traído por eles.',
    usage: 'Sobre ingratidão.',
    category: 'vida',
    verbs: [
      { word: 'Cría', infinitive: 'criar', translation: 'cria' },
      { word: 'sacarán', infinitive: 'sacar', translation: 'arrancarão' },
    ],
  },
  {
    id: 'ref-21',
    spanish: 'Al mal tiempo, buena cara',
    portuguese: 'Ao mau tempo, boa cara',
    meaning: 'Enfrente os problemas com otimismo.',
    usage: 'Para incentivar resiliência.',
    category: 'vida',
    verbs: [],
  },
  {
    id: 'ref-22',
    spanish: 'Cada loco con su tema',
    portuguese: 'Cada louco com sua mania',
    meaning: 'Cada pessoa tem suas obsessões e preferências.',
    usage: 'Sobre respeitar diferenças.',
    category: 'vida',
    verbs: [],
  },
  {
    id: 'ref-23',
    spanish: 'Donde hay humo, hay fuego',
    portuguese: 'Onde há fumaça, há fogo',
    meaning: 'Se há indícios, provavelmente há algo acontecendo.',
    usage: 'Sobre investigar suspeitas.',
    category: 'sabedoria',
    verbs: [
      { word: 'hay', infinitive: 'haber', translation: 'há' },
    ],
  },
  {
    id: 'ref-24',
    spanish: 'El que ríe último, ríe mejor',
    portuguese: 'Quem ri por último, ri melhor',
    meaning: 'A vitória final é a que importa.',
    usage: 'Sobre paciência e perseverança.',
    category: 'vida',
    verbs: [
      { word: 'ríe', infinitive: 'reír', translation: 'ri' },
    ],
  },
  {
    id: 'ref-25',
    spanish: 'Más sabe el diablo por viejo que por diablo',
    portuguese: 'Mais sabe o diabo por velho que por diabo',
    meaning: 'A experiência ensina mais que qualquer coisa.',
    usage: 'Sobre valorizar a experiência.',
    category: 'sabedoria',
    verbs: [
      { word: 'sabe', infinitive: 'saber', translation: 'sabe' },
    ],
  },
];

export const REFRAN_CATEGORIES: Record<string, { emoji: string; name: string }> = {
  sabedoria: { emoji: '🦉', name: 'Sabedoria' },
  trabalho: { emoji: '💼', name: 'Trabalho' },
  amizade: { emoji: '🤝', name: 'Amizade' },
  dinheiro: { emoji: '💰', name: 'Dinheiro' },
  tempo: { emoji: '⏰', name: 'Tempo' },
  amor: { emoji: '❤️', name: 'Amor' },
  vida: { emoji: '🌟', name: 'Vida' },
};

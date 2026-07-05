export interface Periphrasis {
  id: string;
  structure: string;
  meaning: string;
  example: string;
  exampleTranslation: string;
  usage: string;
}

export const periphrasisList: Periphrasis[] = [
  {
    id: 'peri-01',
    structure: 'ir a + infinitivo',
    meaning: 'Futuro próximo / intenção imediata',
    example: 'Voy a pedir el NIE esta semana.',
    exampleTranslation: 'Vou pedir o NIE essa semana.',
    usage: 'Equivale a "vou + infinitivo" em português. Muito mais usado que o futuro simples na fala.',
  },
  {
    id: 'peri-02',
    structure: 'acabar de + infinitivo',
    meaning: 'Ação muito recente (acabar de fazer)',
    example: 'Acabo de llegar al trabajo.',
    exampleTranslation: 'Acabei de chegar ao trabalho.',
    usage: 'Indica que algo aconteceu há pouco tempo. No imperfecto: "acababa de salir" = tinha acabado de sair.',
  },
  {
    id: 'peri-03',
    structure: 'tener que + infinitivo',
    meaning: 'Obrigação pessoal (ter que fazer)',
    example: 'Tengo que renovar mi tarjeta de residencia.',
    exampleTranslation: 'Tenho que renovar meu cartão de residência.',
    usage: 'Obrigação subjetiva, pessoal. Mais forte que "deber". Equivale a "ter que" em português.',
  },
  {
    id: 'peri-04',
    structure: 'hay que + infinitivo',
    meaning: 'Obrigação impessoal (é preciso / é necessário)',
    example: 'Hay que pedir cita previa para el médico.',
    exampleTranslation: 'É preciso marcar horário para o médico.',
    usage: 'Só existe na 3ª pessoa singular. Não tem sujeito — é impessoal. "Hay que" = "é necessário que".',
  },
  {
    id: 'peri-05',
    structure: 'llevar + gerúndio',
    meaning: 'Duração de uma ação em curso',
    example: 'Llevo dos años viviendo en España.',
    exampleTranslation: 'Estou há dois anos morando na Espanha.',
    usage: 'Traduz "faz X tempo que" + presente. Muito comum para falar de experiência como imigrante.',
  },
  {
    id: 'peri-06',
    structure: 'seguir + gerúndio',
    meaning: 'Continuidade de uma ação (continuar fazendo)',
    example: 'Sigo buscando trabajo, pero es difícil.',
    exampleTranslation: 'Continuo procurando trabalho, mas é difícil.',
    usage: 'Indica que a ação não parou. Equivale a "continuar/seguir + gerúndio" em português.',
  },
  {
    id: 'peri-07',
    structure: 'dejar de + infinitivo',
    meaning: 'Parar de fazer algo',
    example: 'Tuve que dejar de fumar por el médico.',
    exampleTranslation: 'Tive que parar de fumar por causa do médico.',
    usage: 'Indica interrupção de um hábito ou ação. "Dejó de venir" = parou de vir.',
  },
  {
    id: 'peri-08',
    structure: 'volver a + infinitivo',
    meaning: 'Repetição de uma ação (voltar a fazer)',
    example: 'Volví a leer el contrato antes de firmar.',
    exampleTranslation: 'Voltei a ler o contrato antes de assinar.',
    usage: 'Indica que a ação se repete. "Vuelve a pasar" = acontece de novo.',
  },
  {
    id: 'peri-09',
    structure: 'empezar a + infinitivo',
    meaning: 'Início de uma ação (começar a fazer)',
    example: 'Empecé a estudiar español hace tres años.',
    exampleTranslation: 'Comecei a estudar espanhol há três anos.',
    usage: 'Marca o início de um processo. "Empieza a llover" = começa a chover.',
  },
  {
    id: 'peri-10',
    structure: 'ponerse a + infinitivo',
    meaning: 'Início súbito / repentino de uma ação',
    example: 'Se puso a llorar en medio de la entrevista.',
    exampleTranslation: 'Começou a chorar no meio da entrevista.',
    usage: 'Implica início inesperado ou abrupto. Mais intenso que "empezar a".',
  },
  {
    id: 'peri-11',
    structure: 'estar a punto de + infinitivo',
    meaning: 'Prestes a fazer algo / na iminência de',
    example: 'Estaba a punto de salir cuando llegaste.',
    exampleTranslation: 'Estava prestes a sair quando você chegou.',
    usage: 'Indica que a ação estava muito próxima de acontecer. Equivale a "estar a ponto de".',
  },
  {
    id: 'peri-12',
    structure: 'soler + infinitivo',
    meaning: 'Hábito / costume (costuma fazer)',
    example: 'Suelo desayunar café con tostadas.',
    exampleTranslation: 'Costumo tomar café da manhã com torradas.',
    usage: 'Expressa hábito presente ou passado (solía = costumava). Não existe no futuro.',
  },
];

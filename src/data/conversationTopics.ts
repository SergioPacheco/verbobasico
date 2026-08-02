export interface VocabularyItem {
  word: string;
  translation: string;
}

export interface ConversationQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface ConversationTopic {
  id: string;
  name: string;
  emoji: string;
  vocabulary: VocabularyItem[];
  questions: ConversationQuestion[];
}

export const conversationTopics: ConversationTopic[] = [
  {
    id: 'dinero',
    name: 'Dinero',
    emoji: '💰',
    vocabulary: [
      { word: 'Ahorrar', translation: 'Poupar/Economizar' },
      { word: 'Gastar', translation: 'Gastar' },
      { word: 'Gastos', translation: 'Despesas' },
      { word: 'Pagar', translation: 'Pagar' },
      { word: 'Comprar', translation: 'Comprar' },
      { word: 'Vender', translation: 'Vender' },
      { word: 'Ganar', translation: 'Ganhar' },
      { word: 'Invertir', translation: 'Investir' },
      { word: 'Donar', translation: 'Doar' },
      { word: 'Presupuesto', translation: 'Orçamento' },
      { word: 'Ingresos', translation: 'Receitas/Rendimentos' },
      { word: 'Cuenta bancaria', translation: 'Conta bancária' },
      { word: 'Sueldo', translation: 'Salário' },
      { word: 'Riqueza', translation: 'Riqueza' },
      { word: 'Pobreza', translation: 'Pobreza' },
      { word: 'Deuda', translation: 'Dívida' },
      { word: 'Recaudar fondos', translation: 'Arrecadar fundos' },
    ],
    questions: [
      {
        id: 'dinero-1',
        question: '¿Qué se te viene a la cabeza cuando escuchas la palabra «dinero»?',
        answer: 'Cuando escucho la palabra dinero, pienso en ahorrar, invertir, tener una buena cuenta bancaria y ganar un buen sueldo.',
      },
      {
        id: 'dinero-2',
        question: '¿Qué tan importante es el dinero para ti?',
        answer: 'Es muy importante, pero no lo es todo. El dinero me ayuda a pagar mis gastos, ahorrar y tener una mejor calidad de vida.',
      },
      {
        id: 'dinero-3',
        question: '¿Crees que las personas con mucho dinero son más atractivas?',
        answer: 'No necesariamente. La riqueza no hace que una persona sea mejor. Prefiero alguien honesto que alguien simplemente rico.',
      },
      {
        id: 'dinero-4',
        question: '¿Cómo sería la vida en un mundo sin dinero?',
        answer: 'Sería muy diferente. No tendríamos que pagar, comprar o vender, pero habría otros sistemas para intercambiar cosas.',
      },
      {
        id: 'dinero-5',
        question: '¿Con qué frecuencia piensas en el dinero?',
        answer: 'Pienso en el dinero todos los días porque necesito controlar mis gastos, mis ingresos y mi presupuesto.',
      },
      {
        id: 'dinero-6',
        question: '¿Qué significa la expresión «el dinero no cae del cielo»? ¿Cómo sería la vida si el dinero creciera en los árboles?',
        answer: 'Significa que hay que trabajar para ganar dinero. Si el dinero creciera en los árboles, nadie tendría deudas y todo sería mucho más fácil.',
      },
      {
        id: 'dinero-7',
        question: '¿Quién y por qué podría decir «acaso estoy hecho de dinero»? ¿Alguna vez has dicho algo parecido?',
        answer: 'Lo dice una persona cuando alguien le pide gastar mucho dinero. Sí, alguna vez dije algo parecido cuando tenía muchos gastos.',
      },
      {
        id: 'dinero-8',
        question: '¿Cómo cambiaría el mundo si todo el dinero se repartiera por igual entre todas las personas?',
        answer: 'Habría menos pobreza, pero con el tiempo algunas personas volverían a crear riqueza porque ahorrarían e invertirían mejor.',
      },
      {
        id: 'dinero-9',
        question: '¿Cuál crees que es la mejor forma de ganar mucho dinero?',
        answer: 'Creo que la mejor forma es estudiar, trabajar duro, invertir con inteligencia y controlar los gastos.',
      },
      {
        id: 'dinero-10',
        question: '¿Alguna vez has recaudado dinero para una causa benéfica o una ONG?',
        answer: 'Sí. Una vez ayudé a recaudar fondos para una ONG y también decidí donar dinero porque quería ayudar a otras personas.',
      },
    ],
  },
  {
    id: 'bebida',
    name: 'Bebida',
    emoji: '🍷',
    vocabulary: [
      { word: 'Frecuencia', translation: 'Frequência' },
      { word: 'Exceso', translation: 'Excesso' },
      { word: 'Consumir', translation: 'Consumir' },
      { word: 'Efectos', translation: 'Efeitos' },
      { word: 'Permitir', translation: 'Permitir' },
      { word: 'Gobierno', translation: 'Governo' },
      { word: 'Leyes', translation: 'Leis' },
      { word: 'Estricto', translation: 'Rigoroso/Estrito' },
      { word: 'Comportamiento', translation: 'Comportamento' },
      { word: 'Personalidad', translation: 'Personalidade' },
      { word: 'Rostro', translation: 'Rosto' },
      { word: 'Popular', translation: 'Popular' },
      { word: 'Cultura', translation: 'Cultura' },
      { word: 'Papel', translation: 'Papel/Função' },
      { word: 'Riesgo', translation: 'Risco' },
      { word: 'Saludable', translation: 'Saudável' },
      { word: 'Causa', translation: 'Causa' },
      { word: 'Consecuencia', translation: 'Consequência' },
      { word: 'Moderación', translation: 'Moderação' },
    ],
    questions: [
      {
        id: 'bebida-1',
        question: '¿Cuál es tu bebida alcohólica favorita?',
        answer: 'Mi bebida alcohólica favorita es el vino tinto. Me gusta porque tiene un sabor agradable y combina muy bien con una buena comida.',
      },
      {
        id: 'bebida-2',
        question: '¿Con qué frecuencia bebes?',
        answer: 'Bebo muy de vez en cuando, normalmente solo en reuniones familiares, con amigos o en alguna celebración especial.',
      },
      {
        id: 'bebida-3',
        question: '¿Alguna vez... / Con qué frecuencia bebes en exceso?',
        answer: 'No, nunca bebo en exceso. Prefiero disfrutar de una o dos copas y mantener siempre el control.',
      },
      {
        id: 'bebida-4',
        question: '¿Por qué consumes bebidas alcohólicas?',
        answer: 'Principalmente por el aspecto social. Me gusta brindar con amigos o disfrutar de una copa durante una cena especial, pero no siento la necesidad de beber con frecuencia.',
      },
      {
        id: 'bebida-5',
        question: '¿Es el alcohol una droga?',
        answer: 'Sí. Aunque sea legal en muchos países, el alcohol es una droga porque puede causar dependencia y afectar el comportamiento y la salud.',
      },
      {
        id: 'bebida-6',
        question: '¿Deberían los gobiernos permitir que la gente consuma productos que vuelven violenta a la gente?',
        answer: 'Creo que los gobiernos deben regular estos productos de manera responsable. El problema no es solo el producto, sino también el abuso y la falta de educación sobre su consumo.',
      },
      {
        id: 'bebida-7',
        question: '¿Son demasiado estrictas las leyes sobre conducir bajo los efectos del alcohol en tu país?',
        answer: 'No, creo que son necesarias. Conducir después de beber pone en riesgo la vida del conductor y de muchas personas inocentes.',
      },
      {
        id: 'bebida-8',
        question: '¿Cómo cambia el alcohol tu comportamiento, tu personalidad y tu rostro?',
        answer: 'En mi caso, casi no noto cambios porque bebo muy poco. Algunas personas se vuelven más habladoras o más relajadas, pero el exceso puede provocar comportamientos irresponsables.',
      },
      {
        id: 'bebida-9',
        question: '¿Cuáles son las formas de alcohol más populares en tu país?',
        answer: 'En Brasil son muy populares la cerveza, la caipiriña, el vino y también bebidas destiladas como el whisky y el vodka.',
      },
      {
        id: 'bebida-10',
        question: '¿Qué papel juega el alcohol en la cultura de tu país?',
        answer: 'El alcohol está muy presente en reuniones familiares, fiestas, cumpleaños, conciertos y celebraciones como el Carnaval. Sin embargo, cada vez hay más conciencia sobre la importancia de beber con moderación.',
      },
    ],
  },
];

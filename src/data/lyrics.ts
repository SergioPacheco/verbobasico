import type { LyricEntry } from '../types';

export const lyrics: LyricEntry[] = [
  {
    id: 'lyric-01',
    title: 'Vivir Mi Vida',
    artist: 'Marc Anthony',
    type: 'musica',
    context: 'Música muito popular na Espanha — sobre viver o momento e superar dificuldades.',
    translation: 'Vou rir, vou dançar, viver minha vida. A vida é um carnaval e as penas se vão cantando.',
    lines: [
      {
        text: 'Voy a reír, voy a bailar',
        verbs: [
          { word: 'Voy', infinitive: 'ir', tense: 'presente', pronoun: 'yo', translation: 'vou' },
          { word: 'reír', infinitive: 'reír', tense: 'presente', pronoun: 'yo', translation: 'rir' },
          { word: 'bailar', infinitive: 'bailar', tense: 'presente', pronoun: 'yo', translation: 'dançar' },
        ],
      },
      {
        text: 'Vivir mi vida, la la la la',
        verbs: [
          { word: 'Vivir', infinitive: 'vivir', tense: 'presente', pronoun: 'yo', translation: 'viver' },
        ],
      },
      {
        text: 'Voy a reír, voy a gozar',
        verbs: [
          { word: 'Voy', infinitive: 'ir', tense: 'presente', pronoun: 'yo', translation: 'vou' },
          { word: 'gozar', infinitive: 'gozar', tense: 'presente', pronoun: 'yo', translation: 'aproveitar' },
        ],
      },
      {
        text: 'Vivir mi vida, la la la la',
        verbs: [
          { word: 'Vivir', infinitive: 'vivir', tense: 'presente', pronoun: 'yo', translation: 'viver' },
        ],
      },
    ],
  },
  {
    id: 'lyric-02',
    title: 'La Vida Es Un Carnaval',
    artist: 'Celia Cruz',
    type: 'musica',
    context: 'Clássico latino — frases do cotidiano sobre superar tristezas cantando.',
    translation: 'Todo aquele que pensa que a vida é desigual, tem que saber que não é assim, que a vida é um carnaval.',
    lines: [
      {
        text: 'Todo aquel que piense que la vida es desigual',
        verbs: [
          { word: 'piense', infinitive: 'pensar', tense: 'presente', pronoun: 'el', translation: 'pense' },
          { word: 'es', infinitive: 'ser', tense: 'presente', pronoun: 'el', translation: 'é' },
        ],
      },
      {
        text: 'Tiene que saber que no es así',
        verbs: [
          { word: 'Tiene', infinitive: 'tener', tense: 'presente', pronoun: 'el', translation: 'tem' },
          { word: 'saber', infinitive: 'saber', tense: 'presente', pronoun: 'el', translation: 'saber' },
          { word: 'es', infinitive: 'ser', tense: 'presente', pronoun: 'el', translation: 'é' },
        ],
      },
      {
        text: 'Que la vida es un carnaval',
        verbs: [
          { word: 'es', infinitive: 'ser', tense: 'presente', pronoun: 'el', translation: 'é' },
        ],
      },
      {
        text: 'Y las penas se van cantando',
        verbs: [
          { word: 'van', infinitive: 'ir', tense: 'presente', pronoun: 'ellos', translation: 'vão' },
        ],
      },
    ],
  },
  {
    id: 'lyric-03',
    title: 'Me Gustas Tú',
    artist: 'Manu Chao',
    type: 'musica',
    context: 'Música que TODO brasileiro ouve nos bares da Espanha. Ótima para praticar "me gusta".',
    translation: 'Me agrada andar de avião, me agrada viajar, me agrada a manhã, me agrada o vento, me agradas tu.',
    lines: [
      {
        text: 'Me gusta los aviones, me gustas tú',
        verbs: [
          { word: 'gusta', infinitive: 'gustar', tense: 'presente', pronoun: 'el', translation: 'agrada' },
          { word: 'gustas', infinitive: 'gustar', tense: 'presente', pronoun: 'tu', translation: 'agradas' },
        ],
      },
      {
        text: 'Me gusta viajar, me gustas tú',
        verbs: [
          { word: 'gusta', infinitive: 'gustar', tense: 'presente', pronoun: 'el', translation: 'agrada' },
          { word: 'viajar', infinitive: 'viajar', tense: 'presente', pronoun: 'yo', translation: 'viajar' },
          { word: 'gustas', infinitive: 'gustar', tense: 'presente', pronoun: 'tu', translation: 'agradas' },
        ],
      },
      {
        text: 'Me gusta la mañana, me gustas tú',
        verbs: [
          { word: 'gusta', infinitive: 'gustar', tense: 'presente', pronoun: 'el', translation: 'agrada' },
          { word: 'gustas', infinitive: 'gustar', tense: 'presente', pronoun: 'tu', translation: 'agradas' },
        ],
      },
      {
        text: 'Me gusta el viento, me gustas tú',
        verbs: [
          { word: 'gusta', infinitive: 'gustar', tense: 'presente', pronoun: 'el', translation: 'agrada' },
          { word: 'gustas', infinitive: 'gustar', tense: 'presente', pronoun: 'tu', translation: 'agradas' },
        ],
      },
    ],
  },
  {
    id: 'lyric-04',
    title: 'Caminante No Hay Camino',
    artist: 'Antonio Machado (poesia)',
    type: 'poesia',
    context: 'Poesia famosíssima de Machado — todo espanhol conhece. Usa presente e pretérito de forma linda.',
    translation: 'Caminhante, não há caminho, o caminho se faz ao andar. Ao andar se faz o caminho, e ao olhar para trás se vê a trilha que nunca se voltará a pisar.',
    lines: [
      {
        text: 'Caminante, no hay camino',
        verbs: [
          { word: 'hay', infinitive: 'haber', tense: 'presente', pronoun: 'el', translation: 'há/existe' },
        ],
      },
      {
        text: 'Se hace camino al andar',
        verbs: [
          { word: 'hace', infinitive: 'hacer', tense: 'presente', pronoun: 'el', translation: 'faz' },
        ],
      },
      {
        text: 'Al andar se hace camino',
        verbs: [
          { word: 'hace', infinitive: 'hacer', tense: 'presente', pronoun: 'el', translation: 'faz' },
        ],
      },
      {
        text: 'Y al volver la vista atrás',
        verbs: [
          { word: 'volver', infinitive: 'volver', tense: 'presente', pronoun: 'el', translation: 'voltar' },
        ],
      },
      {
        text: 'Se ve la senda que nunca se ha de volver a pisar',
        verbs: [
          { word: 've', infinitive: 'ver', tense: 'presente', pronoun: 'el', translation: 'vê' },
          { word: 'ha', infinitive: 'haber', tense: 'presente', pronoun: 'el', translation: 'há de' },
          { word: 'pisar', infinitive: 'pisar', tense: 'presente', pronoun: 'el', translation: 'pisar' },
        ],
      },
    ],
  },
  {
    id: 'lyric-05',
    title: 'Bailando',
    artist: 'Enrique Iglesias',
    type: 'musica',
    context: 'Hit mundial — usa gerúndio e presente o tempo todo. Perfeita para treinar o presente.',
    translation: 'Com o teu corpo suave dançando, tu és o imã e eu sou o metal, vou me aproximando e vou armando o plano.',
    lines: [
      {
        text: 'Yo te miro y se me corta la respiración',
        verbs: [
          { word: 'miro', infinitive: 'mirar', tense: 'presente', pronoun: 'yo', translation: 'olho' },
          { word: 'corta', infinitive: 'cortar', tense: 'presente', pronoun: 'el', translation: 'corta' },
        ],
      },
      {
        text: 'Tú me miras y me sube la temperatura',
        verbs: [
          { word: 'miras', infinitive: 'mirar', tense: 'presente', pronoun: 'tu', translation: 'olhas' },
          { word: 'sube', infinitive: 'subir', tense: 'presente', pronoun: 'el', translation: 'sobe' },
        ],
      },
      {
        text: 'Tú eres el imán y yo soy el metal',
        verbs: [
          { word: 'eres', infinitive: 'ser', tense: 'presente', pronoun: 'tu', translation: 'és' },
          { word: 'soy', infinitive: 'ser', tense: 'presente', pronoun: 'yo', translation: 'sou' },
        ],
      },
      {
        text: 'Me voy acercando y voy armando el plan',
        verbs: [
          { word: 'voy', infinitive: 'ir', tense: 'presente', pronoun: 'yo', translation: 'vou' },
          { word: 'voy', infinitive: 'ir', tense: 'presente', pronoun: 'yo', translation: 'vou' },
        ],
      },
    ],
  },
  {
    id: 'lyric-06',
    title: 'Recuérdame (Coco)',
    artist: 'Canção do filme Coco',
    type: 'musica',
    context: 'Música do filme Coco da Pixar — usa imperativo e futuro. Muito emocional e fácil de cantar.',
    translation: 'Lembre de mim, hoje tenho que ir embora. Lembre de mim, não chores por favor. Mesmo que eu esteja longe de você, guarde-me no seu coração.',
    lines: [
      {
        text: 'Recuérdame, hoy me tengo que ir, mi amor',
        verbs: [
          { word: 'Recuérdame', infinitive: 'recordar', tense: 'presente', pronoun: 'tu', translation: 'lembra de mim' },
          { word: 'tengo', infinitive: 'tener', tense: 'presente', pronoun: 'yo', translation: 'tenho' },
          { word: 'ir', infinitive: 'ir', tense: 'presente', pronoun: 'yo', translation: 'ir' },
        ],
      },
      {
        text: 'Recuérdame, no llores por favor',
        verbs: [
          { word: 'Recuérdame', infinitive: 'recordar', tense: 'presente', pronoun: 'tu', translation: 'lembra de mim' },
          { word: 'llores', infinitive: 'llorar', tense: 'presente', pronoun: 'tu', translation: 'chores' },
        ],
      },
      {
        text: 'Aunque yo esté lejos de ti',
        verbs: [
          { word: 'esté', infinitive: 'estar', tense: 'presente', pronoun: 'yo', translation: 'esteja' },
        ],
      },
      {
        text: 'Guárdame en tu corazón',
        verbs: [
          { word: 'Guárdame', infinitive: 'guardar', tense: 'presente', pronoun: 'tu', translation: 'guarda-me' },
        ],
      },
    ],
  },
  {
    id: 'lyric-07',
    title: 'Refranes Españoles',
    artist: 'Ditos populares',
    type: 'refran',
    context: 'Refranes (provérbios) que os espanhóis usam no dia a dia. Ótimos para fixar verbos em contexto.',
    translation: 'Provérbios espanhóis populares com verbos essenciais.',
    lines: [
      {
        text: 'Quien tiene un amigo, tiene un tesoro',
        verbs: [
          { word: 'tiene', infinitive: 'tener', tense: 'presente', pronoun: 'el', translation: 'tem' },
          { word: 'tiene', infinitive: 'tener', tense: 'presente', pronoun: 'el', translation: 'tem' },
        ],
      },
      {
        text: 'No es oro todo lo que reluce',
        verbs: [
          { word: 'es', infinitive: 'ser', tense: 'presente', pronoun: 'el', translation: 'é' },
          { word: 'reluce', infinitive: 'relucir', tense: 'presente', pronoun: 'el', translation: 'reluz' },
        ],
      },
      {
        text: 'Más vale pájaro en mano que ciento volando',
        verbs: [
          { word: 'vale', infinitive: 'valer', tense: 'presente', pronoun: 'el', translation: 'vale' },
        ],
      },
      {
        text: 'El que mucho abarca, poco aprieta',
        verbs: [
          { word: 'abarca', infinitive: 'abarcar', tense: 'presente', pronoun: 'el', translation: 'abrange' },
          { word: 'aprieta', infinitive: 'apretar', tense: 'presente', pronoun: 'el', translation: 'aperta' },
        ],
      },
      {
        text: 'A quien madruga, Dios le ayuda',
        verbs: [
          { word: 'madruga', infinitive: 'madrugar', tense: 'presente', pronoun: 'el', translation: 'madruga' },
          { word: 'ayuda', infinitive: 'ayudar', tense: 'presente', pronoun: 'el', translation: 'ajuda' },
        ],
      },
    ],
  },
];

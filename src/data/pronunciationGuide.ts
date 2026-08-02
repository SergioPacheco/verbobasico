export interface PronunciationExample {
  word: string;
  phonetic: string;
  meaning: string;
}

export interface PronunciationSound {
  id: string;
  letter: string;
  sound: string;
  description: string;
  tip: string;
  examples: PronunciationExample[];
}

export interface PronunciationSection {
  id: string;
  title: string;
  emoji: string;
  sounds: PronunciationSound[];
}

export const pronunciationGuide: PronunciationSection[] = [
  {
    id: 'consonantes-dificiles',
    title: 'Consoantes Difíceis',
    emoji: '🗣️',
    sounds: [
      {
        id: 'j',
        letter: 'J',
        sound: '/x/',
        description: 'Som gutural, como se fosse um "R" forte do fundo da garganta',
        tip: 'Pense no som de "Bach" em alemão, ou force um "RR" bem atrás na garganta',
        examples: [
          { word: 'jamón', phonetic: 'rra-MÓN', meaning: 'presunto' },
          { word: 'trabajo', phonetic: 'tra-BÁ-rro', meaning: 'trabalho' },
          { word: 'jugar', phonetic: 'rru-GÁR', meaning: 'jogar/brincar' },
        ],
      },
      {
        id: 'g-suave',
        letter: 'G (antes de e, i)',
        sound: '/x/',
        description: 'Mesmo som da J — gutural',
        tip: 'GE e GI soam como JE e JI',
        examples: [
          { word: 'gente', phonetic: 'RRÉN-te', meaning: 'gente' },
          { word: 'girar', phonetic: 'rri-RÁR', meaning: 'girar' },
          { word: 'coger', phonetic: 'ko-RRÉR', meaning: 'pegar' },
        ],
      },
      {
        id: 'rr',
        letter: 'RR / R inicial',
        sound: '/r/',
        description: 'R vibrante múltiplo — a língua vibra várias vezes',
        tip: 'Pratique com "erre com erre cigarro" — a língua bate várias vezes no céu da boca',
        examples: [
          { word: 'perro', phonetic: 'PÉ-rro', meaning: 'cachorro' },
          { word: 'carro', phonetic: 'KÁ-rro', meaning: 'carro' },
          { word: 'rojo', phonetic: 'RRÓ-rro', meaning: 'vermelho' },
        ],
      },
      {
        id: 'ñ',
        letter: 'Ñ',
        sound: '/ɲ/',
        description: 'Som de NH em português',
        tip: 'Igual ao português! Ñ = NH',
        examples: [
          { word: 'niño', phonetic: 'NÍ-nho', meaning: 'menino' },
          { word: 'España', phonetic: 'es-PÁ-nha', meaning: 'Espanha' },
          { word: 'año', phonetic: 'Á-nho', meaning: 'ano' },
        ],
      },
      {
        id: 'll',
        letter: 'LL',
        sound: '/ʎ/ ou /ʝ/',
        description: 'Na Espanha: como "LH" ou "I" forte. Na Argentina: como "J" de "jeans"',
        tip: 'Em Madrid soa como "I" forte (iamada). Em Buenos Aires soa como "J" inglês (jamada)',
        examples: [
          { word: 'llamar', phonetic: 'ia-MÁR / ja-MÁR', meaning: 'chamar' },
          { word: 'calle', phonetic: 'KÁ-ie / KÁ-je', meaning: 'rua' },
          { word: 'lluvia', phonetic: 'IÚ-via / JÚ-via', meaning: 'chuva' },
        ],
      },
      {
        id: 'z-c',
        letter: 'Z / C (antes de e, i)',
        sound: '/θ/ ou /s/',
        description: 'Na Espanha: som de "TH" inglês (língua entre os dentes). Na Latam: som de S',
        tip: 'Espanhóis dizem "graTHias", latino-americanos dizem "graSias"',
        examples: [
          { word: 'zapato', phonetic: 'tha-PÁ-to / sa-PÁ-to', meaning: 'sapato' },
          { word: 'cena', phonetic: 'THÉ-na / SÉ-na', meaning: 'jantar' },
          { word: 'hacer', phonetic: 'a-THÉR / a-SÉR', meaning: 'fazer' },
        ],
      },
    ],
  },
  {
    id: 'vocales',
    title: 'Vogais',
    emoji: '🔤',
    sounds: [
      {
        id: 'vocales-puras',
        letter: 'A, E, I, O, U',
        sound: '/a, e, i, o, u/',
        description: 'Vogais puras e curtas — sem nasalização, sem alongar',
        tip: 'Diferente do português, nunca nasalize (não é "ão", é "ao"). Não reduza vogais átonas.',
        examples: [
          { word: 'mañana', phonetic: 'ma-NHÁ-na', meaning: 'amanhã (não "manhãna")' },
          { word: 'leche', phonetic: 'LÉ-tche', meaning: 'leite (E aberto, não "leitchi")' },
          { word: 'todo', phonetic: 'TÓ-do', meaning: 'tudo (O aberto, não "tudu")' },
        ],
      },
      {
        id: 'diptongos',
        letter: 'Ditongos',
        sound: 'ie, ue, ai, ei...',
        description: 'Duas vogais na mesma sílaba — pronuncie as duas rapidamente',
        tip: 'Nunca separe: "puer-ta" (2 sílabas), não "pu-er-ta" (3 sílabas)',
        examples: [
          { word: 'puerta', phonetic: 'PUÉR-ta', meaning: 'porta' },
          { word: 'tiempo', phonetic: 'TIÉM-po', meaning: 'tempo' },
          { word: 'ciudad', phonetic: 'thiu-DÁD', meaning: 'cidade' },
        ],
      },
    ],
  },
  {
    id: 'acentuacion',
    title: 'Acentuação',
    emoji: '📍',
    sounds: [
      {
        id: 'agudas',
        letter: 'Palabras agudas',
        sound: 'Última sílaba',
        description: 'Tônica na última sílaba. Acento escrito se termina em vogal, N ou S',
        tip: 'café, jamón, después — todas têm acento porque terminam em vogal/n/s',
        examples: [
          { word: 'hablar', phonetic: 'a-BLÁR', meaning: 'falar (sem acento: termina em R)' },
          { word: 'café', phonetic: 'ka-FÉ', meaning: 'café (com acento: termina em vogal)' },
          { word: 'jamón', phonetic: 'rra-MÓN', meaning: 'presunto (com acento: termina em N)' },
        ],
      },
      {
        id: 'llanas',
        letter: 'Palabras llanas',
        sound: 'Penúltima sílaba',
        description: 'Tônica na penúltima. Acento escrito se NÃO termina em vogal, N ou S',
        tip: 'A maioria das palavras espanholas são llanas sem acento: casa, libro, amigo',
        examples: [
          { word: 'casa', phonetic: 'KÁ-sa', meaning: 'casa (sem acento: termina em vogal)' },
          { word: 'árbol', phonetic: 'ÁR-bol', meaning: 'árvore (com acento: termina em L)' },
          { word: 'fácil', phonetic: 'FÁ-thil', meaning: 'fácil (com acento: termina em L)' },
        ],
      },
      {
        id: 'esdrujulas',
        letter: 'Palabras esdrújulas',
        sound: 'Antepenúltima sílaba',
        description: 'Tônica na antepenúltima. SEMPRE levam acento escrito',
        tip: 'Todas as esdrújulas têm acento: música, médico, teléfono',
        examples: [
          { word: 'música', phonetic: 'MÚ-si-ka', meaning: 'música' },
          { word: 'médico', phonetic: 'MÉ-di-ko', meaning: 'médico' },
          { word: 'teléfono', phonetic: 'te-LÉ-fo-no', meaning: 'telefone' },
        ],
      },
    ],
  },
  {
    id: 'diferencias-pt',
    title: 'Diferenças do Português',
    emoji: '🇧🇷➡️🇪🇸',
    sounds: [
      {
        id: 'no-nasales',
        letter: 'Sem nasalização',
        sound: 'Vogais puras',
        description: 'Espanhol não tem vogais nasais como ã, õ',
        tip: 'Diga "mañana" com A puro, não "manhãna"',
        examples: [
          { word: 'mano', phonetic: 'MÁ-no', meaning: 'mão (não "mãno")' },
          { word: 'pan', phonetic: 'PAN', meaning: 'pão (não "pãn")' },
          { word: 'corazón', phonetic: 'ko-ra-THÓN', meaning: 'coração (O puro no final)' },
        ],
      },
      {
        id: 'no-reduccion',
        letter: 'Sem redução vocálica',
        sound: 'E e O claros',
        description: 'Não reduza E→I nem O→U em sílabas átonas',
        tip: '"Leite" em espanhol é "LEche", não "LEchi". "Menino" é "niNO", não "niNU"',
        examples: [
          { word: 'leche', phonetic: 'LÉ-tche', meaning: 'leite (E final claro)' },
          { word: 'niño', phonetic: 'NÍ-nho', meaning: 'menino (O final claro)' },
          { word: 'bonito', phonetic: 'bo-NÍ-to', meaning: 'bonito (O final claro)' },
        ],
      },
      {
        id: 'd-intervocalica',
        letter: 'D entre vogais',
        sound: '/ð/',
        description: 'D entre vogais é suave, quase como "TH" inglês de "the"',
        tip: 'A língua fica entre os dentes levemente. "nada" soa quase como "naða"',
        examples: [
          { word: 'nada', phonetic: 'NÁ-ða', meaning: 'nada (D suave)' },
          { word: 'todo', phonetic: 'TÓ-ðo', meaning: 'tudo (D suave)' },
          { word: 'ciudad', phonetic: 'thiu-ÐÁÐ', meaning: 'cidade (dois D suaves)' },
        ],
      },
    ],
  },
];

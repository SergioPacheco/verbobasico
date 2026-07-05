import type { Situation } from '../types';

export interface DialogueTurn {
  speaker: 'user' | 'other';
  spanish: string;
  portuguese: string;
  verb?: string;
  conjugation?: string;
  challenge?: string;
}

export interface Dialogue {
  id: string;
  title: string;
  situation: Situation;
  description: string;
  turns: DialogueTurn[];
}

export const dialogues: Dialogue[] = [
  {
    id: 'dial-mercado',
    title: 'No supermercado',
    situation: 'mercado',
    description: 'Pedindo ajuda para encontrar um produto e pagando na caixa.',
    turns: [
      {
        speaker: 'user',
        spanish: 'Perdona, ¿sabe dónde están los lácteos?',
        portuguese: 'Com licença, sabe onde ficam os laticínios?',
        verb: 'saber',
        conjugation: 'sabe',
        challenge: 'Perdona, ¿___ dónde están los lácteos?',
      },
      {
        speaker: 'other',
        spanish: 'Sí, están al fondo a la derecha, al lado de los zumos.',
        portuguese: 'Sim, ficam no fundo à direita, ao lado dos sucos.',
      },
      {
        speaker: 'user',
        spanish: 'Gracias. ¿Tiene leche sin lactosa?',
        portuguese: 'Obrigado. Tem leite sem lactose?',
        verb: 'tener',
        conjugation: 'tiene',
        challenge: '¿___ leche sin lactosa?',
      },
      {
        speaker: 'other',
        spanish: 'Sí, la marca blanca está en el estante de abajo.',
        portuguese: 'Sim, a marca própria está na prateleira de baixo.',
      },
      {
        speaker: 'user',
        spanish: 'Perfecto. ¿Puedo pagar aquí con tarjeta?',
        portuguese: 'Perfeito. Posso pagar aqui com cartão?',
        verb: 'poder',
        conjugation: 'puedo',
        challenge: '¿___ pagar aquí con tarjeta?',
      },
      {
        speaker: 'other',
        spanish: 'Por supuesto, no hay mínimo.',
        portuguese: 'Claro, não tem valor mínimo.',
      },
    ],
  },
  {
    id: 'dial-medico',
    title: 'No médico',
    situation: 'medico',
    description: 'Descrevendo sintomas e pedindo receita na consulta.',
    turns: [
      {
        speaker: 'other',
        spanish: '¿Cómo se encuentra hoy?',
        portuguese: 'Como está se sentindo hoje?',
      },
      {
        speaker: 'user',
        spanish: 'Me siento muy cansado y tengo fiebre desde ayer.',
        portuguese: 'Me sinto muito cansado e tenho febre desde ontem.',
        verb: 'sentir',
        conjugation: 'siento',
        challenge: 'Me ___ muy cansado y tengo fiebre desde ayer.',
      },
      {
        speaker: 'other',
        spanish: '¿Duerme bien por las noches?',
        portuguese: 'Está dormindo bem à noite?',
      },
      {
        speaker: 'user',
        spanish: 'No, no duermo bien. Me despierto varias veces.',
        portuguese: 'Não, não durmo bem. Acordo várias vezes.',
        verb: 'dormir',
        conjugation: 'duermo',
        challenge: 'No, no ___ bien. Me despierto varias veces.',
      },
      {
        speaker: 'other',
        spanish: 'Voy a recetarle algo para el descanso. ¿Sabe si es alérgico a algún medicamento?',
        portuguese: 'Vou receitar algo para o descanso. Sabe se é alérgico a algum medicamento?',
      },
      {
        speaker: 'user',
        spanish: 'No, que yo sepa no soy alérgico a nada.',
        portuguese: 'Não, que eu saiba não sou alérgico a nada.',
        verb: 'saber',
        conjugation: 'sepa',
        challenge: 'No, que yo ___ no soy alérgico a nada.',
      },
    ],
  },
  {
    id: 'dial-trabalho',
    title: 'Na entrevista de emprego',
    situation: 'trabalho',
    description: 'Apresentando-se e falando sobre experiência numa entrevista.',
    turns: [
      {
        speaker: 'other',
        spanish: 'Cuénteme un poco sobre usted.',
        portuguese: 'Fale um pouco sobre você.',
      },
      {
        speaker: 'user',
        spanish: 'Vengo de Brasil y llevo dos años viviendo en España.',
        portuguese: 'Sou do Brasil e estou há dois anos morando na Espanha.',
        verb: 'venir',
        conjugation: 'vengo',
        challenge: '___ de Brasil y llevo dos años viviendo en España.',
      },
      {
        speaker: 'other',
        spanish: '¿Qué experiencia tiene en atención al cliente?',
        portuguese: 'Que experiência tem em atendimento ao cliente?',
      },
      {
        speaker: 'user',
        spanish: 'Trabajé cinco años en una empresa de logística gestionando pedidos.',
        portuguese: 'Trabalhei cinco anos numa empresa de logística gerenciando pedidos.',
        verb: 'trabajar',
        conjugation: 'trabajé',
        challenge: '___ cinco años en una empresa de logística gestionando pedidos.',
      },
      {
        speaker: 'other',
        spanish: '¿Cuándo podría empezar?',
        portuguese: 'Quando poderia começar?',
      },
      {
        speaker: 'user',
        spanish: 'Podría empezar la semana que viene sin ningún problema.',
        portuguese: 'Poderia começar na semana que vem sem nenhum problema.',
        verb: 'poder',
        conjugation: 'podría',
        challenge: '___ empezar la semana que viene sin ningún problema.',
      },
    ],
  },
  {
    id: 'dial-documentos',
    title: 'Na comissaría — NIE',
    situation: 'documentos',
    description: 'Tirando dúvidas sobre documentação na comissaria.',
    turns: [
      {
        speaker: 'user',
        spanish: 'Buenos días, quiero pedir cita para el NIE.',
        portuguese: 'Bom dia, quero marcar horário para o NIE.',
        verb: 'querer',
        conjugation: 'quiero',
        challenge: 'Buenos días, ___ pedir cita para el NIE.',
      },
      {
        speaker: 'other',
        spanish: 'Para el NIE tiene que pedir cita previa por internet.',
        portuguese: 'Para o NIE você tem que marcar horário pela internet.',
      },
      {
        speaker: 'user',
        spanish: '¿Sabe qué documentos tengo que traer?',
        portuguese: 'Sabe quais documentos tenho que trazer?',
        verb: 'traer',
        conjugation: 'traer',
        challenge: '¿Sabe qué documentos tengo que ___?',
      },
      {
        speaker: 'other',
        spanish: 'Necesita el pasaporte original, una fotocopia y el formulario EX-15 relleno.',
        portuguese: 'Você precisa do passaporte original, uma cópia e o formulário EX-15 preenchido.',
      },
      {
        speaker: 'user',
        spanish: '¿Dónde puedo descargar ese formulario?',
        portuguese: 'Onde posso baixar esse formulário?',
        verb: 'poder',
        conjugation: 'puedo',
        challenge: '¿Dónde ___ descargar ese formulario?',
      },
      {
        speaker: 'other',
        spanish: 'En la página web del Ministerio del Interior. Lo encuentra fácilmente.',
        portuguese: 'No site do Ministério do Interior. Você o encontra facilmente.',
      },
    ],
  },
  {
    id: 'dial-restaurante',
    title: 'No restaurante',
    situation: 'restaurante',
    description: 'Pedindo comida e bebida num restaurante espanhol.',
    turns: [
      {
        speaker: 'other',
        spanish: '¿Qué van a tomar?',
        portuguese: 'O que vão pedir?',
      },
      {
        speaker: 'user',
        spanish: 'De primero quiero la ensalada mixta y de segundo, el pollo asado.',
        portuguese: 'De entrada quero a salada mista e de prato principal, o frango assado.',
        verb: 'querer',
        conjugation: 'quiero',
        challenge: 'De primero ___ la ensalada mixta y de segundo, el pollo asado.',
      },
      {
        speaker: 'other',
        spanish: '¿Y para beber?',
        portuguese: 'E para beber?',
      },
      {
        speaker: 'user',
        spanish: 'Bebo agua, por favor. Sin gas.',
        portuguese: 'Bebo água, por favor. Sem gás.',
        verb: 'beber',
        conjugation: 'bebo',
        challenge: '___ agua, por favor. Sin gas.',
      },
      {
        speaker: 'other',
        spanish: 'Perfecto, en seguida les traigo todo.',
        portuguese: 'Perfeito, já trago tudo.',
      },
      {
        speaker: 'user',
        spanish: 'Perdone, ¿me puede traer también un poco de pan?',
        portuguese: 'Com licença, pode me trazer também um pouco de pão?',
        verb: 'traer',
        conjugation: 'traer',
        challenge: 'Perdone, ¿me puede ___ también un poco de pan?',
      },
    ],
  },
  {
    id: 'dial-transporte',
    title: 'No metrô',
    situation: 'transporte',
    description: 'Pedindo informações sobre o metrô para chegar ao destino.',
    turns: [
      {
        speaker: 'user',
        spanish: 'Perdona, ¿sabes cómo llegar al Estadio Santiago Bernabéu?',
        portuguese: 'Com licença, sabe como chegar ao Estádio Santiago Bernabéu?',
        verb: 'saber',
        conjugation: 'sabes',
        challenge: 'Perdona, ¿___ cómo llegar al Estadio Santiago Bernabéu?',
      },
      {
        speaker: 'other',
        spanish: 'Sí, tienes que coger la línea 10 hasta Santiago Bernabéu.',
        portuguese: 'Sim, você tem que pegar a linha 10 até Santiago Bernabéu.',
      },
      {
        speaker: 'user',
        spanish: '¿Vengo bien desde Atocha o tengo que cambiar de línea?',
        portuguese: 'Venho bem desde Atocha ou tenho que trocar de linha?',
        verb: 'venir',
        conjugation: 'vengo',
        challenge: '¿___ bien desde Atocha o tengo que cambiar de línea?',
      },
      {
        speaker: 'other',
        spanish: 'Tienes que cambiar en Nuevos Ministerios. Coge la línea 8 hasta allí.',
        portuguese: 'Você tem que trocar em Nuevos Ministerios. Pega a linha 8 até lá.',
      },
      {
        speaker: 'user',
        spanish: '¿Cuánto tiempo tarda el trayecto?',
        portuguese: 'Quanto tempo dura o trajeto?',
      },
      {
        speaker: 'other',
        spanish: 'Unos veinte minutos en total. No sale muy lejos.',
        portuguese: 'Uns vinte minutos no total. Não fica muito longe.',
      },
    ],
  },
  {
    id: 'dial-aluguel',
    title: 'Visitando um apartamento',
    situation: 'aluguel',
    description: 'Vistoria de apartamento e negociação com o proprietário.',
    turns: [
      {
        speaker: 'user',
        spanish: 'Buenas, vengo a ver el piso que vi en el anuncio.',
        portuguese: 'Olá, venho ver o apartamento que vi no anúncio.',
        verb: 'venir',
        conjugation: 'vengo',
        challenge: 'Buenas, ___ a ver el piso que vi en el anuncio.',
      },
      {
        speaker: 'other',
        spanish: 'Pase, pase. El piso tiene tres habitaciones y dos baños.',
        portuguese: 'Entre, entre. O apartamento tem três quartos e dois banheiros.',
      },
      {
        speaker: 'user',
        spanish: '¿A qué hora cierra el portal por la noche?',
        portuguese: 'A que horas o portão fecha à noite?',
        verb: 'cerrar',
        conjugation: 'cierra',
        challenge: '¿A qué hora ___ el portal por la noche?',
      },
      {
        speaker: 'other',
        spanish: 'No cierra nunca, tiene llave 24 horas.',
        portuguese: 'Nunca fecha, tem chave 24 horas.',
      },
      {
        speaker: 'user',
        spanish: '¿Puedo traer a mi pareja a vivir aquí?',
        portuguese: 'Posso trazer minha parceira para morar aqui?',
        verb: 'traer',
        conjugation: 'traer',
        challenge: '¿Puedo ___ a mi pareja a vivir aquí?',
      },
      {
        speaker: 'other',
        spanish: 'Claro, sin problema. El contrato puede ser a nombre de los dos.',
        portuguese: 'Claro, sem problema. O contrato pode ser em nome dos dois.',
      },
    ],
  },
  {
    id: 'dial-entrevista',
    title: 'Entrevista de emprego',
    situation: 'entrevista',
    description: 'Falando sobre habilidades e expectativas numa entrevista formal.',
    turns: [
      {
        speaker: 'other',
        spanish: '¿Por qué quiere trabajar en nuestra empresa?',
        portuguese: 'Por que quer trabalhar na nossa empresa?',
      },
      {
        speaker: 'user',
        spanish: 'Porque pienso que puedo aportar mucho con mi experiencia en logística.',
        portuguese: 'Porque penso que posso contribuir muito com minha experiência em logística.',
        verb: 'pensar',
        conjugation: 'pienso',
        challenge: 'Porque ___ que puedo aportar mucho con mi experiencia en logística.',
      },
      {
        speaker: 'other',
        spanish: '¿Sabe usar algún programa de gestión?',
        portuguese: 'Sabe usar algum programa de gestão?',
      },
      {
        speaker: 'user',
        spanish: 'Sí, sé usar SAP y también Excel avanzado.',
        portuguese: 'Sim, sei usar SAP e também Excel avançado.',
        verb: 'saber',
        conjugation: 'sé',
        challenge: 'Sí, ___ usar SAP y también Excel avanzado.',
      },
      {
        speaker: 'other',
        spanish: '¿Tiene alguna pregunta para nosotros?',
        portuguese: 'Tem alguma pergunta para nós?',
      },
      {
        speaker: 'user',
        spanish: 'Sí, ¿cuándo sabremos el resultado de la entrevista?',
        portuguese: 'Sim, quando saberemos o resultado da entrevista?',
        verb: 'saber',
        conjugation: 'sabremos',
        challenge: 'Sí, ¿cuándo ___ el resultado de la entrevista?',
      },
    ],
  },
];

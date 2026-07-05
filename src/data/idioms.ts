export interface Idiom {
  id: string;
  expression: string;
  meaning: string;
  literal: string;
  example: string;
  exampleTranslation: string;
  category: 'cotidiano' | 'trabalho' | 'emocao' | 'comida';
}

export const idioms: Idiom[] = [
  // ═══════════════════════════════════════════════════
  // COTIDIANO
  // ═══════════════════════════════════════════════════
  {
    id: 'idiom-01',
    expression: 'estar hecho polvo',
    meaning: 'estar exausto / destruído',
    literal: 'estar feito pó',
    example: 'Después de mudarse, estaba hecho polvo.',
    exampleTranslation: 'Depois de se mudar, estava completamente destruído.',
    category: 'cotidiano',
  },
  {
    id: 'idiom-02',
    expression: 'no dar ni golpe',
    meaning: 'não fazer nada / ficar à toa',
    literal: 'não dar nem um golpe',
    example: 'Hoy no he dado ni golpe en la oficina.',
    exampleTranslation: 'Hoje não fiz nada no escritório.',
    category: 'cotidiano',
  },
  {
    id: 'idiom-03',
    expression: 'ponerse las pilas',
    meaning: 'se animar / se esforçar',
    literal: 'colocar as pilhas',
    example: 'Tienes que ponerte las pilas si quieres aprobar.',
    exampleTranslation: 'Você tem que se esforçar se quiser passar.',
    category: 'cotidiano',
  },
  {
    id: 'idiom-04',
    expression: 'dar en el clavo',
    meaning: 'acertar em cheio / acertar na mosca',
    literal: 'bater no prego',
    example: 'Con esa respuesta diste en el clavo.',
    exampleTranslation: 'Com essa resposta você acertou na mosca.',
    category: 'cotidiano',
  },
  {
    id: 'idiom-05',
    expression: 'ser pan comido',
    meaning: 'ser moleza / ser fácil demais',
    literal: 'ser pão comido',
    example: 'Esta tarea es pan comido para ti.',
    exampleTranslation: 'Essa tarefa é moleza para você.',
    category: 'cotidiano',
  },

  // ═══════════════════════════════════════════════════
  // TRABALHO
  // ═══════════════════════════════════════════════════
  {
    id: 'idiom-06',
    expression: 'estar hasta las narices',
    meaning: 'estar cheio / não aguentar mais',
    literal: 'estar até os narizes',
    example: 'Estoy hasta las narices de las reuniones.',
    exampleTranslation: 'Estou cheio de reuniões.',
    category: 'trabalho',
  },
  {
    id: 'idiom-07',
    expression: 'no hay mal que por bien no venga',
    meaning: 'não há mal que não traga bem',
    literal: 'não há mal que por bem não venha',
    example: 'Perdí ese trabajo pero encontré uno mejor. No hay mal que por bien no venga.',
    exampleTranslation: 'Perdi aquele emprego mas achei um melhor. Não há mal que não traga bem.',
    category: 'trabalho',
  },
  {
    id: 'idiom-08',
    expression: 'llevarse el gato al agua',
    meaning: 'sair vencedor / conseguir o que queria',
    literal: 'levar o gato à água',
    example: 'En la negociación, se llevó el gato al agua.',
    exampleTranslation: 'Na negociação, ele saiu vencedor.',
    category: 'trabalho',
  },
  {
    id: 'idiom-09',
    expression: 'meter la pata',
    meaning: 'meter o pé pela boca / errar feio',
    literal: 'meter a pata',
    example: 'Metí la pata en la reunión con el cliente.',
    exampleTranslation: 'Meti o pé pela boca na reunião com o cliente.',
    category: 'trabalho',
  },
  {
    id: 'idiom-10',
    expression: 'tirar la toalla',
    meaning: 'jogar a toalha / desistir',
    literal: 'jogar a toalha',
    example: 'No tires la toalla, ya casi terminamos.',
    exampleTranslation: 'Não jogue a toalha, já quase terminamos.',
    category: 'trabalho',
  },

  // ═══════════════════════════════════════════════════
  // EMOÇÃO
  // ═══════════════════════════════════════════════════
  {
    id: 'idiom-11',
    expression: 'tener mariposas en el estómago',
    meaning: 'estar com frio na barriga / de coração acelerado',
    literal: 'ter borboletas no estômago',
    example: 'Antes de la entrevista tenía mariposas en el estómago.',
    exampleTranslation: 'Antes da entrevista estava com frio na barriga.',
    category: 'emocao',
  },
  {
    id: 'idiom-12',
    expression: 'costar un ojo de la cara',
    meaning: 'custar os olhos da cara / ser caríssimo',
    literal: 'custar um olho da cara',
    example: 'El alquiler en Madrid cuesta un ojo de la cara.',
    exampleTranslation: 'O aluguel em Madrid custa os olhos da cara.',
    category: 'emocao',
  },
  {
    id: 'idiom-13',
    expression: 'quedarse de piedra',
    meaning: 'ficar de pedra / ficar chocado',
    literal: 'ficar de pedra',
    example: 'Me quedé de piedra cuando vi el precio.',
    exampleTranslation: 'Fiquei de pedra quando vi o preço.',
    category: 'emocao',
  },
  {
    id: 'idiom-14',
    expression: 'no caber en sí de alegría',
    meaning: 'estar louco de alegria / transbordar de felicidade',
    literal: 'não caber em si de alegria',
    example: 'Cuando aprobé el examen, no cabía en mí de alegría.',
    exampleTranslation: 'Quando passei no exame, estava louco de alegria.',
    category: 'emocao',
  },
  {
    id: 'idiom-15',
    expression: 'tener el corazón en un puño',
    meaning: 'estar com o coração na mão / estar tenso',
    literal: 'ter o coração num punho',
    example: 'Durante la espera tenía el corazón en un puño.',
    exampleTranslation: 'Durante a espera estava com o coração na mão.',
    category: 'emocao',
  },

  // ═══════════════════════════════════════════════════
  // COMIDA
  // ═══════════════════════════════════════════════════
  {
    id: 'idiom-16',
    expression: 'estar como un queso',
    meaning: 'estar gostoso / ser atraente',
    literal: 'estar como um queijo',
    example: '¡Tu compañero de trabajo está como un queso!',
    exampleTranslation: 'Seu colega de trabalho é muito gostoso!',
    category: 'comida',
  },
  {
    id: 'idiom-17',
    expression: 'no hay tu tía',
    meaning: 'não tem jeito / nada a fazer',
    literal: 'não há sua tia',
    example: 'Intenté arreglarlo pero no hay tu tía.',
    exampleTranslation: 'Tentei consertar mas não tem jeito.',
    category: 'cotidiano',
  },
  {
    id: 'idiom-18',
    expression: 'tener mala leche',
    meaning: 'ter mau humor / ser mal-encarado',
    literal: 'ter leite ruim',
    example: 'Ese funcionario tiene muy mala leche.',
    exampleTranslation: 'Aquele funcionário é muito mal-encarado.',
    category: 'comida',
  },
  {
    id: 'idiom-19',
    expression: 'ponerse morado',
    meaning: 'comer/beber muito / se fartar',
    literal: 'ficar roxo',
    example: 'En la fiesta me puse morado de paella.',
    exampleTranslation: 'Na festa me fartei de paella.',
    category: 'comida',
  },
  {
    id: 'idiom-20',
    expression: 'ser un hueso',
    meaning: 'ser duro / ser exigente (professor, chefe)',
    literal: 'ser um osso',
    example: 'El jefe de cocina es un hueso, no perdona nada.',
    exampleTranslation: 'O chef é muito exigente, não perdoa nada.',
    category: 'comida',
  },
];

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
  {
    id: 'trabajo-remoto',
    name: 'Trabajo remoto',
    emoji: '💻',
    vocabulary: [
      { word: 'Reunión', translation: 'Reunião' },
      { word: 'Teletrabajo', translation: 'Trabalho remoto' },
      { word: 'Horario', translation: 'Horário' },
      { word: 'Entrega', translation: 'Entrega' },
      { word: 'Archivo', translation: 'Arquivo' },
      { word: 'Conexión', translation: 'Conexão' },
      { word: 'Plazo', translation: 'Prazo' },
      { word: 'Tarea', translation: 'Tarefa' },
      { word: 'Equipo', translation: 'Equipe' },
      { word: 'Correo', translation: 'E-mail' },
      { word: 'Videollamada', translation: 'Videochamada' },
      { word: 'Pendiente', translation: 'Pendente' },
      { word: 'Organizar', translation: 'Organizar' },
      { word: 'Revisar', translation: 'Revisar' },
      { word: 'Confirmar', translation: 'Confirmar' },
    ],
    questions: [
      {
        id: 'trabajo-remoto-1',
        question: '¿Trabajas mejor en casa o en la oficina?',
        answer: 'Trabajo mejor en casa porque puedo organizar mi horario, concentrarme más y evitar perder tiempo en desplazamientos.',
      },
      {
        id: 'trabajo-remoto-2',
        question: '¿Cómo te organizas para no perder el control de tus tareas?',
        answer: 'Uso una lista de tareas, reviso mis correos y marco los plazos importantes para no olvidar nada pendiente.',
      },
      {
        id: 'trabajo-remoto-3',
        question: '¿Qué haces cuando tienes una videollamada importante?',
        answer: 'Me preparo con tiempo, reviso la conexión, abro los archivos necesarios y confirmo que todo esté listo antes de empezar.',
      },
      {
        id: 'trabajo-remoto-4',
        question: '¿Prefieres trabajar solo o en equipo?',
        answer: 'Me gusta trabajar en equipo porque compartimos ideas, revisamos mejor los errores y llegamos a resultados más sólidos.',
      },
      {
        id: 'trabajo-remoto-5',
        question: '¿Qué es lo más difícil del teletrabajo?',
        answer: 'Lo más difícil es mantener la disciplina y separar bien el tiempo de trabajo del tiempo personal.',
      },
      {
        id: 'trabajo-remoto-6',
        question: '¿Qué le dirías a alguien que empieza a trabajar a distancia?',
        answer: 'Le diría que organice bien su horario, revise sus entregas con frecuencia y no deje todo para el último momento.',
      },
    ],
  },
  {
    id: 'salud',
    name: 'Salud',
    emoji: '🩺',
    vocabulary: [
      { word: 'Síntoma', translation: 'Sintoma' },
      { word: 'Dolor', translation: 'Dor' },
      { word: 'Análisis', translation: 'Exame/Análise' },
      { word: 'Receta', translation: 'Receita' },
      { word: 'Urgencias', translation: 'Emergência' },
      { word: 'Cita', translation: 'Consulta/horário' },
      { word: 'Diagnóstico', translation: 'Diagnóstico' },
      { word: 'Descanso', translation: 'Descanso' },
      { word: 'Fiebre', translation: 'Febre' },
      { word: 'Tos', translation: 'Tosse' },
      { word: 'Mareo', translation: 'Tontura' },
      { word: 'Medicamento', translation: 'Medicamento' },
      { word: 'Mejorar', translation: 'Melhorar' },
      { word: 'Empeorar', translation: 'Piorar' },
    ],
    questions: [
      {
        id: 'salud-1',
        question: '¿Qué haces cuando te sientes mal?',
        answer: 'Cuando me siento mal, intento descansar, beber agua y pedir cita con el médico si los síntomas no mejoran.',
      },
      {
        id: 'salud-2',
        question: '¿Prefieres ir al médico enseguida o esperar unos días?',
        answer: 'Normalmente espero un poco si el problema es leve, pero si tengo fiebre o mucho dolor, voy enseguida.',
      },
      {
        id: 'salud-3',
        question: '¿Qué síntomas te preocupan más?',
        answer: 'Me preocupan más la fiebre alta, la tos fuerte y el mareo, porque pueden indicar que algo no va bien.',
      },
      {
        id: 'salud-4',
        question: '¿Tomas medicamentos con frecuencia?',
        answer: 'No, solo tomo medicamentos cuando es necesario y siempre sigo las indicaciones de la receta.',
      },
      {
        id: 'salud-5',
        question: '¿Qué hace que un sistema de salud sea bueno?',
        answer: 'Para mí, un buen sistema de salud debe ser rápido, claro, accesible y ofrecer un diagnóstico fiable.',
      },
    ],
  },
  {
    id: 'vecindario',
    name: 'Vecindario',
    emoji: '🏘️',
    vocabulary: [
      { word: 'Vecino', translation: 'Vizinho' },
      { word: 'Barrio', translation: 'Bairro' },
      { word: 'Ruido', translation: 'Barulho' },
      { word: 'Piso', translation: 'Apartamento' },
      { word: 'Portal', translation: 'Entrada/portaria' },
      { word: 'Ascensor', translation: 'Elevador' },
      { word: 'Reunión', translation: 'Reunião' },
      { word: 'Norma', translation: 'Regra' },
      { word: 'Llave', translation: 'Chave' },
      { word: 'Patio', translation: 'Pátio' },
      { word: 'Comunidad', translation: 'Condomínio/comunidade' },
      { word: 'Queja', translation: 'Queixa' },
      { word: 'Horario', translation: 'Horário' },
    ],
    questions: [
      {
        id: 'vecindario-1',
        question: '¿Cómo es el barrio donde vives?',
        answer: 'El barrio donde vivo es tranquilo, tiene buenos servicios y la mayoría de los vecinos son amables.',
      },
      {
        id: 'vecindario-2',
        question: '¿Te gusta hablar con tus vecinos?',
        answer: 'Sí, me gusta saludar a mis vecinos y llevarme bien con la gente del edificio.',
      },
      {
        id: 'vecindario-3',
        question: '¿Qué tipo de ruido te molesta más?',
        answer: 'Me molestan más los ruidos fuertes por la noche, sobre todo cuando no se respeta el horario de descanso.',
      },
      {
        id: 'vecindario-4',
        question: '¿Qué problemas suele haber en una comunidad de vecinos?',
        answer: 'A veces hay problemas con el ruido, el ascensor o las normas de uso de las zonas comunes.',
      },
      {
        id: 'vecindario-5',
        question: '¿Qué harías si un vecino te dejara sin llave?',
        answer: 'Primero intentaría llamar al vecino o a la administración, y si fuera necesario, pediría ayuda para entrar al piso.',
      },
    ],
  },
  {
    id: 'viajes',
    name: 'Viajes',
    emoji: '✈️',
    vocabulary: [
      { word: 'Aeropuerto', translation: 'Aeroporto' },
      { word: 'Equipaje', translation: 'Bagagem' },
      { word: 'Reserva', translation: 'Reserva' },
      { word: 'Billete', translation: 'Passagem' },
      { word: 'Alojamiento', translation: 'Hospedagem' },
      { word: 'Maleta', translation: 'Mala' },
      { word: 'Destino', translation: 'Destino' },
      { word: 'Excursión', translation: 'Passeio' },
      { word: 'Desembarcar', translation: 'Desembarcar' },
      { word: 'Turista', translation: 'Turista' },
      { word: 'Mapa', translation: 'Mapa' },
      { word: 'Camino', translation: 'Caminho' },
      { word: 'Retraso', translation: 'Atraso' },
    ],
    questions: [
      {
        id: 'viajes-1',
        question: '¿Prefieres viajar solo o acompañado?',
        answer: 'Prefiero viajar acompañado porque puedo compartir gastos, planes y experiencias con otra persona.',
      },
      {
        id: 'viajes-2',
        question: '¿Qué es lo primero que haces al llegar a una ciudad nueva?',
        answer: 'Lo primero que hago es revisar el mapa, buscar el alojamiento y pensar en cómo moverme por la ciudad.',
      },
      {
        id: 'viajes-3',
        question: '¿Te gusta improvisar o planear los viajes con detalle?',
        answer: 'Normalmente planifico lo básico, como la reserva y el billete, pero dejo espacio para improvisar un poco.',
      },
      {
        id: 'viajes-4',
        question: '¿Qué problema de viaje te molesta más?',
        answer: 'El retraso del vuelo y el equipaje perdido son los problemas que más me molestan cuando viajo.',
      },
      {
        id: 'viajes-5',
        question: '¿Qué hace que un destino sea memorable?',
        answer: 'Un destino es memorable cuando tiene buena comida, gente amable y lugares que realmente sorprenden.',
      },
    ],
  },
  {
    id: 'tecnologia',
    name: 'Tecnología',
    emoji: '📱',
    vocabulary: [
      { word: 'Aplicación', translation: 'Aplicativo' },
      { word: 'Contraseña', translation: 'Senha' },
      { word: 'Pantalla', translation: 'Tela' },
      { word: 'Actualizar', translation: 'Atualizar' },
      { word: 'Descargar', translation: 'Baixar' },
      { word: 'Guardar', translation: 'Salvar' },
      { word: 'Dispositivo', translation: 'Dispositivo' },
      { word: 'Cuenta', translation: 'Conta' },
      { word: 'Privacidad', translation: 'Privacidade' },
      { word: 'Enlace', translation: 'Link' },
      { word: 'Notificación', translation: 'Notificação' },
      { word: 'Archivo', translation: 'Arquivo' },
      { word: 'Buscar', translation: 'Buscar' },
    ],
    questions: [
      {
        id: 'tecnologia-1',
        question: '¿Qué aplicación usas más en tu día a día?',
        answer: 'La aplicación que más uso es la del móvil para mensajes, mapas y revisar el correo.',
      },
      {
        id: 'tecnologia-2',
        question: '¿Te resulta fácil aprender a usar tecnología nueva?',
        answer: 'Sí, normalmente me adapto rápido porque me gusta probar funciones nuevas y explorar cómo funcionan.',
      },
      {
        id: 'tecnologia-3',
        question: '¿Qué haces cuando una app no funciona?',
        answer: 'Primero cierro la app, la vuelvo a abrir y si sigue fallando, la actualizo o reinicio el dispositivo.',
      },
      {
        id: 'tecnologia-4',
        question: '¿Te preocupa la privacidad en internet?',
        answer: 'Sí, me preocupa bastante. Procuro usar contraseñas seguras y revisar qué datos comparto.',
      },
      {
        id: 'tecnologia-5',
        question: '¿Qué tecnología te ha cambiado más la vida?',
        answer: 'El smartphone me ha cambiado mucho la vida porque centraliza comunicación, trabajo, mapas y entretenimiento.',
      },
    ],
  },
  {
    id: 'restaurante',
    name: 'Restaurante',
    emoji: '🍽️',
    vocabulary: [
      { word: 'Menú', translation: 'Cardápio' },
      { word: 'Entrada', translation: 'Entrada' },
      { word: 'Plato principal', translation: 'Prato principal' },
      { word: 'Postre', translation: 'Sobremesa' },
      { word: 'Reserva', translation: 'Reserva' },
      { word: 'Cuenta', translation: 'Conta' },
      { word: 'Propina', translation: 'Gorjeta' },
      { word: 'Camarero', translation: 'Garçom' },
      { word: 'Sabor', translation: 'Sabor' },
      { word: 'Pedir', translation: 'Pedir' },
      { word: 'Recomendar', translation: 'Recomendar' },
      { word: 'Elegir', translation: 'Escolher' },
      { word: 'Sin gluten', translation: 'Sem glúten' },
      { word: 'Vegetariano', translation: 'Vegetariano' },
    ],
    questions: [
      {
        id: 'restaurante-1',
        question: '¿Qué sueles pedir cuando vas a un restaurante?',
        answer: 'Normalmente pido algo sencillo, un plato principal y agua, aunque a veces también tomo un postre.',
      },
      {
        id: 'restaurante-2',
        question: '¿Prefieres comer en casa o salir a comer fuera?',
        answer: 'Depende del día, pero me gusta salir a comer fuera de vez en cuando porque es más práctico y social.',
      },
      {
        id: 'restaurante-3',
        question: '¿Qué te importa más en un restaurante: el precio, el servicio o la comida?',
        answer: 'Lo que más me importa es la comida, pero también valoro un buen servicio y un precio razonable.',
      },
      {
        id: 'restaurante-4',
        question: '¿Cómo pides la cuenta en España?',
        answer: 'Normalmente digo: "Perdona, la cuenta, por favor" o "¿Nos trae la cuenta, por favor?"',
      },
      {
        id: 'restaurante-5',
        question: '¿Qué hace que un restaurante sea bueno?',
        answer: 'Para mí, un buen restaurante tiene comida rica, servicio amable y una atmósfera cómoda.',
      },
    ],
  },
  {
    id: 'documentos',
    name: 'Documentos',
    emoji: '📄',
    vocabulary: [
      { word: 'Formulario', translation: 'Formulário' },
      { word: 'Cita previa', translation: 'Agendamento' },
      { word: 'Empadronamiento', translation: 'Cadastro municipal' },
      { word: 'Pasaporte', translation: 'Passaporte' },
      { word: 'Fotocopia', translation: 'Fotocópia' },
      { word: 'Solicitud', translation: 'Solicitação' },
      { word: 'Firma', translation: 'Assinatura' },
      { word: 'Tasa', translation: 'Taxa' },
      { word: 'Original', translation: 'Original' },
      { word: 'Vigente', translation: 'Vigente/atual' },
      { word: 'Identidad', translation: 'Identidade' },
      { word: 'Registro', translation: 'Registro' },
    ],
    questions: [
      {
        id: 'documentos-1',
        question: '¿Qué documentos sueles necesitar en trámites importantes?',
        answer: 'Suelo necesitar pasaporte, fotocopia, formulario y a veces una cita previa o el comprobante de empadronamiento.',
      },
      {
        id: 'documentos-2',
        question: '¿Eres de los que preparan todo con tiempo o al final?',
        answer: 'Intento prepararlo con tiempo porque los documentos suelen tener detalles que es mejor revisar con calma.',
      },
      {
        id: 'documentos-3',
        question: '¿Qué haces si te falta un documento?',
        answer: 'Primero miro qué me falta exactamente, luego lo busco o lo solicito y, si hace falta, pido otra cita.',
      },
      {
        id: 'documentos-4',
        question: '¿Qué trámite te parece más complicado?',
        answer: 'Los trámites con muchos papeles y nombres técnicos me parecen más complicados, sobre todo cuando hay poca información clara.',
      },
      {
        id: 'documentos-5',
        question: '¿Qué consejo le darías a alguien que va a hacer un trámite en España?',
        answer: 'Le diría que revise bien la lista de documentos, lleve copias y confirme la cita antes de salir de casa.',
      },
    ],
  },
  {
    id: 'alquiler',
    name: 'Alquiler',
    emoji: '🏠',
    vocabulary: [
      { word: 'Alquiler', translation: 'Aluguel' },
      { word: 'Fianza', translation: 'Caução' },
      { word: 'Contrato', translation: 'Contrato' },
      { word: 'Inquilino', translation: 'Inquilino' },
      { word: 'Propietario', translation: 'Proprietário' },
      { word: 'Mes', translation: 'Mês' },
      { word: 'Mudanza', translation: 'Mudança' },
      { word: 'Gastos', translation: 'Despesas' },
      { word: 'Mobiliado', translation: 'Mobiliado' },
      { word: 'Vecindario', translation: 'Bairro' },
      { word: 'Reparación', translation: 'Reparo' },
      { word: 'Visita', translation: 'Visita' },
    ],
    questions: [
      {
        id: 'alquiler-1',
        question: '¿Qué es lo más importante al alquilar un piso?',
        answer: 'Para mí, lo más importante es que el piso esté bien ubicado, tenga un contrato claro y no tenga gastos ocultos.',
      },
      {
        id: 'alquiler-2',
        question: '¿Prefieres un piso amueblado o sin muebles?',
        answer: 'Prefiero un piso amueblado porque me resulta más práctico, sobre todo si tengo que mudarme rápido.',
      },
      {
        id: 'alquiler-3',
        question: '¿Qué problemas pueden surgir con el alquiler?',
        answer: 'Pueden surgir problemas con la fianza, las reparaciones o la comunicación con el propietario.',
      },
      {
        id: 'alquiler-4',
        question: '¿Qué miras antes de firmar un contrato?',
        answer: 'Miro la duración, el precio, la fianza, las condiciones de salida y si hay gastos adicionales.',
      },
      {
        id: 'alquiler-5',
        question: '¿Cómo sería tu casa ideal para alquilar?',
        answer: 'Mi casa ideal tendría buena luz, estar bien conectada con transporte y tener un vecindario tranquilo.',
      },
    ],
  },
  {
    id: 'estudios',
    name: 'Estudios',
    emoji: '📚',
    vocabulary: [
      { word: 'Asignatura', translation: 'Disciplina/matéria' },
      { word: 'Examen', translation: 'Prova' },
      { word: 'Apuntes', translation: 'Anotações' },
      { word: 'Profesor', translation: 'Professor' },
      { word: 'Aprender', translation: 'Aprender' },
      { word: 'Repasar', translation: 'Revisar' },
      { word: 'Estudiar', translation: 'Estudar' },
      { word: 'Tarea', translation: 'Tarefa' },
      { word: 'Grupo', translation: 'Grupo' },
      { word: 'Tema', translation: 'Tema' },
      { word: 'Practicar', translation: 'Praticar' },
      { word: 'Memorizar', translation: 'Memorizar' },
    ],
    questions: [
      {
        id: 'estudios-1',
        question: '¿Cómo estudias mejor?',
        answer: 'Estudio mejor cuando repaso con calma, hago resúmenes y practico en voz alta.',
      },
      {
        id: 'estudios-2',
        question: '¿Prefieres estudiar solo o en grupo?',
        answer: 'Depende del tema, pero para concentrarme suelo preferir estudiar solo y luego repasar en grupo.',
      },
      {
        id: 'estudios-3',
        question: '¿Qué haces antes de un examen importante?',
        answer: 'Repaso los apuntes, organizo el tiempo y trato de dormir bien para llegar con la cabeza clara.',
      },
      {
        id: 'estudios-4',
        question: '¿Qué asignatura te costó más aprender?',
        answer: 'La que más me costó fue la que tenía mucho vocabulario nuevo y necesitaba práctica constante.',
      },
      {
        id: 'estudios-5',
        question: '¿Qué hace que un profesor sea bueno?',
        answer: 'Un buen profesor explica con claridad, hace preguntas útiles y motiva a los alumnos a practicar.',
      },
    ],
  },
];

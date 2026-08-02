export interface ReadingText {
  id: string;
  title: string;
  level: 'basico' | 'intermedio' | 'avanzado';
  topic: string;
  emoji: string;
  content: string;
  /** Palavras importantes para destacar no texto */
  highlights?: string[];
  vocabulary: { word: string; meaning: string }[];
  questions: { question: string; answer: string }[];
}

export const readingTexts: ReadingText[] = [
  {
    id: 'ser-estar',
    title: 'Ser y Estar: Los Verbos Gemelos',
    level: 'basico',
    topic: 'Gramática',
    emoji: '🔄',
    content: `En español tenemos dos verbos que en portugués son solo uno: ser y estar. Esta diferencia es muy importante y muchos brasileños cometen errores al principio.

Usamos el verbo SER para hablar de características permanentes. Por ejemplo: "Yo soy brasileño", "Ella es médica", "El libro es interesante". Son cosas que no cambian fácilmente.

En cambio, usamos el verbo ESTAR para estados temporales y ubicaciones. Por ejemplo: "Estoy cansado" significa que ahora estoy cansado, pero mañana puedo estar bien. "Madrid está en España" indica ubicación.

Un truco útil: si algo puede cambiar fácilmente, usa ESTAR. Si es una característica esencial, usa SER.

Hay casos curiosos. "Es listo" significa que alguien es inteligente, pero "está listo" significa que está preparado. "Es aburrido" describe a una persona aburrida, pero "está aburrido" significa que en este momento siente aburrimiento.

Con la práctica, esta diferencia se vuelve natural. ¡No te preocupes si al principio cometes errores!`,
    highlights: ['ser', 'estar', 'soy', 'es', 'son', 'Estoy', 'está', 'SER', 'ESTAR', 'Es listo', 'está listo', 'Es aburrido', 'está aburrido'],
    vocabulary: [
      { word: 'gemelos', meaning: 'gêmeos' },
      { word: 'cometen errores', meaning: 'cometem erros' },
      { word: 'ubicación', meaning: 'localização' },
      { word: 'truco', meaning: 'truque/dica' },
      { word: 'listo', meaning: 'esperto / pronto' },
      { word: 'aburrido', meaning: 'chato / entediado' },
    ],
    questions: [
      { question: '¿Cuándo usamos el verbo SER?', answer: 'Para características permanentes: nacionalidad, profesión, características esenciales.' },
      { question: '¿Cuándo usamos el verbo ESTAR?', answer: 'Para estados temporales y ubicaciones.' },
      { question: '¿Qué significa "es listo" vs "está listo"?', answer: '"Es listo" = es inteligente. "Está listo" = está preparado.' },
    ],
  },
  {
    id: 'falsos-amigos',
    title: 'Cuidado con los Falsos Amigos',
    level: 'basico',
    topic: 'Vocabulário',
    emoji: '⚠️',
    content: `Los falsos amigos son palabras que parecen iguales en español y portugués, pero tienen significados diferentes. ¡Pueden causar situaciones muy incómodas!

La palabra "embarazada" no significa avergonzada, sino que está esperando un bebé. Si quieres decir que estás avergonzado, di "estoy avergonzado" o "me da vergüenza".

"Exquisito" en español significa delicioso, muy bueno. No tiene el sentido negativo que tiene en portugués. Un plato exquisito es un plato muy rico.

"Largo" significa long en inglés, no large. Si quieres decir que algo es grande, usa "grande". "El río es muy largo" significa que el río tiene muchos kilómetros.

"Oficina" es el lugar donde trabajas, no un taller mecánico. El taller de coches se llama "taller".

"Apellido" es tu nombre de familia, no tu apodo. Tu apodo en español es "apodo" o "mote".

Estos errores son muy comunes entre brasileños. Con el tiempo aprenderás a identificarlos y evitarlos.`,
    highlights: ['embarazada', 'avergonzado', 'Exquisito', 'exquisito', 'Largo', 'largo', 'Oficina', 'oficina', 'Apellido', 'apellido', 'apodo', 'mote', 'taller', 'grande', 'vergüenza'],
    vocabulary: [
      { word: 'incómodas', meaning: 'desconfortáveis' },
      { word: 'embarazada', meaning: 'grávida' },
      { word: 'avergonzado', meaning: 'envergonhado' },
      { word: 'exquisito', meaning: 'delicioso' },
      { word: 'apellido', meaning: 'sobrenome' },
      { word: 'apodo/mote', meaning: 'apelido' },
    ],
    questions: [
      { question: '¿Qué significa "embarazada" en español?', answer: 'Significa que una mujer está esperando un bebé (grávida).' },
      { question: '¿Cómo se dice "escritório" en español?', answer: 'Se dice "oficina".' },
      { question: '¿Qué significa "largo" en español?', answer: 'Significa "longo" (long), no "grande".' },
    ],
  },
  {
    id: 'tiempos-pasado',
    title: 'El Pasado en Español: Tres Formas',
    level: 'intermedio',
    topic: 'Gramática',
    emoji: '⏰',
    content: `En español usamos tres tiempos principales para hablar del pasado. Cada uno tiene un uso específico y es importante conocer las diferencias.

El Pretérito Indefinido se usa para acciones completadas en un momento específico del pasado. "Ayer comí paella" o "El año pasado viajé a Madrid". Son acciones terminadas, puntuales.

El Pretérito Perfecto conecta el pasado con el presente. "Hoy he trabajado mucho" o "Esta semana he leído dos libros". Usamos marcadores como hoy, esta semana, este mes, este año.

El Pretérito Imperfecto describe acciones habituales en el pasado o situaciones sin un final definido. "Cuando era niño, jugaba al fútbol todos los días" o "Hacía sol y los pájaros cantaban".

En España se usa más el Pretérito Perfecto que en Latinoamérica. Un español dice "hoy he comido" mientras un mexicano dice "hoy comí". Ambas formas son correctas.

Una regla práctica: si puedes decir "ayer" o una fecha específica, usa el Indefinido. Si puedes decir "hoy" o "esta semana", usa el Perfecto. Si describes cómo era algo o una acción repetida, usa el Imperfecto.`,
    highlights: ['Pretérito Indefinido', 'Pretérito Perfecto', 'Pretérito Imperfecto', 'Indefinido', 'Perfecto', 'Imperfecto', 'comí', 'viajé', 'he trabajado', 'he leído', 'era', 'jugaba', 'Hacía', 'cantaban', 'he comido', 'ayer', 'hoy', 'esta semana'],
    vocabulary: [
      { word: 'pretérito', meaning: 'pretérito (tempo passado)' },
      { word: 'puntual', meaning: 'pontual/específico' },
      { word: 'marcadores', meaning: 'marcadores temporais' },
      { word: 'habituales', meaning: 'habituais' },
      { word: 'regla práctica', meaning: 'regra prática' },
    ],
    questions: [
      { question: '¿Cuándo usamos el Pretérito Indefinido?', answer: 'Para acciones completadas en un momento específico del pasado (ayer, el año pasado, en 2020).' },
      { question: '¿Cuál es la diferencia entre España y Latinoamérica?', answer: 'En España se usa más el Pretérito Perfecto, en Latinoamérica se prefiere el Indefinido.' },
      { question: '¿Para qué sirve el Imperfecto?', answer: 'Para describir acciones habituales en el pasado o situaciones sin final definido.' },
    ],
  },
  {
    id: 'pronunciacion-espanola',
    title: 'La Pronunciación del Español de España',
    level: 'basico',
    topic: 'Pronúncia',
    emoji: '🗣️',
    content: `La pronunciación del español de España tiene algunas características únicas que lo distinguen del español de Latinoamérica.

La letra Z y la C antes de E o I se pronuncian con la lengua entre los dientes. Es el sonido "th" del inglés en "think". Los españoles dicen "grathias" mientras los latinoamericanos dicen "grasias". Ambas formas son correctas.

La letra J tiene un sonido fuerte y gutural, como si viniese del fondo de la garganta. "Jamón" suena casi como "rramón" con una R muy fuerte. Este sonido también aparece con la G antes de E o I: "gente" suena como "rrente".

La doble L se pronuncia como una Y fuerte en la mayor parte de España. "Calle" suena como "caye". En Argentina y Uruguay, suena más como una "sh" o "zh".

Las vocales en español son puras y cortas. No se nasalizan como en portugués. "Mano" se dice con una A clara, no "mãno". Tampoco reducimos las vocales: "todo" termina en O claro, no en "u".

Practica escuchando canciones, películas y podcasts españoles. Tu oído se acostumbrará gradualmente a estos sonidos.`,
    highlights: ['Z', 'C', 'J', 'G', 'LL', 'th', 'grathias', 'grasias', 'Jamón', 'gente', 'Calle', 'caye', 'vocales', 'Mano', 'todo'],
    vocabulary: [
      { word: 'distinguen', meaning: 'distinguem' },
      { word: 'lengua', meaning: 'língua' },
      { word: 'gutural', meaning: 'gutural' },
      { word: 'garganta', meaning: 'garganta' },
      { word: 'se nasalizan', meaning: 'se nasalizam' },
      { word: 'oído', meaning: 'ouvido' },
    ],
    questions: [
      { question: '¿Cómo se pronuncia la Z en España?', answer: 'Con la lengua entre los dientes, como el "th" de "think" en inglés.' },
      { question: '¿Cómo es el sonido de la J española?', answer: 'Es un sonido fuerte y gutural, del fondo de la garganta.' },
      { question: '¿Qué diferencia hay con las vocales del portugués?', answer: 'Las vocales españolas son puras y cortas, sin nasalización ni reducción.' },
    ],
  },
  {
    id: 'por-para',
    title: 'Por y Para: La Gran Confusión',
    level: 'intermedio',
    topic: 'Gramática',
    emoji: '➡️',
    content: `Las preposiciones "por" y "para" causan muchos problemas a los estudiantes de español. Ambas pueden traducirse como "por" o "para" en portugués, dependiendo del contexto.

Usamos PARA para indicar destino, finalidad o destinatario. "Voy para Madrid" indica mi destino. "Estudio para aprender" indica mi objetivo. "Este regalo es para ti" indica el destinatario.

Usamos POR para indicar causa, medio, intercambio o movimiento a través de algo. "Gracias por tu ayuda" indica la causa de mi agradecimiento. "Hablo por teléfono" indica el medio. "Pagué diez euros por el libro" indica un intercambio.

También usamos POR para expresar duración aproximada: "Viví en Madrid por dos años". Y para indicar movimiento: "Caminé por el parque".

Una regla simple: PARA mira hacia adelante, hacia el futuro o el objetivo. POR mira hacia atrás, hacia la causa o el origen.

Hay expresiones fijas que debes memorizar: "por favor", "por supuesto", "para siempre", "por fin". Con la práctica, elegir entre por y para se volverá automático.`,
    highlights: ['por', 'para', 'POR', 'PARA', 'por favor', 'por supuesto', 'para siempre', 'por fin', 'Voy para', 'Estudio para', 'para ti', 'por tu ayuda', 'por teléfono', 'por el libro', 'por dos años', 'por el parque'],
    vocabulary: [
      { word: 'preposiciones', meaning: 'preposições' },
      { word: 'destinatario', meaning: 'destinatário' },
      { word: 'intercambio', meaning: 'troca' },
      { word: 'agradecimiento', meaning: 'agradecimento' },
      { word: 'duración', meaning: 'duração' },
      { word: 'hacia adelante', meaning: 'para frente' },
    ],
    questions: [
      { question: '¿Cuándo usamos PARA?', answer: 'Para destino, finalidad o destinatario. Mira hacia el futuro/objetivo.' },
      { question: '¿Cuándo usamos POR?', answer: 'Para causa, medio, intercambio o movimiento. Mira hacia la causa/origen.' },
      { question: '¿Cómo se dice "obrigado pela ajuda"?', answer: '"Gracias por tu ayuda" — usamos POR porque indica la causa del agradecimiento.' },
    ],
  },
  {
    id: 'subjuntivo-intro',
    title: 'El Subjuntivo: Un Modo Diferente',
    level: 'avanzado',
    topic: 'Gramática',
    emoji: '🌀',
    content: `El subjuntivo es un modo verbal que expresa deseos, dudas, emociones y situaciones hipotéticas. Es uno de los aspectos más desafiantes del español para los brasileños.

Usamos el subjuntivo después de verbos que expresan deseo: "Quiero que vengas" (no "quiero que vienes"). La conjunción "que" es la señal de que necesitamos el subjuntivo.

También lo usamos con emociones: "Me alegra que estés aquí", "Siento que no puedas venir". Y con dudas: "No creo que sea verdad", "Dudo que llegue a tiempo".

Hay expresiones que siempre piden subjuntivo: "ojalá", "quizás", "tal vez", "es posible que", "es necesario que". Por ejemplo: "Ojalá llueva mañana", "Es posible que tenga razón".

La conjugación del subjuntivo parece complicada, pero sigue un patrón. Los verbos en -AR usan las terminaciones de -ER en subjuntivo, y viceversa. "Hablar" hace "hable", "comer" hace "coma".

No te desanimes si al principio parece difícil. Incluso los hablantes nativos a veces dudan. Lo importante es practicar y exponerte al idioma lo máximo posible.`,
    highlights: ['subjuntivo', 'Subjuntivo', 'vengas', 'vienes', 'estés', 'puedas', 'sea', 'llegue', 'ojalá', 'quizás', 'tal vez', 'es posible que', 'es necesario que', 'llueva', 'tenga', 'hable', 'coma', 'Quiero que', 'Me alegra que', 'No creo que', 'Dudo que'],
    vocabulary: [
      { word: 'desafiantes', meaning: 'desafiadores' },
      { word: 'conjunción', meaning: 'conjunção' },
      { word: 'señal', meaning: 'sinal' },
      { word: 'ojalá', meaning: 'tomara que' },
      { word: 'terminaciones', meaning: 'terminações' },
      { word: 'no te desanimes', meaning: 'não desanime' },
    ],
    questions: [
      { question: '¿Qué expresa el subjuntivo?', answer: 'Deseos, dudas, emociones y situaciones hipotéticas.' },
      { question: '¿Qué expresiones siempre piden subjuntivo?', answer: 'Ojalá, quizás, tal vez, es posible que, es necesario que.' },
      { question: '¿Por qué es "quiero que vengas" y no "quiero que vienes"?', answer: 'Porque después de verbos de deseo + que, usamos el subjuntivo.' },
    ],
  },
  {
    id: 'numeros-fechas',
    title: 'Números, Fechas y Horas',
    level: 'basico',
    topic: 'Vocabulário',
    emoji: '🔢',
    content: `Los números en español son bastante similares al portugués, pero hay algunas diferencias importantes que debes conocer.

Del uno al quince, los números son: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince. Nota que "catorce" y "quince" son diferentes del portugués.

Del dieciséis al diecinueve se escriben juntos: dieciséis, diecisiete, dieciocho, diecinueve. Del veintiuno al veintinueve también: veintiuno, veintidós, veintitrés...

Para las fechas usamos los números cardinales, no ordinales. Decimos "el tres de mayo", no "el tercero de mayo". Solo el primer día del mes puede usar ordinal: "el primero de enero" o "el uno de enero".

Para las horas, usamos "es la una" para la 1:00, pero "son las dos", "son las tres" para las demás. "¿Qué hora es?" se responde con "Es la una y media" o "Son las tres y cuarto".

Los minutos se expresan con "y" para la primera mitad de la hora: "las tres y veinte". Para la segunda mitad, usamos "menos": "las cuatro menos diez" significa 3:50.`,
    vocabulary: [
      { word: 'catorce', meaning: 'quatorze' },
      { word: 'quince', meaning: 'quinze' },
      { word: 'fecha', meaning: 'data' },
      { word: 'cardinales', meaning: 'cardinais' },
      { word: 'ordinales', meaning: 'ordinais' },
      { word: 'mitad', meaning: 'metade' },
    ],
    questions: [
      { question: '¿Cómo se dice la fecha "3 de mayo"?', answer: 'Se dice "el tres de mayo", usando número cardinal, no ordinal.' },
      { question: '¿Cómo se dice 3:50 en español?', answer: 'Se dice "las cuatro menos diez" o "las tres y cincuenta".' },
      { question: '¿Por qué "es la una" pero "son las dos"?', answer: 'Porque "una" es singular y "dos, tres..." son plurales.' },
    ],
  },
  {
    id: 'comida-restaurante',
    title: 'En el Restaurante: Pedir Comida',
    level: 'basico',
    topic: 'Situações',
    emoji: '🍽️',
    content: `Pedir comida en un restaurante español es una experiencia cultural. Aquí aprenderás las frases más útiles y algunas costumbres importantes.

Cuando llegas, puedes preguntar "¿Tienen mesa para dos?" o simplemente "¿Hay sitio?". El camarero te preguntará "¿Dentro o en la terraza?". Si quieres sentarte fuera, di "En la terraza, por favor".

Para pedir, usa "Yo quiero..." o más educado "Me pone...". Por ejemplo: "Me pone una cerveza y unas tapas de jamón". También puedes decir "Para mí, la paella" cuando el camarero pregunta qué van a tomar.

"¿Qué me recomienda?" es útil si no conoces el menú. El camarero te sugerirá los platos típicos o los más populares.

Para pedir la cuenta, di "La cuenta, por favor" o "¿Me cobra?". En España no es común dejar propina grande. Redondear la cuenta o dejar uno o dos euros es suficiente.

Una costumbre española: el "menú del día" es una opción económica que incluye primer plato, segundo plato, postre y bebida. Suele costar entre diez y quince euros y es perfecto para el almuerzo.`,
    vocabulary: [
      { word: 'camarero', meaning: 'garçom' },
      { word: 'terraza', meaning: 'área externa/terraço' },
      { word: 'tapas', meaning: 'porções pequenas' },
      { word: 'cuenta', meaning: 'conta' },
      { word: 'propina', meaning: 'gorjeta' },
      { word: 'menú del día', meaning: 'menu executivo' },
    ],
    questions: [
      { question: '¿Cómo pides una cerveza educadamente?', answer: '"Me pone una cerveza, por favor" o "Quería una cerveza".' },
      { question: '¿Qué es el menú del día?', answer: 'Es una opción económica con primer plato, segundo, postre y bebida.' },
      { question: '¿Cómo pides la cuenta?', answer: '"La cuenta, por favor" o "¿Me cobra?".' },
    ],
  },
  {
    id: 'trabajo-oficina',
    title: 'El Español en el Trabajo',
    level: 'intermedio',
    topic: 'Situações',
    emoji: '💼',
    content: `El español profesional tiene sus propias expresiones y nivel de formalidad. Conocerlas te ayudará en reuniones, correos y conversaciones de trabajo.

Para los correos electrónicos, empieza con "Estimado/a" para formal o "Hola" para semi-formal. Termina con "Un saludo", "Atentamente" o "Saludos cordiales". Evita "Besos" o "Abrazos" en contextos profesionales.

En reuniones, "tomar la palabra" significa empezar a hablar. "Tengo una duda" o "Me gustaría añadir algo" son formas educadas de intervenir. "¿Podemos retomar este tema más tarde?" es útil para posponer discusiones.

"Quedamos en que..." resume acuerdos: "Quedamos en que Juan enviará el informe el viernes". "¿Queda claro?" confirma que todos entienden.

Para pedir cosas, usa el condicional: "¿Podrías enviarme el archivo?" suena más educado que "Envíame el archivo". "Necesitaría que..." es otra forma cortés.

El tratamiento de "usted" se usa con clientes, jefes o personas mayores. Entre compañeros del mismo nivel, el "tú" es normal en España. En Latinoamérica, "usted" es más común incluso entre colegas.`,
    vocabulary: [
      { word: 'correo electrónico', meaning: 'e-mail' },
      { word: 'reunión', meaning: 'reunião' },
      { word: 'tomar la palabra', meaning: 'tomar a palavra' },
      { word: 'añadir', meaning: 'adicionar' },
      { word: 'informe', meaning: 'relatório' },
      { word: 'tratamiento', meaning: 'tratamento' },
    ],
    questions: [
      { question: '¿Cómo terminas un correo formal?', answer: 'Con "Un saludo", "Atentamente" o "Saludos cordiales".' },
      { question: '¿Cuándo usar "usted" en el trabajo?', answer: 'Con clientes, jefes, personas mayores. En Latinoamérica es más común.' },
      { question: '¿Cómo pedir algo educadamente?', answer: 'Usando condicional: "¿Podrías...?" o "Necesitaría que...".' },
    ],
  },
  {
    id: 'viajar-transporte',
    title: 'Viajando por España',
    level: 'basico',
    topic: 'Situações',
    emoji: '🚂',
    content: `España tiene excelentes conexiones de transporte. Conocer el vocabulario y las expresiones te hará viajar con más confianza.

En la estación de tren, busca la "taquilla" para comprar billetes o usa las máquinas automáticas. "Un billete de ida a Barcelona" para ir solo. "Un billete de ida y vuelta" para ir y volver. "¿A qué hora sale el próximo tren?" te da información sobre horarios.

El AVE es el tren de alta velocidad. Es rápido pero más caro. Los trenes de "cercanías" son para distancias cortas y más baratos. El "andén" es donde esperas el tren.

En el metro, compra un "billete sencillo" o un "abono de diez viajes" si vas a usar mucho. "¿Qué línea va a Sol?" te ayuda a encontrar tu ruta. "Transbordo" significa cambiar de línea.

Para taxis, di "Al aeropuerto, por favor" o da la dirección exacta. "¿Cuánto cuesta ir al centro?" te da una idea del precio. Los taxis tienen taxímetro, pero para el aeropuerto suele haber tarifa fija.

Las aplicaciones como Cabify o Uber funcionan en las grandes ciudades y son alternativas prácticas a los taxis tradicionales.`,
    vocabulary: [
      { word: 'taquilla', meaning: 'bilheteria' },
      { word: 'billete', meaning: 'passagem/bilhete' },
      { word: 'ida y vuelta', meaning: 'ida e volta' },
      { word: 'andén', meaning: 'plataforma' },
      { word: 'cercanías', meaning: 'trem suburbano' },
      { word: 'transbordo', meaning: 'baldeação' },
    ],
    questions: [
      { question: '¿Cómo compras un billete de ida y vuelta?', answer: '"Un billete de ida y vuelta a [destino], por favor".' },
      { question: '¿Qué es el AVE?', answer: 'Es el tren de alta velocidad de España.' },
      { question: '¿Qué es un "transbordo"?', answer: 'Es cambiar de una línea de metro o tren a otra.' },
    ],
  },
  {
    id: 'medico-salud',
    title: 'En el Médico: Tu Salud',
    level: 'intermedio',
    topic: 'Situações',
    emoji: '🏥',
    content: `Saber comunicarte con médicos es esencial cuando vives en otro país. Estas expresiones te ayudarán en consultas y emergencias.

Para pedir cita, llama y di "Quería pedir cita con el médico de cabecera" o "Necesito una cita urgente". Te preguntarán tu número de la Seguridad Social o tu seguro privado.

En la consulta, el médico pregunta "¿Qué le pasa?" o "¿Qué le trae por aquí?". Describe tus síntomas: "Me duele la cabeza", "Tengo fiebre desde ayer", "Me encuentro mal".

Para describir dolor, usa "Me duele..." con la parte del cuerpo: "Me duele el estómago", "Me duelen las piernas". "Tengo dolor de..." también funciona: "Tengo dolor de espalda".

El médico puede decir "Le voy a recetar..." para darte medicamentos. "Tómese este medicamento cada ocho horas" indica la frecuencia. "En ayunas" significa antes de comer.

En urgencias, di "Es una emergencia" si es grave. "Se ha caído", "Se ha cortado", "No puede respirar bien" describen situaciones urgentes. El número de emergencias en España es el 112.`,
    vocabulary: [
      { word: 'cita', meaning: 'consulta/hora marcada' },
      { word: 'médico de cabecera', meaning: 'médico de família' },
      { word: 'síntomas', meaning: 'sintomas' },
      { word: 'recetar', meaning: 'receitar' },
      { word: 'en ayunas', meaning: 'em jejum' },
      { word: 'urgencias', meaning: 'emergência' },
    ],
    questions: [
      { question: '¿Cómo dices que te duele el estómago?', answer: '"Me duele el estómago" o "Tengo dolor de estómago".' },
      { question: '¿Qué significa "en ayunas"?', answer: 'Significa tomar el medicamento antes de comer, con el estómago vacío.' },
      { question: '¿Cuál es el número de emergencias en España?', answer: 'El 112.' },
    ],
  },
  {
    id: 'clima-tiempo',
    title: 'Hablando del Tiempo',
    level: 'basico',
    topic: 'Vocabulário',
    emoji: '🌤️',
    content: `Hablar del tiempo es el tema de conversación más universal. En España, el clima varía mucho según la región, así que es un tema frecuente.

Para preguntar, di "¿Qué tiempo hace?" o "¿Cómo está el tiempo?". Las respuestas usan "hace" para sensaciones: "Hace calor", "Hace frío", "Hace viento", "Hace sol".

Para fenómenos naturales, usamos "hay" o verbos específicos: "Hay niebla", "Hay tormenta". "Está lloviendo" o simplemente "Llueve". "Está nevando" o "Nieva".

"Está nublado" significa que hay nubes. "Está despejado" significa cielo sin nubes. "Hace buen tiempo" es genérico para clima agradable.

Las temperaturas se expresan en grados Celsius: "Hoy estamos a treinta grados" o "Hace cinco grados bajo cero". "Grados bajo cero" indica temperaturas negativas.

Para el pronóstico, "Mañana va a llover" o "Se esperan tormentas para el fin de semana". "¿Qué dicen para mañana?" pregunta por el pronóstico.

En el norte de España llueve mucho. En el sur hace mucho calor en verano. Madrid tiene inviernos fríos y veranos muy calurosos.`,
    vocabulary: [
      { word: 'tiempo', meaning: 'tempo (clima)' },
      { word: 'niebla', meaning: 'neblina' },
      { word: 'tormenta', meaning: 'tempestade' },
      { word: 'nublado', meaning: 'nublado' },
      { word: 'despejado', meaning: 'céu limpo' },
      { word: 'pronóstico', meaning: 'previsão' },
    ],
    questions: [
      { question: '¿Cómo preguntas por el clima?', answer: '"¿Qué tiempo hace?" o "¿Cómo está el tiempo?".' },
      { question: '¿Cómo dices que está fazendo frio?', answer: '"Hace frío" — usamos "hace" para sensaciones térmicas.' },
      { question: '¿Cómo se dice "5 graus negativos"?', answer: '"Cinco grados bajo cero".' },
    ],
  },
  {
    id: 'familia-relaciones',
    title: 'La Familia y las Relaciones',
    level: 'basico',
    topic: 'Vocabulário',
    emoji: '👨‍👩‍👧‍👦',
    content: `El vocabulario de familia en español tiene algunas diferencias con el portugués que pueden causar confusión.

Los padres son "padre" y "madre", o informalmente "papá" y "mamá". "Padres" en plural significa ambos, padre y madre. Los hermanos son "hermano" y "hermana".

Cuidado: "parientes" en español significa familiares en general, no solo los pais. Tus tíos, primos y abuelos son tus "parientes". Para decir "pais" usa "padres".

Los suegros son "suegro" y "suegra" — los padres de tu pareja. Los cuñados son "cuñado" y "cuñada" — los hermanos de tu pareja o las parejas de tus hermanos.

"Novio" y "novia" pueden significar boyfriend/girlfriend o también fiancé. El contexto aclara. "Pareja" es más neutral y se usa mucho actualmente.

Para estado civil: "soltero/a" (no casado), "casado/a", "divorciado/a", "viudo/a" (si el cónyuge murió). "Estoy casado con María" indica con quién.

"Hijo único" significa que no tienes hermanos. "Somos cuatro hermanos" cuenta todos, incluido tú.`,
    vocabulary: [
      { word: 'parientes', meaning: 'parentes/familiares' },
      { word: 'suegros', meaning: 'sogros' },
      { word: 'cuñados', meaning: 'cunhados' },
      { word: 'novio/a', meaning: 'namorado/a' },
      { word: 'pareja', meaning: 'parceiro/a, casal' },
      { word: 'viudo/a', meaning: 'viúvo/a' },
    ],
    questions: [
      { question: '¿Qué significa "parientes" en español?', answer: 'Significa familiares en general (tíos, primos, abuelos...), no solo los padres.' },
      { question: '¿Quién es tu "cuñado"?', answer: 'El hermano de tu pareja, o la pareja de tu hermano/a.' },
      { question: '¿Cómo dices que no tienes hermanos?', answer: '"Soy hijo/a único/a".' },
    ],
  },
  {
    id: 'compras-tiendas',
    title: 'De Compras en España',
    level: 'basico',
    topic: 'Situações',
    emoji: '🛍️',
    content: `Ir de compras es una de las mejores formas de practicar español. Cada tipo de tienda tiene su vocabulario específico.

En una tienda de ropa, "¿Puedo probármelo?" pide permiso para usar el probador. "¿Tienen esto en otra talla?" si necesitas otro tamaño. Las tallas son: XS (muy pequeña), S (pequeña), M (mediana), L (grande), XL (muy grande).

"¿Cuánto cuesta?" o "¿Cuánto vale?" pregunta el precio. "¿Tiene descuento?" pregunta por ofertas. "Está rebajado" significa que tiene descuento.

En el supermercado, usas un "carrito" o una "cesta". "¿Dónde están los lácteos?" pregunta por una sección. "¿Tienen pan integral?" pregunta por un producto específico.

"¿Pago en efectivo o con tarjeta?" te preguntará el cajero. "Con tarjeta" o "En efectivo" son las respuestas. "¿Me da una bolsa?" si necesitas bolsa para llevar las compras.

Los horarios comerciales en España: muchas tiendas pequeñas cierran de 14h a 17h. Los grandes centros comerciales y supermercados suelen tener horario continuo. Los domingos muchas tiendas están cerradas.`,
    vocabulary: [
      { word: 'probador', meaning: 'provador' },
      { word: 'talla', meaning: 'tamanho (roupa)' },
      { word: 'rebajado', meaning: 'com desconto' },
      { word: 'carrito', meaning: 'carrinho' },
      { word: 'cesta', meaning: 'cesta' },
      { word: 'en efectivo', meaning: 'em dinheiro' },
    ],
    questions: [
      { question: '¿Cómo pides probar una ropa?', answer: '"¿Puedo probármelo?" o "¿Dónde está el probador?".' },
      { question: '¿Qué significa "está rebajado"?', answer: 'Significa que el producto tiene descuento.' },
      { question: '¿Por qué muchas tiendas cierran por la tarde?', answer: 'Por la tradición de la siesta, cierran de 14h a 17h aproximadamente.' },
    ],
  },
  {
    id: 'expresiones-coloquiales',
    title: 'Expresiones Coloquiales Españolas',
    level: 'avanzado',
    topic: 'Vocabulário',
    emoji: '🗣️',
    content: `El español coloquial de España está lleno de expresiones que no encontrarás en los libros. Conocerlas te ayudará a entender conversaciones reales.

"Mola" o "mola mucho" significa que algo es genial, cool. "Esta película mola" = esta película es buena. "Qué mola" expresa admiración.

"Flipar" es sorprenderse mucho: "Estoy flipando con esta noticia". "Flipante" describe algo increíble o sorprendente.

"Currar" es trabajar en registro informal. "Voy al curro" = voy al trabajo. "Estoy currando" = estoy trabajando.

"Quedarse" con alguien significa burlarse amablemente: "¿Te estás quedando conmigo?" = ¿Me estás tomando el pelo?

"Ir al grano" significa ir directo al punto, sin rodeos. "Venga, ve al grano" = dime lo importante.

"Pasarlo bomba" es divertirse mucho. "Lo pasamos bomba en la fiesta" = nos divertimos mucho.

"Tío" y "tía" se usan entre amigos como "cara" en portugués: "¿Qué pasa, tío?" es un saludo informal.

"Quedamos" significa hacer planes para encontrarse: "¿Quedamos mañana?" = ¿nos encontramos mañana?

Estas expresiones son muy españolas. En Latinoamérica usan otras diferentes.`,
    vocabulary: [
      { word: 'mola', meaning: 'é legal/bacana' },
      { word: 'flipar', meaning: 'pirar/se surpreender' },
      { word: 'currar', meaning: 'trabalhar (gíria)' },
      { word: 'ir al grano', meaning: 'ir direto ao ponto' },
      { word: 'pasarlo bomba', meaning: 'se divertir muito' },
      { word: 'quedamos', meaning: 'combinamos/nos encontramos' },
    ],
    questions: [
      { question: '¿Qué significa "mola"?', answer: 'Significa que algo es genial, cool, muy bueno.' },
      { question: '¿Cómo se dice "ir direto ao ponto"?', answer: '"Ir al grano" o "ve al grano".' },
      { question: '¿Qué significa "¿Quedamos mañana?"?', answer: 'Significa "¿nos encontramos mañana?" — hacer planes para verse.' },
    ],
  },
  {
    id: 'tecnologia-internet',
    title: 'Tecnología e Internet',
    level: 'intermedio',
    topic: 'Vocabulário',
    emoji: '💻',
    content: `El vocabulario tecnológico mezcla anglicismos con palabras españolas. Conocer ambos te ayudará a comunicarte mejor.

"Ordenador" es la palabra española para computer, aunque en Latinoamérica dicen "computadora". "Portátil" es un laptop. "Ratón" es el mouse.

"Contraseña" es password. "Usuario" es username. "Iniciar sesión" es log in. "Cerrar sesión" es log out.

Para internet: "red wifi" (pronunciado "güifi"), "conexión", "descargar" (download), "subir" (upload). "Se me ha caído la conexión" significa que perdiste internet.

En redes sociales: "seguidor" (follower), "me gusta" (like), "compartir" (share), "publicar" (post). "Hacerse viral" cuando algo se comparte mucho.

"Aplicación" o "app" para los programas de móvil. "Actualizar" es update. "La última versión" es the latest version.

Para problemas técnicos: "No me funciona" (no funciona), "Se ha quedado colgado" (se trabó), "Hay que reiniciar" (hay que reiniciar). "¿Has probado a apagar y encender?" es el consejo clásico.

"Adjuntar" es attach (archivos). "Reenviar" es forward. "Copia oculta" es BCC.`,
    vocabulary: [
      { word: 'ordenador', meaning: 'computador' },
      { word: 'contraseña', meaning: 'senha' },
      { word: 'descargar', meaning: 'baixar/download' },
      { word: 'subir', meaning: 'fazer upload' },
      { word: 'se ha quedado colgado', meaning: 'travou' },
      { word: 'adjuntar', meaning: 'anexar' },
    ],
    questions: [
      { question: '¿Cómo se dice "computador" en España?', answer: '"Ordenador" (en Latinoamérica dicen "computadora").' },
      { question: '¿Cómo dices que tu computador travou?', answer: '"Se ha quedado colgado" o "se ha colgado".' },
      { question: '¿Qué significa "adjuntar"?', answer: 'Significa anexar un archivo a un correo o mensaje.' },
    ],
  },
  {
    id: 'cultura-espanola',
    title: 'Costumbres y Cultura Española',
    level: 'intermedio',
    topic: 'Cultura',
    emoji: '🇪🇸',
    content: `Entender la cultura española te ayudará a integrarte mejor y evitar malentendidos. Los españoles tienen costumbres únicas.

Los horarios españoles son diferentes. El almuerzo es entre las 14h y las 16h. La cena, entre las 21h y las 23h. Las tiendas pequeñas cierran al mediodía. Salir de fiesta significa volver a casa de madrugada.

Los españoles son muy directos en la comunicación. Pueden parecer bruscos, pero es su forma natural de hablar. No es mala educación, es sinceridad.

"Quedar para tomar algo" es muy importante socialmente. Un café, una caña de cerveza, unas tapas. La vida social ocurre mucho fuera de casa.

El contacto físico es mayor que en otras culturas. Dos besos en las mejillas para saludar (empezando por la izquierda). Los hombres se dan la mano o, si son amigos cercanos, también se abrazan.

La familia es muy importante. Es común vivir con los padres hasta los treinta años. Los domingos se come en familia. Los abuelos participan mucho en el cuidado de los nietos.

Las fiestas locales son sagradas. Cada pueblo tiene su santo patrono y sus fiestas. La Semana Santa, las fallas, los sanfermines... son tradiciones muy arraigadas.`,
    vocabulary: [
      { word: 'madrugada', meaning: 'madrugada' },
      { word: 'brusco', meaning: 'bruto/direto' },
      { word: 'caña', meaning: 'copo de cerveja' },
      { word: 'mejillas', meaning: 'bochechas' },
      { word: 'santo patrono', meaning: 'santo padroeiro' },
      { word: 'arraigadas', meaning: 'enraizadas' },
    ],
    questions: [
      { question: '¿A qué hora se cena en España?', answer: 'Entre las 21h y las 23h, mucho más tarde que en Brasil.' },
      { question: '¿Cómo se saludan los españoles?', answer: 'Con dos besos en las mejillas, empezando por la izquierda.' },
      { question: '¿Qué significa "quedar para tomar algo"?', answer: 'Encontrarse con amigos para tomar un café, cerveza o tapas.' },
    ],
  },
];

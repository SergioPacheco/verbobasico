import type { ContextualPhrase } from '../types';

export const contextualPhrases: ContextualPhrase[] = [
  // ═══════════════════════════════════════════════════
  // 🛒 MERCADO / SUPERMERCADO
  // ═══════════════════════════════════════════════════
  {
    id: 'merc-01', verb: 'querer', pronoun: 'yo', tense: 'presente', conjugation: 'quiero',
    spanish: 'Quiero un kilo de manzanas, por favor.',
    portuguese: 'Quero um quilo de maçãs, por favor.',
    challenge: '___ un kilo de manzanas, por favor.',
    situation: 'mercado',
  },
  {
    id: 'merc-02', verb: 'poder', pronoun: 'yo', tense: 'presente', conjugation: 'puedo',
    spanish: '¿Puedo pagar con tarjeta?',
    portuguese: 'Posso pagar com cartão?',
    challenge: '¿___ pagar con tarjeta?',
    situation: 'mercado',
  },
  {
    id: 'merc-03', verb: 'tener', pronoun: 'el', tense: 'presente', conjugation: 'tiene',
    spanish: '¿Tiene bolsas de plástico?',
    portuguese: 'Tem sacolas plásticas?',
    challenge: '¿___ bolsas de plástico?',
    situation: 'mercado',
  },
  {
    id: 'merc-04', verb: 'comprar', pronoun: 'yo', tense: 'presente', conjugation: 'compro',
    spanish: 'Siempre compro la fruta aquí.',
    portuguese: 'Sempre compro a fruta aqui.',
    challenge: 'Siempre ___ la fruta aquí.',
    situation: 'mercado',
  },
  {
    id: 'merc-05', verb: 'pagar', pronoun: 'yo', tense: 'preteritoIndefinido', conjugation: 'pagué',
    spanish: 'Ya pagué en la caja.',
    portuguese: 'Já paguei no caixa.',
    challenge: 'Ya ___ en la caja.',
    situation: 'mercado',
  },
  {
    id: 'merc-06', verb: 'estar', pronoun: 'el', tense: 'presente', conjugation: 'está',
    spanish: '¿Dónde está la sección de lácteos?',
    portuguese: 'Onde fica a seção de laticínios?',
    challenge: '¿Dónde ___ la sección de lácteos?',
    situation: 'mercado',
  },

  // ═══════════════════════════════════════════════════
  // 🏥 MÉDICO
  // ═══════════════════════════════════════════════════
  {
    id: 'med-01', verb: 'tener', pronoun: 'yo', tense: 'presente', conjugation: 'tengo',
    spanish: 'Tengo cita con el médico a las diez.',
    portuguese: 'Tenho consulta com o médico às dez.',
    challenge: '___ cita con el médico a las diez.',
    situation: 'medico',
  },
  {
    id: 'med-02', verb: 'querer', pronoun: 'yo', tense: 'presente', conjugation: 'quiero',
    spanish: 'Quiero pedir cita con el dentista.',
    portuguese: 'Quero marcar consulta com o dentista.',
    challenge: '___ pedir cita con el dentista.',
    situation: 'medico',
  },
  {
    id: 'med-03', verb: 'estar', pronoun: 'yo', tense: 'presente', conjugation: 'estoy',
    spanish: 'Estoy enfermo desde ayer.',
    portuguese: 'Estou doente desde ontem.',
    challenge: '___ enfermo desde ayer.',
    situation: 'medico',
  },
  {
    id: 'med-04', verb: 'poder', pronoun: 'yo', tense: 'presente', conjugation: 'puedo',
    spanish: 'No puedo dormir bien por la noche.',
    portuguese: 'Não consigo dormir bem à noite.',
    challenge: 'No ___ dormir bien por la noche.',
    situation: 'medico',
  },
  {
    id: 'med-05', verb: 'ir', pronoun: 'yo', tense: 'presente', conjugation: 'voy',
    spanish: 'Voy a urgencias porque me duele mucho.',
    portuguese: 'Vou à emergência porque dói muito.',
    challenge: '___ a urgencias porque me duele mucho.',
    situation: 'medico',
  },
  {
    id: 'med-06', verb: 'hacer', pronoun: 'yo', tense: 'preteritoIndefinido', conjugation: 'hice',
    spanish: 'Me hice un análisis de sangre la semana pasada.',
    portuguese: 'Fiz um exame de sangue semana passada.',
    challenge: 'Me ___ un análisis de sangre la semana pasada.',
    situation: 'medico',
  },

  // ═══════════════════════════════════════════════════
  // 💼 TRABALHO
  // ═══════════════════════════════════════════════════
  {
    id: 'trab-01', verb: 'trabajar', pronoun: 'yo', tense: 'presente', conjugation: 'trabajo',
    spanish: 'Trabajo de lunes a viernes.',
    portuguese: 'Trabalho de segunda a sexta.',
    challenge: '___ de lunes a viernes.',
    situation: 'trabalho',
  },
  {
    id: 'trab-02', verb: 'poder', pronoun: 'yo', tense: 'presente', conjugation: 'puedo',
    spanish: '¿Puedo salir una hora antes hoy?',
    portuguese: 'Posso sair uma hora mais cedo hoje?',
    challenge: '¿___ salir una hora antes hoy?',
    situation: 'trabalho',
  },
  {
    id: 'trab-03', verb: 'tener', pronoun: 'yo', tense: 'presente', conjugation: 'tengo',
    spanish: 'Tengo una reunión a las tres.',
    portuguese: 'Tenho uma reunião às três.',
    challenge: '___ una reunión a las tres.',
    situation: 'trabalho',
  },
  {
    id: 'trab-04', verb: 'hacer', pronoun: 'yo', tense: 'futuroSimple', conjugation: 'haré',
    spanish: 'Haré el informe mañana.',
    portuguese: 'Farei o relatório amanhã.',
    challenge: '___ el informe mañana.',
    situation: 'trabalho',
  },
  {
    id: 'trab-05', verb: 'estar', pronoun: 'yo', tense: 'presente', conjugation: 'estoy',
    spanish: 'Estoy buscando trabajo de programador.',
    portuguese: 'Estou procurando trabalho de programador.',
    challenge: '___ buscando trabajo de programador.',
    situation: 'trabalho',
  },
  {
    id: 'trab-06', verb: 'ser', pronoun: 'yo', tense: 'presente', conjugation: 'soy',
    spanish: 'Soy autónomo y trabajo desde casa.',
    portuguese: 'Sou autônomo e trabalho de casa.',
    challenge: '___ autónomo y trabajo desde casa.',
    situation: 'trabalho',
  },

  // ═══════════════════════════════════════════════════
  // 📄 DOCUMENTOS
  // ═══════════════════════════════════════════════════
  {
    id: 'doc-01', verb: 'tener', pronoun: 'yo', tense: 'presente', conjugation: 'tengo',
    spanish: 'Tengo que renovar mi NIE.',
    portuguese: 'Tenho que renovar meu NIE.',
    challenge: '___ que renovar mi NIE.',
    situation: 'documentos',
  },
  {
    id: 'doc-02', verb: 'ir', pronoun: 'yo', tense: 'presente', conjugation: 'voy',
    spanish: 'Voy a la comisaría para el empadronamiento.',
    portuguese: 'Vou à delegacia para o empadronamento.',
    challenge: '___ a la comisaría para el empadronamiento.',
    situation: 'documentos',
  },
  {
    id: 'doc-03', verb: 'hacer', pronoun: 'yo', tense: 'preteritoIndefinido', conjugation: 'hice',
    spanish: 'Hice la solicitud de residencia ayer.',
    portuguese: 'Fiz a solicitação de residência ontem.',
    challenge: '___ la solicitud de residencia ayer.',
    situation: 'documentos',
  },
  {
    id: 'doc-04', verb: 'poder', pronoun: 'yo', tense: 'presente', conjugation: 'puedo',
    spanish: '¿Puedo pedir cita previa por internet?',
    portuguese: 'Posso marcar horário pela internet?',
    challenge: '¿___ pedir cita previa por internet?',
    situation: 'documentos',
  },
  {
    id: 'doc-05', verb: 'estar', pronoun: 'el', tense: 'presente', conjugation: 'está',
    spanish: 'Mi pasaporte está caducado.',
    portuguese: 'Meu passaporte está vencido.',
    challenge: 'Mi pasaporte ___ caducado.',
    situation: 'documentos',
  },
  {
    id: 'doc-06', verb: 'querer', pronoun: 'yo', tense: 'presente', conjugation: 'quiero',
    spanish: 'Quiero abrir una cuenta bancaria.',
    portuguese: 'Quero abrir uma conta bancária.',
    challenge: '___ abrir una cuenta bancaria.',
    situation: 'documentos',
  },

  // ═══════════════════════════════════════════════════
  // 🍽️ RESTAURANTE
  // ═══════════════════════════════════════════════════
  {
    id: 'rest-01', verb: 'querer', pronoun: 'yo', tense: 'presente', conjugation: 'quiero',
    spanish: 'Quiero un café con leche, por favor.',
    portuguese: 'Quero um café com leite, por favor.',
    challenge: '___ un café con leche, por favor.',
    situation: 'restaurante',
  },
  {
    id: 'rest-02', verb: 'pedir', pronoun: 'yo', tense: 'presente', conjugation: 'pido',
    spanish: 'Pido la cuenta, por favor.',
    portuguese: 'Peço a conta, por favor.',
    challenge: '___ la cuenta, por favor.',
    situation: 'restaurante',
  },
  {
    id: 'rest-03', verb: 'poder', pronoun: 'el', tense: 'presente', conjugation: 'puede',
    spanish: '¿Me puede traer la carta?',
    portuguese: 'Pode me trazer o cardápio?',
    challenge: '¿Me ___ traer la carta?',
    situation: 'restaurante',
  },
  {
    id: 'rest-04', verb: 'tener', pronoun: 'ellos', tense: 'presente', conjugation: 'tienen',
    spanish: '¿Tienen menú del día?',
    portuguese: 'Vocês têm menu do dia?',
    challenge: '¿___ menú del día?',
    situation: 'restaurante',
  },
  {
    id: 'rest-05', verb: 'estar', pronoun: 'el', tense: 'presente', conjugation: 'está',
    spanish: 'La comida está muy rica.',
    portuguese: 'A comida está muito gostosa.',
    challenge: 'La comida ___ muy rica.',
    situation: 'restaurante',
  },
  {
    id: 'rest-06', verb: 'ir', pronoun: 'yo', tense: 'presente', conjugation: 'voy',
    spanish: 'Voy a tomar una cerveza.',
    portuguese: 'Vou tomar uma cerveja.',
    challenge: '___ a tomar una cerveza.',
    situation: 'restaurante',
  },

  // ═══════════════════════════════════════════════════
  // 🚌 TRANSPORTE
  // ═══════════════════════════════════════════════════
  {
    id: 'trans-01', verb: 'ir', pronoun: 'yo', tense: 'presente', conjugation: 'voy',
    spanish: 'Voy al centro en metro.',
    portuguese: 'Vou ao centro de metrô.',
    challenge: '___ al centro en metro.',
    situation: 'transporte',
  },
  {
    id: 'trans-02', verb: 'estar', pronoun: 'el', tense: 'presente', conjugation: 'está',
    spanish: '¿Dónde está la parada de autobús?',
    portuguese: 'Onde fica o ponto de ônibus?',
    challenge: '¿Dónde ___ la parada de autobús?',
    situation: 'transporte',
  },
  {
    id: 'trans-03', verb: 'tener', pronoun: 'yo', tense: 'presente', conjugation: 'tengo',
    spanish: 'Tengo que hacer transbordo en Sol.',
    portuguese: 'Tenho que fazer baldeação na Sol.',
    challenge: '___ que hacer transbordo en Sol.',
    situation: 'transporte',
  },
  {
    id: 'trans-04', verb: 'comprar', pronoun: 'yo', tense: 'preteritoIndefinido', conjugation: 'compré',
    spanish: 'Compré un abono de transporte mensual.',
    portuguese: 'Comprei um passe de transporte mensal.',
    challenge: '___ un abono de transporte mensual.',
    situation: 'transporte',
  },
  {
    id: 'trans-05', verb: 'poder', pronoun: 'yo', tense: 'presente', conjugation: 'puedo',
    spanish: '¿Puedo recargar la tarjeta aquí?',
    portuguese: 'Posso recarregar o cartão aqui?',
    challenge: '¿___ recargar la tarjeta aquí?',
    situation: 'transporte',
  },
  {
    id: 'trans-06', verb: 'ser', pronoun: 'el', tense: 'presente', conjugation: 'es',
    spanish: '¿Cuál es la próxima parada?',
    portuguese: 'Qual é a próxima parada?',
    challenge: '¿Cuál ___ la próxima parada?',
    situation: 'transporte',
  },

  // ═══════════════════════════════════════════════════
  // ❓ FRASES NEGATIVAS E INTERROGATIVAS (novos verbos)
  // ═══════════════════════════════════════════════════
  {
    id: 'neg-01', verb: 'dormir', pronoun: 'yo', tense: 'presente', conjugation: 'duermo',
    spanish: 'No duermo bien desde que llegué a España.',
    portuguese: 'Não durmo bem desde que cheguei na Espanha.',
    challenge: 'No ___ bien desde que llegué a España.',
    situation: 'medico',
  },
  {
    id: 'neg-02', verb: 'beber', pronoun: 'yo', tense: 'presente', conjugation: 'bebo',
    spanish: 'No bebo alcohol, ¿tiene algo sin?',
    portuguese: 'Não bebo álcool, tem algo sem?',
    challenge: 'No ___ alcohol, ¿tiene algo sin?',
    situation: 'restaurante',
  },
  {
    id: 'neg-03', verb: 'leer', pronoun: 'yo', tense: 'preteritoIndefinido', conjugation: 'leí',
    spanish: 'No leí bien el contrato antes de firmarlo.',
    portuguese: 'Não li bem o contrato antes de assinar.',
    challenge: 'No ___ bien el contrato antes de firmarlo.',
    situation: 'aluguel',
  },
  {
    id: 'neg-04', verb: 'escribir', pronoun: 'yo', tense: 'preteritoIndefinido', conjugation: 'escribí',
    spanish: 'No escribí mi dirección correctamente en el formulario.',
    portuguese: 'Não escrevi meu endereço corretamente no formulário.',
    challenge: 'No ___ mi dirección correctamente en el formulario.',
    situation: 'documentos',
  },
  {
    id: 'neg-05', verb: 'abrir', pronoun: 'el', tense: 'presente', conjugation: 'abre',
    spanish: 'La farmacia no abre los domingos.',
    portuguese: 'A farmácia não abre aos domingos.',
    challenge: 'La farmacia no ___ los domingos.',
    situation: 'medico',
  },
  {
    id: 'neg-06', verb: 'cerrar', pronoun: 'el', tense: 'presente', conjugation: 'cierra',
    spanish: 'El supermercado no cierra hasta las diez.',
    portuguese: 'O supermercado não fecha até as dez.',
    challenge: 'El supermercado no ___ hasta las diez.',
    situation: 'mercado',
  },
  {
    id: 'neg-07', verb: 'llevar', pronoun: 'yo', tense: 'presente', conjugation: 'llevo',
    spanish: 'No llevo efectivo encima, ¿puedo pagar con móvil?',
    portuguese: 'Não levo dinheiro, posso pagar com celular?',
    challenge: 'No ___ efectivo encima, ¿puedo pagar con móvil?',
    situation: 'mercado',
  },
  {
    id: 'neg-08', verb: 'traer', pronoun: 'yo', tense: 'preteritoIndefinido', conjugation: 'traje',
    spanish: 'No traje los documentos originales, ¿sirven las fotocopias?',
    portuguese: 'Não trouxe os documentos originais, servem cópias?',
    challenge: 'No ___ los documentos originales, ¿sirven las fotocopias?',
    situation: 'documentos',
  },
  {
    id: 'neg-09', verb: 'empezar', pronoun: 'el', tense: 'presente', conjugation: 'empieza',
    spanish: 'La reunión no empieza hasta las cuatro.',
    portuguese: 'A reunião não começa até as quatro.',
    challenge: 'La reunión no ___ hasta las cuatro.',
    situation: 'trabalho',
  },
  {
    id: 'neg-10', verb: 'terminar', pronoun: 'yo', tense: 'presente', conjugation: 'termino',
    spanish: 'No termino el turno hasta las ocho.',
    portuguese: 'Não termino o turno até as oito.',
    challenge: 'No ___ el turno hasta las ocho.',
    situation: 'trabalho',
  },
  {
    id: 'neg-11', verb: 'conocer', pronoun: 'yo', tense: 'presente', conjugation: 'conozco',
    spanish: 'No conozco bien esta zona de la ciudad.',
    portuguese: 'Não conheço bem essa zona da cidade.',
    challenge: 'No ___ bien esta zona de la ciudad.',
    situation: 'transporte',
  },
  {
    id: 'neg-12', verb: 'pensar', pronoun: 'yo', tense: 'presente', conjugation: 'pienso',
    spanish: 'No pienso renovar el contrato este año.',
    portuguese: 'Não penso em renovar o contrato este ano.',
    challenge: 'No ___ renovar el contrato este año.',
    situation: 'aluguel',
  },
  {
    id: 'neg-13', verb: 'sentir', pronoun: 'yo', tense: 'presente', conjugation: 'siento',
    spanish: 'No me siento bien, necesito sentarme.',
    portuguese: 'Não me sinto bem, preciso sentar.',
    challenge: 'No me ___ bien, necesito sentarme.',
    situation: 'medico',
  },
  {
    id: 'neg-14', verb: 'oír', pronoun: 'yo', tense: 'presente', conjugation: 'oigo',
    spanish: 'No oigo bien, ¿puede hablar más despacio?',
    portuguese: 'Não ouço bem, pode falar mais devagar?',
    challenge: 'No ___ bien, ¿puede hablar más despacio?',
    situation: 'medico',
  },
  {
    id: 'neg-15', verb: 'salir', pronoun: 'yo', tense: 'presente', conjugation: 'salgo',
    spanish: 'No salgo hasta terminar este informe.',
    portuguese: 'Não saio até terminar este relatório.',
    challenge: 'No ___ hasta terminar este informe.',
    situation: 'trabalho',
  },
  {
    id: 'int-01', verb: 'dormir', pronoun: 'el', tense: 'presente', conjugation: 'duerme',
    spanish: '¿A qué hora duerme el bebé normalmente?',
    portuguese: 'A que horas o bebê normalmente dorme?',
    challenge: '¿A qué hora ___ el bebé normalmente?',
    situation: 'medico',
  },
  {
    id: 'int-02', verb: 'beber', pronoun: 'el', tense: 'presente', conjugation: 'bebe',
    spanish: '¿Qué bebe usted normalmente con la comida?',
    portuguese: 'O que o senhor normalmente bebe com a refeição?',
    challenge: '¿Qué ___ usted normalmente con la comida?',
    situation: 'restaurante',
  },
  {
    id: 'int-03', verb: 'leer', pronoun: 'el', tense: 'presente', conjugation: 'lee',
    spanish: '¿Lee usted el contrato de arrendamiento?',
    portuguese: 'O senhor leu o contrato de locação?',
    challenge: '¿___ usted el contrato de arrendamiento?',
    situation: 'aluguel',
  },
  {
    id: 'int-04', verb: 'escribir', pronoun: 'yo', tense: 'futuroSimple', conjugation: 'escribiré',
    spanish: '¿Dónde escribiré mi número de NIE en el formulario?',
    portuguese: 'Onde escreverei meu número de NIE no formulário?',
    challenge: '¿Dónde ___ mi número de NIE en el formulario?',
    situation: 'documentos',
  },
  {
    id: 'int-05', verb: 'abrir', pronoun: 'el', tense: 'presente', conjugation: 'abre',
    spanish: '¿A qué hora abre el banco?',
    portuguese: 'A que horas o banco abre?',
    challenge: '¿A qué hora ___ el banco?',
    situation: 'documentos',
  },
  {
    id: 'int-06', verb: 'cerrar', pronoun: 'el', tense: 'presente', conjugation: 'cierra',
    spanish: '¿Cuándo cierra la consulta del médico?',
    portuguese: 'Quando fecha o consultório do médico?',
    challenge: '¿Cuándo ___ la consulta del médico?',
    situation: 'medico',
  },
  {
    id: 'int-07', verb: 'llevar', pronoun: 'yo', tense: 'presente', conjugation: 'llevo',
    spanish: '¿Cuánto tiempo llevo esperando el autobús?',
    portuguese: 'Há quanto tempo estou esperando o ônibus?',
    challenge: '¿Cuánto tiempo ___ esperando el autobús?',
    situation: 'transporte',
  },
  {
    id: 'int-08', verb: 'traer', pronoun: 'yo', tense: 'presente', conjugation: 'traigo',
    spanish: '¿Qué documentos traigo para la entrevista?',
    portuguese: 'Que documentos levo para a entrevista?',
    challenge: '¿Qué documentos ___ para la entrevista?',
    situation: 'entrevista',
  },
  {
    id: 'int-09', verb: 'empezar', pronoun: 'yo', tense: 'futuroSimple', conjugation: 'empezaré',
    spanish: '¿Cuándo empezaré a recibir el salario?',
    portuguese: 'Quando começarei a receber o salário?',
    challenge: '¿Cuándo ___ a recibir el salario?',
    situation: 'trabalho',
  },
  {
    id: 'int-10', verb: 'conocer', pronoun: 'el', tense: 'presente', conjugation: 'conoce',
    spanish: '¿Conoce algún piso en alquiler por esta zona?',
    portuguese: 'Conhece algum apartamento para alugar nessa área?',
    challenge: '¿___ algún piso en alquiler por esta zona?',
    situation: 'aluguel',
  },
  {
    id: 'int-11', verb: 'pensar', pronoun: 'el', tense: 'presente', conjugation: 'piensa',
    spanish: '¿Qué piensa el médico sobre mis síntomas?',
    portuguese: 'O que o médico pensa sobre meus sintomas?',
    challenge: '¿Qué ___ el médico sobre mis síntomas?',
    situation: 'medico',
  },
  {
    id: 'int-12', verb: 'venir', pronoun: 'el', tense: 'presente', conjugation: 'viene',
    spanish: '¿Viene el autobús directo al aeropuerto?',
    portuguese: 'O ônibus vai direto ao aeroporto?',
    challenge: '¿___ el autobús directo al aeropuerto?',
    situation: 'transporte',
  },
  {
    id: 'int-13', verb: 'decir', pronoun: 'el', tense: 'presente', conjugation: 'dice',
    spanish: '¿Qué dice el contrato sobre las mascotas?',
    portuguese: 'O que diz o contrato sobre animais de estimação?',
    challenge: '¿Qué ___ el contrato sobre las mascotas?',
    situation: 'aluguel',
  },
  {
    id: 'int-14', verb: 'saber', pronoun: 'el', tense: 'presente', conjugation: 'sabe',
    spanish: '¿Sabe usted cuánto tarda el trámite?',
    portuguese: 'O senhor sabe quanto tempo demora o processo?',
    challenge: '¿___ usted cuánto tarda el trámite?',
    situation: 'documentos',
  },
  {
    id: 'int-15', verb: 'poner', pronoun: 'yo', tense: 'presente', conjugation: 'pongo',
    spanish: '¿Dónde pongo la firma en este documento?',
    portuguese: 'Onde coloco a assinatura neste documento?',
    challenge: '¿Dónde ___ la firma en este documento?',
    situation: 'documentos',
  },

  // ═══════════════════════════════════════════════════
  // 🏠 ALUGUEL
  // ═══════════════════════════════════════════════════
  {
    id: 'alug-01', verb: 'estar', pronoun: 'yo', tense: 'presente', conjugation: 'estoy',
    spanish: 'Estoy buscando un piso para alquilar.',
    portuguese: 'Estou procurando um apartamento para alugar.',
    challenge: '___ buscando un piso para alquilar.',
    situation: 'aluguel',
  },
  {
    id: 'alug-02', verb: 'tener', pronoun: 'el', tense: 'presente', conjugation: 'tiene',
    spanish: '¿El piso tiene calefacción central?',
    portuguese: 'O apartamento tem aquecimento central?',
    challenge: '¿El piso ___ calefacción central?',
    situation: 'aluguel',
  },
  {
    id: 'alug-03', verb: 'poder', pronoun: 'yo', tense: 'presente', conjugation: 'puedo',
    spanish: '¿Puedo ver el piso esta tarde?',
    portuguese: 'Posso ver o apartamento esta tarde?',
    challenge: '¿___ ver el piso esta tarde?',
    situation: 'aluguel',
  },
  {
    id: 'alug-04', verb: 'pagar', pronoun: 'yo', tense: 'presente', conjugation: 'pago',
    spanish: 'Pago el alquiler el día primero de cada mes.',
    portuguese: 'Pago o aluguel no primeiro dia de cada mês.',
    challenge: '___ el alquiler el día primero de cada mes.',
    situation: 'aluguel',
  },
  {
    id: 'alug-05', verb: 'ser', pronoun: 'el', tense: 'presente', conjugation: 'es',
    spanish: 'El contrato es por un año.',
    portuguese: 'O contrato é por um ano.',
    challenge: 'El contrato ___ por un año.',
    situation: 'aluguel',
  },
  {
    id: 'alug-06', verb: 'vivir', pronoun: 'yo', tense: 'presente', conjugation: 'vivo',
    spanish: 'Vivo en un piso compartido.',
    portuguese: 'Moro num apartamento compartilhado.',
    challenge: '___ en un piso compartido.',
    situation: 'aluguel',
  },

  // ═══════════════════════════════════════════════════
  // 🤝 ENTREVISTA
  // ═══════════════════════════════════════════════════
  {
    id: 'ent-01', verb: 'ser', pronoun: 'yo', tense: 'presente', conjugation: 'soy',
    spanish: 'Soy brasileño y llevo dos años en España.',
    portuguese: 'Sou brasileiro e estou há dois anos na Espanha.',
    challenge: '___ brasileño y llevo dos años en España.',
    situation: 'entrevista',
  },
  {
    id: 'ent-02', verb: 'tener', pronoun: 'yo', tense: 'presente', conjugation: 'tengo',
    spanish: 'Tengo experiencia en atención al cliente.',
    portuguese: 'Tenho experiência em atendimento ao cliente.',
    challenge: '___ experiencia en atención al cliente.',
    situation: 'entrevista',
  },
  {
    id: 'ent-03', verb: 'poder', pronoun: 'yo', tense: 'presente', conjugation: 'puedo',
    spanish: 'Puedo empezar la semana que viene.',
    portuguese: 'Posso começar na semana que vem.',
    challenge: '___ empezar la semana que viene.',
    situation: 'entrevista',
  },
  {
    id: 'ent-04', verb: 'hablar', pronoun: 'yo', tense: 'presente', conjugation: 'hablo',
    spanish: 'Hablo portugués, español e inglés.',
    portuguese: 'Falo português, espanhol e inglês.',
    challenge: '___ portugués, español e inglés.',
    situation: 'entrevista',
  },
  {
    id: 'ent-05', verb: 'trabajar', pronoun: 'yo', tense: 'preteritoIndefinido', conjugation: 'trabajé',
    spanish: 'Trabajé cinco años en logística.',
    portuguese: 'Trabalhei cinco anos em logística.',
    challenge: '___ cinco años en logística.',
    situation: 'entrevista',
  },
  {
    id: 'ent-06', verb: 'estudiar', pronoun: 'yo', tense: 'preteritoIndefinido', conjugation: 'estudié',
    spanish: 'Estudié administración de empresas.',
    portuguese: 'Estudei administração de empresas.',
    challenge: '___ administración de empresas.',
    situation: 'entrevista',
  },

  // ═══════════════════════════════════════════════════
  // 🕐 PRETÉRITO PERFECTO (passado recente / hoje)
  // ═══════════════════════════════════════════════════
  {
    id: 'perf-01', verb: 'ir', pronoun: 'yo', tense: 'preteritoPerfecto', conjugation: 'he ido',
    spanish: 'Esta mañana he ido al médico.',
    portuguese: 'Esta manhã fui ao médico.',
    challenge: 'Esta mañana ___ al médico.',
    situation: 'medico',
  },
  {
    id: 'perf-02', verb: 'comer', pronoun: 'yo', tense: 'preteritoPerfecto', conjugation: 'he comido',
    spanish: 'Hoy he comido paella por primera vez.',
    portuguese: 'Hoje comi paella pela primeira vez.',
    challenge: 'Hoy ___ paella por primera vez.',
    situation: 'restaurante',
  },
  {
    id: 'perf-03', verb: 'comprar', pronoun: 'yo', tense: 'preteritoPerfecto', conjugation: 'he comprado',
    spanish: 'He comprado todo lo que necesitaba.',
    portuguese: 'Comprei tudo que precisava.',
    challenge: '___ todo lo que necesitaba.',
    situation: 'mercado',
  },
  {
    id: 'perf-04', verb: 'hacer', pronoun: 'yo', tense: 'preteritoPerfecto', conjugation: 'he hecho',
    spanish: 'He hecho el empadronamiento esta semana.',
    portuguese: 'Fiz o empadronamento esta semana.',
    challenge: '___ el empadronamiento esta semana.',
    situation: 'documentos',
  },
  {
    id: 'perf-05', verb: 'estar', pronoun: 'yo', tense: 'preteritoPerfecto', conjugation: 'he estado',
    spanish: 'He estado esperando una hora.',
    portuguese: 'Estive esperando uma hora.',
    challenge: '___ esperando una hora.',
    situation: 'transporte',
  },
  {
    id: 'perf-06', verb: 'trabajar', pronoun: 'yo', tense: 'preteritoPerfecto', conjugation: 'he trabajado',
    spanish: 'Hoy he trabajado desde casa.',
    portuguese: 'Hoje trabalhei de casa.',
    challenge: 'Hoy ___ desde casa.',
    situation: 'trabalho',
  },
  {
    id: 'perf-07', verb: 'tener', pronoun: 'yo', tense: 'preteritoPerfecto', conjugation: 'he tenido',
    spanish: 'He tenido problemas con el contrato.',
    portuguese: 'Tive problemas com o contrato.',
    challenge: '___ problemas con el contrato.',
    situation: 'aluguel',
  },
  {
    id: 'perf-08', verb: 'hablar', pronoun: 'yo', tense: 'preteritoPerfecto', conjugation: 'he hablado',
    spanish: 'He hablado con el jefe esta mañana.',
    portuguese: 'Falei com o chefe esta manhã.',
    challenge: '___ con el jefe esta mañana.',
    situation: 'entrevista',
  },

  // ═══════════════════════════════════════════════════
  // 🕰️ IMPERFECTO (hábitos passados, descrições)
  // ═══════════════════════════════════════════════════
  {
    id: 'imp-01', verb: 'vivir', pronoun: 'yo', tense: 'imperfecto', conjugation: 'vivía',
    spanish: 'Antes vivía en São Paulo.',
    portuguese: 'Antes eu morava em São Paulo.',
    challenge: 'Antes ___ en São Paulo.',
    situation: 'entrevista',
  },
  {
    id: 'imp-02', verb: 'trabajar', pronoun: 'yo', tense: 'imperfecto', conjugation: 'trabajaba',
    spanish: 'Trabajaba en una tienda cuando llegué a España.',
    portuguese: 'Trabalhava numa loja quando cheguei na Espanha.',
    challenge: '___ en una tienda cuando llegué a España.',
    situation: 'trabalho',
  },
  {
    id: 'imp-03', verb: 'ir', pronoun: 'yo', tense: 'imperfecto', conjugation: 'iba',
    spanish: 'Siempre iba al trabajo en autobús.',
    portuguese: 'Sempre ia ao trabalho de ônibus.',
    challenge: 'Siempre ___ al trabajo en autobús.',
    situation: 'transporte',
  },
  {
    id: 'imp-04', verb: 'tener', pronoun: 'yo', tense: 'imperfecto', conjugation: 'tenía',
    spanish: 'Antes no tenía permiso de trabajo.',
    portuguese: 'Antes eu não tinha permissão de trabalho.',
    challenge: 'Antes no ___ permiso de trabajo.',
    situation: 'documentos',
  },
  {
    id: 'imp-05', verb: 'comer', pronoun: 'nosotros', tense: 'imperfecto', conjugation: 'comíamos',
    spanish: 'Siempre comíamos en el mismo restaurante.',
    portuguese: 'Sempre comíamos no mesmo restaurante.',
    challenge: 'Siempre ___ en el mismo restaurante.',
    situation: 'restaurante',
  },
  {
    id: 'imp-06', verb: 'pagar', pronoun: 'yo', tense: 'imperfecto', conjugation: 'pagaba',
    spanish: 'Antes pagaba 600 euros de alquiler.',
    portuguese: 'Antes pagava 600 euros de aluguel.',
    challenge: 'Antes ___ 600 euros de alquiler.',
    situation: 'aluguel',
  },
  {
    id: 'imp-07', verb: 'ser', pronoun: 'el', tense: 'imperfecto', conjugation: 'era',
    spanish: 'El piso era muy pequeño pero barato.',
    portuguese: 'O apartamento era muito pequeno mas barato.',
    challenge: 'El piso ___ muy pequeño pero barato.',
    situation: 'aluguel',
  },
  {
    id: 'imp-08', verb: 'estar', pronoun: 'yo', tense: 'imperfecto', conjugation: 'estaba',
    spanish: 'Estaba nervioso en mi primera entrevista.',
    portuguese: 'Estava nervoso na minha primeira entrevista.',
    challenge: '___ nervioso en mi primera entrevista.',
    situation: 'entrevista',
  },

  // ═══════════════════════════════════════════════════
  // 🎩 CONDICIONAL (educação, hipóteses, pedidos polidos)
  // ═══════════════════════════════════════════════════
  {
    id: 'cond-01', verb: 'poder', pronoun: 'yo', tense: 'condicional', conjugation: 'podría',
    spanish: '¿Podría repetir, por favor?',
    portuguese: 'Poderia repetir, por favor?',
    challenge: '¿___ repetir, por favor?',
    situation: 'medico',
  },
  {
    id: 'cond-02', verb: 'querer', pronoun: 'yo', tense: 'condicional', conjugation: 'querría',
    spanish: 'Querría reservar una mesa para dos.',
    portuguese: 'Gostaria de reservar uma mesa para dois.',
    challenge: '___ reservar una mesa para dos.',
    situation: 'restaurante',
  },
  {
    id: 'cond-03', verb: 'poder', pronoun: 'el', tense: 'condicional', conjugation: 'podría',
    spanish: '¿Podría darme un recibo?',
    portuguese: 'Poderia me dar um recibo?',
    challenge: '¿___ darme un recibo?',
    situation: 'mercado',
  },
  {
    id: 'cond-04', verb: 'ser', pronoun: 'el', tense: 'condicional', conjugation: 'sería',
    spanish: 'Sería posible cambiar el horario.',
    portuguese: 'Seria possível mudar o horário.',
    challenge: '___ posible cambiar el horario.',
    situation: 'trabalho',
  },
  {
    id: 'cond-05', verb: 'estar', pronoun: 'yo', tense: 'condicional', conjugation: 'estaría',
    spanish: 'Estaría interesado en ese puesto.',
    portuguese: 'Estaria interessado nessa vaga.',
    challenge: '___ interesado en ese puesto.',
    situation: 'entrevista',
  },
  {
    id: 'cond-06', verb: 'hacer', pronoun: 'yo', tense: 'condicional', conjugation: 'haría',
    spanish: '¿Qué haría falta para el contrato?',
    portuguese: 'O que seria necessário para o contrato?',
    challenge: '¿Qué ___ falta para el contrato?',
    situation: 'aluguel',
  },
  {
    id: 'cond-07', verb: 'tener', pronoun: 'yo', tense: 'condicional', conjugation: 'tendría',
    spanish: 'Tendría que pedir cita previa.',
    portuguese: 'Teria que marcar horário.',
    challenge: '___ que pedir cita previa.',
    situation: 'documentos',
  },
  {
    id: 'cond-08', verb: 'ir', pronoun: 'yo', tense: 'condicional', conjugation: 'iría',
    spanish: 'Iría en metro, pero está cerrado.',
    portuguese: 'Iria de metrô, mas está fechado.',
    challenge: '___ en metro, pero está cerrado.',
    situation: 'transporte',
  },
];

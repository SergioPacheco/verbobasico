export interface FormalExercise {
  id: string;
  informal: string;
  formal: string;
  context: string;
  type: 'tuteo' | 'usted' | 'email' | 'si_clause';
}

export const formalExercises: FormalExercise[] = [
  // ═══════════════════════════════════════════════════
  // TUTEO (tú) → USTED — registro informal para formal oral
  // ═══════════════════════════════════════════════════
  {
    id: 'form-tut-01',
    informal: '¿Puedes repetirlo, por favor?',
    formal: '¿Podría repetirlo, por favor?',
    context: 'Pedindo para repetir algo num atendimento médico.',
    type: 'tuteo',
  },
  {
    id: 'form-tut-02',
    informal: '¿Sabes dónde está el baño?',
    formal: '¿Sabe usted dónde está el baño?',
    context: 'Perguntando o banheiro para um desconhecido mais velho.',
    type: 'tuteo',
  },
  {
    id: 'form-tut-03',
    informal: 'Dame el formulario.',
    formal: 'Deme el formulario, por favor.',
    context: 'Solicitando formulário numa repartição pública.',
    type: 'tuteo',
  },
  {
    id: 'form-tut-04',
    informal: 'Ven mañana a las diez.',
    formal: 'Venga mañana a las diez, por favor.',
    context: 'Agendando visita com proprietário de apartamento.',
    type: 'tuteo',
  },

  // ═══════════════════════════════════════════════════
  // USTED — formas de cortesia em situações formais
  // ═══════════════════════════════════════════════════
  {
    id: 'form-ust-01',
    informal: 'Quiero hablar con el jefe.',
    formal: 'Quisiera hablar con el responsable, por favor.',
    context: 'Pedindo para falar com o responsável numa loja.',
    type: 'usted',
  },
  {
    id: 'form-ust-02',
    informal: 'Necesito un médico urgente.',
    formal: 'Necesitaría ver a un médico lo antes posible.',
    context: 'Ligando para o centro de saúde.',
    type: 'usted',
  },
  {
    id: 'form-ust-03',
    informal: 'No entiendo este contrato.',
    formal: 'Me gustaría que me explicaran este contrato, por favor.',
    context: 'Solicitando esclarecimento sobre cláusulas de contrato.',
    type: 'usted',
  },
  {
    id: 'form-ust-04',
    informal: '¿Cuánto cuesta el piso?',
    formal: '¿Podría indicarme el precio mensual del inmueble?',
    context: 'Consultando preço de aluguel com imobiliária.',
    type: 'usted',
  },

  // ═══════════════════════════════════════════════════
  // EMAIL — registro escrito formal
  // ═══════════════════════════════════════════════════
  {
    id: 'form-email-01',
    informal: 'Hola, te escribo para preguntar sobre el trabajo.',
    formal: 'Me pongo en contacto con ustedes para solicitar información sobre la oferta de empleo.',
    context: 'Abrindo email de candidatura a uma vaga.',
    type: 'email',
  },
  {
    id: 'form-email-02',
    informal: 'Muchas gracias, hasta luego.',
    formal: 'Quedo a su disposición para cualquier consulta. Atentamente,',
    context: 'Fechando email formal enviado a empresa ou repartição.',
    type: 'email',
  },
  {
    id: 'form-email-03',
    informal: 'Te mando los papeles que me pediste.',
    formal: 'Adjunto a este correo la documentación solicitada.',
    context: 'Enviando documentos por email para trâmites oficiais.',
    type: 'email',
  },
  {
    id: 'form-email-04',
    informal: 'Llámame cuando puedas.',
    formal: 'Quedo a su disposición para la comunicación que estimen oportuna.',
    context: 'Finalizando email e indicando disponibilidade para contato.',
    type: 'email',
  },

  // ═══════════════════════════════════════════════════
  // SI CLAUSES (condicionais)
  // ═══════════════════════════════════════════════════
  {
    id: 'form-si-01',
    informal: 'Si tengo tiempo, voy contigo. (real)',
    formal: 'Si tuviera tiempo, iría contigo. (hipotético)',
    context: 'Diferença entre condição real (presente) e hipotética (imperfecto de subjuntivo + condicional).',
    type: 'si_clause',
  },
  {
    id: 'form-si-02',
    informal: 'Si encuentro piso, te digo. (futuro provável)',
    formal: 'Si encontrara piso, te diría. (hipotético/improvável)',
    context: 'Falando sobre busca de apartamento: real vs. hipotético.',
    type: 'si_clause',
  },
  {
    id: 'form-si-03',
    informal: 'Si hablas bien español, consigues el trabajo.',
    formal: 'Si hablaras mejor español, conseguirías el trabajo.',
    context: 'Conselho sobre emprego: fato geral vs. situação hipotética atual.',
    type: 'si_clause',
  },
  {
    id: 'form-si-04',
    informal: 'Si pago hoy, ¿me hacen descuento? (real)',
    formal: 'Si pagara hoy, ¿me harían un descuento? (hipotético educado)',
    context: 'Negociando desconto: a forma hipotética soa mais educada e menos direta.',
    type: 'si_clause',
  },
];

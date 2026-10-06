/*
 * CONFIGURACIÓN DEL SITIO — Rediseñalo Pe
 * ------------------------------------------------------------------
 * Aquí se centralizan los datos pendientes de confirmar.
 * Regla general: si un dato es `null` o `false`, NO se muestra en la web.
 * No hay enlaces vacíos ni datos de relleno.
 */
window.SITE_CONFIG = {
  brand: {
    name: "Rediseñalo Pe"
  },

  whatsapp: {
    // Número en formato internacional, solo dígitos (ej. "51999999999").
    // Confirmado. null = botones de WhatsApp desactivados.
    number: "51929523437",
    defaultMessage:
      "Hola, Rediseñalo Pe. Quisiera información para mejorar la presencia digital de mi negocio.",
    // Botón "Solicitar diagnóstico gratuito" (data-msg="diagnostic").
    diagnosticMessage:
      "Hola, Rediseñalo Pe. Quisiera solicitar un diagnóstico gratuito de la presencia digital de mi negocio.",
    // {plan} se reemplaza por data-plan del botón (ej. "Negocio desde S/1,000").
    planMessage:
      "Hola Rediseñalo Pe, estoy interesado(a) en el Plan {plan}. Quisiera recibir más información."
  },

  // PENDIENTE: confirmar horario definitivo (ej. "Lunes a sábado, de 8:00 a. m. a 6:30 p. m."). null = no se muestra.
  schedule: null,

  coverage: "Lima y Callao · Atención remota en todo el Perú",

  // PENDIENTE: correo real. null = no se muestra.
  email: null,

  // PENDIENTE: enlaces completos (https://...). null = icono oculto.
  social: {
    instagram: null,
    facebook: null,
    tiktok: null
  },

  // PENDIENTE: solo si corresponde mostrarlos. null = no se muestra.
  legal: {
    ruc: null,
    businessName: null
  },

  // Videos del portafolio (Proyectos realizados). Cambiar a true SOLO cuando el
  // archivo exista en la carpeta indicada; con false se muestra el fondo de respaldo
  // y no se solicita ningún archivo (sin referencias rotas).
  //   video  -> site/assets/videos/<proyecto>.mp4
  //   poster -> site/img/portfolio/<proyecto>-poster.webp
  portfolioMedia: {
    "industrias-cespedes": { video: true, poster: true },
    "jeinox-gastrosystems": { video: true, poster: true }
  },

  // Contenido en borrador: true = se muestra en la web.
  show: {
    processTimes: false,  // plazos orientativos del proceso de trabajo
    planTraining: true,   // capacitación de entrega en planes Negocio y Pro
    paymentTerms: true    // condición de pago 50% / 50%
  },

  // Analítica: NO instalada. Se activará solo tras definir qué medir y revisar
  // las tecnologías usadas (y el aviso de cookies que corresponda).
  analytics: {
    googleAnalyticsId: null,
    metaPixelId: null
  }
};

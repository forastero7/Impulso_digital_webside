/*
 * CONFIGURACIÓN DEL SITIO — Impulso Digital
 * ------------------------------------------------------------------
 * Aquí se centralizan los datos pendientes de confirmar.
 * Regla general: si un dato es `null` o `false`, NO se muestra en la web.
 * No hay enlaces vacíos ni datos de relleno.
 */
window.SITE_CONFIG = {
  brand: {
    name: "Impulso Digital",
    // Ruta al logo definitivo (ej. "img/logo.svg"). null = logo tipográfico provisional.
    logo: null
  },

  whatsapp: {
    // Número en formato internacional, solo dígitos (ej. "51999999999").
    // PENDIENTE: confirmar el número real. null = botones de WhatsApp desactivados.
    number: null,
    defaultMessage:
      "Hola, Impulso Digital. Estoy interesado en una página web o catálogo digital para mi negocio. Quisiera conocer los planes y solicitar una cotización.",
    // {plan} se reemplaza por el nombre del plan.
    planMessage:
      "Hola, Impulso Digital. Estoy interesado en el plan {plan} para mi negocio. Quisiera conocer los detalles y solicitar una cotización."
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

  // Proyectos reales del portafolio. Solo agregar cuando el cliente haya autorizado
  // publicar su nombre, logo y capturas. Ver docs/portafolio-pendiente.md
  // Formato: { name, type, description, url, image, imageAlt }
  portfolio: [],

  // Contenido en borrador: true = se muestra en la web.
  show: {
    processTimes: false,  // plazos orientativos del proceso de trabajo
    planTraining: false,  // capacitación presencial en planes Intermedio y Avanzado
    paymentTerms: false   // condición de pago 50% / 50%
  },

  // Analítica: NO instalada. Se activará solo tras definir qué medir y revisar
  // las tecnologías usadas (y el aviso de cookies que corresponda).
  analytics: {
    googleAnalyticsId: null,
    metaPixelId: null
  }
};

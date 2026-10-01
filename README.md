# Impulso Digital — sitio web

Web de una sola página de **Impulso Digital**: diseño de páginas web y catálogos digitales
con cotización por WhatsApp para negocios en Perú.

> **Estado: versión de revisión.** El contenido está en borrador y la web no debe
> indexarse en buscadores hasta su aprobación.

## Estructura

```
site/                 ← carpeta que se publica en Netlify
├── index.html        ← contenido de la página (textos, planes, FAQ…)
├── css/styles.css    ← estilos y colores de marca (variables en :root)
├── js/config.js      ← DATOS PENDIENTES: WhatsApp, horario, redes, etc.
├── js/main.js        ← comportamiento (menú, WhatsApp, animaciones)
├── fonts/            ← Manrope e Inter alojadas localmente (sin servicios externos)
└── img/              ← favicon y, más adelante, logo y capturas
docs/                 ← notas internas (no se publican)
netlify.toml          ← configuración de Netlify
```

No requiere instalación ni compilación. Para verla en local basta con abrir
`site/index.html` o servir la carpeta, por ejemplo: `npx serve site`.

## Datos pendientes (`site/js/config.js`)

Regla: si un dato es `null` o `false`, **no se muestra** en la web.

| Dato | Estado | Efecto actual |
|---|---|---|
| `whatsapp.number` | Pendiente de confirmar | Botones muestran "WhatsApp disponible pronto"; botón flotante oculto |
| `schedule` | Pendiente de confirmar | No se muestra horario |
| `email`, `social` | Pendientes | No se muestran correo ni iconos de redes |
| `legal.ruc`, `legal.businessName` | Pendientes | No se muestran |
| `brand.logo` | Pendiente (archivo) | Logo tipográfico provisional |
| `portfolio` | Pendiente de autorización | Solo se ven proyectos demostrativos (ver `docs/portafolio-pendiente.md`) |
| `show.processTimes` | Pendiente | Plazos del proceso ocultos |
| `show.planTraining` | Pendiente | Capacitación presencial oculta en los planes |
| `show.paymentTerms` | Pendiente | Condición 50% / 50% oculta |
| `analytics` | No instalada | Ningún script de seguimiento |

## Publicación en Netlify

1. En Netlify: *Add new site → Import an existing project → GitHub* y elegir este repositorio.
2. Netlify lee `netlify.toml` y publica la carpeta `site/` (no hay comando de build).

### Antes de publicar la versión final

- [ ] Completar `site/js/config.js` con los datos confirmados.
- [ ] Quitar `<meta name="robots" content="noindex, nofollow">` de `site/index.html`.
- [ ] Quitar la cabecera `X-Robots-Tag` de `netlify.toml`.
- [ ] Quitar el aviso "Versión de revisión" (`.review-banner`) de `site/index.html`.
- [ ] Al conectar el dominio propio: añadir `og:url`, `og:image`, `canonical`, `sitemap.xml` y datos estructurados.

## Analítica

No se ha instalado Google Analytics ni Meta Pixel. Cuando se defina qué medir, se
incorporarán en `site/js/main.js` (sección "Analítica") usando los IDs de
`config.js`, junto con el aviso de cookies que corresponda a las tecnologías usadas.
La web actual no usa cookies ni servicios de terceros: fuentes e iconos están alojados en el propio sitio.

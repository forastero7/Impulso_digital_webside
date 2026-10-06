# Rediseñalo Pe — sitio web

Web de una sola página de **Rediseñalo Pe**: rediseñamos la presencia digital de negocios peruanos
(páginas web, catálogos digitales, Google Business, WhatsApp y redes).

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
├── img/              ← logo optimizado (WebP), favicon y posters del portafolio (img/portfolio/)
└── assets/videos/     ← videos de navegación del portafolio (MP4)
docs/                 ← notas internas (no se publican)
netlify.toml          ← configuración de Netlify
```

No requiere instalación ni compilación. Para verla en local basta con abrir
`site/index.html` o servir la carpeta, por ejemplo: `npx serve site`.

## Datos pendientes (`site/js/config.js`)

Regla: si un dato es `null` o `false`, **no se muestra** en la web.

| Dato | Estado | Efecto actual |
|---|---|---|
| `whatsapp.number` | Confirmado: +51 929 523 437 | Botones y botón flotante activos |
| `schedule` | Pendiente de confirmar | No se muestra horario |
| `email`, `social` | Pendientes | No se muestran correo ni iconos de redes |
| `legal.ruc`, `legal.businessName` | Pendientes | No se muestran |
| `portfolioMedia` | Videos pendientes | Fondo de respaldo en Proyectos realizados (ver `docs/portafolio-videos.md`) |
| `show.processTimes` | Pendiente | Plazos del proceso ocultos |
| `show.planTraining` | Pendiente | Capacitación presencial oculta en los planes |
| `show.paymentTerms` | Pendiente | Condición 50% / 50% oculta |
| `analytics` | No instalada | Ningún script de seguimiento |

## Publicación en GitHub Pages (actual)

GitHub Pages publica **desde la rama** (*Settings → Pages → Deploy from a branch*, raíz del repo).
La raíz (`index.html`) redirige a `site/`, por lo que la dirección pública es:

**https://forastero7.github.io/Impulso_digital_webside/site/**

El flujo `.github/workflows/pages.yml` queda solo para ejecución manual (antes competía con
la publicación desde la rama en cada push).

## Lanzamiento (permitir indexación)

- [ ] Quitar `<meta name="robots" content="noindex, nofollow">` de `site/index.html`.
- [ ] Quitar el aviso "Versión de revisión" (`<div class="review-banner">`) de `site/index.html`.
- [ ] (Si se usa Netlify) quitar la cabecera `X-Robots-Tag` de `netlify.toml`.

## Al conectar el dominio propio

Reemplazar `https://forastero7.github.io/Impulso_digital_webside/site/` por la URL final en:

1. `site/index.html`: `canonical`, `og:url`, `og:image`, `twitter:image` y el JSON-LD (`url`, `logo`, `image`).
2. `sitemap.xml` (`<loc>`) y `robots.txt` (línea `Sitemap:`).
3. `index.html` de la raíz (`canonical`).

Recomendado al conectar el dominio: en *Settings → Pages → Source* elegir **GitHub Actions**,
volver a añadir el disparador `push` en `.github/workflows/pages.yml` y mover `robots.txt` y
`sitemap.xml` a `site/`. Así la web queda en la raíz del dominio (sin `/site/`). Después:
Search Console (verificar dominio, enviar sitemap, inspeccionar URL) y Analytics si se usa.

## Analítica

No hay Google Analytics, Meta Pixel ni cookies. Los IDs se configurarán en `analytics`
de `site/js/config.js` y la carga se añadirá en `site/js/main.js` (sección "Analítica"),
junto con el aviso de consentimiento que corresponda a las herramientas usadas.

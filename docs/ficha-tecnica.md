# Ficha técnica — Sitio web de Rediseñalo Pe

> Documento técnico para análisis. Estado al 7 de octubre de 2026 (tras Fase 7).
> Repositorio: `forastero7/Impulso_digital_webside` · Rama: `claude/impulso-digital-website-ggfrl1`

---

## 1. Resumen

| Campo | Valor |
|---|---|
| Marca | Rediseñalo Pe |
| Propuesta | "Rediseñamos la presencia digital de tu negocio" |
| Público | Pequeños y medianos negocios del Perú (Lima y Callao · atención remota en todo el Perú) |
| Tipo de sitio | Página única (one-page) estática |
| Tecnología | HTML5 + CSS3 + JavaScript (ES5, sin frameworks ni librerías) |
| Build | No requiere (sin npm, sin bundler) |
| Hosting actual | GitHub Pages, publicación desde la rama |
| URL pública | https://forastero7.github.io/Impulso_digital_webside/site/ |
| Canal de conversión | WhatsApp (`wa.me`), número +51 929 523 437 |
| Estado | Versión de revisión con `noindex` (lista para lanzar al retirar `noindex` y el aviso de revisión) |

---

## 2. Estructura de archivos

```
/                                   ← raíz publicada por GitHub Pages
├── index.html                      ← redirección a site/ (noindex, canonical absoluto)
├── robots.txt                      ← Allow: / + referencia al sitemap
├── sitemap.xml                     ← 1 URL (la página única)
├── .nojekyll                       ← desactiva Jekyll en GitHub Pages
├── netlify.toml                    ← configuración alternativa para Netlify (no usada hoy)
├── README.md                       ← guía de mantenimiento, lanzamiento y dominio
├── docs/
│   ├── ficha-tecnica.md            ← este documento
│   └── portafolio-videos.md        ← guía de videos del portafolio
├── .github/workflows/pages.yml     ← despliegue por GitHub Actions (solo manual)
└── site/                           ← la web
    ├── index.html                  ← contenido completo de la página
    ├── css/styles.css              ← estilos (≈ 620 líneas, variables en :root)
    ├── js/config.js                ← datos configurables (WhatsApp, interruptores, etc.)
    ├── js/main.js                  ← comportamiento (≈ 250 líneas)
    ├── fonts/                      ← Manrope + Inter (WOFF2 variables, autoalojadas)
    ├── img/                        ← logo, favicons, imagen para compartir, posters
    └── assets/videos/              ← videos del portafolio (MP4)
```

### Pesos de los recursos

| Recurso | Peso | Notas |
|---|---|---|
| `site/fonts/inter.woff2` | 48 KB | Variable 100–900, subconjunto latino |
| `site/fonts/manrope.woff2` | 25 KB | Variable 200–800, subconjunto latino |
| `site/img/logo-96.webp` | 4 KB | Logo del encabezado (44×44 px, 2x) |
| `site/img/logo-256.webp` | 13 KB | Logo del pie (112×112 px, 2x), lazy |
| `site/img/favicon-48.png` | 5 KB | Favicon |
| `site/img/apple-touch-icon.png` | 12 KB | 180×180, fondo #0F172A |
| `site/img/og-logo.jpg` | 45 KB | 512×512, imagen para compartir (Open Graph) |
| `site/img/portfolio/industrias-cespedes-poster.webp` | 12 KB | Poster del video |
| `site/img/portfolio/jeinox-gastrosystems-poster.webp` | 32 KB | Poster del video |
| `site/assets/videos/industrias-cespedes.mp4` | 1.66 MB | Ver sección 7 |
| `site/assets/videos/jeinox-gastrosystems.mp4` | 0.79 MB | Ver sección 7 |
| `site/css/styles.css` | ≈ 34 KB | Sin minificar (GitHub Pages sirve con gzip) |
| `site/js/main.js` + `config.js` | ≈ 15 KB | Sin minificar |

**Dependencias externas: ninguna.** No hay CDN, Google Fonts, analítica, píxeles ni scripts de terceros. Todos los recursos se sirven desde el propio dominio.

---

## 3. Arquitectura de la página (orden de secciones)

| # | Sección | `id` | Contenido principal |
|---|---|---|---|
| — | Aviso de revisión | — | Barra superior "Versión de revisión" (se retira al lanzar) |
| — | Encabezado | `top` | Logo, menú (6 anclas), botón "Consultar" |
| 1 | Hero | `inicio` | H1, subtítulo, CTA diagnóstico + "Ver nuestros servicios", etiquetas de servicios, maqueta de celular (decorativa) |
| 2 | Posicionamiento | — | Mensaje "Tu negocio puede ser excelente…" + "Lo que podemos rediseñar contigo" |
| 3 | Para quién | — | Rubros: restaurantes, equipos gastronómicos, relojes, comercios, servicios |
| 4 | Servicios | `servicios` | 4 pilares: Desarrollo web · Google Business Profile · WhatsApp para negocios · Redes sociales y publicidad digital + "Todas las webs incluyen" |
| 5 | Ecosistema | `ecosistema` | Tu negocio → Rediseñalo Pe → Web/Google/WhatsApp/Redes → Presencia profesional + franja de diagnóstico |
| 6 | Proyectos realizados | `portafolio` | Industrias Céspedes y Jeinox GastroSystems con video de navegación |
| 7 | Confianza | `confianza` | 4 compromisos: alcance, revisión, accesos, comunicación |
| 8 | Planes | `planes` | Presencia / Negocio (recomendado) / Pro + diagnóstico + condiciones |
| 9 | Proceso | `proceso` | 5 pasos |
| 10 | Diagnóstico | `diagnostico` | "¿No sabes por dónde empezar?" + "¿Qué pasa cuando nos escribes?" |
| 11 | Preguntas frecuentes | `preguntas` | 8 preguntas con `<details>` nativo |
| 12 | Contacto / CTA final | `contacto` | Diagnóstico + Consultar por WhatsApp + franja de confianza |
| — | Pie | — | Logo, lema, cobertura, menú, © y botón flotante de WhatsApp |

**Jerarquía de encabezados:** 1 × H1 · 11 × H2 · 22 × H3. Sin saltos de nivel.

---

## 4. Planes y precios (contenido comercial)

| Plan | Precio | Alcance |
|---|---|---|
| **Presencia** | Desde S/ 500 | 1 página hasta 5 secciones · catálogo hasta 10 productos · 2 rondas de ajustes · sin dominio propio |
| **Negocio** (más recomendado) | Desde S/ 1,000 | Hasta 7 secciones · catálogo hasta 30 productos · filtros por categoría · ubicación · dominio y hosting 1 año · 3 rondas · capacitación de entrega 30 min |
| **Pro** | Desde S/ 1,500 | Hasta 5 páginas · catálogo hasta 60 productos · filtros y fichas · configuración básica para buscadores · dominio y hosting 1 año · 3 rondas · capacitación de entrega 1 h |

Incluido en todos: diseño adaptable, botones de WhatsApp, enlaces a redes, SEO básico, publicación.
Condiciones visibles: pago 50% / 50%, renovación de dominio/hosting aparte, mantenimiento opcional, sin carrito/pagos en línea/inversión publicitaria.

---

## 5. Configuración (`site/js/config.js`)

Regla: **todo valor `null` o `false` no se muestra** (sin enlaces vacíos ni datos de relleno).

| Clave | Valor actual | Efecto |
|---|---|---|
| `whatsapp.number` | `51929523437` | Activa todos los botones de WhatsApp |
| `whatsapp.defaultMessage` | Consulta general | Botón "Consultar", "Consultar por WhatsApp", botón flotante |
| `whatsapp.diagnosticMessage` | Diagnóstico inicial | Botones `data-msg="diagnostic"` |
| `whatsapp.planMessage` | Plantilla con `{plan}` | Botones `data-plan="…"` |
| `schedule` | `null` | Horario oculto (pendiente) |
| `coverage` | "Lima y Callao · Atención remota en todo el Perú" | Hero, contacto, pie |
| `email`, `social.*` | `null` | Ocultos (pendientes) |
| `legal.ruc`, `legal.businessName` | `null` | Ocultos |
| `portfolioMedia.*` | `video: true, poster: true` (ambos) | Activa videos y posters |
| `show.processTimes` | `false` | Plazos del proceso ocultos |
| `show.planTraining` | `true` | Capacitación visible en Negocio y Pro |
| `show.paymentTerms` | `true` | Forma de pago 50/50 visible |
| `analytics.*` | `null` | Sin analítica |

---

## 6. WhatsApp — enlaces y mensajes

Formato: `https://wa.me/51929523437?text=<mensaje codificado con encodeURIComponent>`, `target="_blank"`, `rel="noopener noreferrer"`. Los enlaces se generan en `main.js` a partir de `data-wa`, `data-msg` y `data-plan`.

| Botón | Ubicación | Mensaje |
|---|---|---|
| Consultar | Encabezado | Hola Rediseñalo Pe, quisiera recibir información sobre sus servicios. |
| Solicitar diagnóstico gratuito (×5) | Hero, ecosistema, planes, diagnóstico, contacto | Hola Rediseñalo Pe, quisiera solicitar un diagnóstico inicial para mi negocio. Me gustaría conocer qué podría mejorar de mi presencia digital. |
| Consultar este plan | Presencia | Hola Rediseñalo Pe, estoy interesado(a) en el Plan Presencia desde S/500. Quisiera recibir más información. |
| Consultar este plan | Negocio | … en el Plan Negocio desde S/1,000 … |
| Consultar este plan | Pro | … en el Plan Pro desde S/1,500 … |
| Consultar por WhatsApp | Contacto | Mensaje general |
| Botón flotante | Fijo (dentro del pie) | Mensaje general · `aria-label="Consultar a Rediseñalo Pe por WhatsApp"` |

Total: 11 enlaces, todos verificados.

---

## 7. Videos del portafolio

| Video | Peso | Resolución | Duración | Códec | Bitrate | Audio |
|---|---|---|---|---|---|---|
| Industrias Céspedes | 1.66 MB | 1280×720 | 23.0 s | H.264 Main | ≈ 576 kbps | No |
| Jeinox GastroSystems | 0.79 MB | 1280×720 | 13.3 s | H.264 Main | ≈ 476 kbps | No |

**Procesado aplicado (desde originales 1920×1080 de 4.03 MB y 1.97 MB):** reescalado a 720p, CRF 25, `+faststart`, sin audio; eliminación del aviso del navegador "Para salir de la pantalla completa"; recorte del borde rojizo del grabador (Céspedes) y del inicio en negro (Jeinox).

**Implementación (`<video>` HTML5 + JS mínimo):**
- Atributos: `muted loop playsinline preload="none" disablepictureinpicture disableremoteplayback`.
- Sin `src` en el HTML: `main.js` lo asigna solo cuando el video entra en pantalla (IntersectionObserver, umbral 35%) y lo pausa al salir.
- Posters: se cargan al acercarse a la sección (`rootMargin: 400px`), no en la carga inicial.
- Botón accesible de pausa/reproducción por video (WCAG 2.2.2); la pausa manual se respeta al volver a la sección.
- `prefers-reduced-motion: reduce` → sin autoplay, controles nativos, sin descarga hasta pulsar reproducir.
- Fallback si falta el archivo o el navegador no puede reproducir: fondo de marca con nombre del proyecto o poster.
- Sin iframes ni enlaces a las webs de los clientes.

---

## 8. Rendimiento

| Aspecto | Implementación |
|---|---|
| Carga inicial | 10 peticiones: HTML, CSS, 2 JS, 2 fuentes, logo, favicon (sin videos ni posters) |
| Fuentes | WOFF2 variables autoalojadas, `preload`, `font-display: swap` |
| Imágenes | WebP; `width`/`height` declarados; logo del pie con `loading="lazy"`; logo del encabezado sin lazy (visible al cargar) |
| LCP | Texto del H1 (sin imagen pesada en el Hero; la maqueta del celular es CSS) |
| CLS | Dimensiones fijas en imágenes y contenedor 16:9 del video |
| INP | JavaScript ligero, sin librerías; eventos pasivos en scroll |
| Animaciones | Aparición suave con IntersectionObserver; desactivadas con `prefers-reduced-motion` |
| Scripts | `defer`; un script inline mínimo (clase `js`) y el JSON-LD |

---

## 9. SEO técnico

| Elemento | Estado |
|---|---|
| `<title>` | Rediseñalo Pe \| Desarrollo web y presencia digital en Perú (58 car.) |
| Meta description | "Ayudamos a negocios en Perú a mejorar su presencia digital…" (161 car.) |
| `lang` | `es-PE` |
| Canonical | https://forastero7.github.io/Impulso_digital_webside/site/ |
| Open Graph | `og:type`, `og:locale`, `og:site_name`, `og:url`, `og:title`, `og:description`, `og:image` (512×512) + `og:image:alt` |
| Twitter | `summary` con title, description e image |
| JSON-LD | `ProfessionalService`: nombre, URL, logo, descripción, país (Perú), contacto (+51929523437), servicios (`knowsAbout`). Sin dirección, horario, RUC ni valoraciones |
| robots.txt | `Allow: /` + sitemap (efectivo solo con dominio propio) |
| sitemap.xml | 1 URL |
| Indexación | **Bloqueada a propósito** (`<meta name="robots" content="noindex, nofollow">`) hasta el lanzamiento |
| Redirección raíz | `noindex, follow` + canonical a `/site/` |

---

## 10. Accesibilidad

- Enlace "Saltar al contenido", landmarks (`header`, `nav`, `main`, `footer`).
- Foco visible: `outline: 3px solid` en `:focus-visible`.
- Menú móvil con `aria-expanded`, `aria-controls`, cierre con Esc.
- FAQ con `<details>/<summary>` nativo (accesible por teclado).
- Iconos decorativos con `aria-hidden="true"`; botones de WhatsApp con texto visible o `aria-label`.
- Contraste revisado (AA): azul `#006BFD` 4.64:1 sobre blanco; cian solo decorativo o sobre fondo oscuro; verde de la maqueta `#0E7A55` 5.3:1.
- Videos con `aria-label` y control de pausa.
- `prefers-reduced-motion` respetado (animaciones, scroll suave y videos).
- Auditoría axe-core: sin violaciones salvo el aviso de revisión fuera de landmark (se retira al lanzar).

---

## 11. Responsive

Enfoque mobile first. Breakpoints usados: 400, 419, 559/560, 640, 720, 760, 900, 960, 1040 y 1100 px.
Verificado sin overflow horizontal, textos cortados ni botones fuera de pantalla en 320, 375, 390, 430, 768, 1024 y 1366 px.

| Componente | Celular | Escritorio |
|---|---|---|
| Menú | Panel desplegable | Horizontal |
| Servicios | 1 columna | 2 columnas |
| Ecosistema | Vertical con flechas ↓ | 4 columnas con flechas → (≥1040 px) |
| Proyectos | Video → texto | Video 1.65fr + texto 1fr, uno por fila |
| Confianza | 1 columna | 4 columnas |
| Planes | Apilados (Presencia, Negocio, Pro) | 3 columnas, Negocio elevado |
| Botón flotante | 52 px | 58 px |

---

## 12. Seguridad

- Sin credenciales, API keys ni tokens en el código.
- Sin recursos HTTP mixtos ni scripts de terceros.
- Enlaces externos con `rel="noopener noreferrer"`.
- Inserción de datos de configuración con `textContent`/atributos (no `innerHTML` con datos variables, salvo plantillas fijas de iconos).
- Sin cookies ni almacenamiento local.

---

## 13. Despliegue

- **Activo:** GitHub Pages "Deploy from a branch" (raíz). La raíz redirige a `site/`.
- **`.github/workflows/pages.yml`:** solo `workflow_dispatch` (manual). Antes se ejecutaba en cada push y competía con la publicación desde la rama.
- **Alternativa:** `netlify.toml` publica `site/` (incluye `X-Robots-Tag: noindex` para revisión).

---

## 14. Integraciones

| Integración | Estado | Dónde se incorporaría |
|---|---|---|
| Google Analytics | No instalado | `analytics.googleAnalyticsId` en `config.js` + carga en `main.js` (sección "Analítica") |
| Meta Pixel | No instalado | `analytics.metaPixelId` en `config.js` |
| Search Console | No configurado | Tras dominio propio: verificar, enviar sitemap |
| Banner de cookies | No necesario hoy | Requerido si se instala analítica o píxel |

---

## 15. Pendientes y próximos pasos

**Para lanzar (decisión del propietario):**
1. Quitar `<meta name="robots" content="noindex, nofollow">` de `site/index.html`.
2. Quitar `<div class="review-banner">` de `site/index.html`.

**Datos pendientes:** horario de atención, correo, enlaces de redes sociales, RUC/razón social (opcional), imagen 1200×630 para compartir (opcional).

**Al conectar dominio propio:** reemplazar la URL de GitHub Pages en canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD, `sitemap.xml`, `robots.txt` y `index.html` raíz. Recomendado: cambiar Pages a "GitHub Actions" para servir `site/` en la raíz del dominio (sin `/site/`), y luego configurar Search Console.

**Observaciones de contenido:**
- El plan Pro anuncia "Configuración básica para buscadores" aunque todos los planes incluyen SEO básico (conviene precisar qué incluye de más).
- "Hasta 5 páginas" (Pro) vs. "Hasta 7 secciones" (Negocio) usan unidades distintas.
- Hay 5 botones de diagnóstico; el de la franja del ecosistema es el más prescindible.

**Estado: LISTA CON PENDIENTES MENORES.**

---

## 16. Historial de fases

| Fase | Commit | Contenido |
|---|---|---|
| Base | `29616c2` | Versión de revisión inicial |
| Marca | `6485975`, `1439f0a` | Rediseñalo Pe, logo optimizado, paleta del logo |
| 1 | `e1e0b7d` | Identidad y mensaje principal |
| 2 | `0233d37` | Simplificación de contenido y voz de marca |
| 3 | `a42fa0a` | Servicios en 4 pilares + ecosistema |
| 4 | `fd2fde2`, `473b5f9`, `dd5f3e9` | Portafolio real con videos |
| 5 | `c7baf3a` | Planes Presencia / Negocio / Pro |
| 6 | `b2ad998` | Conversión y confianza |
| 7 | `2a9a5f9` | Optimización técnica y preparación para lanzamiento |

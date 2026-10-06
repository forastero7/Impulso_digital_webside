# Portafolio — videos de navegación

La sección **Proyectos realizados** muestra dos proyectos reales mediante un video corto
de navegación. No hay enlaces ni iframes hacia las webs de los clientes.

| Proyecto | Video (MP4) | Poster opcional (WebP) |
|---|---|---|
| Industrias Céspedes ✅ activo | `site/assets/videos/industrias-cespedes.mp4` (1.66 MB) | `site/img/portfolio/industrias-cespedes-poster.webp` (12 KB) |
| Jeinox GastroSystems ✅ activo | `site/assets/videos/jeinox-gastrosystems.mp4` (0.79 MB) | `site/img/portfolio/jeinox-gastrosystems-poster.webp` (32 KB) |

## Cómo activarlos

1. Copiar el archivo con **exactamente** ese nombre y en esa carpeta.
2. En `site/js/config.js`, dentro de `portfolioMedia`, cambiar a `true` lo que ya exista:

```js
portfolioMedia: {
  "industrias-cespedes": { video: true, poster: true },
  "jeinox-gastrosystems": { video: true, poster: false }
},
```

Mientras un valor esté en `false`, la web muestra un fondo de respaldo con el nombre del
proyecto y no solicita el archivo (no hay referencias rotas).

## Recomendaciones para los archivos

- **Video:** MP4 (H.264), **sin pista de audio**, 15–30 s, 1280×720 (16:9), 24–30 fps,
  ideal **menos de 3–4 MB** cada uno. Se reproduce en bucle, así que conviene que el final
  enlace con el inicio.
- **Poster:** primer fotograma del video en WebP, 1280×720, ideal menos de 100 KB.
- El video se ve completo dentro de un marco 16:9 (no se recorta); si se graba en otra
  proporción aparecerán bandas oscuras.

## Comportamiento

- Se carga solo cuando el proyecto aparece en pantalla y se pausa al salir.
- Siempre sin sonido (`muted`), en bucle, `playsinline` y sin controles.
- Si el navegador bloquea la reproducción automática, se muestran los controles.
- Con "reducir movimiento" activado en el dispositivo, no se reproduce solo: se muestra el
  poster con controles para reproducirlo manualmente.

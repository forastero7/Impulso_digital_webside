# Portafolio — proyectos reales pendientes de autorización

Estos proyectos **no se publican** hasta confirmar el permiso de cada cliente para
mostrar su nombre, logo y capturas. Esta carpeta `docs/` no se publica en la web
(Netlify solo publica la carpeta `site/`).

| Proyecto | Tipo | Enlace | Autorización |
|---|---|---|---|
| Industrias Céspedes | Catálogo web | https://industriascespedes-pe.netlify.app/ | ⏸ Pendiente |
| Jeinox GastroSystems | Web y catálogo | https://jeinox-gastrosystems.netlify.app/ | ⏸ Pendiente |

## Cómo activar un proyecto autorizado

1. Guardar una captura en `site/img/portafolio/` (por ejemplo `industrias-cespedes.webp`, 1200×750 px).
2. Agregar el proyecto en `portfolio` dentro de `site/js/config.js`:

```js
portfolio: [
  {
    name: "Industrias Céspedes",
    type: "Catálogo web",
    description: "Catálogo de equipos gastronómicos con información de productos y cotización por WhatsApp.",
    url: "https://industriascespedes-pe.netlify.app/",
    image: "img/portafolio/industrias-cespedes.webp",
    imageAlt: "Captura del catálogo web de Industrias Céspedes"
  }
  // Jeinox GastroSystems:
  // description: "Web y catálogo de equipos gastronómicos con fichas de productos y contacto por WhatsApp."
  // url: "https://jeinox-gastrosystems.netlify.app/"
],
```

No agregar cifras de ventas, visitas, conversiones ni testimonios.

# Portfolio Frontend en Astro (Seleccion Tecnica)

Proyecto enfocado en lo que mas pesa en procesos como La Velada:

- Astro como base de landing.
- JavaScript vanilla para interaccion.
- HTML semantico + CSS moderno.
- Tailwind CSS para velocidad de construccion.
- SEO tecnico completo.
- Senal real de rendimiento y criterios de ingenieria.

## Stack

- `astro`
- `@astrojs/tailwind`
- `tailwindcss`
- `@midudev/tailwind-animations`

## Ejecutar local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
npm run preview
```

## Estructura principal

- `src/pages/index.astro`: landing principal.
- `src/layouts/MainLayout.astro`: layout base y metadatos SEO.
- `src/styles/global.css`: estilos globales y efectos CSS modernos.
- `tailwind.config.mjs`: configuracion Tailwind.
- `astro.config.mjs`: base para GitHub Pages.

## SEO que ya incluye

- Open Graph.
- Twitter Card `summary_large_image`.
- Canonical URL.
- JSON-LD (`schema.org/Person`).

## Personalizacion obligatoria

1. Reemplaza `TU-USUARIO` por tu usuario real de GitHub en `astro.config.mjs`, `src/layouts/MainLayout.astro` y `src/pages/index.astro`.
2. Cambia links placeholder de repos/PRs por links reales.
3. Sustituye metricas ejemplo por datos reales (LCP, CLS, JS inicial, Lighthouse).
4. Agrega `public/og-cover.png` para previews sociales.

## Deploy en GitHub Pages

1. Crea repo `portfolio`.
2. Sube el proyecto.
3. El workflow ya viene incluido en `.github/workflows/deploy.yml`.
4. En GitHub ve a `Settings > Pages` y en `Source` selecciona `GitHub Actions`.
5. Haz push a `main` y GitHub publicara automaticamente.
6. URL final esperada: `https://TU-USUARIO.github.io/portfolio/`.

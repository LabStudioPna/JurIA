# JurIA — Deploy en el repo `JurIA`

## Archivos entregados
- `agente-juria.html` — la app completa (chat jurídico, intereses, plazos, agenda, analizador de escritos, backup a Google Sheets). Mismo patrón que BarIA: login LABStudio (`producto: 'juria'`), API key en sessionStorage, datos en localStorage.
- `index-juria.html` — landing estilo bento. **Renombrala a `index.html`** en el repo.
- Identidad completa en bordó `#7C2136` + dorado `#C9A227` (color libre: BarIA violeta, FiscoIA esmeralda, CampoIA oliva, MiPropIA azul marino, ConstructorIA naranja, FarmaIA teal). Todos los archivos van sueltos en la raíz del repo, igual que en tus otros productos:
  - `icon.svg` (maestro, editable)
  - `favicon.ico` (16+32+48 multi-tamaño, navegadores viejos/Windows)
  - `favicon-16x16.png`, `favicon-32x32.png` (pestañas Chrome/Firefox/Edge)
  - `favicon-192.png`, `favicon-512.png` (Android/Chrome/Samsung Internet)
  - `maskable-192.png`, `maskable-512.png` (íconos maskable Android/PWA)
  - `apple-touch-icon.png` (180×180, iOS/iPad)
  - `mstile-150x150.png` + `browserconfig.xml` (tiles Windows)
  - `og-image.png` (1200×630, WhatsApp/redes)
  - `site.webmanifest` (PWA, apunta a `agente-juria.html`)

## Pendientes tuyos
1. Copiar `bento.css` y `tracker.js` de otro producto al repo.
2. Crear el form en Formspree y reemplazar `TU_FORM_ID_JURIA` en la landing.
3. Dar de alta el producto `juria` en tu webhook n8n de auth (mismo backend compartido).
4. `guia-completa.html` y `terminos.html` están linkeados pero no creados aún.
5. Los feriados 2026 están hardcodeados en `FERIADOS_2026` (incluye trasladables). Revisar si el gobierno agrega feriados turísticos y sumarlos.

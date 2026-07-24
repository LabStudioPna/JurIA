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

## Módulos del agente (v2)
Chat jurídico (con jurisprudencia y costumbre como fuentes), Intereses, Plazos procesales, **Prescripción (semáforo)**, Agenda, Analizador de escritos (**con redline de contratos opcional**), **Modelos de escritos**, **Estimador de honorarios**, **Traductor jurídico→cliente**, Backup Sheets. Página extra: `codigos.html` (links oficiales verificados a códigos de fondo/procesales, DIPr, fuentes y diccionarios).

## Ya incluido (no hace falta copiar nada de otro producto)
- `bento.css` propio de JurIA (paleta bordó/dorado)
- `tracker.js` con `landing='JurIA'` — reporta cada página al webhook `labstudio-visitas`, separado de FarmaIA y el resto
- `404.html`, `terminos.html` y `guia-completa.html` con la paleta y el toggle de tema de JurIA

## Pendientes tuyos
1. Crear el form en Formspree y reemplazar `TU_FORM_ID_JURIA` en la landing.
2. Dar de alta el producto `juria` en tu webhook n8n de auth (mismo backend compartido).
3. Los feriados 2026 están hardcodeados en `FERIADOS_2026` (incluye trasladables). Revisar si el gobierno agrega feriados turísticos y sumarlos.

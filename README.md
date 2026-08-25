# Mishi Repostería — Menú de Mousses

Página de una sola sección (landing) con el menú de mousses de Mishi Repostería (Cúcuta, Colombia).

## Estructura del proyecto

```
Empredimiento/
├── index.html                    # Estructura de la página (HTML)
├── styles.css                   # Estilos personalizados (lightbox, layout, ajustes responsive)
├── script.js                    # Config de Tailwind + lógica del visor de imágenes
├── imagen/                      # Fotos reales de cada mousse
│   ├── mango.jpeg
│   ├── maracuya.jpeg
│   ├── naranja.jpeg
│   ├── lulo.jpeg
│   └── fresa.jpeg
└── README.md
```

## Cómo verla

No necesita instalación ni build. Basta con abrir `index.html` directamente en el navegador (doble clic), ya que todas las rutas (CSS, JS, imágenes) son relativas.

Para probarla como si fuera un servidor real (por ejemplo si algo no carga bien con `file://`):

```bash
cd Empredimiento
python3 -m http.server 8731
```

y abrir `http://localhost:8731/index.html`.

## Funcionalidades actuales

- **Responsive**: layout apilado en una columna en celular, y el diseño tipo póster (imágenes a un lado, texto al otro) en tablet/escritorio (`md:` en adelante).
- **Ampliar foto (lightbox)**: clic o Enter/Espacio sobre cualquier foto la abre en grande. Se cierra con la X, tecla Escape o clic afuera.
- **Voltear foto → ingredientes**: con la foto ampliada, un segundo clic la voltea (animación 3D) y muestra atrás una tarjeta con el nombre del sabor y su lista de ingredientes. Un tercer clic la regresa a la foto.
- Los ingredientes de cada sabor están en el atributo `data-ingredients` de cada `<img>` en el HTML, separados por `|`.

## Ideas para mejorar a futuro

- **Precios**: agregar el precio de cada mousse (actualmente el menú no muestra precios).
- **Pedido directo por WhatsApp**: convertir el número del footer en un link `https://wa.me/57316...` que abra un chat con un mensaje predefinido, en vez de solo mostrar el texto.
- **Link real de Instagram**: el `@mishi_arsticeria` del footer no es un link clickeable todavía.
- **Editar ingredientes sin tocar código**: mover los ingredientes/descripciones a un archivo `data.json` y que el JS los lea, para que se puedan actualizar sin editar HTML.
- **Optimizar imágenes**: las fotos actuales pesan entre 38–104 KB; se pueden comprimir/convertir a `.webp` para que cargue más rápido en datos móviles.
- **SEO y compartir en redes**: agregar `<meta>` de Open Graph (título, descripción, imagen de portada) para que se vea bien al compartir el link en WhatsApp/Instagram, y un favicon.
- **Más sabores o productos**: si se agregan nuevos mousses u otros postres, replicar el mismo patrón (imagen con `data-ingredients` + bloque de texto numerado).
- **Analítica básica**: saber cuántas personas visitan el menú (ej. Google Analytics o Plausible).
- **Dominio propio / hosting**: hoy el sitio solo vive como archivos locales; para que los clientes lo vean hay que publicarlo (ej. GitHub Pages, Netlify, Vercel — todas gratis para un sitio estático como este).

## Notas técnicas

- Usa **Tailwind CSS** vía CDN (`cdn.tailwindcss.com`), configurado en `script.js` (colores de marca y tipografías Montserrat/Playfair Display).
- No requiere backend ni base de datos: es un sitio 100% estático.

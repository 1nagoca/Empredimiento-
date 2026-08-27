# Mishi Repostería — Menú de Mousses

Página de una sola sección (landing) con el menú de mousses de Mishi Repostería (Cúcuta, Colombia).

## Estructura del proyecto

```
Empredimiento/
├── index.html                    # Estructura de la página (HTML)
├── styles.css                   # Estilos personalizados (lightbox, layout, ajustes responsive)
├── script.js                    # Config de Tailwind + lógica del visor de imágenes
├── imagen/                      # Fotos reales de cada mousse (fondo transparente) + logo
│   ├── logo.jpeg
│   ├── mango.webp
│   ├── maracuya.webp
│   ├── naranja.webp
│   ├── lulo.webp
│   └── fresa.webp
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
- **Logo de la empresa**: círculo con el logo real de Mishi Pâtisserie en el encabezado, recortado y centrado.
- **Ampliar foto (lightbox)**: clic o Enter/Espacio sobre cualquier foto (o el logo) la abre en grande. Se cierra con la X, tecla Escape o clic afuera.
- **Voltear foto → ingredientes**: con una foto de mousse ampliada, un segundo clic la voltea (animación 3D) y muestra atrás una tarjeta con el nombre del sabor y su lista de ingredientes. Un tercer clic la regresa a la foto. (El logo, al no tener ingredientes, solo hace zoom simple sin volteo.)
- Los ingredientes de cada sabor están en el atributo `data-ingredients` de cada `<img>` en el HTML, separados por `|`.
- **Fotos con fondo transparente**: las 5 fotos de mousses están recortadas (fondo negro original quitado, formato `.webp`) para que se vean flotando sobre el fondo beige de la píldora y sobre el blanco del visor ampliado.
- **Precio por mousse**: cada sabor muestra su precio ($7.000) al final de su línea decorativa.
- **Sección "¿Qué es un mousse?"**: breve texto explicativo entre el encabezado y el menú.
- **Pedido directo por WhatsApp**: botón flotante verde (visible en toda la página) y el número del footer, ambos abren un chat de WhatsApp con mensaje predefinido para hacer un pedido.

## Ideas para mejorar a futuro

- **Carrito/formulario de pedido**: dejar elegir sabor(es) y cantidad, y que el botón de WhatsApp arme automáticamente el mensaje con el pedido completo, en vez de un mensaje genérico fijo.
- **Editar contenido sin tocar código**: mover ingredientes, precios y descripciones a un archivo `data.json` y que el JS los lea, para poder actualizar el menú sin editar HTML.
- **Imágenes responsive**: ya están en `.webp` y livianas (~50–85 KB c/u); se podría afinar más con `srcset` para servir un tamaño distinto según el dispositivo. El logo sigue en `.jpeg`; convertirlo a `.webp` lo dejaría más liviano y consistente con el resto.
- **SEO y compartir en redes**: agregar `<meta>` de Open Graph (título, descripción, imagen de portada) para que se vea bien al compartir el link en WhatsApp/Instagram, y un favicon.
- **Ubicación con mapa**: agregar un link a Google Maps junto a "Cúcuta, Colombia" para que los clientes encuentren el punto de entrega/recogida.
- **Horario de atención**: mostrar días y horas en que se reciben pedidos.
- **Más sabores o productos**: si se agregan nuevos mousses u otros postres, replicar el mismo patrón (imagen con `data-ingredients` + bloque de texto numerado + precio).
- **Analítica básica**: saber cuántas personas visitan el menú (ej. Google Analytics o Plausible).
- **Dominio propio / hosting**: hoy el sitio solo vive como archivos locales/GitHub; para que los clientes lo vean fácilmente conviene publicarlo (ej. GitHub Pages, Netlify, Vercel — todas gratis para un sitio estático como este) y opcionalmente comprar un dominio propio.

## Notas técnicas

- Usa **Tailwind CSS** vía CDN (`cdn.tailwindcss.com`), configurado en `script.js` (colores de marca y tipografías Montserrat/Playfair Display).
- No requiere backend ni base de datos: es un sitio 100% estático.
- El link de WhatsApp usa el formato `https://wa.me/<código país><número>?text=<mensaje>`, sin necesidad de API ni backend.

// Configuración de la paleta y tipografías de Tailwind (debe cargarse justo
// después del script del CDN de Tailwind, antes de que se pinte el body).
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#3d2b1f',    /* Marrón muy oscuro, texto principal */
                    brown: '#5c4533',   /* Marrón medio para subtítulos */
                    beige: '#e8dfd5',   /* Fondo de la píldora de imágenes */
                    footer: '#403025'   /* Fondo oscuro del footer */
                }
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        }
    }
};

// ===== Lightbox: click en una imagen del menú para verla en grande =====
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('lightbox-overlay');
    const overlayImg = document.getElementById('lightbox-img');
    const overlayCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const flipCard = document.getElementById('lightbox-flip-card');
    const ingTitle = document.getElementById('lightbox-ing-title');
    const ingList = document.getElementById('lightbox-ing-list');
    const galleryImgs = document.querySelectorAll('.gallery-img');

    if (!overlay || !overlayImg || !closeBtn || !flipCard || galleryImgs.length === 0) return;

    const CAPTION_FRONT = 'Toca la foto para ver los ingredientes';
    const CAPTION_BACK = 'Toca para volver a la foto';

    let lastFocused = null;

    function openLightbox(imgEl) {
        lastFocused = document.activeElement;
        overlayImg.src = imgEl.src;
        overlayImg.alt = imgEl.alt;

        ingTitle.textContent = imgEl.alt;
        ingList.innerHTML = '';
        (imgEl.dataset.ingredients || '')
            .split('|')
            .map((item) => item.trim())
            .filter(Boolean)
            .forEach((item) => {
                const li = document.createElement('li');
                li.textContent = item;
                ingList.appendChild(li);
            });

        flipCard.classList.remove('is-flipped');
        overlayCaption.textContent = CAPTION_FRONT;

        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
        closeBtn.focus();
    }

    function closeLightbox() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
        flipCard.classList.remove('is-flipped');
        overlayImg.src = '';
        if (lastFocused) lastFocused.focus();
    }

    function toggleFlip() {
        const flipped = flipCard.classList.toggle('is-flipped');
        overlayCaption.textContent = flipped ? CAPTION_BACK : CAPTION_FRONT;
    }

    flipCard.addEventListener('click', toggleFlip);
    flipCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFlip();
        }
    });

    galleryImgs.forEach((img) => {
        img.setAttribute('tabindex', '0');
        img.setAttribute('role', 'button');
        img.setAttribute('aria-label', `Ampliar imagen: ${img.alt}`);

        img.addEventListener('click', () => openLightbox(img));
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(img);
            }
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    // Cerrar al hacer click fuera de la imagen
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
            closeLightbox();
        }
    });
});

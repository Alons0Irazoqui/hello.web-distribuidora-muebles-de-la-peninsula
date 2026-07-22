# Brief de Proyecto — Distribuidora Muebles de la Península

## 1. Resumen del proyecto

- **Tipo de proyecto:** Landing page / sitio web corporativo.
- **Punto de partida:** Ya existe una **plantilla base en HTML** sobre la cual se construirá el sitio, junto con un **prompt inicial** entregado por separado para adaptar dicha plantilla al negocio.
- **Estructura de la página:** La página debe seguir la estructura de secciones que ya trae la plantilla base. Este documento **no define ni sugiere secciones nuevas**; el trabajo del desarrollador es adaptar contenido, branding, efectos y assets dentro de esa estructura ya existente.
- **Fuente de la información de negocio:** Todo el contenido de este informe fue extraído analizando la carpeta `imagenes/` (logo, fotos del local, mercancía, material promocional) y la información de contacto compartida directamente por el cliente.

---

## 2. Información del negocio

| Dato | Valor |
|---|---|
| **Nombre del negocio** | Distribuidora Muebles de la Península |
| **Ubicación** | Valladolid, Yucatán — Calle 64 x 37A y 39, Colonia Colonos |
| **Teléfono / WhatsApp (cotizaciones y pedidos)** | 985 146 4554 |
| **Modalidad de venta** | Mayoreo y Menudeo (venta al por mayor y al detalle), cotizaciones sin compromiso |
| **Mensaje/gancho comercial del cliente** | "No te vas a arrepentir de nuestros precios — Precios de mayoreo y menudeo" |
| **Horarios de atención** | No se encontró esta información en el material disponible. El desarrollador debe solicitarla al cliente o dejar un espacio claramente editable en el sitio. |

> **Nota sobre datos adicionales encontrados en el material gráfico:** en uno de los flyers promocionales de la carpeta `imagenes/` aparece un segundo teléfono (2241 00 00 14) y la leyenda "Mérida, Yucatán". Este flyer parece ser material genérico/publicitario y no coincide con la dirección y ciudad que el propio cliente proporcionó (Valladolid). Se recomienda **confirmar con el cliente** si existe una segunda sucursal en Mérida antes de publicar ese dato; por defecto, usar Valladolid, Yucatán y el número 985 146 4554 como datos de contacto principales.

### Giro y productos que maneja

Es una distribuidora/mayorista de muebles y artículos para el hogar, con un catálogo amplio que incluye:

- **Muebles:** colchones, box springs, camas, roperos, cómodas y cajoneras (incluye líneas infantiles con diseños con licencia, ej. Disney).
- **Sillas y bancos de plástico** apilables en múltiples colores.
- **Tinas, cubetas y botes de plástico** de alta capacidad.
- **Cajas organizadoras y contenedores de plástico** en varios tamaños y diseños.
- **Línea blanca / electrodomésticos:** lavadoras, estufas, refrigeradores, hornos de microondas (marcas presentes en el material: Winia, Hisense, Prime, Midea).
- **Menaje de cocina** (ollas, sartenes, vaporeras) de la marca Forte ("La fuerza de tu cocina").
- **Ventiladores y otros electrodomésticos menores.**

Esta información es contexto de negocio para que el desarrollador entienda a quién le está construyendo el sitio; no implica que deba crear secciones nuevas para cada categoría — el contenido se adapta a la estructura que ya trae la plantilla.

---

## 3. Branding

### Logo

El logo (`imagenes/logo.jpeg`) presenta: una corona dorada sobre un escudo circular con la letra "D", laureles azules, el texto "Distribuidora Muebles de la Península" y una franja decorativa multicolor tipo arcoíris debajo del nombre "Valladolid, Yucatán".

### Paleta de colores (HEX)

| Color | HEX | Uso sugerido |
|---|---|---|
| Azul marino profundo | `#0A1F44` | Color primario / fondos oscuros, header, footer |
| Azul rey | `#1E56A0` | Color secundario / acentos, hover states |
| Dorado | `#D4AF37` | Detalles premium, líneas divisorias, iconografía, hover en CTAs |
| Blanco | `#FFFFFF` | Texto sobre fondo oscuro, espacios en blanco |
| Gris carbón | `#1C1C1E` | Texto principal sobre fondo claro |
| Acentos multicolor (uso puntual, no dominante) | `#E63946` (rojo), `#F4A261` (naranja), `#FFD60A` (amarillo), `#6BBF59` (verde), `#4CC9F0` (azul cielo), `#E91E8C` (magenta) | Pequeños detalles que referencian la variedad de producto (ej. iconos, chips de categoría, franja decorativa inspirada en el logo). Usar con moderación para no perder el tono premium. |

### Tipografía sugerida

- **Títulos / encabezados:** una tipografía serif o slab-serif con carácter (ej. *Playfair Display*, *Cormorant Garamond* o *Marcellus*), que dialogue con el estilo heráldico/corona del logo.
- **Cuerpo de texto / UI:** una sans-serif moderna y limpia (ej. *Inter*, *Poppins* o *Montserrat*), para mantener legibilidad y un acabado minimalista.

### Identidad visual

- Base cromática oscura (azul marino) con acentos dorados: transmite seriedad, solidez y trayectoria ("distribuidora" establecida).
- Los colores vivos del catálogo (sillas, cajas, productos) se usan solo como acentos puntuales, nunca como fondo dominante, para no restar seriedad al diseño.
- Buscar un equilibrio entre lo corporativo/serio (azul + dorado) y la calidez de un negocio que también maneja línea de hogar variada y colorida.

---

## 4. Estilo visual obligatorio

El sitio debe transmitir:

- **Estilo premium, enterprise y corporativo de marca.**
- **Nivel "big tech":** elegante y a la vez minimalista, con buen manejo de espacios en blanco, jerarquía tipográfica clara y sin sobrecargar de elementos.

---

## 5. Efectos y animaciones requeridos

El desarrollador debe incluir:

- **Efectos visuales y animaciones de scroll** (elementos que aparecen/se transforman al hacer scroll).
- **Pantalla de carga (preloader)** con spinner + logo del negocio, antes de mostrar el contenido del sitio.
- **Animación en el título del hero:** efecto máquina de escribir, cambio de color en las letras, u otro efecto tipográfico llamativo (a criterio del desarrollador, priorizando que se vea elegante y no recargado).

---

## 6. Instrucciones sobre assets

- **Logo:** el archivo `imagenes/logo.jpeg` tiene **fondo azul marino sólido**. Antes de usarlo en el sitio, el desarrollador debe **remover el fondo** (dejarlo en PNG con transparencia) para poder colocarlo correctamente sobre distintos fondos del sitio (header, preloader, footer, favicon, etc.).
- **Fotos de producto y local:** la carpeta `imagenes/` contiene fotografías reales del local, la mercancía y el proceso logístico (camiones, carga de producto). Usar las que mejor representen la variedad y volumen del negocio, priorizando imágenes nítidas y bien iluminadas. Recortar/editar según sea necesario para que combinen con la identidad visual definida.
- **Video:** hay un archivo de video (`WhatsApp Video...mp4`) en la carpeta; evaluar si aporta valor como fondo de sección o material de apoyo, editándolo si es necesario (recorte, silenciar audio, loop, etc.).
- **Material promocional (flyers):** algunas imágenes son flyers ya diseñados (con textos y logos incrustados) — no usar estas imágenes directamente como fotografías de producto en el sitio; sirven solo como referencia de información y catálogo.

---

## 7. Nota para el desarrollador

Este README es un punto de partida, no un resultado final cerrado. Se espera que **itere sobre el proyecto usando Claude Code**, dándole instrucciones las veces que sea necesario, ajustando diseño, contenido, animaciones y detalles hasta lograr el resultado deseado.

---

## 8. Checklist para el desarrollador

- [ ] Leer el prompt inicial entregado junto con la plantilla base.
- [ ] Remover el fondo del logo (`imagenes/logo.jpeg`) y exportarlo en PNG transparente.
- [ ] Aplicar la paleta de colores definida (azul marino, azul rey, dorado, blanco, acentos puntuales).
- [ ] Aplicar la tipografía sugerida (serif/slab-serif en títulos, sans-serif en cuerpo).
- [ ] Cargar la información de contacto y ubicación del negocio en la plantilla (dirección, WhatsApp, modalidad de venta).
- [ ] Confirmar con el cliente el horario de atención y, si aplica, la existencia de una segunda sucursal/número (dato encontrado en flyer con "Mérida, Yucatán").
- [ ] Seleccionar y preparar las fotos de producto/local a usar (recorte, optimización, calidad).
- [ ] Implementar el preloader con spinner + logo del negocio.
- [ ] Implementar animaciones de scroll en el sitio.
- [ ] Implementar la animación del título del hero (máquina de escribir, cambio de color u otro efecto tipográfico).
- [ ] Revisar que el estilo general se sienta premium, corporativo y minimalista (nivel "big tech").
- [ ] Iterar con Claude Code hasta ajustar todos los detalles finales.

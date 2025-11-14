const temas = {
  css: `
<h2>Animaciones con CSS: Código en Acción</h2>
  <p>
    Las animaciones en <strong>CSS</strong> permiten dar vida a los elementos visuales de una página web sin usar JavaScript.  
    Son ideales para transiciones suaves, efectos visuales atractivos y microinteracciones.  
    Vamos a entender **cómo funcionan realmente desde el código**.
  </p>
  
  <div class="bloques-conceptos">

    <div class="bloque-concepto">
      <h3>Estructura básica de una animación</h3>
      <p>
        Una animación en CSS se compone de dos partes:
      </p>
      <ol>
        <li><code>@keyframes</code>: define los pasos o “fotogramas” del movimiento.</li>
        <li>Propiedades de <code>animation</code>: controlan su duración, repetición y ritmo.</li>
      </ol>

      <pre><code>/* CSS */
@keyframes girar {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}

.bola {
width: 100px;
height: 100px;
border-radius: 50%;
background: radial-gradient(circle, #ff4081, #7c4dff);
animation-name: girar;
animation-duration: 3s;
animation-timing-function: linear;
animation-iteration-count: infinite;
}</code></pre>

      <p><em>Explicación:</em>  
        - <code>animation-name</code>: el nombre del bloque <code>@keyframes</code>.  
        - <code>animation-duration</code>: cuánto dura un ciclo (3 segundos).  
        - <code>animation-timing-function</code>: cómo cambia la velocidad (aquí, constante).  
        - <code>animation-iteration-count: infinite</code> indica que no se detiene nunca.
      </p>

      <p><strong>HTML de ejemplo:</strong></p>
      <pre><code>&lt;div class="bola"&gt;&lt;/div&gt;</code></pre>
    </div>

    <div class="bloque-concepto">
      <h3>Transiciones: cambios suaves</h3>
      <p>
        Las <strong>transiciones</strong> permiten animar cambios de propiedades cuando ocurre un evento,  
        como un <em>hover</em> o un <em>click</em>. No requieren <code>@keyframes</code>.
      </p>

      <pre><code>/* CSS */
.boton {
background-color: #6200ea;
color: white;
padding: 12px 24px;
border: none;
border-radius: 8px;
transition: background-color 0.4s ease, transform 0.3s ease;
}

.boton:hover {
background-color: #ff4081;
transform: scale(1.1);
}</code></pre>

      <p><em>Propiedades clave:</em></p>
      <ul>
        <li><code>transition-property</code>: qué propiedad se animará.</li>
        <li><code>transition-duration</code>: cuánto durará la transición.</li>
        <li><code>transition-timing-function</code>: tipo de movimiento (<code>ease</code>, <code>linear</code>, <code>ease-in-out</code>).</li>
      </ul>

      <p><strong>HTML de ejemplo:</strong></p>
      <pre><code>&lt;button class="boton"&gt;Pruébame&lt;/button&gt;</code></pre>
    </div>


    <div class="bloque-concepto">
      <h3>Control del tiempo y dirección</h3>
      <p>
        Las animaciones pueden controlarse con precisión usando propiedades de tiempo y repetición:
      </p>

      <pre><code>/* CSS */
@keyframes mover {
  0% { transform: translateX(0); }
  50% { transform: translateX(200px); }
  100% { transform: translateX(0); }
}

.caja {
  width: 80px;
  height: 80px;
  background: #00bcd4;
  animation: mover 2s ease-in-out 1s infinite alternate;
}</code></pre>

      <p><em>Desglose de la línea de animación:</em></p>
      <ul>
        <li><code>2s</code>: duración.</li>
        <li><code>ease-in-out</code>: velocidad suave al inicio y al final.</li>
        <li><code>1s</code>: retardo antes de comenzar (<code>animation-delay</code>).</li>
        <li><code>infinite</code>: se repite para siempre.</li>
        <li><code>alternate</code>: la animación va y vuelve, creando un movimiento natural.</li>
      </ul>

      <p><strong>HTML de ejemplo:</strong></p>
      <pre><code>&lt;div class="caja"&gt;&lt;/div&gt;</code></pre>
    </div>

    <div class="bloque-concepto">
      <h3>Combinando múltiples animaciones</h3>
      <p>
        Puedes aplicar varias animaciones simultáneamente separándolas por comas:
      </p>

      <pre><code>@keyframes flotar {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes brillo {
  0%, 100% { box-shadow: 0 0 10px #7c4dff; }
  50% { box-shadow: 0 0 25px #ff4081; }
}

.icono {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #7c4dff;
  animation: flotar 2s ease-in-out infinite, brillo 1.5s ease-in-out infinite;
}</code></pre>

      <p>
        El icono flota hacia arriba y hacia abajo mientras brilla suavemente.  
        Al combinar animaciones puedes crear efectos profesionales sin una sola línea de JavaScript.
      </p>

      <p><strong>HTML de ejemplo:</strong></p>
      <pre><code>&lt;div class="icono"&gt;&lt;/div&gt;</code></pre>
    </div>

    <div class="bloque-concepto">
      <h3>Buenas prácticas de animación CSS</h3>
      <ul>
        <li>Usa <code>transform</code> y <code>opacity</code> — son las más eficientes.</li>
        <li>Evita <code>top</code>, <code>left</code> o <code>width</code> en animaciones: son costosas en rendimiento.</li>
        <li>Usa <code>will-change</code> para optimizar animaciones frecuentes.</li>
        <li>Evita animar demasiados elementos simultáneamente.</li>
        <li>Usa <code>prefers-reduced-motion</code> para respetar usuarios sensibles a movimiento.</li>
      </ul>

      <pre><code>@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}</code></pre>

      <p>
        Esto desactiva animaciones para usuarios que lo prefieran.  
        ¡El rendimiento y la accesibilidad también son parte del buen diseño!
      </p>
    </div>
  </div>`,
  js: 
  `
  <h2>Animaciones con JavaScript: Control Total del Movimiento</h2>
<p>
  Con <strong>JavaScript</strong> puedes manipular elementos en tiempo real, creando animaciones dinámicas que reaccionan a eventos del usuario, tiempo o lógica compleja.  
  Vamos a explorar cómo funcionan las animaciones con JS desde el código.
</p>

<div class="bloques-conceptos">

  <div class="bloque-concepto">
    <h3>Estructura básica de una animación JS</h3>
    <p>
      Una animación con JavaScript normalmente sigue este patrón:
    </p>
    <ol>
      <li>Seleccionar el elemento a animar.</li>
      <li>Definir la función que cambia propiedades por fotograma.</li>
      <li>Llamar a <code>requestAnimationFrame()</code> para un bucle suave.</li>
    </ol>

    <pre><code>// JS
const caja = document.querySelector('.caja');
let pos = 0;

function animar() {
  pos += 2; // movimiento de 2px por frame
  if (pos > 200) pos = 0; // reinicia al llegar a 200px
  caja.style.transform = "translateX(" + pos + "px)";

  requestAnimationFrame(animar); // llama al siguiente frame
}

animar();</code></pre>

    <p><em>Explicación:</em></p>
    <ul>
      <li><code>querySelector</code>: selecciona el elemento a animar.</li>
      <li><code>pos</code>: posición en píxeles.</li>
      <li><code>requestAnimationFrame()</code>: sincroniza la animación con el refresco de pantalla.</li>
      <li>La función <code>animar</code> se llama a sí misma en cada frame.</li>
    </ul>
  </div>

  <div class="bloque-concepto">
    <h3>Eventos y animaciones</h3>
    <p>
      Las animaciones pueden activarse mediante eventos como <code>click</code>, <code>hover</code> o teclas.
    </p>

    <pre><code>// JS
const boton = document.querySelector('#boton');
const circulo = document.querySelector('.circulo');

boton.addEventListener('click', () => {
  let pos = 0;
  function mover() {
    pos += 5;
    caja.style.transform = "translateX(" + pos + "px)";

    if(pos < 300) requestAnimationFrame(mover);
  }
  mover();
});</code></pre>

    <p><em>Desglose:</em></p>
    <ul>
      <li><code>addEventListener('click')</code>: ejecuta la animación al hacer clic.</li>
      <li>Se utiliza un bucle interno con <code>requestAnimationFrame</code>.</li>
      <li>Condición <code>if(pos &lt; 300)</code>: evita que la animación siga infinitamente.</li>
    </ul>
  </div>

  <div class="bloque-concepto">
    <h3>Control de tiempo y easing</h3>
    <p>
      Podemos controlar la duración y suavidad usando funciones matemáticas o librerías.
    </p>

    <pre><code>// JS simple easing
function easeInOutQuad(t) {
  return t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
}

let start = null;
function animarTiempo(timestamp) {
  if(!start) start = timestamp;
  let progreso = (timestamp - start)/1000; // segundos
  let valor = easeInOutQuad(Math.min(progreso/2,1)) * 200; // mueve hasta 200px
  caja.style.transform = "translateX(" + pos + "px)";

  if(progreso < 2) requestAnimationFrame(animarTiempo);
}

requestAnimationFrame(animarTiempo);</code></pre>

    <p>Permite animaciones más naturales que lineales.</p>
  </div>

  <div class="bloque-concepto">
    <h3>Buenas prácticas con JS</h3>
    <ul>
      <li>Usa <code>requestAnimationFrame()</code> en lugar de <code>setInterval</code> para animaciones suaves.</li>
      <li>Evita modificar propiedades costosas como <code>width</code> o <code>top</code>, usa <code>transform</code>.</li>
      <li>Separa lógica de animación y estilo: CSS para estilo, JS para movimiento y control.</li>
      <li>Considera rendimiento y pausas si el usuario cambia de pestaña (<code>visibilitychange</code>).</li>
      <li>Usa funciones de easing para movimientos más naturales.</li>
    </ul>

    <pre><code>// JS: ejemplo de optimización
document.addEventListener('visibilitychange', () => {
  if(document.hidden) cancelAnimationFrame(animID);
  else animar();
});</code></pre>
  </div>

  <div class="bloque-concepto">
    <h3>HTML de ejemplo</h3>
    <p>
      Un contenedor simple para animaciones JS:
    </p>

    <pre><code>&lt;div class="caja"&gt;&lt;/div&gt;
&lt;button id="boton"&gt;Mover caja&lt;/button&gt;
&lt;div class="circulo"&gt;&lt;/div&gt;</code></pre>
  </div>

</div>

  `,
  librerias: `
      <h2>Animaciones con Librerías Externas</h2>
        <p>
        Las librerías de animación como <strong>Animate.css</strong>, <strong>GSAP</strong> y <strong>Anime.js</strong> facilitan crear animaciones complejas sin escribir todo desde cero en CSS o JavaScript.
        </p>
<div class="bloque-concepto">
  <h4>Animate.css</h4>
  <p>
    Animate.css es una librería basada en clases CSS que permite agregar animaciones predefinidas de manera muy rápida. Ideal para efectos visuales llamativos.
  </p>

  <pre><code>&lt;!-- Incluir Animate.css en tu HTML --&gt;
&lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/&gt;

&lt;!-- HTML de ejemplo --&gt;
&lt;div class="animate__animated animate__bounce"&gt;¡Hola Mundo!&lt;/div&gt;</code></pre>

  <p><em>Sintaxis básica y propiedades:</em></p>
  <ul>
    <li><code>animate__animated</code>: activa la animación.</li>
    <li><code>animate__bounce</code>, <code>animate__fadeIn</code>, <code>animate__zoomIn</code>, etc.: el tipo de animación.</li>
    <li><code>animate__delay-2s</code>: retrasa la animación (2 segundos).</li>
    <li><code>animate__repeat-3</code>: repite la animación 3 veces.</li>
    <li>Se puede combinar con clases de tu propio CSS para personalizar duración o estilo.</li>
  </ul>

  <h4>GSAP (GreenSock Animation Platform)</h4>
  <p>
    GSAP es una librería potente para animaciones en JavaScript. Permite control total sobre duración, secuencias, repeticiones y easing (aceleración de la animación).
  </p>

  <pre><code>&lt;!-- Incluir GSAP --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"&gt;&lt;/script&gt;

&lt;div id="caja" style="width:100px; height:100px; background:#ff4081;"&gt;&lt;/div&gt;

&lt;script&gt;
  // Mueve la caja 300px a la derecha en 2 segundos y rota 360°
  gsap.to("#caja", {
    duration: 2,    // duración de la animación en segundos
    x: 300,         // mover en el eje X
    rotation: 360,  // rotación en grados
    ease: "power2.inOut", // tipo de easing (aceleración)
    repeat: 1,      // repite 1 vez
    yoyo: true      // rebote hacia atrás
  });
&lt;/script&gt;</code></pre>

  <p><em>Propiedades importantes de GSAP:</em></p>
  <ul>
    <li><code>duration</code>: duración de la animación.</li>
    <li><code>x, y</code>: posición en píxeles en los ejes horizontal y vertical.</li>
    <li><code>rotation</code>: rotación del elemento en grados.</li>
    <li><code>scale</code>: escalado del elemento.</li>
    <li><code>opacity</code>: transparencia.</li>
    <li><code>ease</code>: control de aceleración (<code>linear</code>, <code>power1.inOut</code>, etc.).</li>
    <li><code>repeat</code>: cuántas veces se repite.</li>
    <li><code>yoyo</code>: si la animación se invierte al final.</li>
  </ul>

  <h4>Anime.js</h4>
  <p>
    Anime.js es otra librería de JavaScript ligera y flexible que permite animar CSS, SVG, atributos de DOM y JavaScript de forma sincronizada.
  </p>

  <pre><code>&lt;!-- Incluir Anime.js --&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"&gt;&lt;/script&gt;

&lt;div id="cuadro" style="width:100px; height:100px; background:#00bcd4;"&gt;&lt;/div&gt;

&lt;script&gt;
  anime({
    targets: '#cuadro',       // elemento(s) a animar
    translateX: 250,           // mover en X
    rotate: '1turn',           // rotar 360 grados
    backgroundColor: '#ff4081',// cambiar color
    duration: 2000,            // duración en ms
    easing: 'easeInOutQuad',   // tipo de easing
    loop: true                 // repetir infinitamente
  });
&lt;/script&gt;</code></pre>

  <p><em>Propiedades importantes de Anime.js:</em></p>
  <ul>
    <li><code>targets</code>: selector CSS o elementos DOM.</li>
    <li><code>translateX / translateY</code>: posición en píxeles.</li>
    <li><code>rotate</code>: rotación, puede ser en grados o en <code>'1turn'</code>.</li>
    <li><code>scale</code>: escalado del elemento.</li>
    <li><code>opacity</code>: transparencia.</li>
    <li><code>backgroundColor</code>: animación de colores.</li>
    <li><code>duration</code>: duración en milisegundos.</li>
    <li><code>easing</code>: aceleración y desaceleración de la animación.</li>
    <li><code>loop</code>: repetir animación, puede ser <code>true</code> o un número.</li>
  </ul>

  <p>
    Con estas librerías puedes crear animaciones profesionales y complejas sin preocuparte de todos los cálculos manuales.  
    Combinarlas con CSS y JavaScript puro te da flexibilidad total.
  </p>
</div>
  `,
  OtrasCosas: `
    <h2>Otras cosas</h2>
<div class="bloque-concepto">
  <h3>Columnas de Texto</h3>
  <p>
    Las columnas permiten organizar el texto en varias secciones, facilitando la lectura.  
    Aquí puedes ver un ejemplo de texto en una sola columna versus múltiples columnas:
  </p>

  <div style="display:flex; gap:20px; margin-top:1rem;">

    <div style="border:1px solid #ccc; padding:10px; width:45%;">
      <h4>Una sola columna</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur metus a dolor facilisis, sed congue arcu fermentum. Donec vitae sapien non libero venenatis facilisis. Phasellus euismod sapien in sem ullamcorper.</p>
    </div>

    <div style="border:1px solid #ccc; padding:10px; width:45%; column-count:3; column-gap:15px;">
      <h4>Múltiples columnas</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur metus a dolor facilisis, sed congue arcu fermentum. Donec vitae sapien non libero venenatis facilisis. Phasellus euismod sapien in sem ullamcorper.</p>
    </div>
  </div>

  <p style="margin-top:1rem;"><strong>Explicación del código:</strong></p>
  <ul>
    <li><code>column-count: 3;</code> → divide el contenido en 3 columnas.</li>
    <li><code>column-gap: 15px;</code> → espacio entre cada columna.</li>
    <li>Se puede combinar con <code>border</code>, <code>padding</code> y otros estilos para mejorar la presentación.</li>
    <li>Ideal para artículos largos, listas o contenido que se quiera organizar visualmente.</li>
  </ul>
</div>

<div class="bloque-concepto">
  <h3>SVG vs Imagen Raster</h3>
  <p>
    Los SVG son gráficos vectoriales escalables, mientras que las imágenes como PNG o JPG son rasterizadas y pierden calidad al aumentar su tamaño.
  </p>

  <div style="display:flex; gap:20px; margin-top:1rem; align-items:center;">

    <div style="width:45%; text-align:center;">
      <h4>SVG (Vector) escalado x3</h4>
      <svg width="450" height="450">
        <circle cx="225" cy="225" r="180" fill="#7c4dff" stroke="#000" stroke-width="6"></circle>
        <text x="225" y="240" font-size="60" text-anchor="middle" fill="#fff">SVG</text>
      </svg>
      <p>Se escala sin perder calidad</p>
    </div>

    <div style="width:45%; text-align:center;">
      <h4>PNG (Raster) escalado x3</h4>
      <img src="https://images.unsplash.com/photo-1660926655155-8b1f8f9079f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" width="450" alt="Raster">
      <p>Se pixelará y pierde nitidez al aumentar</p>
    </div>
  </div>

  <p style="margin-top:1rem;"><strong>Explicación del código:</strong></p>
  <ul>
    <li><code>&lt;svg width="450" height="450"&gt;</code> → permite escalar el gráfico vectorial sin pérdida de calidad.</li>
    <li><code>&lt;circle&gt;</code> y <code>&lt;text&gt;</code> son elementos internos del SVG que mantienen sus proporciones.</li>
    <li><code>&lt;img src="...png"&gt;</code> → al aumentar el tamaño más allá del original, se nota pixelación.</li>
    <li>Demuestra por qué los SVG son recomendados para logotipos, iconos y gráficos escalables.</li>
  </ul>
</div>
  `
};

document.getElementById("tema-css").innerHTML = temas.css;
document.getElementById("tema-js").innerHTML = temas.js;
document.getElementById("tema-librerias").innerHTML = temas.librerias;
document.getElementById("tema-OtrasCosas").innerHTML = temas.OtrasCosas;

const inner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
let index = 0;

document.querySelector(".next").addEventListener("click", () => cambiarSlide(1));
document.querySelector(".prev").addEventListener("click", () => cambiarSlide(-1));

function cambiarSlide(dir) {
  index = (index + dir + items.length) % items.length;
  inner.style.transform = `translateX(-${index * 100}%)`;
}

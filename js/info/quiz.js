const preguntas = [
  {
    texto: "¿Cuál de las siguientes propiedades de CSS se usa para crear animaciones?",
    opciones: ["@keyframes", "border-radius", "overflow", "transition-duration"],
    correcta: "@keyframes"
  },
  {
    texto: "¿Qué librería JavaScript es famosa por crear animaciones fluidas y profesionales?",
    opciones: ["GSAP", "jQuery", "Bootstrap", "Three.js"],
    correcta: "GSAP"
  },
  {
    texto: "¿Qué hace la librería Animate.css?",
    opciones: [
      "Agrega animaciones predefinidas a los elementos HTML",
      "Permite crear juegos 3D en el navegador",
      "Analiza el rendimiento del sitio web",
      "Dibuja figuras SVG"
    ],
    correcta: "Agrega animaciones predefinidas a los elementos HTML"
  },
  {
    texto: "¿Cuál es una ventaja de usar animaciones con JavaScript frente a CSS?",
    opciones: [
      "Permiten control dinámico y sincronización avanzada",
      "Son siempre más rápidas",
      "No necesitan código",
      "No usan CPU"
    ],
    correcta: "Permiten control dinámico y sincronización avanzada"
  },
  {
    texto: "¿Qué propiedad de CSS controla la velocidad de una animación?",
    opciones: ["animation-duration", "animation-delay", "animation-name", "animation-play-state"],
    correcta: "animation-duration"
  },
  {
    texto: "¿Cuál de los siguientes formatos es ideal para animaciones ligeras en la web?",
    opciones: ["WEBP", "PNG", "GIF", "JPEG"],
    correcta: "WEBP"
  },
  {
    texto: "¿Qué propiedad se usa para repetir una animación indefinidamente?",
    opciones: ["animation-iteration-count: infinite;", "animation-loop: always;", "animation-repeat: forever;", "animation-count: loop;"],
    correcta: "animation-iteration-count: infinite;"
  },
  {
    texto: "¿Qué significa 'easing' en las animaciones CSS?",
    opciones: [
      "El control de aceleración o desaceleración del movimiento",
      "La rotación del objeto animado",
      "El color del fondo de la animación",
      "El tipo de sombra aplicada"
    ],
    correcta: "El control de aceleración o desaceleración del movimiento"
  },
  {
    texto: "¿Qué herramienta es útil para crear animaciones cuadro por cuadro?",
    opciones: ["Adobe Animate", "VS Code", "Figma", "Notepad++"],
    correcta: "Adobe Animate"
  },
  
];

let indice = 0;
let aciertos = 0;
let errores = 0;

const preguntaEl = document.getElementById("pregunta");
const resultadoEl = document.getElementById("resultado");
const siguienteBtn = document.getElementById("siguiente");

function mostrarPregunta() {
  const actual = preguntas[indice];
  let html = `<h3>${actual.texto}</h3>`;
  actual.opciones.forEach(opcion => {
    html += `<button class="boton" onclick="verificar('${opcion}')">${opcion}</button>`;
  });
  preguntaEl.innerHTML = html;
  resultadoEl.textContent = "";
  siguienteBtn.style.display = "none";
}

function verificar(opcion) {
  const correcta = preguntas[indice].correcta;
  if (opcion === correcta) {
    resultadoEl.innerHTML = "✅ ¡Correcto!";
    resultadoEl.style.color = "limegreen";
    aciertos++;
  } else {
    resultadoEl.innerHTML = `❌ Incorrecto. La respuesta era: <strong>${correcta}</strong>`;
    resultadoEl.style.color = "red";
    errores++;
  }
  siguienteBtn.style.display = "block";
}

siguienteBtn.addEventListener("click", () => {
  indice++;
  if (indice < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultadosFinales();
  }
});

function mostrarResultadosFinales() {
  preguntaEl.innerHTML = `
    <h3>🎉 ¡Has completado el quiz sobre animación web!</h3>
    <p>✅ Respuestas correctas: <strong>${aciertos}</strong></p>
    <p>❌ Respuestas incorrectas: <strong>${errores}</strong></p>
    <p>Total de preguntas: ${preguntas.length}</p>
  `;
  resultadoEl.textContent = "";
  siguienteBtn.style.display = "none";
}

mostrarPregunta();

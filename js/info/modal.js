function mostrarCodigo(codigo, tipo) {
  document.getElementById("codigo-demo").textContent = codigo;
  const modal = document.getElementById("modalCodigo");
  const explicacion = document.getElementById("explicacion-demo");
  explicacion.innerHTML = "";

  if (tipo === "css") {
    explicacion.innerHTML = `
      <h4>¿Qué hace este código?</h4>
      <p>La clase <code>.bola-css</code> crea una bola con un <code>gradiente</code> 
      y una animación definida con <code>@keyframes</code>.</p>
      <ul>
        <li><code>animation: giroCSS 2s linear infinite;</code> → Aplica la animación de rotación sin fin.</li>
        <li><code>@keyframes</code> define el movimiento del elemento entre <em>0° y 360°</em>.</li>
      </ul>
    `;
  } else if (tipo === "js") {
    explicacion.innerHTML = `
      <h4>¿Qué hace este código?</h4>
      <p>Se usa <code>requestAnimationFrame()</code> para mover un cuadro de forma suave.</p>
      <ul>
        <li><code>pos</code> controla la posición horizontal.</li>
        <li><code>cuadro.style.left</code> cambia la posición en píxeles.</li>
        <li><code>requestAnimationFrame()</code> ejecuta el 
        movimiento en cada frame (más eficiente que <code>setInterval</code>).</li>
      </ul>
    `;
  } else if (tipo === "animate") {
    explicacion.innerHTML = `
      <h4>Animate.css</h4>
      <p>Una librería de clases CSS listas para usar.</p>
      <ul>
        <li><code>animate__animated</code> → activa la animación.</li>
        <li><code>animate__bounce</code> → tipo de animación.</li>
        <li>Solo necesitas enlazar el CSS de Animate.css desde un CDN.</li>
      </ul>
    `;
  } else if (tipo === "gsap") {
    explicacion.innerHTML = `
      <h4>GSAP</h4>
      <p><strong>GSAP (GreenSock Animation Platform)</strong> es una potente librería de JavaScript para animaciones.</p>
      <ul>
        <li><code>x</code> → movimiento horizontal.</li>
        <li><code>rotation</code> → rotación del elemento.</li>
        <li><code>repeat: -1</code> → repite infinitamente.</li>
        <li><code>yoyo: true</code> → hace que el objeto vuelva a su posición original.</li>
      </ul>
    `;
  }

  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modalCodigo").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modalCodigo");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
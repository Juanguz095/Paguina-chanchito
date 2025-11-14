function mostrarInfo(tipo) {
  const info = document.getElementById("info-principio");
  info.innerHTML = "";
  const demo = document.createElement("div");
  demo.id = "demo-area";
  demo.className = "demostracion";
  info.appendChild(demo);

  const descripcion = document.createElement("p");
  switch (tipo) {
    case "css":
      descripcion.innerHTML = "<strong>Animación en CSS:</strong> usa propiedades como <code>@keyframes</code> y <code>animation</code>.";
      info.prepend(descripcion);
      mostrarDemo("css");
      break;
    case "javascript":
      descripcion.innerHTML = "<strong>Animación con JavaScript:</strong> manipula el DOM y usa <code>requestAnimationFrame()</code>.";
      info.prepend(descripcion);
      mostrarDemo("js");
      break;
    case "animate":
      descripcion.innerHTML = "<strong>Animate.css:</strong> librería con clases prefabricadas de animación.";
      info.prepend(descripcion);
      mostrarDemo("animate");
      break;
    case "gsap":
      descripcion.innerHTML = "<strong>GSAP:</strong> librería potente para animaciones fluidas y sincronizadas.";
      info.prepend(descripcion);
      mostrarDemo("gsap");
      break;
  }
}

function limpiarDemo() {
  const area = document.getElementById("demo-area");
  if (area) area.innerHTML = "";
}

function mostrarDemo(tipo) {
  const area = document.getElementById("demo-area");
  limpiarDemo();

  const infoExtra = document.createElement("div");
  infoExtra.className = "info-extra";
  infoExtra.style.background = "#fff8f5";
  infoExtra.style.padding = "1rem";
  infoExtra.style.borderRadius = "10px";
  infoExtra.style.marginBottom = "1rem";
  infoExtra.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  infoExtra.style.textAlign = "center";
  infoExtra.textContent = "Clic en el botón para ver cómo se construye esta animación paso a paso.";
  area.appendChild(infoExtra);

  const contenedorAnimacion = document.createElement("div");
  contenedorAnimacion.style.display = "flex";
  contenedorAnimacion.style.flexDirection = "column";
  contenedorAnimacion.style.alignItems = "center";
  contenedorAnimacion.style.gap = "1rem";
  area.appendChild(contenedorAnimacion);

  const boton = document.createElement("button");
  boton.className = "boton";
  boton.textContent = "Ver código y explicación";

  if (tipo === "css") {
    const bola = document.createElement("div");
    bola.className = "bola-css";
    contenedorAnimacion.appendChild(bola);
    contenedorAnimacion.appendChild(boton);

    infoExtra.textContent = "Esta animación usa @keyframes para rotar una bola con gradiente.";

    boton.onclick = () => {
      mostrarCodigo(`
.bola-css {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff4081, ##000000);
  animation: giroCSS 2s linear infinite;
}

@keyframes giroCSS {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`, tipo);
    };
  }

  else if (tipo === "js") {
    const cuadro = document.createElement("div");
    cuadro.style.width = "60px";
    cuadro.style.height = "60px";
    cuadro.style.background = "#00bcd4";
    cuadro.style.position = "relative";
    cuadro.style.left = "0px";
    contenedorAnimacion.appendChild(cuadro);
    contenedorAnimacion.appendChild(boton);

    let pos = 0;
    function mover() {
      pos += 2;
      if (pos > 250) pos = 0;
      cuadro.style.left = pos + "px";
      requestAnimationFrame(mover);
    }
    mover();

    infoExtra.textContent = "Esta animación se controla con JavaScript usando requestAnimationFrame.";

    boton.onclick = () => {
      mostrarCodigo(`let pos = 0;
function mover() {
  pos += 2;
  if (pos > 250) pos = 0;
  cuadro.style.left = pos + "px";
  requestAnimationFrame(mover);
}
mover();`, tipo);
    };
  }

  else if (tipo === "animate") {
    const texto = document.createElement("h2");
    texto.textContent = "¡Hola Animate.css!";
    texto.className = "animate__animated animate__bounce";
    contenedorAnimacion.appendChild(texto);
    contenedorAnimacion.appendChild(boton);

    infoExtra.textContent = "Animate.css aplica clases listas como animate__bounce para animar texto.";

    boton.onclick = () => {
      mostrarCodigo(`<h2 class="animate__animated animate__bounce">¡Hola Animate.css!</h2>`, tipo);
    };
  }

  else if (tipo === "gsap") {
    const caja = document.createElement("div");
    caja.style.width = "80px";
    caja.style.height = "80px";
    caja.style.background = "#ff9800";
    caja.style.margin = "auto";
    contenedorAnimacion.appendChild(caja);
    contenedorAnimacion.appendChild(boton);

    if (typeof gsap === "undefined") {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      script.onload = () => {
        gsap.to(caja, { x: 200, rotation: 360, duration: 2, repeat: -1, yoyo: true });
      };
      document.body.appendChild(script);
    } else {
      gsap.to(caja, { x: 200, rotation: 360, duration: 2, repeat: -1, yoyo: true });
    }

    infoExtra.textContent = "GSAP permite animar propiedades con control total del tiempo y repetición.";

    boton.onclick = () => {
      mostrarCodigo(`gsap.to(caja, {
  x: 200,
  rotation: 360,
  duration: 2,
  repeat: -1,
  yoyo: true
});`, tipo);
    };
  }
}
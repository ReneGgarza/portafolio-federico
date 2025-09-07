function mostrarDetalles(app) {
  const detalles = {
    profitt: "PROFITT es un simulador comercial que permite modelar escenarios de venta y comportamiento del consumidor.",
    soundmaster: "SOUND MASTERAI automatiza la masterización de archivos de audio con algoritmos de mejora acústica.",
    // Agrega los demás proyectos aquí
  };

  document.getElementById("detalles").innerHTML = `
    <h3>Detalles del Proyecto</h3>
    <p>${detalles[app]}</p>
  `;
}

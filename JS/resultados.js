function pintarResultado() {
    var puntaje = localStorage.getItem("SCORE");
    var puntaje_contenedor = document.getElementById("SCORE");
    puntaje_contenedor.innerHTML = puntaje
  }
  pintarResultado();
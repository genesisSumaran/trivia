function pintarNombre() {
    var jugador = document.getElementById('jugador');
    
    jugador.innerHTML = localStorage.getItem("name"); 
}

pintarNombre();
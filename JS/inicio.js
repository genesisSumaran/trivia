function guardar_nombre() {
  var nombre = document.getElementById("nombre").value;
  localStorage.setItem("name", nombre);

}
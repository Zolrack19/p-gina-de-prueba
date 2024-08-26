let titulo = document.getElementById("titulo")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")

function mostrar() {
    titulo.textContent = "Hola " + nombre.value +" "+ " "+ apellido.value + " un gusto!!"
    nombre.value = ""
    apellido.value = ""
}

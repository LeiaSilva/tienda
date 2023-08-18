//Variables del formularios
const nombreApellido = document.getElementById("nombreApellido");
const email = document.getElementById("email");
const number= document.getElementById("number");
const calle= document.getElementById("calle");
const nCalle= document.getElementById("nCalle");
const localidad = document.getElementById("localidad");
const motomensajeria = document.getElementById("motomensajeria");
const sucursal = document.getElementById("sucursal");
const tarjetas = document.getElementById("tarjetas");
const mp = document.getElementById("mp");
const form = document.getElementById("form");
const listaInputs = document.querySelectorAll("#containerInputs");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(nombreApellido.value.length < 1 || nombreApellido.value.trim() == ""){
        console.error("error");
    }
})
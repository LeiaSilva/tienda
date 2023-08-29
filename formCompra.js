const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {
	dirreccion: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre , e.target, "nombreApellido")
        break;
        case "correo":
        console.log("funciona")
        break;
        case "telefono":
        console.log("funciona")
        break;
        case "localidad":
        console.log("funciona")
        break;
        case "direccion":
        console.log("funciona")
        break;
        case "envio":
        console.log("funciona")
        break;
        case "pago":
        console.log("funciona")
        break;
    }
}

const validarCampo = (expresion, input , campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector("#grupo__nombreApellido ion-icon").setAttribute("name", "checkmark-circle-outline");
        document.querySelector("#grupo__nombreApellido .formulario__input-error").classList.remove("formulario__input-error-activo");
       
    }else{
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
         document.querySelector("#grupo__nombreApellido ion-icon").setAttribute("name", "close-circle-outline");
        document.querySelector("#grupo__nombreApellido .formulario__input-error").classList.add("formulario__input-error-activo");
    }
}



inputs.forEach((input)=> {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur" , validarFormulario);
})








formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

})
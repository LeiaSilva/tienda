document.addEventListener("DOMContentLoaded", () => {

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {
	direccion: /^[a-zA-Z0-9áéíóúÁÉÍÓÚ\s]+$/, // letras, numeros, acentos y espacios
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
    nombreApellido : false ,
    correo: false ,
    telefono: false ,
    localidad: false ,
    direccion : false ,
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre , e.target, "nombreApellido");
        break;
        case "correo":
            validarCampo(expresiones.correo , e.target , "correo");
        break;
        case "telefono":
            validarCampo(expresiones.telefono , e.target , "telefono");
        break;
        case "localidad":
            validarCampo(expresiones.nombre , e.target , "localidad");
        break;
        case "direccion":
            validarCampo(expresiones.direccion , e.target, "direccion");
        break;
    }
}

const validarCampo = (expresion, input , campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} ion-icon`).setAttribute("name", "checkmark-circle-outline");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true ; 
       
    }else{
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
         document.querySelector(`#grupo__${campo} ion-icon`).setAttribute("name", "close-circle-outline");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo] = false ; 
    }
}

inputs.forEach((input)=> {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur" , validarFormulario);
})




formulario.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const envio = document.getElementById("envio");
    const pago = document.getElementById("pago");
    const validarCampos = () => {
        return new Promise((resolve) => {
            if (campos.nombreApellido && campos.correo && campos.telefono && campos.localidad && campos.direccion ) {
                resolve(true); //campo valido
            } else {
                resolve(false); //campo invalido
            }
        });
    };
    const camposValidos = await validarCampos();
    console.log(camposValidos)

    if (camposValidos) {
        Swal.fire(
            '¡Éxito!',
            'Tu formulario se ha enviado correctamente.',
            'success'
        );        
        formulario.reset();
    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
});  
});
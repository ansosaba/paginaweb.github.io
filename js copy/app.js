/**
 *  Declaración de variables del formulario
 */
const formulario= document.getElementById("formulario");

const userName= document.getElementById("userName");
const userEmail= document.getElementById("userEmail");
const mensaje = document.getElementById("mensaje");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    ///console.log(mensaje.value.lenght);

    if (!userName.value.trim() || !regUserName.test(userName.value)){
        alert('Nombre inválido');
        prompt('Nombre inválido');
    }
    if (!userEmail.value.trim() || !regUserEmail.test(userEmail.value)){
        alert('Email inválido');
        prompt('Email inválido');
    }
    if (mensaje.value.lenght=0 ) {
        alert("No se permite ningún campo vacío");
    }
    console.log("Los datos fueron enviados");
        alert("Los datos fueron enviados");

});
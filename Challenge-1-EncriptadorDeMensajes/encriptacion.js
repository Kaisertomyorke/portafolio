let entradaUsuario = '';

//Esta es la funcion de enctiptacion del mensaje.
function encriptar(){
    //tomamos el entrada del usario por medio de un input HTML, usando el DOM
    entradaUsuario = document.getElementById('entrada_usuario').value;
    let entradaValida = validaEntrada(entradaUsuario);

    if (entradaValida){
    //Dividimos la frase del usuario en palabras divididas por un espacio con el metodo split()
    let palabras = entradaUsuario.split(' ');

    let fraseEnctripada = [];

    for (let i = 0; i < palabras.length; i++ ){
       let letras = palabras[i].split('');
       let letrasEncriptadas = [];
       for (let x = 0; x < letras.length; x++){
        if (letras[x] == "a"){
            letrasEncriptadas.push("ai");
        }else if(letras[x] == "e"){
            letrasEncriptadas.push("enter");
        }else if(letras[x] == "i"){
            letrasEncriptadas.push("imes");
        }else if(letras[x] == "o"){
            letrasEncriptadas.push("ober");
        }else if(letras[x] == "u"){
            letrasEncriptadas.push("ufat");
        }else{
            letrasEncriptadas.push(letras[x]);
        }
       }
       let palabraEncriptada = letrasEncriptadas.join('');
       fraseEnctripada.push(palabraEncriptada)
    }

let fraseEnctripadaAnidada = fraseEnctripada.join(' ');

console.log(fraseEnctripadaAnidada);
asignarTexto('#resultado',`${fraseEnctripadaAnidada}`);
limpiarEntrada()
}else{
    asignarTexto('#resultado',"Por favor, introduce un mensaje en minuculas y sin caracteres especiales(acentos, numeros o guiones)");

}
mostrarMensaje()
} 

function desencriptar(){
    entradaUsuario = document.getElementById('entrada_usuario').value;
    let palabras = entradaUsuario.split(' ');
    let fraseDesencriptada = [];

    for (let i = 0; i < palabras.length; i++ ){
        let palabraDesencriptada = palabras[i]
        .replace(/ai/g, 'a')
        .replace(/enter/g,'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

        fraseDesencriptada.push(palabraDesencriptada);
    }
    let fraseDesencriptadaAnidada = fraseDesencriptada.join(' ');
    asignarTexto('#resultado',`${fraseDesencriptadaAnidada}`);
    limpiarEntrada()
    mostrarMensaje()


}

function asignarTexto(elemento, texto){
    let elementoHhtml = document.querySelector(elemento);
    elementoHhtml.textContent = texto;
}

function limpiarEntrada(){
    entradaUsuario = document.getElementById('entrada_usuario').value = '';

}

function validaEntrada(entrada){
    return /^[a-z\s]+$/i.test(entrada);
}

function copiarResultadoAlPortapapeles() {
    let resultadoElemento = document.querySelector('#resultado');

    // Crear un elemento de texto temporal
    let elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = resultadoElemento.textContent;

    // Agregar el elemento al DOM
    document.body.appendChild(elementoTemporal);

    // Seleccionar y copiar el contenido del elemento temporal
    elementoTemporal.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal
    document.body.removeChild(elementoTemporal);

    // Notificar al usuario que se ha copiado al portapapeles
    alert('El resultado se ha copiado al portapapeles.');
}

function mostrarMensaje(){
    let mensajePrincipal = document.getElementById("sinmensajeContainer");
    let resultadoFinal = document.getElementById("conMensajeContainer");
    mensajePrincipal.style.display = "none";
    resultadoFinal.style.display = "block";
    
}



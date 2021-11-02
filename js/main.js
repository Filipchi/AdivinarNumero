// ---------------------aleatorio---------------------
function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (1 + max - min) + min);
}
numReal = aleatorio(1, 10);
console.log(numReal);
// ---------------------------------------------------

var caja = document.getElementsByClassName('btn');
var parr = document.getElementById('parrafo');


for (let i = 0; i < caja.length; i++) {
    caja[i].addEventListener('click', function () {
        texto = caja[i].value;
        console.log(texto);
        parr.innerText = texto;
        
        caja[i].classList.add('pulso');
        caja[i].disabled = true;

        if (numReal > caja[i].value) {
            console.log('El número seleccionado es menor al esperado');
        } else if (numReal < caja[i].value) {
            console.log('El número seleccionado es mayor al esperado');
        } else {
            console.log('Felicidades diste con el número correcto');
        }
    })

}

// Cambiar el texto de intentos restantes
// var intentos = "Te quedan x intentos";
// document.getElementById("intentos").innerHTML = intentos

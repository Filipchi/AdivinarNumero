// ---------------------aleatorio---------------------
function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (1 + max - min) + min);
}
numReal = aleatorio(1, 30);
console.log(numReal);
// ---------------------------------------------------

var intentos = 5;
var caja = document.getElementsByClassName('btn');
var parr = document.getElementById('parrafo');
var txtIntento = document.getElementById('txt_intento');
var reiniciar = document.getElementById('reiniciar');


for (let i = 0; i < caja.length; i++) {
    caja[i].addEventListener('click', function () {
        texto = caja[i].value;
        reiniciar.style.display = 'block';
        if (parr != null) {
            parr.style.display = 'block';
        }

        if (numReal > caja[i].value) {
            intentos -= 1;
            parr.innerText = "Elige un número MAYOR!";
            txtIntento.innerText = "Te quedan "+ intentos +" intentos para adivinar el número";
            for (let j = 0; j < caja[i].value; j++) {
                caja[j].classList.add('perdio');
                caja[j].disabled = true;
            }
        } else if (numReal < caja[i].value) {
            intentos -= 1;
            parr.innerText = "Elige un número MENOR!";
            txtIntento.innerText = "Te quedan "+ intentos +" intentos para adivinar el número";
            for (let j = caja[i].value - 1; j < 30; j++) {
                caja[j].classList.add('perdio');
                caja[j].disabled = true;
            }
        } else {
            intentos -= 1;
            txtIntento.innerText = "Felicidades!! adivinaste en "+ (5 - intentos) +" intentos";
            caja[i].classList.add('gano');

            for (let k = 0; k < caja.length; k++) {
                caja[k].disabled = true;
            }
            alert("Juego Terminado: Ganaste! \n\nNo. de intentos:   "+ (5 - intentos) );
            parr.innerText = "Número Correcto: " + numReal;
            parr.style.background = "rgb(0, 179, 30)";
        }

        if (intentos == 0) {
            for (let k = 0; k < caja.length; k++) {
                caja[k].disabled = true;
            }

            if (numReal != caja[i].value) {
                txtIntento.innerText = "Lo sentimos, perdiste los "+ (5 - intentos) +" intentos";
                alert("Juego Terminado: Perdiste \n\nNo. de intentos:   "+ (5 - intentos) );
                parr.innerText = "Número Correcto: " + numReal;
                parr.style.background = "rgb(0, 179, 30)";
            }
        }
    })
}

reiniciar.addEventListener('click', function () {
    for (let k = 0; k < caja.length; k++) {
        caja[k].disabled = false;
        caja[k].classList.remove('gano');
        caja[k].classList.remove('perdio');
    }
    intentos = 5;
    txtIntento.innerText = "Solo tienes "+ intentos +" intentos para adivinar el número";
    numReal = aleatorio(1, 30);
    console.log(numReal);
    parr.style.display = 'none';
    parr.innerText = "";
    reiniciar.style.display = 'none';
})

// Cambiar el texto de intentos restantes
// var intentos = "Te quedan x intentos";
// document.getElementById("intentos").innerHTML = intentos

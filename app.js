var secretNum = 0;
var tryNum = 0;
var numberList = [];
var maxNumber = 10;

function asignacionDeTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function numGenerator() {
    let generatedNumber = Math.floor((Math.random()*maxNumber))+1;
    //si el numero generado está en la lista
    if (numberList.length == maxNumber) {
        finalParameters();
    } else {
        if (numberList.includes(generatedNumber)) {
            return numGenerator();
        } else {
            numberList.push(generatedNumber);
            return generatedNumber;
        }
    }
}


function initialParameters() {
    asignacionDeTexto('h1', "Juego del número secreto");
    asignacionDeTexto('p', `Ingrese un número del 1 al ${maxNumber}:`);
    cleanbox();
    secretNum = numGenerator();
    tryNum = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('tryButton').removeAttribute('disabled');
}
function finalParameters() {
    asignacionDeTexto('h1', "¡Lo lograste!");
    asignacionDeTexto('p', "Lograste adivinar todos lo número posibles"); 
}


function cleanbox() {
    document.getElementById ('user_value').value = "";
}

function verifyUserTry() {
    let userNum = parseInt(document.getElementById('user_value').value);
    console.log(tryNum);
    console.log(numberList);
    if (userNum === secretNum) {
        //el usuario acertó
        asignacionDeTexto('p', `¡Acertaste el número en ${tryNum} ${tryNum === 1 ? "intento" : "intentos"}!`);
        asignacionDeTexto('h1', "¡Felicidades!");
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('tryButton').setAttribute('disabled', true);
    } else {
        //el usuario no acertó 
        if (userNum > secretNum) {
            asignacionDeTexto('p', "El número secreto es menor");
        } else { asignacionDeTexto('p', "El número secreto es mayor");
            }
        tryNum++;
        cleanbox();
    }
    return;
}

function tryAgain() {
   initialParameters();
}

initialParameters();
const display = document.getElementById('display');
const displayLetras = document.getElementById('displayLetras');

let texto = '';
let arrayNumeros = [];

// Queremos imprimir todos los números pares del 1 al 20
for (let i = 2; i < 20; i = i + 2) {
    texto += i + " ";
}

for (let i = 0; i < 20; i = i + 2) {
    arrayNumeros[i] = i;
}

display.innerHTML = texto;
console.log(arrayNumeros)

const letras = [
    "a",
    "e",
    "i",
    "o",
    "u"
]

texto = '';

for (let i = 0; i < letras.length; i++) {
    texto += letras[i] + " ";

}

displayLetras.innerHTML = letras.join(' ');


// LLenar un array con números pares
let pares = [];

for (let i = 1; i <= 10; i++) {
    pares[i - 1] = i * 2;

}

console.log(pares);
display.innerHTML = pares;


// Imprimir los múltiplos del 3 hasta el 100
texto = '';

for (let i = 3; i < 100; i = i + 3) {
    texto += i + ", "

}

display.innerHTML = texto;


// Lo mismo pero cuenta atrás desde el 100
texto = '';

for (let i = 99; i >= 3; i = i - 3) {

    texto += i + "<br>";
}

display.innerHTML = texto;
// display.innerHTML = pares.join('<br>');
// display.innerHTML = arrayNumeros; 
// Desafio 1
function compareTrue(Value1, Value2) {
    // seu código aqui
    if (Value1 && Value2 === true) {
        return true
    } else {
        return false
    }
}
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
    // seu código aqui
    let resultado = (base * height) / 2
    return resultado
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
    // seu código aqui
    let split = string.split(' ');
    return split
}
console.log(splitSentence('foguete'))

// Desafio 4
function concatName() {
    // seu código aqui
}

// Desafio 5
function footballPoints() {
    // seu código aqui
}

// Desafio 6
function highestCount() {
    // seu código aqui
}

// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

// Desafio 10
function techList() {
    // seu código aqui
}

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
    techList,
};
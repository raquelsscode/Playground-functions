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
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
    // seu código aqui
    let first = array[0];
    let ultimo = array[array.length - 1];
    return ultimo + ', ' + first
}
console.log(concatName(['captain', 'my', 'captain']))


// Desafio 5
function footballPoints(wins, ties) {
    // seu código aqui
    let win = 3
    let tie = 1
    let points = (wins * win) + (ties * tie);
    return points
}
console.log(footballPoints(0, 0));

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

// module.exports = {
//     calcArea,
//     catAndMouse,
//     compareTrue,
//     concatName,
//     decode,
//     encode,
//     fizzBuzz,
//     footballPoints,
//     highestCount,
//     splitSentence,
//     techList,
// };
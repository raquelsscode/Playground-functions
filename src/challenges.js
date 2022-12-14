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
function highestCount(numbers) {
    // seu código aqui
    let highestnumber = numbers[0]
    let repeat = 0
    for (let index in numbers) {
        if (numbers[index] > highestnumber)
            highestnumber = numbers[index]
    }
    for (let indice in numbers) {
        if (highestnumber === numbers[indice]) {
            repeat += 1
        }
    }
    return repeat
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    let distancecat1 = cat1 - mouse
    let distancecat2 = cat2 - mouse
    distancecat1 = Math.abs(distancecat1)
    distancecat2 = Math.abs(distancecat2)

    if (distancecat1 && distancecat2 == mouse) {
        return "os gatos trombam e o rato foge"
    } else if (distancecat2 < distancecat1) {
        return 'cat2'
    } else if (distancecat1 < distancecat2) {
        return 'cat1'
    }
}
console.log(catAndMouse(10, 4, 22))

// Desafio 8
function fizzBuzz(numeros) {
    // seu código aqui
    let resultado = []
    for (let i = 0; i < numeros.length; i += 1) {
        if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
            resultado.push('fizzBuzz');
        } else if (numeros[i] % 3 === 0) {
            resultado.push('fizz');
        } else if (numeros[i] % 5 === 0) {
            resultado.push('buzz');
        } else {
            resultado.push('bug!');
        }
    }
    return resultado
}

console.log(fizzBuzz([9, 25]))

// Desafio 9
function encode(text) {
    // seu código aqui
    for (let index = 0; index <= text.length - 1; index += 1) {
        text = text.replace('a', 1);
        text = text.replace('e', 2);
        text = text.replace('i', 3);
        text = text.replace('o', 4);
        text = text.replace('u', 5);
    }

    return text;
}
console.log(encode('go Trybe!'))

function decode(textdecode) {
    // seu código aqui
    for (let index = 0; index <= textdecode.length - 1; index += 1) {
        textdecode = textdecode.replace(1, 'a');
        textdecode = textdecode.replace(2, 'e');
        textdecode = textdecode.replace(3, 'i');
        textdecode = textdecode.replace(4, 'o');
        textdecode = textdecode.replace(5, 'u');
    }

    return textdecode;
}
console.log(decode('g4 Tryb2!'))

// Desafio 10
function techList(tech, name) {
    // seu código aqui
    let tecnologias = tech.sort()
    if (tech.length === 0) {
        return 'Vazio!'
    } else
        return obj = [{
                tech: tecnologias[0],
                name: name
            },
            {
                tech: tecnologias[1],
                name: name
            },
            {
                tech: tecnologias[2],
                name: name
            },
            {
                tech: tecnologias[3],
                name: name
            },
            {
                tech: tecnologias[4],
                name: name
            },
        ];
}

console.log(techList([], 'Lucas'));



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
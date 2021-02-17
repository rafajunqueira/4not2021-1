// console.log('-------------------------------------')
// console.log('[           AULA 09-02-21           ]')
// console.log('-------------------------------------')

// const prompt = require('prompt')
// prompt.start()
// prompt.get(['Nome', 'Idade'], function (err, msg) {
//     console.log('   Nome    : ' + msg.Nome);
//     console.log('   Idade   : ' + msg.Idade);
// });


console.log('...')
console.log('-------------------------------------')
console.log('[           AULA 16-02-21           ]')
console.log('-------------------------------------')

let arrNum = [-2, -1, 0, 1, 2]
console.log('Nros iniciais : ')
console.log(arrNum)

console.log('Maior nro : ')
console.log(Math.min(...arrNum))
console.log('Menor nro : ')
console.log(Math.max(...arrNum))

let arrMoreNum = [-4, -3, ...arrNum, 3, 4]

console.log('Mais nros : ')
console.log(arrMoreNum)

//Função com argumento / parâmetro de resto
function add(...nums) {
    let sum = 0
    for (const n of nums) sum += n
    return sum
}
function multiply(...nums) {
    let sum = 1
    for (const n of nums) sum *= n
    return sum
}

function validadeOp(op) {
    if (op == '+')
        return 0
    if (op == '1')
        return 1
}

function calc(op, ...nums) {

    let sum = validadeOp(op)

    switch (op) {
        case '+':
            sum = add(...nums)
            break
        case '*':
            sum = multiply(...nums)
            break
        default:
            console.log('Erro!')
    }
    return sum
}

let newArr1 = [-2, -1, 0, 1, 2]
let newArr2 = [1, 2, 3]

console.log('SOMA   :   ZERO    :', calc('+', ...newArr1))
console.log('SOMA   :   SEIS    :', calc('+', ...newArr2))

console.log('MULT   :   ZERO    :', calc('*', ...newArr1))
console.log('MULT   :   SEIS    :', calc('*', ...newArr2))


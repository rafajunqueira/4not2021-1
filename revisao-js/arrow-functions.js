let n = 5


function quadradoFunction(n) {
    return n * n
}

//Arrow function com apenas um parâmetro
let quadradoArrowFunction = n => n * n

console.log(quadradoFunction(5), quadradoArrowFunction(5))

function potFunc(b, e) {
    return b ** e
}


//Mais de um argumento = precisa de parênteses
let potArrowFunc = (b, e) => b ** e

console.log(potFunc(2, 3), potArrowFunc(2, 3))


//Função sem argumentos

function lottery() {
    return Math.floor((Math.random() * 60 + 1))
}

console.log('15 Random Lottery Numbers [Function] : ')
console.log(lottery(), lottery(), lottery(), lottery(), lottery(), lottery(), lottery(), lottery(), lottery(), lottery(), lottery(), lottery(), lottery(), lottery(), lottery())


let lotteryArrowFunction = () => Math.floor((Math.random() * 60 + 1))

console.log('15 Random Lottery Numbers [Arrow Function] : ')
console.log(lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction(), lotteryArrowFunction())


let add = (...nums) => {
    let sum = 0
    for (const n of nums) sum += n
    return sum
}

let multiply = (...nums) => {
    let sum = 1
    for (const n of nums) sum *= n
    return sum
}
function calcularArea(base, altura, forma, casasDec = 2) {

    let res
    switch (forma) {
        case 'Q':
            res = base * altura
            break;
        case 'T':
            res = base * altura / 2
            break;
        case 'E':
            res = (base / 2) * (altura / 2) * Math.PI
            break;
        return res.toFixed(casasDec)
    }
}


console.log(calcularArea(20, 8, 'Q'))
console.log(calcularArea(7.5, 3, 'T'))
console.log(calcularArea(4.5, 4.5, 'E', 4))
console.log(calcularArea(30, 60))

// Caso seja necessário omitir um parâmetro predefinido que não
// seja o último, pode-se usar o valor undefined em seu lugar
console.log(calcularArea(30, 60, undefined, 3))

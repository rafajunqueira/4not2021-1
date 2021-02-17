export function addVet(arr) {
    let sum = 0
    for (const n of arr) sum += n
    return sum
}

export function squareArr(arr) {
    let tot = []
    for (const n of arr) tot.push(n ** 2)
    return tot
}

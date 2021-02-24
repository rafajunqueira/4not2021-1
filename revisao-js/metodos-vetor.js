const pets = [
    {
        name: 'Pet One',
        species: 'Dog',
        age: 5,
        sex: 'F',
        weight: 4.3
    },
    {
        name: 'Pet Two',
        species: 'Cat',
        age: 3,
        sex: 'M',
        weight: 2.3
    },
    {
        name: 'Pet Three',
        species: 'Turtle',
        age: 59,
        sex: 'M',
        weight: 25.3
    },
    {
        name: 'Pet Four',
        species: 'Rabbit',
        age: 5,
        sex: 'M',
        weight: 2.1
    },
    {
        name: 'Pet Five',
        species: 'Calopsita',
        age: 1,
        sex: 'F',
        weight: 0.93
    },
    {
        name: 'Pet Six',
        species: 'Cow',
        age: 7,
        sex: 'F',
        weight: 110.2
    },
    {
        name: 'Pet Seven',
        species: 'Cat',
        age: 7,
        sex: 'M',
        weight: 110.2
    }
]

console.log(pets)


pets.forEach(pet => {
    console.log(pet.name)
    console.log(pet.species)
    console.log(pet.age)
    console.log(pet.sex)
    console.log(pet.weight)
});

// METODO FIND()
// ENCONTRA A PRIMEIRA OCORRÊNCIA QUE CORRESPONDA AO CRITÉRIO INFORMADO
console.log()
console.log('-------------')
console.log('AULA 23-02-21')
console.log('-------------')
console.log('----find()-----')
console.log('Pet Peso > 10')
console.log(pets.find(e => e.weight > 10))
console.log('Pet Idade < 4')
console.log(pets.find(pet => pet.age < 4))
console.log('Pet = Gato e Sexo = M')
console.log(pets.find(pet => pet.species === 'Cat' && pet.sex === 'M'))
console.log('Pet Espécie = Calopsita ')
console.log(pets.find(pet => pet.species == 'Calopsita'))

console.log('-------------')
console.log('---some()---')
// METODO some()
// Retorna true caso haja ALGUM elemento que corresponda ao critério
// false em caso contrário
console.log('-------------')
console.log(pets.some((pet => pet.nome === 'Pet Five')))
console.log(pets.some((pet => pet.species === 'Cow' && pet.sex == 'F')))

console.log('-------------')
console.log('----every()----')
// METODO every()
// Retorna true caso TODOS os elementos correspondam ao critério
// false em caso contrário
console.log('-------------')
console.log(pets.every((pet => pet.nome === 'Dog')))
console.log(pets.every((pet => pet.weight > 0.2)))

console.log('-------------')
console.log('----filter()----')
// METODO filter()
// Retorna um novo vetor contendo apenas os elementos
// que correspondem ao critério
console.log('-------------')
console.log(pets.filter((pet => pet.species === 'Dog')))
console.log(pets.filter((pet => pet.species === 'Cat')))
console.log(pets.filter((pet => pet.age > 3)))
console.log(pets.filter((pet => pet.age > 300)))

console.log('-------------')
console.log('----map()----')
// METODO map()
// Cria um novo vetor COM O MESMO NÚMERO DE ELEMENTOS do vetor original,
// correspondente a algum tipo de transformação de elementos originais

// Novo vetor cocntendo apenas o nome dos pets, em maiúsculas

console.log('-------------')
console.log(pets.map((pet => pet.name.toUpperCase())))
console.log('----com vetor de números-----')

const numeros = [2, 6, -3, 9, 5, -7, 1, 4]
console.log(`Vetor original : ${numeros}`)
console.log('-------------')
console.log(`Vetor com valores ao quadrado : ${numeros.map((n) => n ** 2)}`)



//reduce() 
// Reduz um vetor de valores a um único valor
// Parâmetros:
// acumuluador: resultado parcial até o momento
// valor atual: o resultado correspondente ao elemento atual, que
// integrará o acumulador

console.log('-------------')
console.log('----reduce()---')
console.log('reduce()')

//soma
console.log('soma', numeros.reduce((acum, valor) => acum + valor))

//multiplicação
console.log('multiplicação', numeros.reduce((acum, valor) => acum * valor))


//concatenação
p1 = 'Bom '
p3 = 'galera!'
console.log('concatenação: ', [p1, 'dia ', p3].reduce((a, v) => a + v))

console.log('-------')

console.log('--Somatória pesos PETS:---')

// Somar peso dos pets


// método 1 : criando um vetor auxiliar contendo apenas os pesos dos pets
console.log('Método 1: map() com vetor auxiliar apenas com os pesos: ')
let pesos = pets.map((pet) => pet.weight)
console.log('Todos os pesos: ', pesos)
console.log('Método Map: ', pesos.reduce((ac, val) => ac + val))

// método 2 : fazendo map() + reduce em uma linha só:
console.log('Método 2: map() + reduce()')
console.log('Reduce + Map em uma linha: ', pets.map(pet => pet.weight).reduce((ac, val) => ac + val))

// método 3 : reduce() com parâmetros extras 
// 2º parâmetro do reduce() : valor inicial do acumulador 

console.log('Método 3: reduce() com parâmetros extras (3º e 4º)')
console.log(pets.reduce((ac, val) => ac + val.weight, 0))

console.log()
console.log()
console.log('---------')


// includes() : retorna true caso o vetor inclua o valor informado
console.log('---includes()---')
console.log(numeros.indcludes(6))
console.log(numeros.indcludes(11))

// Diferença entre some() e includes()
// some() -> recebe uma função para testar a existência de uma condição
// includes() -> recebe um valor simples (primitivo) para testar a existência

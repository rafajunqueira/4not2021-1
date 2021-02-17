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
        species: 'Bird',
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
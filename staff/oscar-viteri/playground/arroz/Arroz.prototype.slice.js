class Arroz {
    constructor() { this.length = 0 }

    slice(start, end) {
        //devuelve una parte del array devuelve en un nuevo array
        //tiene dos partes inicio y final
        //crear una array
        const freezer = new Arroz
        for (let i = start; i < end; i++) {
            freezer[freezer.length] = this[i]
            freezer.length++
        }
        return freezer
    }
}

console.log('TEST Arroz.prototype.slice')

{
    const fruits = new Arroz
    fruits[0] = 'Orange'
    fruits[1] = 'Pear'
    fruits[2] = 'Melon'
    fruits[3] = 'Mango'
    fruits[4] = 'Peach'
    fruits[5] = 'Grapes'
    fruits[6] = 'Lemon'
    fruits.length = 7

    const slicedFruits = fruits.slice(1, 5)
    console.log(slicedFruits)
    // [ 'Pear', 'Melon', 'Mango', 'Peach', length: 4 ]
}
console.log('CASE return a negative part of the array')

{
    const fruits = new Arroz
    fruits[0] = 'Orange'
    fruits[1] = 'Pear'
    fruits[2] = 'Melon'
    fruits[3] = 'Mango'
    fruits[4] = 'Peach'
    fruits[5] = 'Grapes'
    fruits[6] = 'Lemon'
    fruits.length = 7

    const slicedFruits = fruits.slice(1, 2)
    console.log(slicedFruits)
    // { 0 : 'Pear', length: 1 }
}
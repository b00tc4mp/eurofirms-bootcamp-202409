class Arroz {
    constructor() { this.length = 0 }

    indexOf(searchElement, fromIndex) {
        for (let i = (fromIndex === undefined ? 0 : (fromIndex < 0 ? this.length + fromIndex : fromIndex)); i < this.length; i++) {
            const element = this[i]

            if (element === searchElement) return i
        }

        return -1
    }
}

console.log('TEST Array.prototype.indexOf')

console.log('CASE get index of bison')

{
    const beasts = new Arroz
    beasts[0] = 'ant'
    beasts[1] = 'bison'
    beasts[2] = 'camel'
    beasts[3] = 'duck'
    beasts[4] = 'bison'
    beasts.length = 5
    const index = beasts.indexOf('bison')
    console.log(index);
    // 1
}

console.log('CASE get index of bison starting at index 2')

{
    const beasts = new Arroz
    beasts[0] = 'ant'
    beasts[1] = 'bison'
    beasts[2] = 'camel'
    beasts[3] = 'duck'
    beasts[4] = 'bison'
    beasts.length = 5
    const index = beasts.indexOf('bison', 2)
    console.log(index);
    // 4
}

console.log('CASE get index of giraffe')

{
    const beasts = new Arroz
    beasts[0] = 'ant'
    beasts[1] = 'bison'
    beasts[2] = 'camel'
    beasts[3] = 'duck'
    beasts[4] = 'bison'
    beasts.length = 5
    const index = beasts.indexOf('giraffe')
    console.log(index);
    // -1
}

console.log('CASE get index of giraffe starting at offset -4')

{
    const beasts = new Arroz
    beasts[0] = 'ant'
    beasts[1] = 'bison'
    beasts[2] = 'camel'
    beasts[3] = 'duck'
    beasts[4] = 'bison'
    beasts.length = 5
    const index = beasts.indexOf('giraffe', -4)
    console.log(index);
    // -1
}

console.log('CASE get index of duck starting at offset -4')

{
    const beasts = new Arroz
    beasts[0] = 'ant'
    beasts[1] = 'bison'
    beasts[2] = 'camel'
    beasts[3] = 'duck'
    beasts[4] = 'bison'
    beasts.length = 5
    const index = beasts.indexOf('duck', -4)
    console.log(index);
    // 3
}

console.log('CASE get index of duck starting at offset -3')

{
    const beasts = new Arroz
    beasts[0] = 'ant'
    beasts[1] = 'bison'
    beasts[2] = 'camel'
    beasts[3] = 'duck'
    beasts[4] = 'bison'
    beasts.length = 5
    const index = beasts.indexOf('bison', -3)
    console.log(index);
    // 4
}
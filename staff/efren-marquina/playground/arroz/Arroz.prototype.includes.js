class Arroz {
    constructor() {
        this.length = 0
    }

    includes(searchElement, fromIndex) {
        for (let i = (fromIndex === undefined ? 0 : fromIndex); i < this.length; i++) {
            const element = this[i]

            if (element === searchElement) return true
        }

        return false
    }
}

console.log('TEST Arroz.prototype.includes')

console.log('CASE check cars includes ferrari')

{
    const cars = new Arroz
    cars[0] = 'lambo'
    cars[1] = 'cinquecento'
    cars[2] = 'fiesta'
    cars[3] = 'm5'
    cars.length = 4
    const contains = cars.includes('ferrari')
    console.log(contains)
    // false
}

console.log('CASE check cars includes fiesta')

{
    const cars = new Arroz
    cars[0] = 'lambo'
    cars[1] = 'cinquecento'
    cars[2] = 'fiesta'
    cars[3] = 'm5'
    cars.length = 4
    const contains = cars.includes('fiesta')
    console.log(contains)
    // true
}

console.log('CASE check cars includes fiesta (2)')

{
    const cars = new Arroz
    cars[0] = 'lambo'
    cars[1] = 'cinquecento'
    cars[2] = 'fiesta'
    cars[3] = 'm5'
    cars[4] = 'fiesta'
    cars.length = 5
    const contains = cars.includes('fiesta')
    console.log(contains)
    // true
}

console.log('CASE check cars includes lambo from index 1')

{
    const cars = new Arroz
    cars[0] = 'lambo'
    cars[1] = 'cinquecento'
    cars[2] = 'fiesta'
    cars[3] = 'm5'
    cars[4] = 'fiesta'
    cars.length = 5
    const contains = cars.includes('lambo', 1)
    console.log(contains)
    // false
}

console.log('CASE check cars includes lambo from index 1 (2)')

{
    const cars = new Arroz
    cars[0] = 'lambo'
    cars[1] = 'cinquecento'
    cars[2] = 'fiesta'
    cars[3] = 'm5'
    cars[4] = 'fiesta'
    cars[5] = 'lambo'
    cars.length = 6
    const contains = cars.includes('lambo', 1)
    console.log(contains)
    // true
}

// TODO add negative index (offset) test case
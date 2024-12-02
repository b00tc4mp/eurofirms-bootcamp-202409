class Arroz {
    constructor() { this.length = 0 }

    fill(value, start, end) {
        start = start === undefined ? 0 : start;
        if (start == undefined) {
            start = 0
        }
        end = end === undefined ? this.length : end;

        if (start < 0) {
            start = Math.max(this.length + start, 0)
        }
        if (end < 0) {
            end = Math.max(this.length + end, 0)
        }

        start = Math.min(start, this.length)
        end = Math.min(end, this.length)

        for (let i = start; i < end; i++) {
            console.log("Posición " + i + "= " + this[i])
            this[i] = value;


        }
        this.length = Math.max(this.length, end)
        return this
    }
}

console.log('TEST Arroz.prototype.fill')

console.log('CASE fill the element of the array from')

const country = new Arroz

country[0] = 'España'
country[1] = 'Mexico'
country[2] = 'Argentina'
country[3] = 'Francia'
country[4] = 'Japon'
country.length = 5

{
    const world = 'Italia'
    console.log(country.fill(world, 2, 4))
    //[ 'España', 'Mexico', 'Italia', 'Italia', 'Japon' ]
}

{
    const world = 'España'
    console.log(country.fill(world, 1, 3))
    //[ 'España', 'España', 'España', 'Francia', 'Japon' ]
}

{
    const world = 'Japon'
    console.log(country.fill(world, -3, -1))
    //[ 'España', 'Mexico', 'Japon', 'Japon', 'Japon' ]
}
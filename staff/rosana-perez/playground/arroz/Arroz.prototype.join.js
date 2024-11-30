console.log('TEST Arroz.prototype.join')

// El método join() une todos los elementos de una matriz
//(o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

class Arroz {
    constructor() { this.length = 0 }

    join(separator) {
        let value = '';

        for (let i = 0; i < this.length; i++) {
            if (i == this.length - 1) {
                value = value + this[i]
            } else {
                value = value + this[i] + separator
            }
        }
        return value
    }
}

const cities = new Arroz();
cities[0] = 'Vigo'
cities[1] = 'Madrid'
cities[2] = 'Barcelona'
cities[3] = 'A Coruña'
cities[4] = 'Leon'
cities.length = 5

console.log('CASE 1 -> create a list of cities with a dot between')
{
    const citiesList = cities.join('.')

    console.log(citiesList);
    // Vigo.Madrid.Barcelona.A Coruña.Leon
}

console.log('CASE 2 -> create a list of cities with a space between')
{
    const citiesList = cities.join(' ')

    console.log(citiesList);
    // Vigo Madrid Barcelona A Coruña Leon

}

console.log('CASE 3 -> create a list of cities with the sign "->" between')
{
    const citiesList = cities.join(' -> ')

    console.log(citiesList);
    // Vigo -> Madrid -> Barcelona -> A Coruña -> Leon

}
console.log('CASE 4 -> create a list of cities with an "and" between')
{
    const citiesList = cities.join(' and ')

    console.log(citiesList)
    // Vigo and Madrid and Barcelona and A Coruña and Leon 
}

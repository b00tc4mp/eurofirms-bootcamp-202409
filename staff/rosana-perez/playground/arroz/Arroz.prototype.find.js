console.log('TEST Arroz.prototype.find')

class Arroz {
    constructor() {
        this.length = 0
    }

    find(callback) {
        for (let i = 0; i < this.length; i++) { // desde i=0, mientras i sea inferior a la longitud del arroz,
            let element = this[i] // se entiende como -> de cada elemento

            let fulfills = callback(element) // fulfills llama a la función de callback

            if (fulfills) return element // fulfills -> si se cumple la condición
        }

        // return undefined
    }
}

const names = new Arroz();
names[0] = 'Peter'
names[1] = 'John'
names[2] = 'Max'
names[3] = 'James'
names[4] = 'Constantin'
names[5] = 'Mario'
names[6] = 'Tea'
names[7] = 'Luis'
names.length = 8


console.log('CASE 1: find first name length greater than 5')
{
    const name = names.find(function (name) {
        return name.length > 5
    })

    console.log(name)
    // Constantin
}

console.log('CASE 2: find a name with the character X')
{

    const name = names.find(function (name) {
        return name.includes('x')
    })

    console.log(name)
    //Max
}

const cart = new Arroz();
cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1 }
cart[1] = { brand: 'puma', type: 'shorts', quantity: 2 }
cart[2] = { brand: 'nike', type: 'socks', quantity: 4 }
cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2 }
cart.length = 4

console.log('CASE 3: find first item with type socks')
{
    const item = cart.find(function (item) {
        return item.type === 'socks'
    })

    console.log(item)

    // { brand: 'nike', type: 'socks', quantity: 4, price: 10 }
}

console.log('CASE 4: find first item with price * quantity more than 100')
{
    const item = cart.find(function (item) {
        return item.price * item.quantity > 100
    })

    console.log(item)
    // expected output -> undefined, (no hay ninguno)
}

console.log('CASE 5: find first item with total price is greater than 40 and lower than  70')
{
    const item = cart.find(function (item) {
        const totalPrice = item.price * item.quantity
        return totalPrice > 40 && totalPrice < 70
    })

    console.log(item)
    //expected output -> { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
}

console.log('CASE 6: find first item with total price is greater than 5 and unit price lower than 5')
{

    const item = cart.find(function (item) {
        const totalPrice = item.price * item.quantity
        return totalPrice > 5 && item.price < 5
    })

    console.log(item)
    //expected output -> { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
}
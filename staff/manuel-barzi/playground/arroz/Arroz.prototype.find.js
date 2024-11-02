class Arroz {
    constructor() {
        this.length = 0
    }

    find(condtion) { // condition is the callback
        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            const fulfills = condtion(element)

            if (fulfills) return element
        }
    }
}

console.log('TEST Arroz.prototype.find')

console.log('CASE find first name with length greater that 5')

{
    const names = new Arroz
    names[0] = 'Peter'
    names[1] = 'John'
    names[2] = 'Max'
    names[3] = 'James'
    names[4] = 'Constantin'
    names[5] = 'Mario'
    names[6] = 'Tea'
    names[7] = 'Luis'
    names.length = 8
    const name = names.find(function (name) {
        return name.length > 5
    })
    console.log(name)
    // Constantin
}

console.log('CASE find first name with character x')

{
    const names = new Arroz
    names[0] = 'Peter'
    names[1] = 'John'
    names[2] = 'Max'
    names[3] = 'James'
    names[4] = 'Constantin'
    names[5] = 'Mario'
    names[6] = 'Tea'
    names[7] = 'Luis'
    names.length = 8
    const name = names.find(function (name) {
        return name.includes('x')
    })
    console.log(name)
    // Max
}

console.log('CASE find first item with type socks')

{
    const cart = new Arroz
    cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
    cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
    cart[2] = { brand: 'nike', type: 'socks', quantity: 4, price: 10 }
    cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
    cart.length = 4

    const item = cart.find(function (item) {
        return item.type === 'socks'
    })
    console.log(item)
    // { brand: 'nike', type: 'socks', quantity: 4, price: 10 }
}

console.log('CASE find first item with total price greater that 100')

{
    const cart = new Arroz
    cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
    cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
    cart[2] = { brand: 'nike', type: 'socks', quantity: 4, price: 10 }
    cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
    cart.length = 4
    const item = cart.find(function (item) {
        return item.price * item.quantity > 100
    })
    console.log(item)
    // undefined
}

console.log('CASE find first item with total price is greater than 40 and lower than 70')

{
    const cart = new Arroz
    cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
    cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
    cart[2] = { brand: 'nike', type: 'socks', quantity: 4, price: 10 }
    cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
    cart.length = 4
    const item = cart.find(function (item) {
        const totalPrice = item.price * item.quantity

        return totalPrice > 40 && totalPrice < 70
    })
    console.log(item)
    // { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
}

console.log('CASE find first item with total price is greater than 5 and unit price lower than 5')

{
    const cart = new Arroz
    cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
    cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
    cart[2] = { brand: 'nike', type: 'socks', quantity: 4, price: 10 }
    cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
    cart.length = 4
    const item = cart.find(function (item) {
        const totalPrice = item.price * item.quantity

        return totalPrice > 5 && item.price < 5
    })
    console.log(item)
    // { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
}
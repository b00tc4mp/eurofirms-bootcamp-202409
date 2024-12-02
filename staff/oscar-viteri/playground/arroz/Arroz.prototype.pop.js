class Arroz {
    constructor() { this.length = 0 }

    pop() {
        /*
        extract last element from arroz (reference in a local variable)
        delete last element from arrozdecremet arroz length by 1
        return extracted element 
        */

        const last = this[this.length - 1]
        delete this[this.length - 1]
        this.length-- // this.length = this.length -1 
        return last
    }
}

console.log('CASE extract tomato from plants')

const plants = new Arroz
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5

const plant = plants.pop()
console.log(plants)
// Arroz {0: 'broccoli', 1: 'cauliflower', 2: 'cabbage' 3: 'kale', length 4 }
console.log(plant)
// tomato

console.log('CASE extract last item from cart')

const socks = { brand: 'Adidas', size: 'L', price: 10 }
const tshirt = { brand: 'Nike', size: 'L', price: 20 }
const shoes = { brand: 'Puma', size: 44, price: 50 }
const cart = new Arroz
cart[0] = socks
cart[1] = tshirt
cart[2] = shoes
cart.length = 3
const extracterd = cart.pop()
console.log(cart)
/*
Arroz {
    0: { brand: 'Adidas', size: 'L', price: 20},
    1: { brand: 'Nike', size: 'L', price: 20},
    length: 2
}
*/
console.log(extracterd)
// { brand: 'Puma', size: 44, price: 50 }
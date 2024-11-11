class Arroz {
    constructor() { this.length = 0 }

    pop() {
        const last = this[this.length - 1]
        
        delete this[this.length - 1]
        
        this.length--  

        return last
    }
}

console.log('CASE extract tomato from plants')

{
    const plants = new Arroz
    plants[0] = 'broccoli',
    plants[1] = 'cauliflower',
    plants[2] = 'cabbage',
    plants[3] = 'kale',
    plants[4] = 'tomato',
    plants.length = 5
    const plant = plants.pop()
    console.log(plants)
    //Arroz { 0: 'broccoli', 1 'cauliflower', 2: 'cabbage', 3:'kale', length: 4 }
    console.log(plant)
    //tomato
}


{
    console.log('CASE extract last item from cart')

    const socks = { brand: 'Adidas', size: 'L', price: 10 }
    const tshirt = { brand: 'Nike', size: 'L', price: 20 }
    const shoes = { brand: 'Puma', size: 44, price: 50 }
    const cart = new Arroz
    cart[0] = socks
    cart[1] = tshirt
    cart[2] = shoes
    cart.length = 3
    const extracted = cart.pop()
    console.log(cart)
    /* 
    Arroz {
        0: { brand: 'Adidas', size: 'L', price: 10},
        {brand: 'Nike', size: 'L', price: 20},
        length: 2
    }
    */
    console.log(extracted)
    // { brand: 'Puma', size: 44, price: 50 }
}


console.log('CASE extract fish from products')
{
    const products = new Arroz

    products[0] = 'meat',
        pruducts[1] = 'fish',
        products[2] = 'fruits',
        products[3] = 'vegetavles',
        products.length = 4
    const product = products.pop()
    console.log(products)
    // { 0: 'meat', 1:'fruits', 2: 'vegetables', length: 3)

    const unisexClothes = clothes.slice(1, 3)
}
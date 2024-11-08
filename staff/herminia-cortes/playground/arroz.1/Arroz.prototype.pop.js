var Arroz = function () { this.length = 0 }                                              

Arroz.prototype.pop = function () { 
    /* 
    extract last element from arroz (refernce in a local variable) 
    delete last element from arroz
    decrement arroz length by 1
    return extracted element
    */ 

    var last = this[this.length - 1]               
    delete this[this.length - 1]                  
    this.length-- // this.length = this.length - 1                        
    return last                                
}

console.log ('CASE extract tomato from plants')

var plants = new Arroz
plants[0] = 'broccoli'
plants[1] = 'cauliflower'
plants[2] = 'cabbage'
plants[3] = 'kale'
plants[4] = 'tomato'
plants.length = 5  
var plant = plants.pop()
console.log(plants)
// Arroz { 0: 'broccoli', 1: 'cauliflower', 2: 'cabbage', 3: 'kale', length: 4 }
console.log(plant)
// tomato

console.log('CASE extract last item from cart')

var socks = { brand: 'Adidas', size: 'L', price: 10 }
var tshirt = { brand: 'Nike', size: 'L', price: 20 }
var shoes = { brand: 'Puma', size: 44, price: 50 }
var car = new Arroz
cart[0] = socks
cart[1] = tshirt
Cart[2] = shoes
cart.length = 3
var extracted = car.pop()
console.log(cart)
/*
Arroz {
    0: { brand: 'Adidas', size: 'L, price: 10 },
    1: { brand: 'Nike', size: 'L', price: 20 },
    legth: 2
}
*/
console.log(extracted)
// ´brand: 'Puma', size: 44, price: 50 }
 


var Arroz = function () {this.length = 0 }

Arroz.prototype.pop = function () {
    /*
    extract last element from arroz (reference in  a local variable)
    delete last element from arroz 
    decrement arroz length by 1 
    return extracted element
    */

    var last = this[this.length -1]
    delete this[this.length -1]
    this.length-- // this.lenght =this.length -1
    return last
}

console.log ('CASE extract apple from fruits')
 
var casas = new Arroz
fruits[0] = 'banana'
fruits[1] = 'peach'
fruits[2] = 'orange'
fruits[3] = 'watermelon'
fruits[4] = 'pineapple'
fruits[5] = 'apple'
fruits.length = 6
var fruits = fruits.pop()
// Arroz { 0: 'banana', 1: 'peach', 2: 'orange', 3: 'watermelon' 4: 'pineapple', length: 5
console.log(fruits)
// apple


console.log("TEST Array.prototype.pop");

//plants
console.log("CASE extract tomato from plants");

var plants = ['brocoli', 'coliflower', 'cabbage', 'kale', 'tomato']
var plant = plants.pop();
console.log(plants);
// ['brocoli', 'coliflower', 'cabbage', 'kale']
console.log(plant);
// tomato

//-----------------------------

console.log('CASE extract last item from cart');

var socks = { brand: 'Adidas', size: 'L', price: 10 };
var tshirt = { brand: 'Nike', size: 'L', price: 20 };
var shoes = { brand: 'Puma', size: 44, price: 50 };
var cart = [socks, tshirt, shoes];
var extracted = cart.pop();
console.log(cart);

/*
[
    { brand: 'Adidas', size: 'L', price: 10 },
    { brand: 'Nike', size: 'L', price: 20 }
]
*/

console.log(extracted);
// { brand: 'Puma', size: 44, price: 50 }

//-----------------------------

// my  zapatillas

console.log('CASO encontrar mis zapatillas');

var party = { marca: 'cetti', talla: 40, precio: 99 };
var night = { marca: "berlin", talla: 41, precio: 88 };
var sport = { marca: 'adidas', talla: 39, precio: 75 };
var all = [party, night, sport];
var extraerUltimo = all.pop();
console.log(extraerUltimo);



// my cars

var car = ['opel', 'peugeot', 'ford', 'porch', 'mercedes'];
console.log(car);
var carNonMercedes = car.pop();
console.log(carNonMercedes);





var Arroz = function () { this.length = 0; }
Arroz.prototype.pop = function () {
    /*
    El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
    */

    if (this.length === 0) return undefined; // Manejar caso de array vacío
    var last = this[this.length - 1];
    delete this[this.length - 1];
    this.length--; // this.length = this.length - 1
    return last;
}

console.log('CASO: extraer banqueta de arroz muebles');
var muebles = new Arroz();
muebles[0] = 'mesa';
muebles[1] = 'silla';
muebles[2] = 'lámpara';
muebles[3] = 'armario';
muebles[4] = 'cama';
muebles[5] = 'banqueta';
muebles.length = 6;

// Eliminar el último mueble
var muebleEliminado = muebles.pop();

console.log(muebles); // Arroz {0: 'mesa', 1: 'silla', 2: 'lámpara', 3: 'armario', 4: 'cama', length: 5 }
console.log(muebleEliminado); // banqueta

console.log('CASO: extraer último item del carrito');

var socks = { brand: 'Adidas', size: 'L', price: 10 };
var tShirt = { brand: 'Nike', size: 'L', price: 20 };
var shoes = { brand: 'Puma', size: 44, price: 50 };
var cart = new Arroz();
cart[0] = socks;  // igualamos cart a socks
cart[1] = tShirt;
cart[2] = shoes;
cart.length = 3;

var extracted = cart.pop();
console.log(cart);
/* 
Arroz {
    0: {brand: 'Adidas', size: 'L', price: 10},
    1: {brand: 'Nike', size: 'L', price: 20 },
    length: 2
}
*/
console.log(extracted); // { brand: 'Puma', size: 44, price: 50 }

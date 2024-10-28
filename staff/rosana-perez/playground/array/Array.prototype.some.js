console.log('TEST Array.prototype.some')
/* El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
Este método devuelve false para cualquier condición puesta en un array vacío. */

console.log('CASE 1 -> look for cars in red')

var cars = []
cars[0] = { brand: 'peugeot', style: '306', color: 'red', size: 'medium' }
cars[1] = { brand: 'fiat', style: '500', color: 'white', size: 'small' }
cars[2] = { brand: 'renault', style: 'megane', color: 'red', size: 'small' }
cars[3] = { brand: 'audi', style: 'A6', color: 'grey', size: 'high' }

// Usar some para verificar si existe algún coche con color 'red'

var existsRedCars = cars.some(function (car) {
    return car.color === 'red';

})

console.log(existsRedCars);

// true   


console.log('CASE 2 -> look for cars with brand: mercedes')

var existsMercedesCars = cars.some(function (car) {
    return car['brand'] === 'mercedes';
})

console.log(existsMercedesCars);

// false
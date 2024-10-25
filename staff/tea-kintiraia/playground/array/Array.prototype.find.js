console.log('describe find')

console.log('CASE people')

var people = [{ name: 'Paco', age: 30, origin: 'Madrid' },
{ name: 'Laura', age: 16, origin: 'Sevilla' },
{ name: 'Manolo', age: 25, origin: 'Jaen' },
{ name: 'Lucia', age: 32, origin: 'Cordoba' }]

console.log('CASE get the element with the name Lucia')
var findLucia = function (element) {
    return element.name === 'Lucia'
}

console.log(people.find(findLucia))

console.log('CASE get the first element with the age more than 27')
var ageMoreThan30 = function (element) {
    return element.age > 27

}

console.log(people.find(ageMoreThan30))

console.log('CASE get the first element aged between 24 and 26')
var ageBetweeen24and26 = function (element) {
    if (element.age > 50 && element.age < 26) {
        return element
    }
}

console.log(people.find(ageBetweeen24and26))

/* Mis ejemplos---------->>>>>>>>>>>>>>>>>>>> */

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12


console.log('TEST Array.prototype.find')
var personas = ['id:1', 'id:2'];
var length = 1
var personas = [{ name: 'Leon', id: 1 }, { name: 'Leona2', id: 2 }];

var personas = personas.find(persona => persona.id === 1)
console.log(found)
// 4 { name: 'Leon', id: 1 }
undefined
var personas = [{ name: 'Leon', id: 1 }, { name: 'Leona2', id: 2 }];

var personas = personas.find(persona => persona.id === 2)
console.log(persona)
// 4 { name: 'Leona2', id: 2 }
var personas = [{ name: 'Leon', username: 'myAnimal', color: 'green', id: 1 }, { name: 'Leona2', username: 'myFavAnimal', color: 'white', id: 2 }];

var personas = personas.find(persona => persona.id === 2)
console.log(persona)

undefined
var personas = [{ name: 'Leon', username: 'myAnimal', color: 'green', id: 1 }, { name: 'Leona2', username: 'myFavAnimal', color: 'white', id: 2 }];

var personas = personas.find(persona => persona.id === 1)
console.log(persona)
// 4 { name: 'Leon', username: 'myAnimal', color: 'green', id: 1 }

/* >>>>>>> */
var array = ['id:1', 'id:2'];
var personas = [{ name: 'Leon', id: 1 }, { name: 'Leona2', id: 2 }];

var personas = personas.find((persona) => persona.id > 1)
console.log(found);
// {name: 'Leona2', id: 2}
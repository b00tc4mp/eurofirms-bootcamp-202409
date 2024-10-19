/*
El método some() comprueba si al menos un elemento del array cumple con la condición implementada 
por la función proporcionada.
*/

console.log('TEST Array.prototype.some')

console.log("CASE some element is more than 250 and less than 412")

var nums = [100, 200, 300, 400, 300, 800, 800]

//function

var checkMoreThan250AndLessThan412 = function (element) {
    return element > 250 && element < 412
}

console.log(nums.some(checkMoreThan250AndLessThan412))
// true


console.log("CASE element is more than 801")

var nums = [100, 200, 300, 400, 300, 800, 800]

//function

var checkMoreThan801 = function (element) {
    return element > 801
}

console.log(nums.some(checkMoreThan801))
// false



console.log('CASE find if exist fruits with the letter M or m')

var fruits = ['Banana', 'Mango', 'Piña', 'Fresa', 'Manzana']

var exists = fruits.some(function (fruit) {
    //if (fruit.includes('M') || fruit.includes('m'))
    //    return true
    return fruit.includes('M') || fruit.includes('m')
})

console.log(exists)
// true


console.log('CASE find Nokia')

var phones = [
    { brand: 'Blackberry', color: 'black', type: 'phone' },
    { brand: 'Motorola', color: 'white', type: 'phone' },
    { brand: 'Nokia', color: 'red', type: 'phone' },
    { brand: 'iphone', color: 'pink', type: 'smartphone' }
]

var exists = phones.some(function (phone) {
    /*if (phone.brand === 'Nokia') {
       return true
    } else {
        return false
    }*/
    return phone.brand === 'Nokia'
})
console.log(exists)
// true


console.log('CASE check if smartphone exists in phones')

var phones = [
    { brand: 'Blackberry', color: 'black', type: 'phone' },
    { brand: 'Motorola', color: 'white', type: 'phone' },
    { brand: 'Nokia', color: 'red', type: 'phone' },
    { brand: 'iphone', color: 'pink', type: 'smartphone' }
]


var exists = phones.some(function (phone) {
    /*if (phone.type === 'smartphone') {
        return true
    }
    return false*/
    return phone.type === 'smartphone'
})

console.log(exists)
//true

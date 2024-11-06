console.log('TEST Arroz.prototype.some')

// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

class Arroz {
    constructor() { this.length = 0 }

    some(callBackFunction) {
        for (let i = 0; i < this.length; i++) {
            if (callBackFunction(this[i])) {
                return true
            }
        }
        return false
    }
}

const nums = new Arroz();
nums[0] = 100
nums[1] = 200
nums[2] = 300
nums[3] = 400
nums[4] = 300
nums[5] = 800
nums[6] = 800
nums.length = 7

console.log('CASE some element is more than 250 and less than 412')

const checkMoreThan250AndLessThan412 = function (element) {
    return element > 250 && element < 412
}

console.log(nums.some(checkMoreThan250AndLessThan412))
//true


console.log('CASE element is more than 801')

const checkMoreThan801 = function (element) {
    return element > 801
}

console.log(nums.some(checkMoreThan801))
//false


console.log('CASE find if exist fruits with the letter M')
{
    const fruits = new Arroz();
    fruits[0] = 'Banana'
    fruits[1] = 'Mango'
    fruits[2] = 'Piña'
    fruits[3] = 'Fresa'
    fruits[4] = 'Manzana'
    fruits.length = 5

    const exists = fruits.some(function (fruit) {
        return fruit.includes('M') || fruit.includes('m')
        // también se puede poner
        //if (fruit.includes('M') || fruit.includes('m'))
        //return true

    })

    console.log(exists)
    //true
}
console.log('CASE check Nokia')
{
    const phones = new Arroz();
    phones[0] = { brand: 'Blackberry', color: 'black', type: 'phone' }
    phones[1] = { brand: 'Motorola', color: 'white', type: 'phone' }
    phones[2] = { brand: 'Nokia', color: 'red', type: 'phone' }
    phones[3] = { brand: 'Iphone', color: 'pink', type: 'smartphone' }
    phones.length = 4

    const exists = phones.some(function (phone) {
        return phone.brand === 'Nokia'
        /* if (phone.brand === 'Nokia') {
        return true } */
    })

    console.log(exists)
    //true
}

console.log('CASE check smartphone')

{
    const phones = new Arroz();
    phones[0] = { brand: 'Blackberry', color: 'black', type: 'phone' }
    phones[1] = { brand: 'Motorola', color: 'white', type: 'phone' }
    phones[2] = { brand: 'Nokia', color: 'red', type: 'phone' }
    phones[3] = { brand: 'Iphone', color: 'pink', type: 'smartphone' }
    phones.length = 4

    const exists = phones.some(function (phone) {
        return phone.type === 'smartphone'
        /* if (phone.brand === 'Nokia') {
        return true } */
    })

    console.log(exists)
    //true
}
function Arroz() { this.length = 0 }

Arroz.prototype.some = function (callbackFunction) {
    for (var i = 0; i < this.length; i++) {
        if (callbackFunction(this[i])) {
            return true
        }
    }
    return false
}


console.log('TEST Arroz.prototype.some')

console.log('CASE some element is more than 250 and less 412')

var nums = new Arroz
nums[0] = 100
nums[1] = 200
nums[2] = 300
nums[3] = 400
nums[4] = 300
nums[5] = 800
nums[6] = 800
nums.length = 7
//callbackfunction

var checkMoreThan250AndLessThan412 = function (element) {
    return element > 250 && element < 412
}
console.log(nums.some(checkMoreThan250AndLessThan412))
// true

console.log('CASE element is more than 801')

var nums = new Arroz
nums[0] = 100
nums[1] = 200
nums[2] = 300
nums[3] = 400
nums[4] = 300
nums[5] = 800
nums[6] = 800
nums.length = 7
// function

var checkMoreThan801 = function (element) {
    return element > 801
}

console.log(nums.some(checkMoreThan801))
// false

console.log('CASE find if exist fuits with the letter M or m')

var fruits = new Arroz
fruits[0] = 'Banana'
fruits[1] = 'Mango'
fruits[2] = 'Piña'
fruits[3] = 'Fresa'
fruits[4] = 'Manzana'
fruits.length = 5

var exists = fruits.some(function (fruit) {
    // if /fruit.includes('M') || fruit.includes('m')
    // return true
    return fruit.includes('M') || fruit.includes('m')
})

console.log(exists)
// true

console.log('CASE find Nokia')

var phones = new Arroz
phones[0] = { brand: 'blackberry', color: 'black', type: 'phone' }
phones[1] = { brand: 'Motorola', color: 'white', type: 'phone' }
phones[2] = { brand: 'Nokia', color: 'red', type: 'phone' }
phones[3] = { brand: 'iphone', color: 'pink', type: 'smartphone' }
phones.length = 4

var exists = phones.some(function (phone) {
    /* if (phones.brand === 'Nokia'){
    return true
} else {
    return false
}*/
    return phones.brand === 'Nokia'
})
console.log(exists)
// true
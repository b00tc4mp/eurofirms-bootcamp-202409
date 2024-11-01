var Arroz = function () { this.length = 0 }

Arroz.prototype.join = function (separator) {
    if (this.length === 0) {
        newString = null
        return
    }
    var newString = this[0]
    if (separator === undefined) separator = ','
    for (var i = 1; i <= this.length - 1; i++) {
        if (this[i] === undefined) this[i] = ''
        if (this[i] === null) this[i] = ''
        newString = newString + separator + this[i]
    }
    console.log(newString)
}

console.log('TEST Arroz.prototype.join')

console.log('CASE join three elements with ,')

var food = new Arroz
food[0] = 'banana'
food[1] = 'milk'
food[2] = 'sugar'
food.length = 3
food.join()
// 'banana,milk,sugar'


console.log('CASE join three elements with ' + '')

var food = new Arroz
food[0] = 'banana'
food[1] = 'milk'
food[2] = 'sugar'
food.length = 3
food.join(' + ')
// 'banana + milk + sugar'


console.log('CASE empty array')

var food = new Arroz
food.length = 0
food.join()
// ''


console.log('CASE arroz with null & undefined elements')

var food = new Arroz
food[0] = 'banana'
food[1] = null
food[2] = undefined
food[3] = 'milk'
food[4] = 'sugar'
food.length = 5
food.join(' + ')
// 'banana + + + milk + sugar'


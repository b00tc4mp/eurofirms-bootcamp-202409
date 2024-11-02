var Arroz = function () { this.length = 0 }

Arroz.prototype.fill = function (value, start, end) {
    var itemStart
    var itemEnd
    if (start > 0) {
        itemStart = start
    } else if (start < 0) {
        itemStart = this.length + start
    } else {
        itemStart = 0
    }
    if (end > 0) {
        itemEnd = end
    } else if (end < 0) {
        itemEnd = this.length + end
    } else {
        itemEnd = this.length
    }
    for (; itemStart < itemEnd; itemStart++) {
        this[itemStart] = value
    }
    console.log(this)
}

console.log('TEST Arroz.prototype.fill')

console.log('CASE fill all the array with onion')

var food = new Arroz
food[0] = 'apple'
food[1] = 'banana'
food[2] = 'orange'
food[3] = 'cherry'
food[4] = 'lemon'
food.length = 5
food.fill('onion')
// ['onion', 'onion', 'onion', 'onion', 'onion']


console.log('CASE fill with onion from index 1 to index 3')

var food = new Arroz
food[0] = 'apple'
food[1] = 'banana'
food[2] = 'orange'
food[3] = 'cherry'
food[4] = 'lemon'
food.length = 5
food.fill('onion', 1, 3)
// ['apple', 'onion', 'onion', 'cherry', 'lemon']


console.log('CASE fill with onion from index 0 to index -2')

var food = new Arroz
food[0] = 'apple'
food[1] = 'banana'
food[2] = 'orange'
food[3] = 'cherry'
food[4] = 'lemon'
food.length = 5
food.fill('onion', 0, -2)
// ['onion', 'onion', 'onion', 'cherry', 'lemon']


console.log('CASE fill with onion from index -4 to index -2')

var food = new Arroz
food[0] = 'apple'
food[1] = 'banana'
food[2] = 'orange'
food[3] = 'cherry'
food[4] = 'lemon'
food.length = 5
food.fill('onion', -4, -2)
// ['apple', 'onion', 'onion', 'cherry', 'lemon']
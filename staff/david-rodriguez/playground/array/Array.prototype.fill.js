console.log('TEST Array.prototype.fill')


console.log('CASE fill all the array with onion')

var food = ['apple', 'banana', 'orange', 'cherry', 'lemon']
console.log(food.fill('onion'))
// ['onion', 'onion', 'onion', 'onion', 'onion']



console.log('CASE fill with onion from index 1 to index 3')

var food = ['apple', 'banana', 'orange', 'cherry', 'lemon']
console.log(food.fill('onion', 1, 3))
// ['apple', 'onion', 'onion', 'cherry', 'lemon']


console.log('CASE fill with onion from index 0 to index -2')

var food = ['apple', 'banana', 'orange', 'cherry', 'lemon']
console.log(food.fill('onion', 0, -2))
// ['onion', 'onion', 'onion', 'cherry', 'lemon']



console.log('CASE fill with onion from index -4 to index -2')

var food = ['apple', 'banana', 'orange', 'cherry', 'lemon']
console.log(food.fill('onion', -4, -2))
// ['apple', 'onion', 'onion', 'cherry', 'lemon']
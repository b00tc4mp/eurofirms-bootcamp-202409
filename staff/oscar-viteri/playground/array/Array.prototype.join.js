console.log('TEST Array.prototype.join')

console.log('CASE join elements of an array')

var shoppingList = ['Apples', 'Bananas', 'Carrots', 'Bread', 'Eggs', 'Orange', 'Mango', 'Peach']
var List = shoppingList.join(' ')
console.log(List)
// Apples Banana Carrots Bread Eggs Orange Mango Peach

console.log('CASE join with-> y')

var shoppingList = ['Apples', 'Bananas', ' Carrots', 'Bread', 'Eggs', 'Orange', 'Mango', 'Peach']
var List = shoppingList.join(' y ')
console.log(List)
// Apples y Banana y Carrots y Bread y Eggs y Orange y Mango y Peach

console.log('CASE join with-> -')

var shoppingList = ['Apples', 'Bananas', 'Carrots', 'Bread', 'Eggs', 'Orange', 'Mango', 'Peach']
var List = shoppingList.join(' - ')
console.log(List)
// Apples - Banana - Carrots - Bread - Eggs - Orange - Mango - Peach

console.log('CASE join with-> >')

var shoppingList = ['Apples', 'Bananas', 'Carrots', 'Bread', 'Eggs', 'Orange', 'Mango', 'Peach']
var list = shoppingList.join(' > ')
console.log(list)
// Apples > Bananas > Carrots > Bread > Eggs > Orange > Mango > Peach
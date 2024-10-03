console.log('TEST Array.prototype.concat')
console.log('CASE it is used to join two or more arrays')

var Arroz = function () { this.length = 0 }

Arroz.prototype.concat = function (elementToConcat) {
    var result = new Arroz
    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length
    }
    for (var i = 0; i < elementToConcat.length; i++) {
        result[result.length] = elementToConcat[i]
        result.length++
    }
    return result
}
var shoppinList = new Arroz

shoppingList[0] = 'beer'
shoppingList[1] = 'doritos'
shoppingList.length = 2

var foodList = new Arroz

foodList[0] = 'meat'
foodList[1] = 'fish'
foodList.length = 2

var fullShoppingList = new Arroz

fullShoppingList = shoppinList.concat(foodList)

console.log('shoppingList->', shoppinList)

console.log('foodList->', foodList)
console.log('fullshoppingList->', fullShoppingList)
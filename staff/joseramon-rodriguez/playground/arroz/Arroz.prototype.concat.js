var Arroz = function () { this.length = 0 }

Arroz.prototype.concat = function (elementToConcat) {
    //devolver un arroz nuevo que es la concatenacion (suma) de los 2
    //this + elementToConcat
    var result = new Arroz
    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length++
    }
    for (var i = 0; i < elementToConcat.length; i++) {
        result[result.length] = elementToConcat[i]
        result.length++
    }
    return result
}

var shoppingList = new Arroz

shoppingList[0] = 'beer'
shoppingList[1] = 'doritos'
shoppingList.length = 2

var foodList = new Arroz

foodList[0] = 'meat'
foodList[1] = 'fish'
foodList.length = 2

var fullShoppingList = new Arroz

fullShoppingList = shoppingList.concat(foodList)

console.log('shoppingList ->', shoppingList)

console.log('foodList ->', foodList)

console.log('fullShoppingList->', fullShoppingList)
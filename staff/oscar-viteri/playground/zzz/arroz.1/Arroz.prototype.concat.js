var Arroz = function () { this.length = 0 }
// une dos array y devuelve un nuevo array
// crear un nuevo arroz que contendra todos los arroz
// meter los elementos del primer arroz y nuestro nuevo arroz
// meter los elementos del segundo arroz en el nuevo arroz
// longitud controlada de ese nuevo arroz
Arroz.prototype.concat = function (elementsToConcat) {
    var newArrozList = new Arroz
    for (var i = 0; i < this.length; i++) {
        newArrozList[i] = this[i]
        newArrozList.length++
        /* 
        {0 = "meat",
        1 = "fish",
        2 = "cookies",
        length = 3}
         */
    }
    for (var i = 0; i < elementsToConcat.length; i++) {
        newArrozList[newArrozList.length] = elementsToConcat[i]
        newArrozList.length++
        /*
        {0 = "meat",
        1 = "fish",
        2 = "cookies",
        3 = "beer",
        4 = "doritos",
        5 = "cakes",
        length = 6}
         */
    }
    return newArrozList
}

console.log('TEST Array.prototype.concat')
console.log('CASE it is used to join two or more arrays')

var shoppingList = new Arroz

shoppingList[0] = 'beer'
shoppingList[1] = 'doritos'
shoppingList[2] = 'cakes'
shoppingList.length = 3

var foodList = new Arroz

foodList[0] = 'meat'
foodList[1] = 'fish'
foodList[2] = 'cookies'
foodList.length = 3

var fullShoppingList = foodList.concat(shoppingList);
console.log('fullshoppingList->', fullShoppingList)

// [ 'beer', 'doritos', 'cakes', 'meat', 'fish', 'cookies' ]
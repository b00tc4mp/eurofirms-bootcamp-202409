class Arroz {
    constructor() {
        this.length = 0; // de esta manera se inicializa la longitud ->length<-
    }
    concat(elementToConcat) {
        //devolver un arroz nuevo que es la concatenación (suma) de los 2
        //this + elementToConcat
        const result = new Arroz();
        for (let i = 0; i < this.length; i++) {
            result[i] = this[i]
            result.length++
        }
        for (let i = 0; i < elementToConcat.length; i++) {
            result[result.length] = elementToConcat[i]
            result.length++
        }
        return result
    }
}

const shoppingList = new Arroz();

shoppingList[0] = 'beer'
shoppingList[1] = 'doritos'
shoppingList.length = 2

const foodList = new Arroz();

foodList[0] = 'meat'
foodList[1] = 'fish'
foodList.length = 2

const fullShoppingList = shoppingList.concat(foodList)

// no se puede iniciar fullShoppingList con new Arroz por ser una constante

console.log('shoppingList ->', shoppingList)

console.log('foodList ->', foodList)

console.log('fullShoppingList ->', fullShoppingList)

class Arroz {
    constructor() { this.length = 0 }

    join(separator) {

        let value = '';

        for (let i = 0; i < this.length; i++) {
            if (i == this.length - 1) {
                value = value + this[i]
            } else {
                value = value + this[i] + separator
            }
        }
        return value
    }
}

console.log('TEST Array.portotype.join')
console.log('CASE join elements of an array')

{
    const shoppingList = new Arroz
    shoppingList[0] = 'Apples'
    shoppingList[1] = 'Bananas'
    shoppingList[2] = 'Carrots'
    shoppingList[3] = 'Bread'
    shoppingList[4] = 'Eggs'
    shoppingList[5] = 'Orange'
    shoppingList[6] = 'Mango'
    shoppingList[7] = 'Peach'
    shoppingList.length = 8

    let list = shoppingList.join(' ')
    console.log('CASE->', list)
}

{
    const shoppingList = new Arroz
    shoppingList[0] = 'Apples'
    shoppingList[1] = 'Bananas'
    shoppingList[2] = 'Carrots'
    shoppingList[3] = 'Bread'
    shoppingList[4] = 'Eggs'
    shoppingList[5] = 'Orange'
    shoppingList[6] = 'Mango'
    shoppingList[7] = 'Peach'
    shoppingList.length = 8

    const list = shoppingList.join(' y ')
    console.log('CASE->', list)
}

{
    const shoppingList = new Arroz
    shoppingList[0] = 'Apples'
    shoppingList[1] = 'Bananas'
    shoppingList[2] = 'Carrots'
    shoppingList[3] = 'Bread'
    shoppingList[4] = 'Eggs'
    shoppingList[5] = 'Orange'
    shoppingList[6] = 'Mango'
    shoppingList[7] = 'Peach'
    shoppingList.length = 8

    const list = shoppingList.join(' - ')
    console.log('CASE->', list)
}

{
    const shoppingList = new Arroz
    shoppingList[0] = 'Apples'
    shoppingList[1] = 'Bananas'
    shoppingList[2] = 'Carrots'
    shoppingList[3] = 'Bread'
    shoppingList[4] = 'Eggs'
    shoppingList[5] = 'Orange'
    shoppingList[6] = 'Mango'
    shoppingList[7] = 'Peach'
    shoppingList.length = 8

    const list = shoppingList.join(' > ')
    console.log('CASE->', list)
}
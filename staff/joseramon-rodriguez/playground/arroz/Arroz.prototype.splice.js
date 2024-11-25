console.log('TEST Arroz.prototype.find')

class Arroz {
    constructor() {
        this.length = 0
    }

    splice(start, deletedAmount, elementsToAdd) {
        //crear deletedElements = [] -> aqui guardo los elemtos borrados
        //PASO 1 -> añadir a deletedElements los elementos a borrar despues

        //{0: 'Peter', 1: 'John', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 8}
        //deletedElements  = []

        //{0: 'Peter', 1: 'John', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 8}
        //deletedElements  = ['John']

        //{0: 'Peter', 1: 'John', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 8}
        //deletedElements  = ['John', 'Max']

        //PASO 2 -> borrar la cantidad de elementos pedida (deletedAmount) desde la posicion indicada (start)

        //{0: 'Peter', 1: 'John', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 8}

        //{0: 'Peter', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 7}

        //{0: 'Peter', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

        //PASO 3 -> mover los elementos posteriores a start una de posiciones igual a deletedAmount

        //{0: 'Peter', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

        //{0: 'Peter', 1: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

        //{0: 'Peter', 1: 'James', 2: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

        //{0: 'Peter', 1: 'James', 2: 'Constantin',  3: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

        //{0: 'Peter', 1: 'James', 2: 'Constantin',  3: 'Mario', 4: 'Tea', 7: 'Luis', length: 6}

        //{0: 'Peter', 1: 'James', 2: 'Constantin',  3: 'Mario', 4: 'Tea', 5: 'Luis', length: 6}

    }
}

const names = new Arroz();
names[0] = 'Peter'
names[1] = 'John'
names[2] = 'Max'
names[3] = 'James'
names[4] = 'Constantin'
names[5] = 'Mario'
names[6] = 'Tea'
names[7] = 'Luis'
names.length = 8

console.log('caso 1 -> desde la posicion 1, borrar 2 elementos y no insertar nada')

console.log('elementos eliminados del caso 1', names.splice(1, 2))
//['Jhon','Max']

console.log('names despues de caso 1 ->', names)
//{0: 'Peter', 1: 'James', 2: 'Constantin', 3: 'Mario', 4: 'Tea', 5: 'Luis', length: 6}


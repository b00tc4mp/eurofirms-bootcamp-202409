console.log('TEST Arroz.prototype.splice')

// El método splice() cambia el contenido de un array 
//eliminando elementos existentes y/o agregando nuevos elementos.
// tiene tres parámetros: start, deleteCount y item
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

class Arroz {
    constructor() {
        this.length = 0
    }


    splice(start, deleteAmount, elementsToAdd) {  // names.splice(1,2) start ->1, deleteAmount ->2, length: 8, elementsToAdd-> undefined
        //crear deletedElements = [] -> aqui guardo los elemtos borrados
        let deletedElements = []


        //PASO 1 -> añadir a deletedElements los elementos a borrar despues

        //{0: 'Peter', 1: 'John', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 8}
        //deletedElements  = []

        for (let i = start; i < start + deleteAmount; i++) {
            deletedElements.push(this[i])
            //{0: 'Peter', 1: 'John', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 8}
            //deletedElements  = ['John']

            //{0: 'Peter', 1: 'John', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 8}
            //deletedElements  = ['John', 'Max']
        }

        //PASO 2 -> borrar la cantidad de elementos pedida (deletedAmount) desde la posicion indicada (start)
        // names.splice(1,2) start ->1, deleteAmount ->2, length: 8, elementsToAdd-> undefined

        //{0: 'Peter', 1: 'John', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 8}

        for (let i = start; i < start + deleteAmount; i++) {
            delete this[i]
            this.length--
        }
        //i = 1, i<3, this[1]= John; delete John; length 7
        //i = 2, i<3,  this[2]= Max; delete Max; length 6
        //i = 3; i = 3 -> stop bucle

        //{0: 'Peter', 2: 'Max', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 7}
        //{0: 'Peter', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}


        //PASO 3 -> mover los elementos posteriores a start cada una de posiciones igual a deletedAmount

        //{0: 'Peter', 3: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

        for (let i = start; i < this.length; i++) {
            this[i] = this[i + deleteAmount]// this[1] = this[1+2 = 3]
            // this[2] = this[2+2= 4]
            // this[3] = this[3+2= 5]
            //this[4] = this[4+2=6]
            //this[5] = this[5+2=7]
            //*** stop


        }

        for (let i = this.length + start; i >= this.length; i--) {

            delete this[i]
        }

        //delete this[]

        // names.splice(1,2) start ->1, deleteAmount ->2, length: 6
        //this[start] = this[start+deleteAmount] -> 
        //{0: 'Peter', 1: 'James', 4: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

        //this[start+1] = this[start+deletedAmount+1] -> this[2] = this[3+1]


        //{0: 'Peter', 1: 'James', 2: 'Constantin',  5: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

        //{0: 'Peter', 1: 'James', 2: 'Constantin',  3: 'Mario', 6: 'Tea', 7: 'Luis', length: 6}

        //{0: 'Peter', 1: 'James', 2: 'Constantin',  3: 'Mario', 4: 'Tea', 7: 'Luis', length: 6}

        //{0: 'Peter', 1: 'James', 2: 'Constantin',  3: 'Mario', 4: 'Tea', 5: 'Luis', length: 6}


        return deletedElements
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
console.log('elementos eliminados del caso 1 ', names.splice(1, 2))
//[John, MaX]

console.log('names después de caso 1-> ', names)
//{0: 'Peter', 1: 'James', 2: 'Constantin', 3: 'Mario', 4: 'Tea', 5: 'Luis', length: 6}
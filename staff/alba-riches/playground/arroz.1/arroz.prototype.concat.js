// Definición del constructor Arroz
const Arroz = function () {
    this.length = 0; // Inicializa un arreglo vacío con una propiedad `length`
};

// Agregamos el método `concat` al prototipo de `Arroz`
Arroz.prototype.concat = function (...arrays) {
    const result = new Arroz(); // Creamos un nuevo arreglo vacío para almacenar el resultado

    // Primero copiamos los elementos del arreglo original (el que invoca el método)
    for (let i = 0; i < this.length; i++) {
        result[result.length] = this[i]; // Copiamos cada elemento en el nuevo arreglo
        result.length++; // Incrementamos la longitud del nuevo arreglo
    }

    // Ahora concatenamos los arreglos que se pasan como argumentos
    for (let j = 0; j < arrays.length; j++) {
        const currentArray = arrays[j]; // Tomamos cada arreglo pasado como argumento
        for (let k = 0; k < currentArray.length; k++) {
            result[result.length] = currentArray[k]; // Copiamos los elementos del arreglo
            result.length++; // Incrementamos la longitud del nuevo arreglo
        }
    }

    return result; // Devolvemos el nuevo arreglo concatenado
};

// Imprimir el inicio de los tests
console.log('TEST Arroz.prototype.concat');

// Caso: Unir carBrands1 y carBrands2
console.log('CASE returns a new arroz joined carBrands1 and carBrands2');
const carBrands1 = ['BMW', 'Mercedes'];
const carBrands2 = ['Seat', 'Opel', 'Cupra', 'Jaguar'];

const carBrands = new Arroz();
carBrands[0] = 'Audi';
carBrands[1] = 'Volkswagen';
carBrands.length = 2; // Establecemos la longitud del arreglo

const concatCarBrands = carBrands.concat(carBrands1, carBrands2); // Usamos el método concat del prototipo de Arroz
// Ahora, vamos a iterar sobre el objeto 'concatCarBrands' para mostrarlo como un arreglo estándar
const carBrandsArr = [];
for (let i = 0; i < concatCarBrands.length; i++) {
    carBrandsArr.push(concatCarBrands[i]);
}
console.log(carBrandsArr);
// Se espera: ['Audi', 'Volkswagen', 'BMW', 'Mercedes', 'Seat', 'Opel', 'Cupra', 'Jaguar']

// Caso: Unir birdClass1 y birdClass2
console.log('CASE returns a new arroz joined birdClass1 and birdClass2');
const birdClass1 = ['Canario', 'Jilguero', 'Gorrion'];
const birdClass2 = ['Pájaro Carpintero', 'Urraca', 'Cuervo'];

const birdClass = new Arroz();
birdClass[0] = 'Aguilucho';
birdClass[1] = 'Lechuza';
birdClass.length = 2; // Establecemos la longitud del arreglo

const concatBirdClasses = birdClass.concat(birdClass1, birdClass2); // Usamos el método concat del prototipo de Arroz
// Mostrar el resultado como un arreglo estándar
const birdClassesArr = [];
for (let i = 0; i < concatBirdClasses.length; i++) {
    birdClassesArr.push(concatBirdClasses[i]);
}
console.log(birdClassesArr);
// Se espera: ['Aguilucho', 'Lechuza', 'Canario', 'Jilguero', 'Gorrion', 'Pájaro Carpintero', 'Urraca', 'Cuervo']


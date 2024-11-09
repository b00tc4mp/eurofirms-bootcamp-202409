// Definimos la función constructora Arroz
const Arroz = function () {
    this.length = 0;
};

// Implementamos el método slice en Arroz
Arroz.prototype.slice = function (begin, end) {
    const newArray = new Arroz();  // Creamos un nuevo objeto de tipo Arroz

    // Si no se pasa `end`, usamos el `length` del arreglo original
    if (end === undefined) end = this.length;

    // Si `begin` es negativo, lo ajustamos con respecto al final del arreglo
    if (begin < 0) begin = Math.max(0, this.length + begin);

    // Si `end` es negativo, lo ajustamos con respecto al final del arreglo
    if (end < 0) end = Math.max(0, this.length + end);

    // Recorremos los elementos desde `begin` hasta `end` (sin incluir `end`)
    for (let i = begin; i < end; i++) {
        newArray[newArray.length] = this[i];  // Copiamos el elemento
        newArray.length++;  // Incrementamos el tamaño del nuevo arreglo
    }

    return newArray;
};

console.log('TEST Arroz.prototype.slice');

// Creamos el arreglo de trenes
const trenes = new Arroz();
trenes[0] = 'Talgo';
trenes[1] = 'Alvia';
trenes[2] = 'Ave';
trenes[3] = 'Renfe Cercanías';
trenes[4] = 'Renfe Media Distancia';
trenes[5] = 'Tren Ligero';
trenes[6] = 'Tren de Levitación Magnética';
trenes.length = 7;

// Ejemplo 1: Slice(1, 4) - Desde el índice 1 hasta el índice 4 (sin incluir el índice 4)
const slice1 = trenes.slice(1, 4);
console.log('Ejemplo 1: slice(1, 4)');
console.log(slice1);  // [ 'Alvia', 'Ave', 'Renfe Cercanías' ]
console.log(slice1.length);  // 3

// Ejemplo 2: Slice(2, 5) - Desde el índice 2 hasta el índice 5 (sin incluir el índice 5)
const slice2 = trenes.slice(2, 5);
console.log('Ejemplo 2: slice(2, 5)');
console.log(slice2);  // [ 'Ave', 'Renfe Cercanías', 'Renfe Media Distancia' ]
console.log(slice2.length);  // 3

// Ejemplo: Slice(-6, -3) - Desde el índice -6 hasta el índice -3 (sin incluir el índice -3)
const slice3 = trenes.slice(-6, -3);
console.log('Ejemplo: slice(-6, -3)');
console.log(slice3);  // [ 'Alvia', 'Ave', 'Renfe Cercanías' ]
console.log(slice3.length);  // 3

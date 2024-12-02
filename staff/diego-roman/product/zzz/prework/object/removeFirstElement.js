/*
    array.shift()
    elimina el primer elemento y lo devuelve, modificando la longitud
*/

function removeFirstElement(object) {
    // Guardar el valor de la primera propiedad que vamos a eliminar -> colores[0] <-
    var result = object[0];
    
    // Mover todas las propiedades una posición hacia atrás
    for (var i = 0; i < object.length - 1; i++) {
        object[i] = object[i + 1]; // Desplazar los elementos hacia atrás
    }
    
    // Eliminar la última propiedad que quedó duplicada
    delete object[object.length - 1];
    
    // Actualizar la propiedad length -> colores.length
    object.length--;

    // Devolver el primer elemento eliminado
    return result;
}

var colores = {
    0: 'rojo',
    1: 'azul',
    2: 'verde',
    length: 3
}

/*
Resultado esperado al eliminar el primer color ('rojo'):
    colores = {
        0: 'azul',
        1: 'verde',
        length: 2
    }
*/

console.log('colores antes de eliminar el primero:', colores);

console.log('Primer color eliminado:', removeFirstElement(colores));

console.log('colores después de eliminar el primero:', colores);

/*
Resultado esperado al eliminar el primer color nuevamente ('azul'):
    colores = {
        0: 'verde',
        length: 1
    }
*/

console.log('Segundo color eliminado:', removeFirstElement(colores));

console.log('colores después de eliminar dos elementos:', colores);

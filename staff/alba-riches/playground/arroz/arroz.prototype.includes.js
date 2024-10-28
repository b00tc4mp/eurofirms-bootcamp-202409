
var Arroz = function () {
    this.length = 0;
};

// Método includes para buscar un elemento en el "arroz"
Arroz.prototype.includes = function (searchElement, fromIndex) {
    // Manejar caso donde fromIndex no está definido
    if (fromIndex === undefined) {
        fromIndex = 0; // Iniciar desde el inicio
    } else if (fromIndex < 0) {
        fromIndex = Math.max(this.length + fromIndex, 0); // Ajustar el índice si es negativo
    }

    // Iterar a través del "arroz" para buscar el elemento
    for (var i = fromIndex; i < this.length; i++) {
        var element = this[i];
        if (element === searchElement) return true; // Retorna true si se encuentra el elemento
    }

    return false; // Retorna false si no se encuentra
};

// Pruebas
console.log('TEST Arroz.prototype.includes');
console.log('CASE check mobile brands includes Nokia');

var mobileBrands = new Arroz();
mobileBrands[0] = 'Apple';
mobileBrands[1] = 'Samsung';
mobileBrands[2] = 'Huawei';
mobileBrands[3] = 'Xiaomi';
mobileBrands.length = 4;

var contains = mobileBrands.includes('Nokia');
console.log(contains); // false


console.log('TEST Arroz.prototype.includes');
console.log('CASE check mobile brands includes Nokia');

var mobileBrands = new Arroz();
mobileBrands[0] = 'Apple';
mobileBrands[1] = 'Samsung';
mobileBrands[2] = 'Huawei';
mobileBrands[3] = 'Xiaomi';
mobileBrands[4] = 'Nokia'; // Se ha añadido
mobileBrands.length = 5;

var contains = mobileBrands.includes('Nokia');
console.log(contains); // true

console.log('TEST Arroz.prototype.includes');
console.log('CASE check mobile brands includes Apple ');

var mobileBrands = new Arroz();
mobileBrands[0] = 'Apple';
mobileBrands[1] = 'Samsung';
mobileBrands[2] = 'Huawei';
mobileBrands[3] = 'Xiaomi';
mobileBrands[4] = 'Nokia';
mobileBrands.length = 5;

var contains = mobileBrands.includes(' Apple ');
console.log(contains); // true




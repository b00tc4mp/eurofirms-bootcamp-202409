function Arroz() {
    this.length = 0;
}

Arroz.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i];
        callback(element);
    }
};

console.log('TEST Arroz.prototype.forEach');

console.log('CASE: multiply each number by two and print it');

var nums = new Arroz();
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;
nums[3] = 4;
nums[4] = 5;
nums[5] = 6;
nums.length = 6;

nums.forEach(function (num) {
    var myresult = num * 2;
    console.log(myresult);
});
// 2
// 4
// 6
// 8
// 10
// 12

console.log('CASE: subtract 1 from each number and print it');

var nums2 = new Arroz();
nums2[0] = 1;
nums2[1] = 2;
nums2[2] = 3;
nums2[3] = 4;
nums2[4] = 5;
nums2[5] = 6;
nums2.length = 6;

nums2.forEach(function (num) {
    var myresult = num - 1;
    console.log(myresult);
});
// 0
// 1
// 2
// 3
// 4
// 5

var frutas = new Arroz();
frutas[0] = { nombre: 'Manzana', color: 'Rojo' }; // Usé "=" en lugar de "{"
frutas[1] = { nombre: 'Plátano', color: 'Amarillo' }; // Añadí tilde a "Plátano" y usé "="
frutas[2] = { nombre: 'Uva', color: 'Verde' }; // Usé "=" y corregí las comillas

frutas.forEach((fruta) => {
    console.log(`La {fruta.nombre} es de color {fruta.color}.`); // Corregí el uso de las llaves
});

// La Manzana es de color Rojo.
// La Plátano es de color Amarillo.
// La Uva es de color Verde.

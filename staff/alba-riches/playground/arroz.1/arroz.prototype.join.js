var Arroz = function () {
    this.length = 0;
};

// Poner entre comillas de qué manera queremos separar un arroz de otro
Arroz.prototype.join = function (separator = ", ") {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i];
        if (i < this.length - 1) {
            result += separator;
        }
    }
    return result;
};

// Primer ejemplo de arroz
let arroz = new Arroz();

arroz[0] = 2;
arroz[1] = 4;
arroz[2] = 6;
arroz[3] = 8;
arroz[4] = 10;
arroz[5] = 12;
arroz.length = 6;

console.log('TEST Arroz.prototype.join');
console.log("CASE return a string with all elements of an object");
console.log(arroz.join()); // "2,4,6,8,10,12"
console.log(arroz.join('')); // "24681012"
console.log(arroz.join('-')); // "2-4-6-8-10-12"

// Segundo ejemplo de arroz
let arroz2 = new Arroz();

arroz2[0] = 'chalet';
arroz2[1] = 'loft';
arroz2[2] = 'duplex';
arroz2[3] = 'piso';
arroz2[4] = 'adosado';
arroz2.length = 5;

console.log('TEST Arroz.prototype.join');
console.log("CASE return a string with all elements of an object");
console.log(arroz2.join()); // "chalet,loft,duplex,piso,adosado"
console.log(arroz2.join('')); // "chaletloftduplexpisoadosado"
console.log(arroz2.join('-')); // "chalet-loft-duplex-piso-adosado"

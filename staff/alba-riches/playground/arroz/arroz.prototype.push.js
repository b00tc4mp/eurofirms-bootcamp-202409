console.log('TEST Arroz.prototype.push');

console.log('CASE: add KPMG to companies');

class Arroz {
    constructor() {
        this.length = 0;
    }

    push(element) {
        this[this.length] = element;
        this.length++;
        return this.length;
    }
}

const companies = new Arroz();
companies[0] = 'Orange';
companies[1] = 'Bankinter';
companies[2] = 'Cepsa';
companies[3] = 'Normon';
companies[4] = 'Iberdrola';
companies.length = 5;

let length = companies.push('KPMG');
console.log(companies);
// { '0': 'Orange', '1': 'Bankinter', '2': 'Cepsa', '3': 'Normon', '4': 'Iberdrola', '5': 'KPMG', length: 6 } 


console.log('CASE: add 3 elements 0333JPT, 7168KSD, 5931KJB to CarLicensePlate');
const CarLicensePlate = new Arroz();

CarLicensePlate[0] = '1267FJS';
CarLicensePlate[1] = '1200DRT';
CarLicensePlate[2] = '9088TYJ';
CarLicensePlate[3] = '2043SQW';
CarLicensePlate[4] = '0076MNL';
CarLicensePlate[5] = '0399GJH';
CarLicensePlate[6] = '4108BRS';
CarLicensePlate.length = 7;

CarLicensePlate.push('0333JPT');
CarLicensePlate.push('7168KSD');
CarLicensePlate.push('5931KJB');

console.log(CarLicensePlate);

length = CarLicensePlate.push('0333JPT', '7168KSD', '5931KJB');
console.log(CarLicensePlate);
// Arroz { 0: '1267FJS', 1: '1200DRT', 2: '9088TYJ', 3: '2043SQW', 4: '0076MNL', 5: '0399GJH', 6: '4108BRS', 7: '0333JPT', 8: '7168KSD', 9: '5931KJB', length: 10 }
console.log(length); // 10

// Otra constructora para poder añadir varios elementos a la vez
class Arroz {
    constructor() {
        this.length = 0;
    }

    push(...elements) {
        for (let element of elements) {
            this[this.length] = element;
            this.length++;
        }
        return this.length;
    }
}

console.log('CASE: add 3 elements 0333JPT, 7168KSD, 5931KJB to CarLicensePlate');
const CarLicensePlate2 = new Arroz();

CarLicensePlate2[0] = '1267FJS';
CarLicensePlate2[1] = '1200DRT';
CarLicensePlate2[2] = '9088TYJ';
CarLicensePlate2[3] = '2043SQW';
CarLicensePlate2[4] = '0076MNL';
CarLicensePlate2[5] = '0399GJH';
CarLicensePlate2[6] = '4108BRS';
CarLicensePlate2.length = 7;

length = CarLicensePlate2.push('0333JPT', '7168KSD', '5931KJB');
console.log(CarLicensePlate2);
// Arroz { 0: '1267FJS', 1: '1200DRT', 2: '9088TYJ', 3: '2043SQW', 4: '0076MNL', 5: '0399GJH', 6: '4108BRS', 7: '0333JPT', 8: '7168KSD', 9: '5931KJB', length: 10 }
console.log(length); // 10

console.log('CASE: add 4 elements in one call');

const city = new Arroz();
city[0] = 'Roma';
city[1] = 'Madrid';
city[2] = 'Londres';
city[3] = 'Bruselas';
city[4] = 'Lisboa';
city.length = 5;

length = city.push('Belgrado', 'Ciudad del Cabo', 'San Francisco', 'Duala');
console.log(city);
// Arroz { 0: 'Roma', 1: 'Madrid', 2: 'Londres', 3: 'Bruselas', 4: 'Lisboa', 5: 'Belgrado', 6: 'Ciudad del Cabo', 7: 'San Francisco', 8: 'Duala', length: 9 }


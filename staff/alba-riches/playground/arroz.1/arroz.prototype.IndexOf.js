console.log('TEST Array.prototype.indexOf');

console.log('CASE get index of mango');

const fruits = new Arroz();
fruits[0] = 'dragon fruit';
fruits[1] = 'mango';
fruits[2] = 'papaya';
fruits[3] = 'kiwi';
fruits[4] = 'mango';
fruits.length = 5;

const index = fruits.indexOf('mango');
console.log(index);
// 1

console.log('CASE get index of mango starting at index 2');

const fruits2 = new Arroz();
fruits2[0] = 'dragon fruit';
fruits2[1] = 'mango';
fruits2[2] = 'papaya';
fruits2[3] = 'kiwi';
fruits2[4] = 'mango';
fruits2.length = 5;

const index2 = fruits2.indexOf('mango', 2);
console.log(index2);
// 4

console.log('CASE get index of lychee');

const fruits3 = new Arroz();
fruits3[0] = 'dragon fruit';
fruits3[1] = 'mango';
fruits3[2] = 'papaya';
fruits3[3] = 'kiwi';
fruits3[4] = 'mango';
fruits3.length = 5;

const index3 = fruits3.indexOf('lychee');
console.log(index3);
// -1

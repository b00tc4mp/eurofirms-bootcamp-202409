/* Slice - Devuelve una copia de una parte del Array dentro de un nuevo Array 
   desde el inicio, sin incluir el fin. El Array original no se modificará.
*/

const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
const masculinos = nombres.slice(1, 3);  // Slice desde el índice 1 hasta el índice 3 (sin incluirlo)
console.log(masculinos);
// La respuesta esperada: [ 'Pedro', 'Miguel' ]

const clothes = ['dress', 'unisexShirt', 'unisexTrousers', 'unisexJacket', 'skirt'];
clothes.length = 5;  // Definimos la longitud del arreglo

const unisexClothes = clothes.slice(1, 3);  // Slice desde el índice 1 hasta el índice 3 (sin incluirlo)
console.log(unisexClothes);
// La respuesta esperada: [ 'unisexShirt', 'unisexTrousers' ]

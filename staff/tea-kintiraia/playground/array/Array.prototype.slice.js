Array.prototype.slice()

/* Slice-devuelve una copia de una parte del Array dentro de un nuevo Array desede el inicio, 
sin incluir el fin. El Array original no se modificará.
*/

var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var masculinos = nombres.slice(1, 3);
console.log(masculinos)
//La respuesta esperada [ 'Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa]


var clothes = ['dress', 'unisexShirt', 'unisexTrousers', 'unisexJacket', 'skirt'] ;
clothes.length = 5
var unisexClothes = clothes.slice(1, 3)
console.log(unisexClothes)
//La respuesta esperada [ 'unisexShirt', 'unisexTrousers', length: 2]

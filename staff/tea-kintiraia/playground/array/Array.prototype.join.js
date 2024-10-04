Array.prototype.join()

const elements = ['Sea', 'River', 'Ocean'];

console.log(elements.join());
//La respuesta esperada-> 'Sea,River, Ocean'

console.log(elements.join(''));
//La respuesta esperada -> 'SeaRiverOcean'

console.log(elements.join('-'));
//La respuetsa esperada -> 'Sea-River-Ocean'

console.log(elements.join('//'));
//La respuesta esperada -> 'Sea//River//Ocean'

class Arroz {
 constructor() { this.length = 0 }

slice() {
    /* The method 'Slice' extracts a portion of an array and returns it as a new array.
    It does not modify the original array. 
    The method takes two optional arguments: start and end.
    */
    //En unisexCloses tenemos que empezar por en índice 0
    //El ciclo for tiene que terminar en end
    //Tienes que manejar la propiedad length
    const unisexCloses = new Arroz
    for ( let i = begin; i< this.length; i++)  {
        unisexCloses[i] = this[i]
    }
    return unisexCloses;
}
}

console.log('CASE extracts a portion from clothes')

{
const clothes = new Arroz

clothes[0] = 'dress',
clothes[1] = 'unisex-shirt',
clothes[2] = 'unisex-trousers',
clothes[3] = 'unisex-jacket',
clothes[4] = 'skirt'
clothes.length = 5
const unisexClothes = clothes.slice(2, 4)


console.log(unisexClothes)
//La respuesta esperada [ 0:'unisex-trousers', 1:'unisex-jacket']
console.log(unisexClothes.length)
//2

}
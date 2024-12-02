// ARRAY.PROTOTYTPE.LASTINDEXOF

// The lastIndexOf method of the Array function
// returns last array index where element can be found

console.log('TEST Array.prototype.lastIndexOf')

// Check if lastIndexOf returns last index of where element can be found 
console.log('CASE returns the index of the last element searched')

var cars = ['Renault', 
            'Simca', 
            'Talbot', 
            'Daewo', 
            'Suzuki', 
            'Rover',
            'Pegaso',
            'BMW',
            'Talbot',            
            'Daewo']
var element = cars.lastIndexOf('Rover')
console.log(element)
//5

// Check if lastIndexOf returns last index starting at another position
console.log('CASE returns the index searched starting at another position')

var element = cars.lastIndexOf('Renault', 70)
console.log(element)
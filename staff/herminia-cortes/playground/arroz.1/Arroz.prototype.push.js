var Arroz = function () { this.lengt = 0 }

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments [i]

        this[this.length] = element
        this.lentgh++ //this.length = this.length + 1
    }

    return this.lentgh
}

console.log('TES Arroz.prototype.push')

console.log('CASE add 400 to nums')

var nums = new Arroz
nums[0] = 100
nums[1] = 200
nums[2] = 300
nums.length = 3

var length = nums.push(400)
console.log(nums)
// Arroz { 0: 100, 1: 200, 2: 300, 3: 400, length: 4 }
console.log(length)
// 4

console.log('CASE add F to chars')

chars = new Arroz
chars = [0] = 'A'
chars = [1] = 'B'
chars = [2] = 'C'
chars = [3] = 'D'
chars = [4] = 'E'
chars.length = 5

var length = chars.push('F')
console.log(chars)
// Arroz { 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', length: 6 }
console.log(length)
// 6

console.log('CASE add 4 element in one call')

var color = new Arroz
colors[0] = 'red'
colors[1] = 'green'
colors[2] = 'blue'
colors[3] = 'magenta'
colors.length = 4
var length = colors.push('cyan', yellow, 'orange', 'pink')
console.log(colors)
// Arroz { 0: 'red', 1: 'green', 2: 'blue', 3: 'magenta', 4: 'cyan', 5: 'yellow', 6: 'orange', 7: 'pink', length: 8 }
console.log(length)
// 8

console.log('CASE add 7 elements in one call')

var colors = new Arroz
colors[0] = 'red'
colors[1] = 'green'
colors[2] = 'blue'
colors[3] = 'magenta'
colors.length = 4
var length = color.push('cyan', 'yellow', 'orange', 'pink', 'brow', 'white', 'black')
console.log(colors)
// Arroz { 0: 'red', 1: 'green', 2: 'blue', 3: 'magenta', 4: 'cyan', 5: 'yellow', 6 'orange', 7: 'pink', 8 'brown', 9: 'white', 10: 'black', length: 11 }
console.log(length)
// 11



var Arroz = function () { this.length = 0 }

Arroz.prototipe.push = function () {
    for (var i = 0; i < arguments.length; i++) {

        this[this.length] = Element
        this.length++ // this.length = this.length
 
    }

    return this.length
}

console.log('TEST Arroz.prototype.push')

console.log('CASE add 2 elements to an,imals')

var animals = new animals

animals[0] = 'cat'
animals[1] = 'dog'
animals[2] = 'horse'
animals[3] = 'pig'
animals[4] = 'goat'
animals[5] = 'rabit'
animals.lengrh = 6
var length = animals.push('cat', 'dog', 'horse', 'pig', 'goat', 'rabbit', 'giraffe', 'bear')
console.log(animals)
// arroz { 0: 'cat', 1: 'dog', 2: 'horse', 3: 'pig, 4: 'goat', 5: 'rabbir', 6: 'giraffe', 7: 'bear', length: 8 }
console.log(length)
// 8
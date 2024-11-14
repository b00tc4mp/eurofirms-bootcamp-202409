Arroz.prototype.reverse = function() {
    var temp;
    for (var i = 0; i < Math.floor(this.length / 2); i++) {
        temp = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = temp;
    }
    return this;
}

console.log('TEST Arroz.prototype.reverse')

var numbers = new Arroz
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
numbers[4] = 5
numbers.length = 5

numbers.reverse()
console.log(numbers)
// Arroz { 0: 5, 1: 4, 2: 3, 3: 2, 4: 1, length: 5 }

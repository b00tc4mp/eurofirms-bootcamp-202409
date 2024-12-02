Arroz.prototype.fill = function(value, start = 0, end = this.length) {
    for (var i = start; i < end; i++) {
        this[i] = value;
    }
    return this;
}

console.log('TEST Arroz.prototype.fill')

var letters = new Arroz
letters[0] = 'a'
letters[1] = 'b'
letters[2] = 'c'
letters[3] = 'd'
letters[4] = 'e'
letters.length = 5

letters.fill('x', 1, 4)
console.log(letters)
// Arroz { 0: 'a', 1: 'x', 2: 'x', 3: 'x', 4: 'e', length: 5 }

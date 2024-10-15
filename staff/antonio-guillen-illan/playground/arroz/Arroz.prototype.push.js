var Arroz = function () { this.length = 0 }

Arroz.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        var element = argument[i]

        this[this.length] = element
        this.length++ //this.length = this.length + 1
    }

    return thid.length
}

console.log('TEST Arroz.prototype.push')

console.log('CASE add 400 to nums')
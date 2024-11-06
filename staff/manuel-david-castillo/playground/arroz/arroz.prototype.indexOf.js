var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (element, indexToStart = 0) {
    if (indexToStart < 0) {
        indexToStart = this.length + indexToStart;

        if (indexToStart < 0) {
            indexToStart = 0
        }
    }

    for (let i = indexToStart; i < this.length; i++) {
        if (this[i] === element) {
            return element
        }
    }

    return -1
}

var dogs = new Array();
dogs[0] = 'Labrador Retriever';
dogs[1] = 'Bulldog';
dogs[2] = 'Golden Retriever';
dogs[3] = 'Bulldog';
dogs[4] = 'Beagle';
dogs.length = 5;

console.log("CASE1 get the index of Labrador Retriever")
var index1 = dogs.indexOf("Labrador Retriever")
console.log(index1)

console.log("CASE2 get the index of Bulldog")
var index2 = dogs.indexOf("Bulldog")
console.log(index2)

console.log("CASE3 get the index of Bulldog as from index 2")
var index3 = dogs.indexOf("Bulldog", 2)
console.log(index3)

console.log("CASE4 get the index of Beagle as from index -1")
var index4 = dogs.indexOf("Beagle", -1)
console.log(index4)

console.log("CASE5 get -1 becasue it's not able to find the element")
var index5 = dogs.indexOf("American Standfor")
console.log(index5)
var numbers = [0, 1, 2, 3, 4, 5, 6]

var pairnumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log(pairnumbers)

var numbersmore3 = numbers.filter(function (number) {
    if (number % 3 === 0 && number != 0) {
        return true
    } else {
        return false
    }
})

console.log(numbersmore3)
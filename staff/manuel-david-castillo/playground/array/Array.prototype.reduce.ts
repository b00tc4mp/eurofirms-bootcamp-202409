console.log("Method reduce")

console.log("CASE with numbers")

var numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var total: number = numbers.reduce(function (previusValue: number, currentValue: number) {
    return previusValue + currentValue;
})

console.log(total)

console.log("CASE with arrays")

var arrays: number[][] = [[1, 2], [3, 4], [5, 6]]

var bigArray = arrays.reduce(function (previusValue: number[], currentValue: number[]) {
    return previusValue.concat(currentValue);
})

console.log(bigArray)

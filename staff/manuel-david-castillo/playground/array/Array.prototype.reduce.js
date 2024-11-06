console.log("Method reduce");
console.log("CASE with numbers");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = numbers.reduce(function (previusValue, currentValue) {
    return previusValue + currentValue;
});
console.log(total);
console.log("CASE with arrays");
var arrays = [[1, 2], [3, 4], [5, 6]];
var bigArray = arrays.reduce(function (previusValue, currentValue) {
    return previusValue.concat(currentValue);
});
console.log(bigArray);

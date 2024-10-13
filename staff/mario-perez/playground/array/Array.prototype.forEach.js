// El método forEach() ejecuta la función indicada una vez por cada elemento del array. 

console.log('TEST Array.prototype.forEach')

console.log("CASE show all elements of array")

var arr = [100, 200, 300, 400, 300, 800, 800]

//function

var callBackFunction = function (element, index, array) {
    console.log("In the array [" + array + "] , Index " + index + " have a value: " + element)
}

arr.forEach(callBackFunction)
console.log('TEST Arroz.prototype.forEach')

class Arroz {
    constructor() {
        this.length = 0
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            let element = this[i]

            callback(element)
        }

    }
}

const nums = new Arroz();
nums[0] = 1
nums[1] = 2
nums[2] = 3
nums[3] = 4
nums[4] = 5
nums[5] = 6
nums.length = 6


console.log('CASE 1 -> multiply each number by itself and print it')

{
    nums.forEach(function (num) {
        let result = num * num
        console.log(result)
    })
    // expected output -> 1, 4, 9, 16, 25, 36
}

console.log('CASE 2: add 10 to each number')
{

    nums.forEach(function (num) {
        let result = num + 10
        console.log(result)
    })
    // expected output -> 11, 12, 13, 14, 15, 16
}

console.log('CASE 3: add all numbers')

{
    let result = 0

    nums.forEach(function (num) {
        //result = result + num, es igual que:
        result += num

    })


    console.log(result)
    // expected output -> 21
}

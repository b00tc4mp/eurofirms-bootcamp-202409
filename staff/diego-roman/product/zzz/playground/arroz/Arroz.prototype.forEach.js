class Arroz {
    constructor() {
        this.length = 0
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            const element = this[i]

            callback(element)
        }
    }
}

console.log('TEST Arroz.prototype.forEach')

console.log('CASE multiply each number by itself and print it')

{
    const nums = new Arroz
    nums[0] = 1
    nums[1] = 2
    nums[2] = 3
    nums[3] = 4
    nums[4] = 5
    nums[5] = 6
    nums.length = 6
    nums.forEach(function (num) {
        const res = num * num

        console.log(res)
    })
    // 1
    // 4
    // 9
    // 16
    // 25
    // 36
}

console.log('CASE add 10 to each number and print it')

{
    const nums = new Arroz
    nums[0] = 1
    nums[1] = 2
    nums[2] = 3
    nums[3] = 4
    nums[4] = 5
    nums[5] = 6
    nums.length = 6
    nums.forEach(function (num) {
        const res = num + 10

        console.log(res)
    })
    // 11
    // 12
    // 13
    // 14
    // 15
    // 16
}

console.log('CASE add all numbers')

{
    const nums = new Arroz
    nums[0] = 1
    nums[1] = 2
    nums[2] = 3
    nums[3] = 4
    nums[4] = 5
    nums[5] = 6
    nums.length = 6
    let res = 0
    nums.forEach(function (num) {
        //res = res + num
        res += num
    })
    console.log(res)
    // 21
}
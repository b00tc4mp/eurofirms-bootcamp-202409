console.log('TEST Arroz.prototype.push')

class Arroz {
    constructor() { this.length = 0 }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            let element = arguments[i]

            this[this.length] = element
            this.length++ // this.length = this.length + 1
        }
        return this.length
    }
}


console.log('CASE add 400 to nums')
{
    const nums = new Arroz
    nums[0] = 100
    nums[1] = 200
    nums[2] = 300
    nums.length = 3

    const length = nums.push(400)
    console.log(nums)
    // expected result -> Arroz { 0: 100, 1: 200, 2: 300, 3: 400, length: 4 }
    console.log(length)
    // expected result -> 4
}
console.log('CASE add F to chars')
{
    const chars = new Arroz
    chars[0] = 'A'
    chars[1] = 'B'
    chars[2] = 'C'
    chars[3] = 'D'
    chars[4] = 'E'
    chars.length = 5

    const length = chars.push('F')
    console.log(chars)
    // expected result -> Arroz { 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', length: 6 }
    console.log(length)
    // expected result -> 6
}
console.log('CASE add many elements in one call')
{
    const colors = new Arroz
    colors[0] = 'red'
    colors[1] = 'green'
    colors[2] = 'blue'
    colors[3] = 'magenta'
    colors.length = 4
    const length = colors.push('cyan', 'yellow', 'orange', 'pink')
    console.log(colors)
    //expected result -> Arroz {0: 'red', 1: 'green', 2: 'blue', 3: 'magenta', 4: 'cyan', 5: 'yellow', 6: 'orange', 7: 'pink', length: 8 }
    console.log(length)
    //expected result -> 8
}
function Arroz() {
    this.length = 0;
}

Arroz.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let element = this[i];
        callback(element);
    }
};

console.log('TEST Arroz.prototype.forEach');

console.log('CASE: multiply each number by two and print it');

let nums = new Arroz();
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;
nums[3] = 4;
nums[4] = 5;
nums[5] = 6;
nums.length = 6;

nums.forEach(function (num) {
    let myresult = num * 2;
    console.log(myresult);
});
// 2
// 4
// 6
// 8
// 10
// 12

console.log('CASE: subtract 1 from each number and print it');

let nums2 = new Arroz();
nums2[0] = 1;
nums2[1] = 2;
nums2[2] = 3;
nums2[3] = 4;
nums2[4] = 5;
nums2[5] = 6;

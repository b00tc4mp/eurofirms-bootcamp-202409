Error
// ƒ Error() { [native code] }
TypeError
// ƒ TypeError() { [native code] }
ReferenceError
// ƒ ReferenceError() { [native code] }
SyntaxError
// ƒ SyntaxError() { [native code] }
RangeError
// ƒ RangeError() { [native code] }
var e = new TypeError('hello type error')

e
// TypeError: hello type error
//     at <anonymous>:1:9
e instanceof TypeError
// true
e instanceof Error
// true
e instanceof ReferenceError
// false

// custom error

class ValidationError extends Error {
    constructor(message) {
        super(message)
    }
}

var ve = new ValidationError('name is not string')

ve
// ValidationError: name is not string
// at < anonymous >: 7: 10
ve instanceof Error
// true
ve instanceof ValidationError
// true
ve instanceof TypeError
// false
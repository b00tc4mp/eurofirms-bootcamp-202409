function A() {
    console.log('A')

    return 1
}

function B() {
    console.log('B')

    return 0
}

A() && B()
// A
// B
0

B() && A()
// B
0

A() || B()
// A
1

B() || A()
// B
// A
1
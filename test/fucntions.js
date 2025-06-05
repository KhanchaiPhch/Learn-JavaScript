const myFunction_1 = (name) => {
    console.log(`Hello Mr. ${name}`)
}

const sum = (a, b) => {
    return a + b
}

const even = (number) => {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

// shortcut
const evens = (number) => number % 2 === 0


// myFunction_1('Khanchai')
// console.log(sum(10, 5))
// console.log(even(2))
// console.log(evens(3))
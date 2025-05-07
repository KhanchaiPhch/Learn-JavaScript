const numbers = [10, 20, 30, 40, 50];

// push pop ship unship
// numbers.push(60)
// console.log(numbers)
// // numbers.pop()
// console.log(numbers)
// numbers.unshift(9)
// console.log(numbers)

//filter and return Do Not Change Value
const filters = numbers.filter((e, index) => {
    if (e >= 30) {
        return `${index} ${e}`
    }
})
// console.log(filters)

//Do Change Value
const maps = numbers.map((e, index) => {
    return e += 2
})
// console.log(maps)

//sum of Array once value
const reduces = numbers.reduce((sum, n,) => {
    return sum + n
}, 0)
// console.log(reduces)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// console.log(fruits)

const consoles = numbers.forEach((e, index) => {
    return `${index + 1} : ${e}`
})
console.log(consoles)
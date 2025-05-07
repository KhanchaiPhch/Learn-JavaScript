const test = (n) => {
    if (n == 0) {
        return "0! = " + 1
    } else {
        let fact = 1
        for (let i = 1; i <= n; i++) {
            fact *= i
        }
        return fact
    }
}
// console.log(test(5)) 

const sum = (n) => {
    let sum = n * (n + 1) / 2
    return sum
};

// console.log(sum(100))

// const calculateN = (n) => {
//     let num = []
//     for (let i = 1; i <= n; i++) {
//         num.push(i)
//     }
//     return num
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`For Loop ${i}`)
// }

// let count = 1
// let counts = 1
// while (count <= 5) {
//     console.log(`While Loop ${count}`)
//     count++
// }
// do {
//     console.log(`Do While Loop ${counts}`)
//     counts++
// } while (counts <= 5)

const printEven = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    return sum
}
// console.log(`Resulte printEven: ${printEven(10)}`)

const sumOdd = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            sum += i
        }
    }
    return sum
}
// console.log(`Resulte sumOdd : ${sumOdd(10)}`)

const MultiplicationTable = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 12; j++) {
            console.log(`${i} x ${j} = ${i * j}`)
        }
        console.log(`------------`)
    }
}
// MultiplicationTable(3)

//ต่อกัน
const forLoops = (n) => {
    let star = ''
    for (let i = 1; i <= n; i++) {
        star = ''
        //              1    1
        for (let j = 1; j <= i; j++) {
            star += '*'
            // star = star + '*'
        }
        console.log(star)
    }
    for (let i = n - 1; i >= 1; i--) {
        star = ''
        //              1    4
        for (let j = 1; j <= i; j++) {
            star += '*'
        }
        console.log(star)
    }
}
// forLoops(5)

// กลับหัว
const forLoop = (n) => {
    let star = ''
    for (let i = n; i >= 1; i--) {
        star = ''
        //              1    5
        for (let j = 1; j <= i; j++) {
            star += '*'
        }
        console.log(star)
    }
}
// forLoop(6)

const printStar = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}

// printStar(6)

const Test = (n) => {
    let star = ''
    for (let i = 1; i <= n; i++) {
        star = ''
        for (let j = 1; j <= n - i; j++) {
            //ทำสิ่งนี้จนเท่ากับ j <= n -1 = คือ (j = 1)-(n = 5) = 1 - 4 
            star += ' '
            //สร้างช่องว่าง 4 ช่องในรอบแรก
        }
        for (let k = 1; k <= i; k++) {
            star += '*'
        }
        console.log(star)
    }
}
// Test(5)

// กลับหัวชิดขวา
const test2 = (n) => {
    let star = ''
    //           5  5 >= 1 true 
    for (let i = n; i >= 1; i--) {
        star = ''
        //              1 <= 5 - 5 || 0 ทำสิ่งนี้ตามจำนวน  n - i
        for (let j = 1; j <= n - i; j++) {
            star += ' '
        }
        //              1 <= 5 true     
        for (let k = 1; k <= i; k++) {
            star += '*'
        }
        console.log(star)
    }
}
// test2(5)

//กลับหัวชิดซ้าย
const test3 = (n) => {
    let star = ''
    for (let i = n; i >= 1; i--) {
        star = ''
        for (let k = 1; k <= i; k++) {
            star += '*'
        }
        console.log(star)
    }
}
// test3(5)

const test4 = (n) => {
    let star = ''
    for (let i = n; i >= 1; i--) {
        star = ''
        for (let j = 1; j <= n - i; j++) {
            star += ' '
        }
        for (let k = 1; k <= i; k++) {
            star += '*'
        }
        console.log(star)
    }
}
// test4(5)


const test5 = (number) => {
    let star = ''
    for (let i = 1; i <= number; i++) {
        star = ''
        for (let j = 1; j <= i; j++) {
            star += '*'
        }
        console.log(star)
    }
}
// test5(5)

const test6 = (num) => {
    let star = ''
    for (let i = num; i >= 1; i--) {
        star = ''
        for (let j = 1; j <= i; j++) {
            star += '*'
        }
        console.log(star)
    }
}
// test6(5)
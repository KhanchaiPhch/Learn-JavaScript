const users = [
    { name: "Aom", age: 25, active: true },
    { name: "Aam", age: 12, active: true },
    { name: "Aim", age: 21, active: true },
    { name: "Aom", age: 17, active: false },
    { name: "Bank", age: 30, active: false },
    { name: "Chai", age: 22, active: true },
    { name: "Dew", age: 28, active: false }
];

const filters = users
    .filter((e, index) => {
        if (e.active === true) {
            return e.active
        }
    })
    .map((e) => {
        return e.name
    })
// console.log(filters)

// shortcut
const filTers = users
    .filter(e => e.active)
    .map(e => e.name)

// console.log(filTers)

const age_23 = users.some((e) => {
    return e.age < 23
})
// console.log(age_23)

const ageSum = users.reduce((sum, e) => {
    return sum += e.age
}, 0)
// console.log(ageSum)

const ageLimit = users.sort((a, b) => {
    return a.age - b.age
})
// console.log(ageLimit)



// 5.const dewFind = users.find(e => e.name === `Dew`)
// if (dewFind) {
//     console.log(dewFind.active ? `Dew is Active` : `Dew is not Active`)
// } else {
//     console.log(`Dew is not found`)
// }
// console.log(dewFind)

const usersTest = [
    {
        name: "Aom",
        age: 29,
        active: true,
        hobbies: ["reading", "cooking"],
        address: {
            city: "Bangkok",
            zip: 10200
        }
    },
    {
        name: "Aam",
        age: 12,
        active: true,
        hobbies: ["drawing", "cycling"],
        address: {
            city: "Chiang Mai",
            zip: 50000
        }
    },
    {
        name: "Aim",
        age: 21,
        active: true,
        hobbies: ["gaming", "coding"],
        address: {
            city: "Bangkok",
            zip: 10110
        }
    },
    {
        name: "Aom",
        age: 17,
        active: false,
        hobbies: ["coding"],
        address: {
            city: "Phuket",
            zip: 83000
        }
    }
];
//ใช้ filter ก่อน map สิ่งที่ได้จากการ filter คือ Object ทั้งก้อนของข้อมูลของสิ่งที่ผ่านเงื่อนไข
//หลังจากนั้นใช้ map เพื่อเปลี่ยนเเปลงข้อมูล เช่น แสดงแค่ชื่อสิ่งที่ได้จากการ map คือ array ที่มีการเปลี่ยนแปลง
//includes() ใช้ตรวจสอบว่า "ค่า" นั้น มีอยู่ใน array หรือไม่
const hob = usersTest.filter((e) => {
    return e.hobbies.includes(`coding`)
}).map((e) => {
    return e.name
})
// console.log(hobbie)

const levelOne = usersTest
    .filter(e => e.active === true)
    .filter(e => e.address.city === `Bangkok`)
    .filter(e => e.hobbies.length >= 2)


const nameCity = usersTest.map((e) => {
    return {
        name: e.name,
        city: e.address.city,
        hobbies: e.hobbies
    }
})
// console.log(nameCity)

//สร้าง array ของชื่อคนที่มี age >= 18 และอยู่ Bangkok
const ageCity = usersTest.filter((e) => {
    return e.age >= 18 && e.address.city === 'Bangkok'
})
    .map((e) => {
        return e.name
    })
// console.log(ageCity)

// หาค่าเฉลี่ยของอายุของผู้ที่ active เท่านั้น
const average = usersTest.filter((e) => {
    return e.active === true
})

const sum = average
    .reduce((sum, i) => {
        return i.age + sum
    }, 0)

const sumages = sum / average.length

// console.log(sumages)

// สร้าง array ของ object ใหม่ ที่มีแค่ { name, zip, hobbiesCount }
const newArray = usersTest.map((e) => {
    return {
        name: e.name,
        zip: e.address.zip,
        hobbies: e.hobbies.length
    }
})
// console.log(newArray)


// หาคนที่มี hobby เป็น "coding" แล้ว return ข้อความว่า
// "ชื่อ - อยู่จังหวัด - อายุ" อ้าวพี่ คนละข้อนิ
const ascz = usersTest.filter((e) => {
    return e.hobbies.includes('coding')
})
    .map((e) => {
        // console.log(`name : ${e.name}, address : ${e.address.city}, age : ${e.age}`)
        return {
            name: e.name,
            city: e.address.city,
            age: e.age
        }
    })
// console.log(ascz)


const oldEst = usersTest.reduce((max, current) => {
    return current.age > max.age ? current : max
}, usersTest[0])
    .map((e) => {
        return {
            name: e.name,
            age: e.age
        }
    })
console.log(oldEst)

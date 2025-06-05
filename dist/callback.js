"use strict";
const greeting = (naem) => {
    console.log(`Welcome to Thailand ${naem}`);
};
const callname = (callback) => {
    let myname = "Khanchai";
    callback(myname);
};
const newUser = (users) => {
    console.log(`name: ${users.name} age: ${users.age} status: ${users.active === true ? "Active" : "Unactive"}`);
};
const person = {
    name: "Khanchai",
    age: 24,
    active: true
};
const userNew = (e) => {
    return Object.assign({}, e);
};
const showuser = userNew(person);
// console.log(showuser)
// 1
const userName = {
    username: "Khanchai",
    age: 24
};
console.log(userName);
//2
// ห
//3
const greetUser = (name) => {
    return `Hello ${name}!`;
};
const showValue = greetUser("John");
console.log(showValue);
const printUserInfo = (user) => {
    return (`${user.name} อายุ:${user.age} (สถานะ:${user.active === true
        ? "open user"
        : "close user"})`);
};
const persons = { name: "john", age: 23, active: true };
const display = printUserInfo(persons);
console.log(display);
const myArray = [
    {
        name: "Test1",
        price: 10,
        inStock: true,
        count: 10
    },
    {
        name: "Test2",
        price: 11,
        inStock: true,
        count: 11
    },
    {
        name: "Test3",
        price: 12,
        inStock: true,
        count: 12
    },
    {
        name: "Test4",
        price: 13,
        inStock: true,
        count: 13
    },
    {
        name: "Test5",
        price: 14,
        inStock: true,
        count: 14
    },
];
// const forE = myArray.forEach((e) => {
//     console.log(e)
// })
const newArray = myArray.map((e) => {
    return Object.assign(Object.assign({}, e), { price: e.price + 10, count: e.count + 100 });
});
// console.log(newArray)
const filters = myArray.filter((e) => e.price >= 12);
// console.log(filters)
const increasePriceBy = (n) => {
    return myArray.map((e) => {
        return Object.assign(Object.assign({}, e), { price: e.price + n });
    });
};
const getResult = increasePriceBy(10);
console.log(getResult);

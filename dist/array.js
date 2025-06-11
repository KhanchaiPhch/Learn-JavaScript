"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employees = [
    {
        id: 1,
        name: "khanchai",
        salary: 60000,
        phone: 111222
    },
    {
        id: 2,
        name: "pheatchat",
        salary: 60000,
        phone: 11211222
    },
];
employees.push({
    id: 3,
    name: "toey",
    salary: 75000,
    phone: 1123455
});
// (for of) Do loop element in Array
for (let e of employees) {
    console.log(`element of employee : ${JSON.stringify(e)}`);
}
// (for in) show index number in Array
for (let e in employees) {
    console.log(`index of employee : ${e}`);
}
//ทำให้อาเรย์เก็บค่าได้หลายตัว
// type arrayNew = (string | number | boolean)[]
const test = ["a", 1, true];
// console.log(test)

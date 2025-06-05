const users = [
    { name: "Aom", age: 25, active: true },
    { name: "Aam", age: 12, active: true },
    { name: "Aim", age: 21, active: true },
    { name: "Aom", age: 17, active: false },
    { name: "Bank", age: 30, active: false },
    { name: "Chai", age: 22, active: true },
    { name: "Dew", age: 28, active: false }
];

const newUser = users.some((e) => e.name === "Aim")

console.log(newUser)

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var greeting = function (naem) {
    console.log("Welcome to Thailand ".concat(naem));
};
var callname = function (callback) {
    var myname = "Khanchai";
    callback(myname);
};
var newUser = function (users) {
    console.log("name: ".concat(users.name, " age: ").concat(users.age, " status: ").concat(users.active === true ? "Active" : "Unactive"));
};
var person = {
    name: "Khanchai",
    age: 24,
    active: true
};
var userNew = function (e) {
    return __assign({}, e);
};
var showuser = userNew(person);
// console.log(showuser)
// 1
var userName = {
    username: "Khanchai",
    age: 24
};
console.log(userName);
//2
// ห
//3
var greetUser = function (name) {
    return "Hello ".concat(name, "!");
};
var showValue = greetUser("John");
console.log(showValue);
var printUserInfo = function (user) {
    return ("".concat(user.name, " \u0E2D\u0E32\u0E22\u0E38:").concat(user.age, " (\u0E2A\u0E16\u0E32\u0E19\u0E30:").concat(user.active === true
        ? "open user"
        : "close user", ")"));
};
var persons = { name: "john", age: 23, active: true };
var display = printUserInfo(persons);
console.log(display);
var myArray = [
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
var newArray = myArray.map(function (e) {
    return __assign(__assign({}, e), { price: e.price + 10, count: e.count + 100 });
});
// console.log(newArray)
var filters = myArray.filter(function (e) { return e.price >= 12; });
// console.log(filters)
var increasePriceBy = function (n) {
    return myArray.map(function (e) {
        return __assign(__assign({}, e), { price: e.price + n });
    });
};
var getResult = increasePriceBy(10);
console.log(getResult);

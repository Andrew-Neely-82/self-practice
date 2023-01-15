"use strict";
// * Variables
// variables are the same as in JavaScript but with a few differences
// 1. variables are strongly typed (you can't change the type of a variable)
// 2. variables are block scoped (they are only available in the block they are declared in)
// 3. variables are immutable (you can't change the value of a variable)
let myName = "John Doe";
let myAge = 30;
let isMarried = false;
const myName2 = "John Doe";
const myAge2 = 30;
const isMarried2 = false;
// * Arrays
// arrays are the same as in JavaScript but with a few differences
// 1. arrays are strongly typed (you can't change the type of an array)
// 2. arrays are immutable (you can't change the value of an array)
let myArray = [1, 2, 3, 4, 5]; // this is the same as the next line
let myArray2 = [1, 2, 3, 4, 5]; // this is the same as the previous line
let myArray3 = ["one", "two", "three", "four", "five"];
let myArray4 = ["one", "two", "three", "four", "five"];
// * Tuples
// tuples are the same as in JavaScript but with a few differences
// 1. tuples are strongly typed (you can't change the type of a tuple)
// 2. tuples are immutable (you can't change the value of a tuple)
let myTuple = ["John Doe", 30];
let myTuple2 = ["John Doe", 30, false];
// * Enums
// enums are the same as in JavaScript but with a few differences
// 1. enums are strongly typed (you can't change the type of an enum)
// 2. enums are immutable (you can't change the value of an enum)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Red;
let myColor2 = Color.Green;
let myColor3 = Color.Blue;
// * Types
// TypeScript has a few built in types that are the same as in JavaScript
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. void
// 7. any
// 8. never
// * Functions
// functions are the same as in JavaScript but with a few differences
// 1. functions are strongly typed (you can't change the type of a function)
// 2. functions are immutable (you can't change the value of a function)
function calculateTax(income, taxYear = 2022) {
    if ((taxYear || 2022) < 2022) {
        return income * 0.2;
    }
    else {
        return income * 0.25;
    }
}
calculateTax(10000);
// * Objects
// objects are the same as in JavaScript but with a few differences
// 1. objects are strongly typed (you can't change the type of an object)
// 2. objects are immutable (you can't change the value of an object)
let employee = {
    id: 1,
    name: "John Doe",
    retire: (date) => {
        console.log(`retired on ${date}`);
    },
};
//# sourceMappingURL=index.js.map
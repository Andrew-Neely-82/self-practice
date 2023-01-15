// * Variables

// variables are the same as in JavaScript but with a few differences
// 1. variables are strongly typed (you can't change the type of a variable)
// 2. variables are block scoped (they are only available in the block they are declared in)
// 3. variables are immutable (you can't change the value of a variable)

let myName: string = "John Doe";
let myAge: number = 30;
let isMarried: boolean = false;

const myName2: string = "John Doe";
const myAge2: number = 30;
const isMarried2: boolean = false;

// * Arrays

// arrays are the same as in JavaScript but with a few differences
// 1. arrays are strongly typed (you can't change the type of an array)
// 2. arrays are immutable (you can't change the value of an array)

let myArray: number[] = [1, 2, 3, 4, 5]; // this is the same as the next line
let myArray2: Array<number> = [1, 2, 3, 4, 5]; // this is the same as the previous line
let myArray3: string[] = ["one", "two", "three", "four", "five"];
let myArray4: Array<string> = ["one", "two", "three", "four", "five"];

// * Tuples

// tuples are the same as in JavaScript but with a few differences
// 1. tuples are strongly typed (you can't change the type of a tuple)
// 2. tuples are immutable (you can't change the value of a tuple)

let myTuple: [string, number] = ["John Doe", 30];
let myTuple2: [string, number, boolean] = ["John Doe", 30, false];

// * Enums

// enums are the same as in JavaScript but with a few differences
// 1. enums are strongly typed (you can't change the type of an enum)
// 2. enums are immutable (you can't change the value of an enum)

enum Color {
  Red = 0,
  Green = 1,
  Blue = 3,
}

let myColor: Color = Color.Red;
let myColor2: Color = Color.Green;
let myColor3: Color = Color.Blue;

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

function calculateTax(income: number, taxYear = 2022): number {
  if ((taxYear || 2022) < 2022) {
    return income * 0.2;
  } else {
    return income * 0.25;
  }
}

calculateTax(10_000);

// * Objects

// objects are the same as in JavaScript but with a few differences
// 1. objects are strongly typed (you can't change the type of an object)
// 2. objects are immutable (you can't change the value of an object)

let employee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "John Doe",
  retire: (date: Date) => {
    console.log(`retired on ${date}`);
  },
};

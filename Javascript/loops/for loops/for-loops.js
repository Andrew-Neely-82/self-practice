// Count to Ten

function logTo5() {
  for (x = 1; x <= 5; x++) {
    console.log(x);
  }
}

console.log(`Count to Ten:`);
logTo5();
console.log(``);

// Count to Ten in reverse

function logTo5Reverse() {
  for (x = 5; x >= 1; x--) {
    console.log(x);
  }
}

console.log(`Count to Ten in reverse:`);
logTo5Reverse();
console.log(``);

// Fizz Buzz for loop

function fizzBuzz() {
  for (x = 1; x <= 15; x++) {
    if (x % 15 === 0) {
      console.log(`${x} Fizz buzz`);
    } else if (x % 3 === 0) {
      console.log(`${x} Fizz`);
    } else if (x % 5 === 0) {
      console.log(`${x} buzz`);
    } else {
      console.log(`${x}`);
    }
  }
}

console.log(`Fizz Buzz:`);
fizzBuzz();
console.log(``);

// Fizz Buzz for loop in Reverse

function fizzBuzzReverse() {
  for (x = 15; x >= 1; x--) {
    if (x % 15 === 0) {
      console.log(`${x} Fizz Buzz`);
    } else if (x % 3 === 0) {
      console.log(`${x} Fizz`);
    } else if (x % 5 === 0) {
      console.log(`${x} Buzz`);
    } else {
      console.log(`${x}`);
    }
  }
}

console.log(`Fizz Buzz Reverse:`);
fizzBuzzReverse();
console.log(``);

// For loop with array

const cars = [`Audi`, `BMW`, `Citroen`, `Dacia`, `Ferrari`];

function carLoop() {
  let len = cars[x];
  for (x = 0; x <= 6; x++) {
    if (x === 0) {
      console.log(`index ${x} = ${cars[x]}`);
    } else if (x === 1) {
      console.log(`index ${x} = ${cars[x]}`);
    } else if (x === 2) {
      console.log(`index ${x} = ${cars[x]}`);
    } else if (x === 3) {
      console.log(`index ${x} = ${cars[x]}`);
    } else if (x === 4) {
      console.log(`index ${x} = ${cars[x]}`);
    } else {
      console.log(`no car`);
    }
  }
}

carLoop(cars);

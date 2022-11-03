(function () {
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

  // Only even numbers for loop

  function evenNumbers() {
    for (x = 0; x <= 5; x++) {
      // !THIS IS IMPORTANT TO HAVE FIRST
      if (x === 0) {
        console.log(`${x} is not even or odd technically`);
      } else if (x % 2 === 0) {
        console.log(`${x} is even`);
      }
    }
  }

  console.log(`Even numbers:`);
  evenNumbers();
  console.log(``);

  // Only Odd Numbers for loop

  function oddNumbers() {
    for (x = 0; x <= 5; x++) {
      if (x % 2 !== 0) {
        console.log(`${x} is odd`);
      }
    }
  }

  console.log(`Odd numbers:`);
  oddNumbers();
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

  // For loop with array and index

  let cars = [`Audi`, `BMW`, `Citroen`, `Dacia`, `Ferrari`];
  let carLow = cars.toLowerCase;

  function carArrayIndexLoop() {
    for (x = 0; x <= 5; x++) {
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
        console.log(`index ${x} = no car`);
      }
    }
  }

  console.log(`For loop with array and index:`);
  carArrayIndexLoop(cars);
  console.log(``);
})();

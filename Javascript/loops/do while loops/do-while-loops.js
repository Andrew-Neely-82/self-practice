(() => {
  // * basic do while loop:
  console.log(`Basic do while loop:`);
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= 10);

  // * do while loop with an array:
  console.log(`\nHow to iterate over an array with a do while loop:`);

  let iNames = 0;
  let names = [`John`, `Jane`, `Jack`, `Jill`];
  do {
    console.log(names[iNames]);
    iNames++;
  } while (iNames < names.length);

  // * do while loop with a string:
  console.log(`\nHow to iterate over a string with a do while loop:`);

  let iString = 0;
  let string = `test`;
  do {
    console.log(string[iString]);
    iString++;
  } while (iString < string.length);
})();

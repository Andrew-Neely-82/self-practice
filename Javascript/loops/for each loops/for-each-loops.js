(function () {
	// for each loops
	// for each loops are used to iterate over arrays

	// example 1
	const numbers = [1, 2, 3, 4, 5];
	const letter = [`a`, `b`, `c`, `d`, `e`];

	// output as number data type

	console.log(`Numbers as number data type:`);

	numbers.forEach(function (number) {
		console.log(number);
	});

	console.log(``);

	// numbers as string data type

	console.log(`Numbers as string data type:`);

	numbers.forEach(function (number) {
		console.log(`${number} as string`);
	});

	console.log(``);

	// es6 arrow function with for each loop
	console.log(`es6 arrow function with for each loop:`);

	numbers.forEach((number) => {
		console.log(number);
	});

	console.log(``);
	console.log(`String data type:`);

	letter.forEach((letter) => {
		console.log(letter);
	});
})();

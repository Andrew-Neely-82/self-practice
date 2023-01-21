﻿// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

// * fizzbuzz
System.Console.WriteLine("\n\n" + "simple fizzbuzz loop:");

for (int i = 0; i <= 15; i++) {
  if (i % 3 == 0 && i % 5 == 0 && i != 0) {
    Console.WriteLine(i + " Fizzbuzz");
  } else if (i % 5 == 0 & i != 0) {
    Console.WriteLine(i + " Fizz");
  } else if (i % 3 == 0 && i != 0) {
    Console.WriteLine(i  + " Buzz");
  } else {
    Console.WriteLine(i);
  }
}

// * arrays
System.Console.WriteLine("\n\n" + "int array for loop: ");
int[] array = {1, 2, 3, 4, 5};

for (int i = 0; i <= array.Length -1; i++) {
  Console.WriteLine(array[i]);
}

System.Console.WriteLine("\n\n" + "looping through a names array: ");
string[] names = {"andrew", "bob", "charles", "david", "frank"};

// for (int i = 0; i < names.Length; i++) {
//     Console.WriteLine(names[i]);
// }

foreach (string a in names) {
  Console.WriteLine(a);
}

Console.WriteLine("\n\nadd function: ");

static int add(int a, int b) {
  int result = a + b;
  Console.WriteLine(result);
  return result;
}

add(1, 2);
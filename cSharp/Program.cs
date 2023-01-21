// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

static void print(string input) {
    Console.WriteLine(input);
}

// * fizzbuzz
print("\n\n" + "simple fizzbuzz loop:");

for (int i = 0; i <= 15; i++) {
  if (i % 3 == 0 && i % 5 == 0 && i != 0) {
    print(i + " Fizzbuzz");
  } else if (i % 5 == 0 & i != 0) {
    print(i + " Fizz");
  } else if (i % 3 == 0 && i != 0) {
    print(i  + " Buzz");
  } else {
    print(i);
  }
}

// * arrays
print("\n\n" + "int array for loop: ");
int[] array = {1, 2, 3, 4, 5};

for (int i = 0; i <= array.Length -1; i++) {
  print(array[i]);
}

print("\n\n" + "looping through a names array: ");
string[] names = {"andrew", "bob", "charles", "david", "frank"};

// for (int i = 0; i < names.Length; i++) {
//     print(names[i]);
// }

foreach (string a in names) {
  print(a);
}

print("\n\nadd function: ");

static int add(int a, int b) {
  int result = a + b;
  print(result);
  return result;
}

add(1, 2);

print("test");
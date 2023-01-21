// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");


// * emum data type -> must be above the class name / this is considered top level in c#
enum DaysOfWeek
{
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}

class Program
{
    static void Main(string[] args)
    {
        // * data types:

        //   numbers
        byte numByte = 255; // 8-bit unsigned / 0 to 255
        short numShort = 32_767; // 16-bit signed / -32,768 to 32,767
        int numInt = 2_147_483_647; // 32-bit signed /-2,147,483,648 to 2,147,483,647
        // long numLong = 9_223_372_036_854_775_807; //  64-bit signed / 9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.
        // float numFloat = 50.1234567f; // 7 decimal digits of precision.
        // double numDouble = 100.123456789012345f; // 15 decimal digits of precision
        // decimal numDecimal = 28.28m; // holds up to 28 decimal points

        //   booleans:
        // bool myBoolean = true; // standard boolean with bool as syntax

        //   letter based data types:
        char charA = 'a';
        string myString = "this is a string";

        //   Any types:
        object myObjectString = "This is a string using object data type";
        object myObjectNum = 1;
        object myObjectBoolean = true;

        dynamic myDynamicString = "This is a string using dynamic data type";
        dynamic myDynamicNum = 1;
        dynamic myDynamicBoolean = true;

        var myVarString = "This is a string using var data type";
        var myVarNum = 1;
        // var myVarBoolean;

        // * printed examples of the data types:
        print(
            "\n\nbyte: "
                + numByte
                + "\nshort: "
                + numShort
                + "\nint: "
                + numInt
                + "\nchar: "
                + charA
                + "\nstring: "
                + myString
                + "\nobject string: "
                + myObjectString
                + "\nobject num: "
                + myObjectNum
                + "\nobject boolean: "
                + myObjectBoolean
                + "\ndynamic string: "
                + myDynamicString
                + "\ndynamic num: "
                + myDynamicNum
                + "\ndynamic boolean: "
                + myDynamicBoolean
                + "\nvar string: "
                + myVarString
                + "\nvar num: "
                + myVarNum
        );

        // * how to make a function that simplifies the Console.WriteLine()
        static void print(dynamic input)
        {
            Console.WriteLine(input);
        }

        // * fizzbuzz
        print("\n\n" + "simple fizzbuzz loop:");

        for (int i = 0; i <= 15; i++)
        {
            if (i % 3 == 0 && i % 5 == 0 && i != 0)
            {
                print(i + " Fizzbuzz");
            }
            else if (i % 5 == 0 && i != 0)
            {
                print(i + " Fizz");
            }
            else if (i % 3 == 0 && i != 0)
            {
                print(i + " Buzz");
            }
            else
            {
                print(i);
            }
        }

        // * arrays:
        print("\n\n" + "int array for loop: ");
        int[] numbers = { 1, 2, 3, 4, 5 };

        for (int i = 0; i <= numbers.Length - 1; i++)
        {
            print(numbers[i]);
        }

        print("\n\n" + "foreach loop for numbers array:");
        foreach (int num in numbers)
        {
            print(num);
        }

        print("\n\n" + "looping through a names array: ");
        string[] names = { "andrew", "bob", "charles", "david", "frank" };

        // for (int i = 0; i < names.Length; i++) {
        //     print(names[i]);
        // }

        foreach (string a in names)
        {
            print(a);
        }

        print("\n\nadd function: ");

        static int add(int a, int b)
        {
            int result = a + b;
            print(result);
            return result;
        }

        add(1, 2);

        print("test");
    }
}

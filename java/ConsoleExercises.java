import java.util.Scanner;

public class ConsoleExercises {
  public static void main(String[] args) {
    double pi = 3.14159;
    System.out.format("The value of pi is approximately %.2f.%n", pi);

    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter an integer: ");
    int userInt = scanner.nextInt();
    System.out.println("You entered: " + userInt);

    System.out.println("Enter three words: ");
    String word1 = scanner.next();
    String word2 = scanner.next();
    String word3 = scanner.next();
    System.out.println("You entered: " + word1 + ", " + word2 + ", " + word3);

    System.out.println("Enter a sentence: ");
    // String sentence = scanner.next();
    String sentence = scanner.nextLine();
    System.out.println("You entered: " + sentence);

    // Prompt the user to enter values of length and width of a classroom at Codeup
    // (or your room if virtual).

    System.out.println("Enter the length of the classroom: ");

    // Use the nextLine method each time you need to get user input. In this case,
    // we need it twice, once to get the user input for the length and again to get
    // the user input for the width. Parse the resulting strings to a numeric type.

    String length = scanner.nextLine();

    // Assume that the rooms are perfect rectangles.
    // Assume that the user will enter valid numeric data for length and width.
    // Display the area and perimeter of that classroom.

    System.out.println("Enter the width of the classroom: ");
    String width = scanner.nextLine();

    // The area of a rectangle is equal to the length times the width, and the
    // perimeter of a rectangle is equal to 2 times the length plus 2 times the
    // width.

    int lengthInt = Integer.parseInt(length);
    int widthInt = Integer.parseInt(width);

    int area = lengthInt * widthInt;
    int perimeter = (2 * lengthInt) + (2 * widthInt);

    System.out.println("The area of the classroom is " + area + " square feet.");
    System.out.println("The perimeter of the classroom is " + perimeter + " feet.");

    // Bonus
    // In your perimeter/area calculator: - Accept decimal entries. - Calculate the
    // volume of the rooms in addition to the area and perimeter.

    // The Scanner class can be told specifically what characters or pattern
    // separates tokens in a piece of input with the useDelimiter method. Add the
    // following line of code to your application after you have created a scanner
    // (assuming the variable holding the Scanner is named scanner):

    // scanner.useDelimiter("\n");
    // How does this change the way your program operates?

    // Rewrite your classroom program to use nextInt method. If you added the line
    // of code above to your application, you should now have no trouble handling
    // multiple pieces of user input.

    scanner.useDelimiter("\n");

    System.out.println("Enter the length of the classroom: ");

    int lengthInt2 = scanner.nextInt();

    System.out.println("Enter the width of the classroom: ");

    int widthInt2 = scanner.nextInt();

    int area2 = lengthInt2 * widthInt2;

    int perimeter2 = (2 * lengthInt2) + (2 * widthInt2);

    System.out.println("The area of the classroom is " + area2 + " square feet.");

    System.out.println("The perimeter of the classroom is " + perimeter2 + " feet.");

  }

}

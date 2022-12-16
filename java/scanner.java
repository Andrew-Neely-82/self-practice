import java.util.Scanner;

public class scanner {
  public static void main(String[] args) {

    try (// Ask for name
    Scanner scanner = new Scanner(System.in)) {
      System.out.println("=== What is your name? ===");
      String name = scanner.nextLine();
      System.out.println(" ");
      System.out.println("Hello, " + name + "!");
      System.out.println(" "); 

      try (// Ask for age
      Scanner scannerAge = new Scanner(System.in)) {
        System.out.println("=== How old are you? ===");
        int age = scannerAge.nextInt();
        System.out.println(" ");
        System.out.println(name + " is " + age + " years old!");
      }
      System.out.println(" ");

      try (// Ask for favorite color
      Scanner scannerColor = new Scanner(System.in)) {
        System.out.println("What is your favorite color?");
        String color = scannerColor.nextLine();
        System.out.println(" ");
        System.out.println(name + "'s favorite color is " + color + "!");
      }
    }
    System.out.println(" ");
  }

}

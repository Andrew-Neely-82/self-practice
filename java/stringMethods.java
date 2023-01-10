public class stringMethods {

  public static void main(String[] args) {

    String name = "Bro";

    // * how to compare strings

    // .equals() method compares the value of the string to another string
    boolean result1 = name.equals("bro");

    // .equalsIgnoreCase() method compares the value of the string to another
    // string, ignoring case
    boolean result2 = name.equalsIgnoreCase("bro");
    
    System.out.println("equals method: " + result1);
    System.out.println("ignore case method: " + result2);

    // * how to find the length of a string

    // .length() method returns the number of characters in the string
    int result3 = name.length();
    System.out.println("length method: " + result3);

    // * how to find a character at a specific index

    // .charAt() method returns the character at the specified index
    char result4 = name.charAt(0);
    System.out.println("charAt method: " + result4);
  }
}

public class CompareCond {
  public static void main(String[] args) {

    byte age = 17;

    if (age >= 65) {
      System.out.println("You are a senior citizen");
    } else if (age >= 18) {
      System.out.println("You are an adult");
    } else if (age < 18) {
      System.out.println("You are a minor");
    }
  }
}

// could not find or load main class conditionals
// how to fix this error?
// answer is to change the file name to Conditionals.java
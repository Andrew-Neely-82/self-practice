public class methods {

  public static void main(String[] args) {
    String name = "Bro";
    byte age = 33;
    
    hello(name, age);

    int sum = add(age, age);
    System.out.println(sum);
  }

  static void hello(String arg, byte age) {
    System.out.println("Hello, " + arg + "!" + " You are " + age + " years old.");
  }

  static byte add(byte a, byte b) {
    byte sum = (byte) (a + b);
    return sum;
  }
}


import java.util.ArrayList;

// ! YOU MUST IMPORT THE java.util.ArrayList;

public class arrayLists {
  public static void main(String[] args) {

    // ArrayLists are like arrays, but they can grow and shrink
    // ArrayLists can only hold objects, not primitives
    ArrayList<String> food = new ArrayList<String>();

    // this is how you add items to an ArrayList
    food.add("Pizza");
    food.add("Burgers");
    food.add("Tacos");

    food.set(0, "Sushi"); // this is how you change an item in an ArrayList
    food.remove(1); // this is how you remove an item from an ArrayList

    // this is how you get the size of an ArrayList
    food.clear();

    // * Standard for loop for ArrayLists
    // for (int i = 0; i < food.size(); i++) {
    // System.out.println(food.get(i));
    // }

    for (String x : food) {
      System.out.println(x);
    }

  }
}

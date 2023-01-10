import java.util.*;

public class twoDimArrayLists {
  public static void main(String[] args) {

    // how to create a 2D ArrayList
    ArrayList<ArrayList<String>> groceryList = new ArrayList<>();

    ArrayList<String> bakeryList = new ArrayList<>();
    bakeryList.add("Croissant");
    bakeryList.add("Bagel");
    bakeryList.add("Donut");

    ArrayList<String> produceList = new ArrayList<>();
    produceList.add("Apple");
    produceList.add("Orange");
    produceList.add("Banana");

    ArrayList<String> drinkList = new ArrayList<>();
    drinkList.add("Coffee");
    drinkList.add("Tea");
    drinkList.add("Water");

    // how to add the 1D ArrayLists to the 2D ArrayList
    groceryList.add(bakeryList);
    groceryList.add(produceList);
    groceryList.add(drinkList);

    // how to print the 2D ArrayList // use .get() to get the index of the array, use it again to get the index of the item
    System.out.println(groceryList.get(0).get(2));

  }
}

import java.util.ArrayList;

public class Recipe {
  private Item result;
  private ArrayList<Item> ingredients;

  public Recipe(Item result, ArrayList<Item> ingredients) {
    this.result = result;
    this.ingredients = ingredients;
  }

  public Item getResult() {
    return result;
  }

  public ArrayList<Item> getIngredients() {
    return ingredients;
  }
}

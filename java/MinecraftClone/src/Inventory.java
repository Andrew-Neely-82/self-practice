import java.util.*;

public class Inventory {
  private ArrayList<Item> items;
  private HashMap<String, Recipe> recipes;

  public Inventory() {
    items = new ArrayList<>();
    recipes = new HashMap<>();
  }

  public void addItem(Item item) {
    items.add(item);
  }

  public void removeItem(Item item) {
    items.remove(item);
  }

  public void addRecipe(Recipe recipe) {
    recipes.put(recipe.getResult().getName(), recipe);
  }

  public Item craft(String resultItemName) {
    Recipe recipe = recipes.get(resultItemName);
    if (recipe == null) {
      return null;
    }

    for (Item ingredient : recipe.getIngredients()) {
      if (!items.contains(ingredient)) {
        return null;
      }
    }

    for (Item ingredient : recipe.getIngredients()) {
      items.remove(ingredient);
    }

    Item result = recipe.getResult();
    items.add(result);
    return result;
  }
}

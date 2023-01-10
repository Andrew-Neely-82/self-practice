public class twodarray {

  public static void main(String[] args) {

    String cars[][] = {
        { "Ford", "F150", "2015" },
        { "Honda", "Civic", "2016" },
        { "Toyota", "Camry", "2017" }
    };

    // String[][] cars = new String[3][3]; 

    cars[0][0] = "Ford";
    cars[0][1] = "F150";
    cars[0][2] = "2015";

    cars[1][0] = "Honda";
    cars[1][1] = "Civic";
    cars[1][2] = "2016";

    cars[2][0] = "Toyota";
    cars[2][1] = "Camry";
    cars[2][2] = "2017";

    for (int i = 0; i < cars.length; i++) {
      for (int j = 0; j < cars[i].length; j++) {
        System.out.print(cars[i][j] + " ");
      }
      System.out.println();
    }
  }
}

import java.util.Random;

public class WorldGenerator {
   private Random random;
   private int seed;
   private int size;
   
   public WorldGenerator(int seed, int size) {
      this.seed = seed;
      this.size = size;
      this.random = new Random(seed);
   }
   
   public int[][] generateWorld() {
      int[][] world = new int[size][size];
      for (int i = 0; i < size; i++) {
         for (int j = 0; j < size; j++) {
            world[i][j] = random.nextInt(2);
         }
      }
      return world;
   }
}

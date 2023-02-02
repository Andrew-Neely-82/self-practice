import java.util.ArrayList;

public class WorldGenerator {
  private int width;
  private int height;
  private float[][] noise;

  public WorldGenerator(int width, int height) {
    this.width = width;
    this.height = height;
    this.noise = new float[width][height];

    for (int x = 0; x < width; x++) {
      for (int y = 0; y < height; y++) {
        noise[x][y] = (float) Math.random();
      }
    }
  }

  public void generateTerrain() {
    for (int x = 0; x < width; x++) {
      for (int y = 0; y < height; y++) {
        float n = SimplexNoise.noise(x / 50.0, y / 50.0);
        n = n + 1.0f / 2.0f;
        noise[x][y] = n;
      }
    }
  }

  public int getHeight(int x, int y) {
    return (int) (noise[x][y] * 50);
  }
}
public class Mob {
  private int x, y;
  private int health;
  private int damage;
  private int speed;
  private Player player;

  public Mob(int x, int y, Player player) {
    this.x = x;
    this.y = y;
    this.health = 100;
    this.damage = 10;
    this.speed = 2;
    this.player = player;
  }

  public void update() {
    int playerX = player.getX();
    int playerY = player.getY();
    int deltaX = playerX - x;
    int deltaY = playerY - y;
    double distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance <= 10) {
      // attack the player
    } else {
      // move towards the player
      x += deltaX / distance * speed;
      y += deltaY / distance * speed;
    }
  }
}
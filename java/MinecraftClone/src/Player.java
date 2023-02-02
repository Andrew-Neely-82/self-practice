import javaGame.res.player;

public class Player {
  private int x, y;
  private int speed;
  private KeyHandler keyH;

  public Player(int x, int y, int speed, KeyHandler keyH) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.keyH = keyH;
  }

  public void update() {
    if (keyH.upPressed == true) {
      y -= speed;
    } else if (keyH.downPressed == true) {
      y += speed;
    } else if (keyH.leftPressed == true) {
      x -= speed;
    } else if (keyH.rightPressed == true) {
      x += speed;
    }
  }

  public int getX() {
    return x;
  }

  public int getY() {
    return y;
  }
}

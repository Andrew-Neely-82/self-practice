import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class KeyHandler implements KeyListener {

  public boolean upPressed;
  public boolean downPressed;
  public boolean leftPressed;
  public boolean rightPressed;

  public void keyPressed(KeyEvent e) {
    int key = e.getKeyCode();
    if (key == KeyEvent.VK_W) {
      upPressed = true;
    } else if (key == KeyEvent.VK_S) {
      downPressed = true;
    } else if (key == KeyEvent.VK_A) {
      leftPressed = true;
    } else if (key == KeyEvent.VK_D) {
      rightPressed = true;
    }
  }

  public void keyReleased(KeyEvent e) {
    int key = e.getKeyCode();
    if (key == KeyEvent.VK_W) {
      upPressed = false;
    } else if (key == KeyEvent.VK_S) {
      downPressed = false;
    } else if (key == KeyEvent.VK_A) {
      leftPressed = false;
    } else if (key == KeyEvent.VK_D) {
      rightPressed = false;
    }
  }

  public void keyTyped(KeyEvent e) {
    // not used
  }
}

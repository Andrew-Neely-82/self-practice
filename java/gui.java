import javax.swing.JOptionPane;

public class gui {
  public static void main(String[] args) {
    String name = JOptionPane.showInputDialog("What is your name?");
    JOptionPane.showMessageDialog(null, "Hello, " + name + "!");

    int age = Integer.parseInt(JOptionPane.showInputDialog("How old are you?"));
    JOptionPane.showMessageDialog(null, name + " is " + age + " years old!");

    double height = Double.parseDouble(JOptionPane.showInputDialog("How tall are you in inches?"));
    JOptionPane.showMessageDialog(null, name + " is " + height + " inches tall!");
  }
}
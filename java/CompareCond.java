// import java.util.Scanner;

import javax.swing.JOptionPane;

public class CompareCond {
  public static void main(String[] args) {
    // how to do with scanner //

    // Scanner scanner = new Scanner(System.in);
    // System.out.println("Enter your age: ");
    // age = scanner.nextByte();

    // how to do with JOptionPane //

    String age = JOptionPane.showInputDialog("How old are you?");
    int ageInt = Integer.parseInt(age);

    if (ageInt >= 65) {
      JOptionPane.showMessageDialog(null, "You are a Senior!");
    } else if (ageInt >= 40) {
      JOptionPane.showMessageDialog(null, "You are a middle-aged!");
    } else if (ageInt >= 35) {
      JOptionPane.showMessageDialog(null, "You are a adult!");
    } else if (ageInt >= 18) {
      JOptionPane.showMessageDialog(null, "You are a young adult!");
    } else {
      JOptionPane.showMessageDialog(null, "You are a child!");
    }
  }
}
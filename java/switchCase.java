import javax.swing.JOptionPane;

public class switchCase {
  
  public static void main(String[] args) {
    String day = JOptionPane.showInputDialog(null, "Enter a day!");
    switch (day.toLowerCase()) {
      case "sunday" : JOptionPane.showMessageDialog(null, "Sunday is the last day of the weekend");
      break;
      case "monday" : JOptionPane.showMessageDialog(null, "Monday is the first day of the work week");
      break;
      case "tuesday" : JOptionPane.showMessageDialog(null, "Tuesday is the second day of the work week");
      break;
      case "wednesday" : JOptionPane.showMessageDialog(null, "Wednesday is the middle of the work week");
      break;
      case "thursday" : JOptionPane.showMessageDialog(null, "Thursday is 2 days before the weekend");
      break;
      case "friday" : JOptionPane.showMessageDialog(null, "Friday is the last day of the work week");
      break;
      case "saturday" : JOptionPane.showMessageDialog(null, "Saturday starts the weekend");
      break;
      default : JOptionPane.showMessageDialog(null, day + " is not a day");
    }
  }
}

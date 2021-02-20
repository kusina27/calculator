import java.util.Scanner;

public class Exercise03_21 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter year: (e.g., 2008): ");
        int year = input.nextInt();

        System.out.print("Enter month: 1-12: ");
        int month = input.nextInt();

        System.out.print("Enter the day of the month: 1-31: ");
        int date = input.nextInt();

        if (month < 3) {
            month += 12;
            year -= 1;
        }



        int k = year % 100;
        int j = year / 100;
        int day = ((date + (((month + 1) * 26) / 10) + k + (k / 4) + (j / 4))
                + (5 * j)) % 7;






        String Name = "";
        if (day == 0) {
            Name = "Saturday";
        } else if (day == 1) {
            Name = "Sunday";
        } else if (day == 2) {
            Name = "Monday";
        } else if (day == 3) {
            Name = "Tuesday";
        } else if (day == 4) {
            Name = "Wednesday";
        } else if (day == 5) {
            Name = "Thursday";
        } else if (day == 6) {
            Name = "Friday";
        }
        System.out.println("That date was a " + Name);
    }
}

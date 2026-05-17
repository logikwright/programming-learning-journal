import java.util.Scanner; //Scanner is in the java.util.package

public class ComputeAverageDynamic {
    public static void main(String[] args) {

        //Create a Scanner object
        Scanner input = new Scanner(System.in);

        //Prompt the user to enter total number of numbers
        System.out.print("Total number of numbers: ");        
        
        int totalNumberOfNumbers = input.nextInt();
        
        //Declare and Initialize sum 
        double sum = 0;

        //Prompt the user to enter individual number
        for(int i = 1; i <= totalNumberOfNumbers; i++) {
            System.out.print("Enter the number " + i + " :");

            double number = input.nextDouble();
            sum = sum + number;
        }
        
        //Compute Average
        double averageValue = sum / totalNumberOfNumbers;
        
        //Display results
        System.out.println("Average of provided number is: " + averageValue);
    }
}

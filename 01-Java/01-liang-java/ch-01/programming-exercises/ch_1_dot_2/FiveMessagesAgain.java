public class FiveMessagesAgain {
    public static void main(String[] args) {
        fiveMessagesAgain("I Love Java");
    }
    public static void fiveMessagesAgain(String message) {
        for(int i=0; i<5; i++) {
            System.out.println(message);
        }
    }
}

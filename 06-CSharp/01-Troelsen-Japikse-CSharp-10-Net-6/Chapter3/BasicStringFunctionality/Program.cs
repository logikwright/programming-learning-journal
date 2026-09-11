using System.Runtime.CompilerServices;
using System.Text;

Console.WriteLine("********** Fun with Strings **********");
Chapter3.BasicStringFunctionality.Program.BasicStringFunctionality();

namespace Chapter3.BasicStringFunctionality
{
    class Program
    {
        public static void BasicStringFunctionality()
        {
            Console.WriteLine("=> Basic String functionality:");
            Console.WriteLine();

            Console.Write("Enter your firstname: ");
            string firstName = Console.ReadLine();
            Console.WriteLine();


            Console.WriteLine($"Value of firstName: {firstName}");
            Console.WriteLine();

            Console.WriteLine($"firstName has {firstName.Length} characters.");
            Console.WriteLine();

            Console.WriteLine($"firstName in uppercase: {firstName.ToUpper()}");
            Console.WriteLine();

            Console.WriteLine($"firstName in lowercase: {firstName.ToLower()}");
            Console.WriteLine();
        }
    }
}

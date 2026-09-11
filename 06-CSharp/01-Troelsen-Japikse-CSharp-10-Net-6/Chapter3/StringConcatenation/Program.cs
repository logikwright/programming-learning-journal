using System;

Chapter3.StringConcatenation.Program.StringConcatenation();

namespace Chapter3.StringConcatenation
{
    class Program
    {
        public static void StringConcatenation()
        {
            Console.WriteLine("=> String Concatenation:");
            Console.WriteLine();

            Console.Write("Enter 1st part of the sentence: ");
            string s1 = Console.ReadLine(); 
            Console.WriteLine();

            Console.Write("Enter 2nd part of the sentence: ");
            string s2 = Console.ReadLine();
            Console.WriteLine();

            string s3 = s1 + " " + s2;
            Console.WriteLine(s3);
            Console.WriteLine();

            Console.WriteLine($"{s1} {s2}");
        }
    }
}

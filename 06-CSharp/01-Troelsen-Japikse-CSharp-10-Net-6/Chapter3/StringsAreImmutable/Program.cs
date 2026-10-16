using System;

Chapter3.StringsAreImmutable.Program.StringsAreImmutable();

namespace Chapter3.StringsAreImmutable
{
    class Program
    {
        public static void StringsAreImmutable()
        {
            Console.WriteLine("=> Immutable Strings:\a");
            // Set initial string value.
            string s1 = "This is my string.";

            Console.WriteLine("s1 = {0}", s1);
            Console.WriteLine();

            // Uppercase s1?
            string upperString = s1.ToUpper();
            Console.WriteLine(@$"Value of upperString from statement ""string upperString = s1.ToUpper();"" is : {upperString}");
            Console.WriteLine();

            // Nope! s1 is in the same format!
            Console.WriteLine($@"Value of s1 even after performing s1.ToUpper() in ""string upperString = s1.ToUpper();"" is : {s1}");
            Console.WriteLine("=> Immutable Strings 2:\a");
            string s2 = "My other string";

            Console.WriteLine($"Value of newly declared and initialised string s2 is : {s2}");
            Console.WriteLine(@$"Assigning new value to s2 via ""s2 = ""New string s2 value"";""");
            Console.WriteLine("Assinging...");
            Console.WriteLine();
            s2 = "New string s2 value";

            Console.WriteLine($"Value of s2 is : {s2}");

        }
    }
}

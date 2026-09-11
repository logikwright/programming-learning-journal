using System;

Chapter3.ParseFromStrings.Program.ParseFromStrings();

namespace Chapter3.ParseFromStrings
{
    class Program
    {
        public static void ParseFromStrings()
        {
            Console.WriteLine("=> Data type parsing:");
            bool b = bool.Parse("True");
            Console.WriteLine("Value of b: {0}", b);
            Console.WriteLine();
            //bool iDidItOnPurpose = bool.Parse("Hello");
            if (bool.TryParse("True", out bool iDidItOnPurpose))
            {
                Console.WriteLine("Value of iDidItOnPurpose: {0}", iDidItOnPurpose);
            }
            else
            {
                Console.WriteLine("Default value of iDidItOnPurpose: {0}", iDidItOnPurpose);
            }
            Console.WriteLine();
            double d = double.Parse("99.884");
            Console.WriteLine("Value of d: {0}", d);
            Console.WriteLine();
            int i = int.Parse("8");
            Console.WriteLine("Value of i: {0}", i);
            Console.WriteLine();
            char c = char.Parse("w");
            Console.WriteLine("Value of c: {0}", c);
        }
    }
}

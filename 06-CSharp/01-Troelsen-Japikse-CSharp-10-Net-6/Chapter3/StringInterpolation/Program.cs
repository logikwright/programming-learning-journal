using System;

Chapter3.StringInterpolation.Program.StringInterpolation();

namespace Chapter3.StringInterpolation
{
    class Program
    {
        public static void StringInterpolation()
        {
            Console.WriteLine("=> String Interpolation");

            // Some local variables we will plug into out larger string
            int age = 4;
            string name = "Soren";

            // Using curly-bracket syntax.
            string greeting = string.Format("Hello {0} you are {1} years old.", name, age);
            Console.WriteLine(greeting);

            // Using string interpolation
            string greeting2 = $"Hello {name} you are {age} years old.";
            Console.WriteLine(greeting2);
        }
    }
}

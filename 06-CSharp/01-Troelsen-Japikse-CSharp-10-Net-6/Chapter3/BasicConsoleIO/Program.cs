using System;
Console.WriteLine("***** Basic Console IO *****");
BasicConsoleIO.Program.GetUserData();

Console.ReadLine();

namespace BasicConsoleIO
{
    class Program
    {
        public static void GetUserData()
        {
            Console.Write("Please enter your name: ");
            string userName = Console.ReadLine();
            Console.Write("Please enter your age: ");
            string userAge = Console.ReadLine();

            ConsoleColor prevColor = Console.ForegroundColor;
            Console.ForegroundColor = ConsoleColor.Blue;

            Console.WriteLine("Hello {0}! You are {1} years old.", userName, userAge);

            Console.ForegroundColor = prevColor;
        }
    }
}

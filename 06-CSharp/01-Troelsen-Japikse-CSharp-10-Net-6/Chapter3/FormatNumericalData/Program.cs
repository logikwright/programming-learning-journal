using System;

Console.WriteLine("***** Format Tags in Use *****");
FormatNumericalData.Program.FormatNumericalData();

namespace FormatNumericalData
{
    class Program
    {
        public static void FormatNumericalData()
        {
            Console.WriteLine("The value of 99999 in various formats.");
            Console.WriteLine("========== c ==========");
            Console.WriteLine("c format: {0:c}", 99999);
            Console.WriteLine("");
            Console.WriteLine("========== C ==========");
            Console.WriteLine("C format: {0:C}", 99999);
            Console.WriteLine("");
            Console.WriteLine("========== d9 ==========");
            Console.WriteLine("d9 format: {0:d9}", 12345);
            Console.WriteLine("");
            Console.WriteLine("========== D9 ==========");
            Console.WriteLine("d9 format: {0:D9}", 12345);
            Console.WriteLine("");
            Console.WriteLine("========== f3 ==========");
            Console.WriteLine("f3 format: {0:f3}", 12345);
            Console.WriteLine("");
            Console.WriteLine("========== n ==========");
            Console.WriteLine("n format: {0:n}", 99999);
            Console.WriteLine("");
            Console.WriteLine("========== e ==========");
            Console.WriteLine("e format: {0:e}", 99999);
            Console.WriteLine("");
            Console.WriteLine("========== E ==========");
            Console.WriteLine("E format: {0:E}", 99999);
            Console.WriteLine("");
            Console.WriteLine("========== x ==========");
            Console.WriteLine("x format: {0:x}", 99999);
            Console.WriteLine("");
            Console.WriteLine("========== X ==========");
            Console.WriteLine("X format: {0:X}", 99999);
            Console.WriteLine("");
        }
    }
}

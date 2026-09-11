using System;

Chapter3.DataTypeFunctionality.Program.DataTypeFunctionality();

namespace Chapter3.DataTypeFunctionality
{
    class Program
    {
        public static void DataTypeFunctionality()
        {
            Console.WriteLine();
            Console.WriteLine("=> Data type Functionality:");
            Console.WriteLine();
            Console.WriteLine("Max of int: {0}", int.MaxValue);
            Console.WriteLine($"Max of int: {int.MaxValue}");
            Console.WriteLine();
            Console.WriteLine("Min of int: {0}", int.MinValue);
            Console.WriteLine($"Min of int: {int.MinValue}");
            Console.WriteLine();
            Console.WriteLine("Max of double: {0}", double.MaxValue);
            Console.WriteLine($"Max of double: {double.MaxValue}");
            Console.WriteLine();
            Console.WriteLine("Min of double: {0}", double.MinValue);
            Console.WriteLine($"Min of double: {double.MinValue}");
            Console.WriteLine();
            Console.WriteLine("double.Epsilon: {0}", double.Epsilon);
            Console.WriteLine($"double.Epsilon: {double.Epsilon}");
            Console.WriteLine();
            Console.WriteLine("double.PositiveInfinity: {0}",
                    double.PositiveInfinity);
            Console.WriteLine($"double.PositiveInfinity: {double.PositiveInfinity}");
            Console.WriteLine();
            Console.WriteLine("double.NegativeInfinity: {0}",
                    double.NegativeInfinity);
            Console.WriteLine($"double.NegativeInfinity: {double.NegativeInfinity}");
        }
    }
}

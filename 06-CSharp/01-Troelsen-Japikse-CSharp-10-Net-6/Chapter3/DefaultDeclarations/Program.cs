using System;

Chapter3.DefaultDeclarations.Program.DefaultDeclarations();

namespace Chapter3.DefaultDeclarations
{
    class Program
    {
        public static void DefaultDeclarations()
        {
            Console.WriteLine("=> Default Declarations:");
            Console.WriteLine();

            bool myBool = default;
            Console.WriteLine($"Value of myBool from statement \"bool myBool = default;\" is : {myBool}");
            Console.WriteLine();

            byte myByte = default;
            Console.WriteLine($"Value of myByte from statement \"byte myByte = default;\" is : {myByte}");
            Console.WriteLine();

            short myShort = default;
            Console.WriteLine($"Value of myShort from statement \"short myShort = default;\" is : {myShort}");
            Console.WriteLine();

            int myInt = default;
            Console.WriteLine($"Value of myInt from statement \"int myInt = default;\" is : {myInt}");
            Console.WriteLine();

            long myLong = default;
            Console.WriteLine($"Value of myLong from statement \"long myLong = default;\" is : {myLong}");
            Console.WriteLine();

            char myChar = default;
            Console.WriteLine($"Value of myChar from statement \"char myChar = default;\" is : {myChar}");
            Console.WriteLine();

            float myFloat = default;
            Console.WriteLine($"Value of myFloat from statement \"float myFloat = default;\" is : {myFloat}");
            Console.WriteLine();

            double myDouble = default;
            Console.WriteLine($"Value of myDouble from statement \"double myDouble = default;\" is : {myDouble}");
            Console.WriteLine();

            decimal myDecimal = default;
            Console.WriteLine($"Value of myDecimal from statement \"decimal myDecimal = default;\" is : {myDecimal}");
            Console.WriteLine();

            string myString = default;
            Console.WriteLine($"Value of myString from statement \"string myString = default;\" is : {myString}");
            Console.WriteLine();

            object myObject = default;
            Console.WriteLine($"Value of myObject from statement \"string myObject = default;\" is : {myObject}");
            Console.WriteLine();
        }
    }
}

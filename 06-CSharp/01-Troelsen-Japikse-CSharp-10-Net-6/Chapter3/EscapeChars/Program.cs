using System;

Chapter3.EscapeChars.Program.EscapeChars();

namespace Chapter3.EscapeChars
{
    class Program
    {
        public static void EscapeChars()
        {
            Console.WriteLine("=> Escape Characters: ");
            string strWithTabs = "Model\tColor\tSpeed\tPet Name";
            Console.WriteLine(strWithTabs);

            Console.WriteLine("Everyone loves \"Hello World\"!");
            Console.WriteLine("");
            
            Console.WriteLine("Address of my Debug files:");
            Console.WriteLine("C:\\MyApp\\bin\\Debug");
            Console.WriteLine();

            // Adds a total of 4 blank lines ( 3 escaped, 1 from WriteLine).
            Console.WriteLine("All finished.\n\n\n");
            Console.WriteLine();
        }
    }
}

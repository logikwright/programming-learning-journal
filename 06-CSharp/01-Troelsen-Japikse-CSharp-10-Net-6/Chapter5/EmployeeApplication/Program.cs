using EmployeeApplication;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("");
        Console.WriteLine("***** Fun with Encapsulation *****");

        Employee emp = new Employee("Niraj", 456, 30_000);
        emp.GiveBonus(1000);
        emp.DisplayStats();

        // Use the get/set methods to interact with the object's name
        emp.SetName("Marv");
        Console.WriteLine($"Employee is named: {emp.GetName()}");
        Console.ReadLine();
    }
}

using System;

namespace EmployeePropertySyntax;

class Employee
{
    // Field Data
    private string _empName;
    private int _empID;
    private float _currPay;

    // Constructors
    public Employee() {}
    public Employee(string name, int id, float pay)
    {
        _empName = name;
        _empID = id;
        _currPay = pay;
    }

    // Methods
    public void GiveBonus(float amount) => _currPay += amount;
    public void DisplayStats()
    {
        Console.WriteLine($"Name: {_empName}");
        Console.WriteLine($"ID: {_empID}");
        Console.WriteLine($"Pay: {_currPay}");
    }

    // Properties
    public string Name
    {
        get { return _empName; }
        set 
        {
            if (value.Length > 15)
            {
                Console.WriteLine("Error! Name length exceeds 15 characters!");
            }
            else
            {
                _empName = value;
            }
        }
    }

    public int Id
    {
        get { return _empID; }
        set { _empID = value; }
    }

    public float pay
    {
        get { return _currPay; }
        set { _currPay = value; }
    }
}

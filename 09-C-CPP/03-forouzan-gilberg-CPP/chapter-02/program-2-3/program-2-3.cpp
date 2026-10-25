/************************************************************
 * This program gets the values for two numbers from the keyboard,
 * adds them together and prints the result on the monitor.
************************************************************/

#include<iostream>
using namespace std;

int main()
{
    // Definition
    int num1;
    int num2;
    int sum;

    // Getting inputs
    cout << "Enter the 1st number: ";
    cin >> num1;
    cout << "Enter the 2nd number: ";
    cin >> num2;

    // Performing operation
    sum = num1 + num2;

    // output
    cout << "The sum is: " << sum << '\n';

    return 0;
}

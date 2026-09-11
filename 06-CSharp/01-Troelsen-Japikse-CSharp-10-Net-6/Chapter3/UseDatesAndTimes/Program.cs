using System;

namespace Chapter3.UseDatesAndTimes
{
    class Program
    {
        public static void UseDatesAndTimes()
        {
            Console.WriteLine("=> Dates and Times:");

            // This constructor takes (year, month, day)
            DateTime dt = new DateTime(2026, 09, 10);

            // What day of the month is this?
            Console.WriteLine();
            Console.WriteLine("The day of {0} is {1}", dt.Date, dt.DayOfWeek);

            // Add month
            dt = dt.AddMonths(2);
            Console.WriteLine("Daylight savings: {0}", dt.IsDaylightSavingTime());

            // this constructor takes (hours, minutes, seconds).
            TimeSpan ts = new TimeSpan(4, 30, 0);
            Console.WriteLine(ts);
        }
    }
}

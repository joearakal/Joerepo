using System;
namespace IocEventPlanner
{
    public class EGraduation : ICatalog
    {
        public void ShowInfo(string theEvent, string theLocation, string theDate, double theBudget)
        {
            Console.WriteLine("--  Graduation Event  --");
            showGraduationInfo(theEvent, theLocation, theDate, theBudget);
        }
        private void showGraduationInfo(string _event, string _location, string _date, double _budget)
        {
            Console.WriteLine("\n" + "Event: " + _event + "\t Graduation Location: " + _location + "   Graduation Date: " + _date + "   Est. Budget: " + _budget);
        }
    }
}
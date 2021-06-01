using System;
namespace IocEventPlanner
{
    public class EConference : ICatalog, ICatDetail
    {
        public void ShowInfo(string theEvent, string theLocation, string theDate, double theBudget)
        {
            Console.WriteLine("--  Conference Event  --");
            showConferenceInfo(theEvent, theLocation, theDate, theBudget);
        }
        private void showConferenceInfo(string _event, string _location, string _date, double _budget)
        {
            Console.WriteLine("\n" + "Event: " + _event + "\t Conference Location: " + _location + "   Conference Date: " + _date + "   Est. Budget: " + _budget);
        }
        public void ShowDet(string catering, string photo, string speciality)
        {
            Console.WriteLine("Details: " + "\t\t Catering Team: " + catering + "   Photography Team: " + photo + "   Speakers: " + speciality);
        }
    }
}
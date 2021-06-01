using System;
namespace IocEventPlanner
{
    public class EWedding : ICatalog, ICatDetail
    {
        public void ShowInfo(string theEvent, string theLocation, string theDate, double theBudget)
        {
            Console.WriteLine("--  Wedding Event  --");
            showWeddingInfo(theEvent, theLocation, theDate, theBudget);
        }
        private void showWeddingInfo(string _event, string _location, string _date, double _budget)
        {
            Console.WriteLine("\n" + "Event: " + _event + "\t\t Wedding Location: " + _location + "   Wedding Date: " + _date + "   Est. Budget: " + _budget);
        }
        public void ShowDet(string catering, string photo, string speciality)
        {
            Console.WriteLine("Details:  " + "\t\t Catering Team: " + catering + "   Photography Team: " + photo + "   Outfitters and Jewellery: " + speciality);
        }
    }
}
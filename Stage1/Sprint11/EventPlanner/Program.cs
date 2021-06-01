using System;

namespace EventPlanner
{
    interface IWedding
    {
        void getEventInfo();
        void getEventDetails();
    }
    interface IConference
    {
        void getEventInfo();
        // void getEventDetials();
    }
    interface IGraduation
    {
        void getEventInfo();
        // void getEventDetails();
    }
    public class EventInfo
    {
        string evntId;
        string location;
        string evntDate;
        double budget;

        public EventInfo(string eId, string loc, string eDate, double bdgt)   //constructor
        {
            evntId = eId;
            location = loc;
            evntDate = eDate;
            budget = bdgt;
        }

        public string EvntId
        {
            get { return evntId; }
            set { evntId = value; }
        }

        public string Location
        {
            get { return location; }
            set { location = value; }
        }

        public string EvntDate
        {
            get { return evntDate; }
            set { evntDate = value; }
        }
        public double Budget
        {
            get { return budget; }
            set { budget = value; }
        }
    }

    public class MyEventPlanner : IWedding, IConference, IGraduation
    {
        private EventInfo myEvent;

        public MyEventPlanner(string theId, string theLocation, string theDate, double theBudget)  //constructor
        {
            myEvent = new EventInfo(theId, theLocation, theDate, theBudget);

        }

        void IWedding.getEventInfo()
        {
            Console.WriteLine("Wedding Info:\n" + "EventId: " + myEvent.EvntId + "   Wedding Location: " + myEvent.Location + "   Wedding Date: " + myEvent.EvntDate + "   Est. Budget: " + myEvent.Budget);
           
        }

        void IWedding.getEventDetails()
        {
            Console.WriteLine("Wedding Details:\n" + "Catering: Joe's Catering \t  Photography: Ella's Stills \t  Outfitters and Jewellery:  Natalie's Bridal");

        }
        void IConference.getEventInfo()
        {
            Console.WriteLine("Conference Info:\n" + "EventId: " + myEvent.EvntId + "   Conference Location: " + myEvent.Location + "   Conference Date: " + myEvent.EvntDate + "   Est. Budget: " + myEvent.Budget);
        }
        void IGraduation.getEventInfo()
        {
            Console.WriteLine("Graduation Info:\n" + "EventId: " + myEvent.EvntId + "   Garduation Location: " + myEvent.Location + "   Graduation Date: " + myEvent.EvntDate + "   Est. Budget: " + myEvent.Budget);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            string userInput;
            bool runApp = true;

            IWedding myWedding = new MyEventPlanner("Wedding", "St. Gabriel Gardens, Dallas", "July 26 2021", 20000);
            IConference myConference = new MyEventPlanner("Conference", "Topgolf, Frisco", "June 20 2021", 50000);
            IGraduation myGraduation = new MyEventPlanner("Graduation", "Edmunds Pavillion, Plano", "May 30, 2021  ", 4000);

            Console.WriteLine("Select event or quit App \n Wedding (1) \n Conference (2) \n Graduation (3) \n Quit App (4) \n");

            while (runApp)
            {
                
                Console.WriteLine("Enter Event:");
                userInput = Console.ReadLine();
                switch (userInput)
                {
                    case "1":
                        {
                            myWedding.getEventInfo();
                            myWedding.getEventDetails();
                            break;
                        }
                    case "2":
                        {
                            myConference.getEventInfo();
                            break;
                        }
                    case "3":
                        {
                            myGraduation.getEventInfo();
                            break;
                        }
                    case "4":
                        {
                            runApp = false;
                            Console.WriteLine("End Application");
                            break;
                        }
                }
                   
               
            }
        }
    }
}

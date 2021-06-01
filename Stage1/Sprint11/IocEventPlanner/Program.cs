using System;

namespace IocEventPlanner
{
    class Program
    {
        static void Main(string[] args)
        {
            string userInput;
            bool runApp = true;

            ICatalog iCat;
            ICatDetail iDet;
            EventService eService;

            // Enter Operation
            Console.WriteLine("Select event or quit App \n (1)\t Wedding \n (2)\t Conference \n (3)\t Graduation \n (4)\t Quit App");

            while (runApp)
            {
                Console.Write("\n Enter Event: ");
                userInput = Console.ReadLine();
                switch (userInput)
                {
                    case "1":
                        {
                            iCat = new EWedding();
                            iDet = new EWedding();
                            eService = new EventService(iCat,iDet);

                            eService.showData("Wedding", "St. Gabriel Gardens, Dallas", "July 26 2021", 20000);
                            eService.showDetail("Joe's Catering", "Ella's Stills", "Natalie's Bridals");
                            break;
                        }
                    case "2":
                        {
                            iCat = new EConference();
                            iDet = new EConference();
                            eService = new EventService(iCat, iDet);

                            eService.showData("Conference", "Topgolf, Frisco", "June 20 2021", 50000);
                            eService.showDetail("Top Golf", "Infinite Photos", "Dan Gilbert, Amy Cuddy, Sam Berns");
                            break;
                        }
                    case "3":
                        {
                            iCat = new EGraduation();
                            eService = new EventService(iCat);
                            eService.showData("Graduation", "Edmunds Pavillion, Plano", "May 30, 2021  ", 4000);
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

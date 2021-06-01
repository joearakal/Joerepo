using System;
namespace MVCCollection
{
    public class MVCCollectionView
    {
        public MVCCollectionView()
        {

        }
        public void startCollection()
        {

            Console.WriteLine("My Book Collection");
            Console.WriteLine("------------------");
        }

        public int getOption()
        {
            Console.WriteLine("Enter options: ");

            Console.WriteLine(" 1 : Add Comics | 2 : Add Fiction | 3 : Print Collection | 4 : Quit App");

            string inOptn;
            int optn;
            inOptn = Console.ReadLine();

            while (!Int32.TryParse(inOptn, out optn))    //try to parse a string to a double. returns bool. Remains in the while loop until successful parse. 
            {
                Console.WriteLine("Invalid number. Please enter a number: ");
                inOptn = Console.ReadLine();
            }
            return optn;
        }

        public string getData(string myData)
        {

            Console.WriteLine("Enter " + myData + ":  ");
            string theData;
            theData = Console.ReadLine();
            return theData;
        }
        public void showAllBooks(string allBooks)
        {
            Console.WriteLine(allBooks);
        }

        public void endCollection()
        {
            Console.WriteLine("------ End Application ------");
        }

    }
}
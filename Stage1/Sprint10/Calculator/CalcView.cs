using System;

namespace Calculator
{
    class CalcView
    {
        public CalcView()   //constructor
        {
        }

        public void startApp()
        {
            Console.WriteLine("Starting the Calculator App.");
            Console.WriteLine("----------------------------");
        }
        public double getNumber()
        {
            Console.WriteLine("Enter a number: ");

            double inNum;
            string inputNumber = Console.ReadLine();

            while (!Double.TryParse(inputNumber, out inNum))    //try to parse a string to a double. returns bool. Remains in the while loop until successful parse. 
            {
                Console.WriteLine("Invalid number. Please enter a number: ");
                inputNumber = Console.ReadLine();
            }
            return inNum;
        }

        public string getOperation()
        {
            Console.WriteLine(" What calculation do you want to do");
            Console.WriteLine(" Enter \"a\" for addition");
            Console.WriteLine(" Enter \"s\" for subtraction");
            Console.WriteLine(" Enter \"m\" for multiplication");
            Console.WriteLine(" Enter \"d\" for division");
            string userInput="";
            bool validInput =false;

            while (!validInput)
            {
                userInput = Console.ReadLine().ToString();
                if ((userInput == "a") || userInput == "s" || userInput == "m" || userInput == "d")
                {
                    validInput = true;
                }
                else
                {
                    Console.WriteLine("Not a valid entry.Try again: ");
                    validInput = false;
                }
            }
            return userInput;
        }

        public bool showResult(double vResult)
        {
            if (Double.IsNaN(vResult))
            {
                Console.WriteLine("Divsion by 0 is not valid");
            }
            else
            {
                Console.WriteLine("The result is: " + vResult);
            }

            Console.WriteLine("-----------------------");
            Console.WriteLine("Do you want to continue? press \"n\" to close or any key");

            string cont = Console.ReadLine().ToLower();
            if (cont == "n")
            {
                Console.WriteLine("Closing application ");
                return false;
            }
            else
            {
                return true;
            }
        }

       
    }

}

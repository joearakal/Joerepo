using System;

namespace Calculator
{
	class Program
	{
		static void Main(string[] args)
		{
			bool runApp = true;
			Calculator myCalc = new Calculator();

			Console.WriteLine("This is a calculator app to to addtion, subtaction, multiplication and division ");

			while (runApp)
			{
				Console.WriteLine("Enter first number and press enter: ");
				myCalc.Number1 = getNumbers();
				Console.WriteLine("Enter second number and press enter: ");
				myCalc.Number2 = getNumbers();

				Console.WriteLine(" What calculation do you want to do");
				Console.WriteLine(" Enter \"a\" for addition");
				Console.WriteLine(" Enter \"s\" for subtraction");
				Console.WriteLine(" Enter \"m\" for multiplication");
				Console.WriteLine(" Enter \"d\" for division");

				try
				{
					string calc = Console.ReadLine().ToLower();
					double result = myCalc.doCalculation(calc);
					if (double.IsNaN(result))
					{
						Console.WriteLine("Not a valid entry. Try again:");
					}
					else
					{
						Console.WriteLine("The result is: " + result);
					}
				}
				catch (Exception e)
				{
					Console.WriteLine("An excpetion occured. See exception message:" + e.Message);
				}
				Console.WriteLine("Do you want to continue? Press \"n\" to close this app or any key to continue");
				if (Console.ReadLine().ToLower() == "n")
				{
					runApp = false;
				}
			}

			return;
		}
		static double getNumbers()
		{
			string inputNumber = Console.ReadLine();
			double inNum;

			while (!Double.TryParse(inputNumber, out inNum))    //try to parse a string to a double. returns bool. Remains in the while loop until successful parse. 
			{
				Console.WriteLine("Invalid number. Please enter a number: ");
				inputNumber = Console.ReadLine();
			}
			return inNum;
		}
	}


}

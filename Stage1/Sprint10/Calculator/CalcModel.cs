namespace Calculator
{
    class CalcModel
    {
        private double number1;
        private double number2;

        public CalcModel()         //constructor
        {
            number1 = 0;
            number2 = 0;
        }

        public double Number1       //Property 
        {
            get { return number1; }
            set { number1 = value; }
        }
        public double Number2       //Property
        {
            get { return number2; }
            set { number2 = value; }
        }

        public double doCalculation(string opType)
        {
            double result = double.NaN;


            switch (opType)
            {
                case "a":
                    result = number1 + number2;
                    break;
                case "s":
                    result = number1 - number2;
                    break;
                case "m":
                    result = number1 * number2;
                    break;
                case "d":
                    if (number2 != 0)
                    {
                        result = number1 / number2;
                    }
                    break;
            }
            return result;
        }
    }
}

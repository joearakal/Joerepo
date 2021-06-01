namespace Calculator
{
    class CalcController
    {
        private double num1;
        private double num2;
        private string oper;
        private double rslt;
        private bool onRun;
        public CalcController()
        {
            num1 = 0;
            onRun = true;

            CalcView newView = new CalcView();
            CalcModel newModel = new();
            
            newView.startApp();

            while (onRun)
            {
                num1 = newView.getNumber();
                num2 = newView.getNumber();
                oper = newView.getOperation();

                newModel.Number1 = num1;
                newModel.Number2 = num2;

                rslt = newModel.doCalculation(oper);
                onRun = newView.showResult(rslt);
            }
        }

        public double Num1  //Property  
        {
            get { return num1; }
            set { num1 = value; }
        }
        // Not setting up properties for the rest of the class attributes (fields) as they are not being accessed anywhere
    }
}

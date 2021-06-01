namespace IocExample
{
    class Program
    {
        static void Main(string[] args)
        {

            //ILogger logger = new FileLogger();
            //ILogger logger = new DatabaseLogger();

            ILogger logger = new CloudLogger();
            ProductService _prodService = new ProductService(logger);
            _prodService.dataLog("My new message");





            //
            //
            //
            /*
            DateTime myDate;
            myDate = DateTime.Now;                              // gets current date and current time
            myDate = DateTime.Today;                            // gets current date but time will be midnight
            myDate = Convert.ToDateTime(Console.ReadLine());    // converts string from userInput to date and time
            Console.WriteLine(myDate.ToString("MM/dd/yyyy"));   // only date portion of DateTime variable is displayed
            */

        }
    }
}

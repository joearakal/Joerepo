using System;
namespace IocExample
{
    public class DatabaseLogger : ILogger
    {
        public DatabaseLogger()
        {
        }
        public void Log(string message)
        {
            Console.WriteLine("Inside Log method of DatabaseLogger.");
            LogToDatabase(message);
        }
        private void LogToDatabase(string message)
        {
            Console.WriteLine("Method: LogToDatabase, Text: {0}", message);
        }
    }
}
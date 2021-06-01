using System;
namespace IocExample
{
    public class CloudLogger : ILogger
    {
        public CloudLogger()
        {
        }
        public void Log(string message)
        {
            Console.WriteLine("Inside Log method of CloudLogger.");
            LogToCloud(message);
        }
        private void LogToCloud(string message)
        {
            Console.WriteLine("Method: LogToCloud, Text: {0}", message);
        }
    }
}
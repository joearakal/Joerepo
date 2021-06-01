using System;

namespace IocExample
{

    public class FileLogger : ILogger
    {
        public FileLogger()
        {
        }

        public void Log(string message)
        {
            Console.WriteLine("Inside Log method of FileLogger.");
            LogToFile(message);
        }
        private void LogToFile(string message)
        {
            Console.WriteLine("Method: LogToFile, Text: {0}", message);
        }
    }
}